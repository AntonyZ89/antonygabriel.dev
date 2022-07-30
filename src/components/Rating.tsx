import { Box, Circle, HStack } from '@chakra-ui/react'
import { TechnologyType } from '@types'
import React from 'react'

interface RatingProps {
  technology: TechnologyType
}

const Rating: React.FC<RatingProps> = ({ technology }) => {
  return (
    <HStack align={'center'} spacing={1}>
      <Box>Skill Level</Box>

      {[...Array(5)].map((_, index) => {
        const isEqual = index + 1 < technology.level

        return (
          <Circle
            key={index}
            size={3}
            fontSize={'smaller'}
            fontWeight={'bold'}
            bg={isEqual ? 'gray.500' : 'gray.300'}
            color={isEqual ? 'white' : 'gray.400'}
          />
        )
      })}
    </HStack>
  )
}

export { Rating }
