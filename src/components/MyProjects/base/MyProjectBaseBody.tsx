import { StackProps, VStack } from '@chakra-ui/react'
import React from 'react'

interface MyProjectBaseBodyProps extends StackProps {
  children: React.ReactNode
}

// TODO se o scroll for nesa área, o scroll do carousel (splide) deve ser cancelado (stopPropagation provavelmente)

const MyProjectBaseBody: React.FC<MyProjectBaseBodyProps> = ({ children, ...props }) => (
  <VStack flex={1} align={'normal'} textAlign={'justify'} px={2} overflow={'auto'} pt={2} {...props}>
    {children}
  </VStack>
)

export { MyProjectBaseBody }
