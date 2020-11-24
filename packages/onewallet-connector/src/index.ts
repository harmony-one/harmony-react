import { AbstractConnectorArguments } from '@web3-react/types'
import { HarmonyAbstractConnector } from '@harmony-react/abstract-connector'

export class OneWalletConnector extends HarmonyAbstractConnector {
  constructor(kwargs: AbstractConnectorArguments) {
    super(kwargs, 'onewallet')
  }
}
