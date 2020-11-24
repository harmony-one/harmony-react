# `harmony-react` 🧰

_A simple, maximally extensible, dependency minimized framework for building modern [Ethereum dApps](https://ethereum.org/beginners/)_

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Actions Status](https://github.com/harmony-one/harmony-react/workflows/CI/badge.svg)](https://github.com/harmony-one/harmony-react/actions)

| Packages                              | `@latest` Version                                                                                                                                                         | Size                                                                                                                                                                                 | Description                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 🏠 **Core**                           |
| `@harmony-react/core`                    | [![npm version](https://img.shields.io/npm/v/@harmony-react/core/latest.svg)](https://www.npmjs.com/package/@harmony-react/core/v/latest)                                       | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/core/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/core@latest)                                       | [React](https://reactjs.org/) Interface                                             |
| 🔌 **Connectors**                     |
| _Browser Extension/dApp Browser_      |
| `@harmony-react/injected-connector`      | [![npm version](https://img.shields.io/npm/v/@harmony-react/injected-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/injected-connector/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/injected-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/injected-connector@latest)           | [Injected](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md) Connector |
| _Remote API_                          |
| `@harmony-react/network-connector`       | [![npm version](https://img.shields.io/npm/v/@harmony-react/network-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/network-connector/v/latest)             | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/network-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/network-connector@latest)             | [RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) Connector                     |
| _QR Code_                             |
| `@harmony-react/walletconnect-connector` | [![npm version](https://img.shields.io/npm/v/@harmony-react/walletconnect-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/walletconnect-connector/v/latest) | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/walletconnect-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/walletconnect-connector@latest) | [WalletConnect](https://walletconnect.org/) Connector                               |
| `@harmony-react/walletlink-connector`    | [![npm version](https://img.shields.io/npm/v/@harmony-react/walletlink-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/walletlink-connector/v/latest)       | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/walletlink-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/walletlink-connector@latest)       | [WalletLink](https://www.walletlink.org/#/) Connector                               |
| _Hardware_                            |
| `@harmony-react/ledger-connector`        | [![npm version](https://img.shields.io/npm/v/@harmony-react/ledger-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/ledger-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/ledger-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/ledger-connector@latest)               | [Ledger](https://www.ledger.com/) Connector                                         |
| `@harmony-react/trezor-connector`        | [![npm version](https://img.shields.io/npm/v/@harmony-react/trezor-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/trezor-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/trezor-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/trezor-connector@latest)               | [Trezor](https://trezor.io/) Connector                                              |
| _Native_                              |
| `@harmony-react/frame-connector`         | [![npm version](https://img.shields.io/npm/v/@harmony-react/frame-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/frame-connector/v/latest)                 | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/frame-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/frame-connector@latest)                 | [Frame](https://frame.sh/) Connector                                                |
| _Hosted_                              |
| `@harmony-react/authereum-connector`     | [![npm version](https://img.shields.io/npm/v/@harmony-react/authereum-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/authereum-connector/v/latest)         | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/authereum-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/authereum-connector@latest)         | [Authereum](https://authereum.org/) Connector                                       |
| `@harmony-react/fortmatic-connector`     | [![npm version](https://img.shields.io/npm/v/@harmony-react/fortmatic-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/fortmatic-connector/v/latest)         | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/fortmatic-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/fortmatic-connector@latest)         | [Fortmatic](https://fortmatic.com/) Connector                                       |
| `@harmony-react/portis-connector`        | [![npm version](https://img.shields.io/npm/v/@harmony-react/portis-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/portis-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/portis-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/portis-connector@latest)               | [Portis](https://www.portis.io/) Connector                                          |
| `@harmony-react/squarelink-connector`    | [![npm version](https://img.shields.io/npm/v/@harmony-react/squarelink-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/squarelink-connector/v/latest)       | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/squarelink-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/squarelink-connector@latest)       | [Squarelink](https://squarelink.com/) Connector                                     |
| `@harmony-react/torus-connector`         | [![npm version](https://img.shields.io/npm/v/@harmony-react/torus-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/torus-connector/v/latest)                 | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/torus-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/torus-connector@latest)                 | [Torus](https://tor.us/) Connector                                                  |
| 🐉 **Low-Level**                      |
| `@harmony-react/abstract-connector`      | [![npm version](https://img.shields.io/npm/v/@harmony-react/abstract-connector/latest.svg)](https://www.npmjs.com/package/@harmony-react/abstract-connector/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/abstract-connector/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/abstract-connector@latest)           | Shared Connector Class                                                              |
| `@harmony-react/types`                   | [![npm version](https://img.shields.io/npm/v/@harmony-react/types/latest.svg)](https://www.npmjs.com/package/@harmony-react/types/v/latest)                                     | [![minzip](https://img.shields.io/bundlephobia/minzip/@harmony-react/types/latest.svg)](https://bundlephobia.com/result?p=@harmony-react/types@latest)                                     | Shared [TypeScript](https://www.typescriptlang.org/) Types                          |

## Quickstart

[![Edit web3-react-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/harmony-one/harmony-react/tree/v6/example?fontsize=14&hidenavigation=1&theme=dark)

## [Documentation](docs)

## Projects using `web3-react`

_Open a PR to add your project to the list!_

- [Uniswap.exchange](https://github.com/Uniswap/uniswap-frontend)
- [hypertext.finance](https://github.com/NoahZinsmeister/hypertext)
- [useWallet](https://github.com/aragon/use-wallet)
- [Terminal](https://blog.terminal.co/web3-react-integration/)
- [Everest](https://github.com/metacartel/everest-web-app)
- [NFT Scribe](https://github.com/conlan/nft-scribe)
- [Compound Liquidator](https://github.com/conlan/compound-liquidator)
- [wildcards.world](https://github.com/wildcards-world/ui)
- [Outpost](https://github.com/OutpostProtocol/outpost-app)
- [Async Art](https://async.art)
- [Union](https://union.finance)

## Related Efforts

- [Web3Modal](https://github.com/web3modal/web3modal)

## Local Development

- Clone repo\
  `git clone https://github.com/harmony-one/harmony-react.git`

- Install top-level dependencies\
  `yarn`

- Install sub-dependencies\
  `yarn bootstrap`

- Build and watch for changes\
  `yarn start`
