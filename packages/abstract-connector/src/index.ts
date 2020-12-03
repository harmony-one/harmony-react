import { AbstractConnector } from '@web3-react/abstract-connector'
import { ConnectorUpdate } from '@web3-react/types'
import { NoWalletProviderError, UserRejectedRequestError, WalletLockedError } from '@harmony-react/types'
import { fromBech32 } from '@harmony-js/crypto'
import { Harmony } from '@harmony-js/core'
import { ChainID, ChainType } from '@harmony-js/utils'
import warning from 'tiny-warning'

export interface HarmonyAbstractConnectorArguments {
  chainId: number
  windowKey?: any
}
export abstract class HarmonyAbstractConnector extends AbstractConnector {
  public readonly chainId: number
  public readonly windowKey?: any

  constructor({ chainId, windowKey }: HarmonyAbstractConnectorArguments) {
    super({ supportedChainIds: [chainId] })
    this.chainId = chainId
    this.windowKey = windowKey
  }

  public async activate(): Promise<ConnectorUpdate> {
    let account = await this.retrieveAccount()
    return { provider: this.generateProvider(), ...(account ? { account } : {}) }
  }

  public async getProvider(): Promise<any> {
    return this.generateProvider()
  }

  protected generateProvider(): Harmony | undefined {
    let harmony: Harmony
    let url
    let chainId: ChainID
    let chainType: ChainType

    switch (this.chainId) {
      case 1:
        url = 'https://api.s0.t.hmny.io'
        chainType = ChainType.Harmony
        chainId = ChainID.HmyMainnet
        break

      case 2:
        url = 'https://api.s0.b.hmny.io'
        chainType = ChainType.Harmony
        chainId = ChainID.HmyTestnet
        break

      default:
        url = 'https://api.s0.t.hmny.io'
        chainType = ChainType.Harmony
        chainId = ChainID.HmyMainnet
    }

    harmony = new Harmony(url, {
      chainType: chainType,
      chainId: chainId
    })

    return harmony
  }

  public async getChainId(): Promise<number | string> {
    return this.chainId
  }

  public async getAccount(): Promise<null | string> {
    return this.retrieveAccount()
  }

  public deactivate() {}

  public async close() {
    const windowObject = await this.getWindowObject()
    await windowObject.forgetIdentity()
    super.emitDeactivate()
  }

  private async retrieveAccount(): Promise<null | string> {
    const windowObject = await this.getWindowObject()
    let account: null | string = null

    try {
      account = await windowObject.getAccount().then((acc: any): string => fromBech32(acc.address))
    } catch (error) {
      if (error.message === 'User rejected the provision of an Identity') {
        throw new UserRejectedRequestError()
      } else if (error.message === 'The wallet has been locked and needs to be unlocked for further operation!') {
        throw new WalletLockedError()
      }
      warning(false, 'retrieveAccount was unsuccessful')
    }

    return account
  }

  private timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private async hasWindowObject(): Promise<boolean> {
    var windowObject = window[this.windowKey]

    if (!windowObject) {
      await this.timeout(500)
      windowObject = window[this.windowKey]
    }

    const hasObject = windowObject ? true : false

    return hasObject
  }

  private async getWindowObject(): Promise<any> {
    const hasWindowObject = await this.hasWindowObject()
    var windowObject

    if (hasWindowObject) {
      windowObject = window[this.windowKey] as any
    } else {
      throw new NoWalletProviderError()
    }

    return windowObject
  }

  public async isAuthorized(): Promise<boolean> {
    const hasWindowObject = await this.hasWindowObject()
    if (!hasWindowObject) {
      return false
    }

    try {
      return await this.retrieveAccount().then((account: null | string) => {
        if (account) {
          return true
        } else {
          return false
        }
      })
    } catch {
      return false
    }
  }

  public async signTransaction(tx: any): Promise<any> {
    const windowObject = await this.getWindowObject()
    return windowObject.signTransaction(tx)
  }

  public async attachToContract(contract: any): Promise<any> {
    contract.wallet.createAccount()

    if (contract.wallet.defaultSigner === '') {
      contract.wallet.defaultSigner = await this.retrieveAccount()
    }

    contract.wallet.signTransaction = async (tx: any) => {
      try {
        tx.from = await this.retrieveAccount()
        return await this.signTransaction(tx)
      } catch (err) {
        return Promise.reject(err)
      }
    }

    return contract
  }
}
