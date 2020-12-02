import { AbstractConnector } from '@web3-react/abstract-connector'
import { AbstractConnectorArguments, ConnectorUpdate } from '@web3-react/types'
import { NoWalletProviderError, UserRejectedRequestError, WalletLockedError } from '@harmony-react/types'
import { fromBech32 } from '@harmony-js/crypto'
import { Harmony } from '@harmony-js/core'
import { ChainID, ChainType } from '@harmony-js/utils'
import warning from 'tiny-warning'

export abstract class HarmonyAbstractConnector extends AbstractConnector {
  public readonly windowKey?: any

  constructor({ supportedChainIds }: AbstractConnectorArguments = {}, windowKey: string) {
    super({ supportedChainIds: supportedChainIds })
    this.windowKey = windowKey
  }

  public async activate(): Promise<ConnectorUpdate> {
    if (!window[this.windowKey]) {
      throw new NoWalletProviderError()
    }

    let account = await this.retrieveAccount()

    return { provider: this.generateProvider(), ...(account ? { account } : {}) }
  }

  public async getProvider(): Promise<any> {
    return this.generateProvider()
  }

  protected generateProvider(): Harmony | undefined {
    let network
    try {
      network = (window[this.windowKey] as any).network
    } catch {
      warning(false, `accessing window.${this.windowKey}.network was unsuccessful`)
    }

    let harmony: Harmony | undefined
    if (network && network.chain_id) {
      let url
      let chainId: ChainID
      let chainType: ChainType

      switch (network.chain_id) {
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
    }

    return harmony
  }

  public async getChainId(): Promise<number | string> {
    if (!window[this.windowKey]) {
      throw new NoWalletProviderError()
    }

    let chainId
    try {
      chainId = (window[this.windowKey] as any).network.chain_id
    } catch {
      warning(false, `accessing window.${this.windowKey}.network.chain_id was unsuccessful`)
    }

    return chainId
  }

  public async getAccount(): Promise<null | string> {
    return this.retrieveAccount()
  }

  public deactivate() {}

  public async close() {
    await (window[this.windowKey] as any).forgetIdentity()
    super.emitDeactivate()
  }

  private async retrieveAccount(): Promise<null | string> {
    if (!window[this.windowKey]) {
      throw new NoWalletProviderError()
    }

    let account: null | string = null

    try {
      account = await (window[this.windowKey] as any).getAccount().then((acc: any): string => fromBech32(acc.address))
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

  public async isAuthorized(): Promise<boolean> {
    if (!window[this.windowKey]) {
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
    return (window[this.windowKey] as any).signTransaction(tx)
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
