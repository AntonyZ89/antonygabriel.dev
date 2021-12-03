import { theme } from '@chakra-ui/react'

export default {
  baseStyle: {
    transition: 'all 0.3s'
  },
  variants: {
    ghost: {
      color: 'blue.600',
      _hover: {
        // bg: 'pink.50',
        // color: 'pink.600'
      }
    },
    solid: {
      color: theme.colors.black,
      // bg: 'pink.300',
      _hover: {
        // bg: 'pink.200'
      },
      shadow: 'md'
    },
    link: {
      color: 'blue.600',
      whiteSpace: 'normal',
      _hover: {
        textDecoration: 'underline'
      }
    },
    cancel: {
      bg: 'gray.300',
      color: 'gray.500',
      _hover: {
        bg: 'gray.200',
        color: 'gray.400'
      }
    },
    delete: {
      bg: 'red.500',
      color: 'white',
      _hover: {
        bg: 'red.300'
      }
    }
  },
  defaultProps: {
    size: 'xs'
  }
}
