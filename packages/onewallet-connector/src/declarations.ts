interface OneWallet {
  getAccount: () => Promise<any>
  forgetIdentity: () => void
  network?: any
}

declare interface Window {
  onewallet?: OneWallet
}

declare const __DEV__: boolean
