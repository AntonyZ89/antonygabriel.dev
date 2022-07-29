import { SystemStyleObject } from '@chakra-ui/theme-tools'

export default {
  '.splide.my-project-carousel': {
    h: 'full',
    w: 'full',

    '&&__inner': {
      mx: 'auto',
      w: '70%'
    },

    '.splide__track, &__main > .splide__track, &&__inner > .splide__track': {
      h: 'full'
    }
  }
} as SystemStyleObject
