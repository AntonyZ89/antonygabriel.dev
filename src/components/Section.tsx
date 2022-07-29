import { Box, Container, StackProps } from '@chakra-ui/react'
import React from 'react'

interface SectionProps extends StackProps {
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children, bg, ...props }) => (
  <Box {...{ bg }}>
    <Container display={'flex'} maxW={'container.xl'} h={'100vh'} maxHeight={'container.xl'} position={'relative'} py={4} {...props}>
      {children}
    </Container>
  </Box>
)

export { Section }
