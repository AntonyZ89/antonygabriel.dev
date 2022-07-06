import { Box, Container, StackProps } from '@chakra-ui/react'
import React from 'react'

interface SectionProps extends StackProps {
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children, bg, ...props }) => (
  <Box {...{ bg }}>
    <Container
      display={'flex'}
      flexDir={'column'}
      maxW={'container.xl'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      position={'relative'}
      py={4}
      {...props}
    >
      {children}
    </Container>
  </Box>
)

export default Section
