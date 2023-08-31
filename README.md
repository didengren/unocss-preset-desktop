# @trinapower/unocss-preset-desktop

[![NPM version](https://img.shields.io/npm/v/unocss-preset-scrollbar?color=a1b858&label=)](https://www.npmjs.com/package/unocss-preset-scrollbar) 

a [unocss](https://github.com/unocss/unocss) preset for desktop website template

## Installation

```bash
pnpm add @trinapower/unocss-preset-desktop -D
```

## Usage

```ts
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetDesktop } from '@trinapower/unocss-preset-desktop'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetDesktop()
  ],
})
```

## Configurations

|Field|Default|Description|
|--|--|--|
|`maxOutput`|`6`|default number of nodes covered by enter animation|

## License

[MIT](./LICENSE) License © 2023 [Sam Xu](https://github.com/didengren)