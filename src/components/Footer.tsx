import { Box, Flex, theme, useBreakpointValue } from '@chakra-ui/react'
import { Card, Link } from '@components'
import React, { memo } from 'react'

const currentYear = new Date().getFullYear()

let Footer: React.FC = () => {
  return (
    <Card as={'footer'} display={'block'} my={2} p={1}>
      <Flex
        justify={'space-evenly'}
        align={'center'}
        h={8}
        w={{ base: 'full', md: '80%', lg: '60%' }}
        mx={'auto'}
        fontSize={useBreakpointValue({
          base: 8,
          sm: theme.fontSizes.xs,
          md: theme.fontSizes.sm
        })}
      >
        <Box>© {currentYear} AntonyDev</Box>
        <Link href={'#'} fontSize={'inherit'}>
          Sobre
        </Link>
        <Box>
          By{' '}
          <Link href={'https://github.com/AntonyZ89'} fontSize={'inherit'}>
            AntonyDev
          </Link>
        </Box>
      </Flex>
    </Card>
  )
}

Footer = memo(Footer)

export { Footer }
