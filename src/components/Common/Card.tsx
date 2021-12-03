import React, { forwardRef } from 'react'
import { Stack, StackProps } from '@chakra-ui/react'

export interface CardProps extends StackProps {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, ...props }, ref) => (
  <Stack ref={ref} align={'normal'} direction={'column'} bg={'white'} rounded={'md'} p={3} shadow={'md'} {...props}>
    {children}
  </Stack>
))

Card.displayName = 'Card'

export default Card
