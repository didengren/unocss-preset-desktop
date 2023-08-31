import type { Preset } from 'unocss'

export interface PresetDesktopOption {
  /**
   * default number of nodes covered by enter animation
   * @default 6
   */
  maxOutput?: number
}

const defaultOption: Required<PresetDesktopOption> = {
  maxOutput: 6,
}

export function presetDesktop(option?: PresetDesktopOption): Preset {
  const config = Object.assign(defaultOption, option)
  return {
    name: '@trina/unocss-preset-desktop',
    rules: [
      [
        'font-desktop',
        {
          'font-family':
            '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'SourceHanSans-VF\', \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
        },
      ],
    ],
    theme: {
      breakpoints: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    preflights: [
      {
        getCSS: () => {
          const { maxOutput } = config
          const createCss = (index: number, d = 'x') => {
            const upd = d.toUpperCase()
            return `\n
              *> .enter-${d}:nth-child(${index}){
                transform: translate${upd}(50px);
              }
              *> .-enter-${d}:nth-child(${index}){
                transform: translate${upd}(-50px);
              }
              * > .enter-${d}:nth-child(${index}),* > .-enter-${d}:nth-child(${index}){
                z-index: ${10 - index};
                opacity: 0;
                animation: enter-${d}-animation 0.4s ease-in-out 0.3s;
                animation-fill-mode: forwards;
                animation-delay: ${(index * 1) / 10}s;
              }
            `
          }
          let addRawCss = ''
          for (let index = 1; index < maxOutput; index++) {
            addRawCss += createCss(index, 'x')
            addRawCss += createCss(index, 'y')
          }
          return `
            ${addRawCss}
            @keyframes enter-x-animation {
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes enter-y-animation {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `
        },
      },
    ],
  }
}
