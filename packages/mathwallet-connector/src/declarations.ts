interface MathWallet {
  getAccount: () => Promise<any>
  forgetIdentity: () => void
  network?: any
}

declare interface Window {
  harmony?: MathWallet
}

declare const __DEV__: boolean
