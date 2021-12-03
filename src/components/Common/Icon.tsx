import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { IconBase } from 'react-icons'

const Icon: React.FC<BoxProps> = ({ as: As, ...props }) => {
  return (
    <Box fontSize={'lg'} as={'span'} {...props}>
      <IconBase fontSize={'inherit'}>
        <As />
      </IconBase>
    </Box>
  )
}

export default Icon
