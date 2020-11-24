export class NoWalletProviderError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'No wallet provider was found on the window object.'
  }
}

export class UserRejectedRequestError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'The user rejected the request.'
  }
}

export class WalletLockedError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'The wallet is locked. Please unlock it.'
  }
}
