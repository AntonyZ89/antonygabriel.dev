import React, { forwardRef } from 'react'
import { Stack, StackProps } from '@chakra-ui/react'

export interface CardProps extends StackProps {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, ...props }, ref) => (
  <Stack
    ref={ref}
    align={'normal'}
    direction={'column'}
    bg={'gray.200'}
    color={'gray.600'}
    sx={{
      '& *::selection': {
        bg: 'gray.300',
        color: 'currentColor'
      }
    }}
    rounded={'md'}
    p={3}
    shadow={'md'}
    overflow={'auto'}
    {...props}
  >
    {children}
  </Stack>
))

Card.displayName = 'Card'

export { Card }
