import { AbstractConnectorArguments } from '@web3-react/types'
import { HarmonyAbstractConnector } from '@harmony-react/abstract-connector'

export class MathWalletConnector extends HarmonyAbstractConnector {
  constructor(kwargs: AbstractConnectorArguments) {
    super(kwargs, 'harmony')
  }
}
