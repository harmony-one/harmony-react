import { HarmonyAbstractConnector, HarmonyAbstractConnectorArguments } from '@harmony-react/abstract-connector'

export class OneWalletConnector extends HarmonyAbstractConnector {
  constructor({ chainId }: HarmonyAbstractConnectorArguments) {
    super({ chainId: chainId, windowKey: 'onewallet' })
  }
}
