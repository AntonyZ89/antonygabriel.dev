import { StackProps, VStack } from '@chakra-ui/react'
import React from 'react'

interface MyProjectBaseBodyProps extends StackProps {
  children: React.ReactNode
}

const MyProjectBaseBody: React.FC<MyProjectBaseBodyProps> = ({ children, ...props }) => (
  <VStack align={'normal'} textAlign={'justify'} px={2} overflow={'auto'} pt={2} {...props}>
    {children}
  </VStack>
)

export { MyProjectBaseBody }
