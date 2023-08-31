import { createGenerator, presetAttributify, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetDesktop } from '../src'

describe('preset desktop', () => {
  const generator = createGenerator({
    presets: [
      presetUno(),
      presetAttributify(),
      presetDesktop(),
    ],
  })

  it('font family', async () => {
    const { css } = await generator.generate(['font-desktop'].join(' '))

    expect(css).toMatchSnapshot()
  })
})
