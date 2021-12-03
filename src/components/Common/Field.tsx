import { Box, HStack, Td, Tr, VStack } from '@chakra-ui/react'
import React from 'react'

type FieldProps = {
  children: React.ReactNode
  label: string
  subtitle?: string
  isRequired?: boolean
}

const Field: React.FC<FieldProps> = ({ label, subtitle, isRequired, children }) => {
  return (
    <Tr>
      <Td>
        <VStack align={'normal'}>
          <HStack justify={'end'} spacing={1}>
            {isRequired && <Box color={'red'}>*</Box>}
            <Box fontWeight={subtitle ? 'bold' : 'normal'}>{label}</Box>
          </HStack>
          {!!subtitle && <Box>{subtitle}</Box>}
        </VStack>
      </Td>
      <Td>{children}</Td>
    </Tr>
  )
}

export default Field
