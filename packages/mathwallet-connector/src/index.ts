import { HarmonyAbstractConnector, HarmonyAbstractConnectorArguments } from '@harmony-react/abstract-connector'

export class MathWalletConnector extends HarmonyAbstractConnector {
  constructor({ chainId }: HarmonyAbstractConnectorArguments) {
    super({ chainId: chainId, windowKey: 'harmony' })
  }
}
