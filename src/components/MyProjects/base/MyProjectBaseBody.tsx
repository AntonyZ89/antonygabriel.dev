import { StackProps, VStack } from '@chakra-ui/react'
import React from 'react'

interface MyProjectBaseBodyProps extends StackProps {
  children: React.ReactNode
}

/**
 * TODO
 *
 * trocar [[overflow: auto]]  por [[overflow: hidden]] e expandir descrição com um botão na parte inferior quando o
 * conteúdo exceder o limite do espaço
 */

const MyProjectBaseBody: React.FC<MyProjectBaseBodyProps> = ({ children, ...props }) => (
  <VStack flex={0.5} align={'normal'} textAlign={'justify'} px={2} overflow={'auto'} pt={2} {...props}>
    {children}
  </VStack>
)

export { MyProjectBaseBody }
