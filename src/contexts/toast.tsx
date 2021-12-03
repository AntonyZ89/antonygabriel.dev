import { useToast as useToastHook } from '@chakra-ui/react'

const useToast: typeof useToastHook = options => {
  return useToastHook({
    status: 'success',
    duration: 3000,
    isClosable: true,
    variant: 'subtle',
    position: 'bottom',
    ...options
  })
}

export { useToast }
