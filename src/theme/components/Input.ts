import { theme } from '@chakra-ui/react'

export default {
  variants: {
    outline: {
      field: {
        position: 'relative',
        bg: 'white',
        border: '1px solid',
        rounded: 'md',
        _hover: {
          borderColor: theme.colors.blue[500]
        }
      }
    }
  },
  defaultProps: {
    size: 'sm'
  }
}
