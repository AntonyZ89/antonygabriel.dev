import { SystemStyleObject } from '@chakra-ui/theme-tools'

export default {
  '.splide': {
    p: 0,

    '&.my-project-carousel': {
      w: 'full',
      h: '95%',
      '&&__inner': {
        mx: 'auto',
        w: { base: 'full', lg: '70%' },

        '> .splide__track': {
          h: { base: 'full', lg: '95%' }
        },

        '.splide__pagination': {
          mb: '-2em'
        }
      },

      '> .splide__track': {
        h: '95%'
      }
    }
  }
} as SystemStyleObject
