import { Box, Tooltip } from '@chakra-ui/react'
import { TechnologyType } from '@types'
import React from 'react'

interface TechnologyItemProps {
  technology: TechnologyType
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ technology: { experience, name } }) => (
  <Tooltip hasArrow label={experience}>
    <Box as={'b'} cursor={'pointer'} transition={'all 0.5s'} _hover={{ color: 'blue.600' }}>
      {name}
    </Box>
  </Tooltip>
)

export { TechnologyItem }
