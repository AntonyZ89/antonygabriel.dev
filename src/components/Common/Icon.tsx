import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IconBase } from 'react-icons'

const Icon: React.FC<BoxProps> = ({ as: As, ...props }) => {
  const color = useColorModeValue('black.900', 'whiteAlpha.900')

  return (
    <Box fontSize={'lg'} as={'span'} color={color} {...props}>
      <IconBase fontSize={'inherit'}>
        <As />
      </IconBase>
    </Box>
  )
}

export default Icon
