import { Box, Circle, HStack } from '@chakra-ui/react'
import { TechnologyType } from '@types'
import React from 'react'

interface RatingProps {
  technology: TechnologyType
}

const Rating: React.FC<RatingProps> = ({ technology }) => {
  return (
    <HStack align={'center'}>
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

      {/* <Slider isReadOnly value={level} min={1} max={5} colorScheme={'teal'} onChange={v => setLevel(v as TechnologyType['level'])}>
        <SliderTrack h={2} rounded={'lg'} bg={'gray.300'}>
          <SliderFilledTrack bg={'gray.500'} />
        </SliderTrack>

        <SliderThumb boxSize={5} border={'1px solid black'} borderColor={'blackAlpha.300'} bg={'white'} color={'black'}>
          {level}
        </SliderThumb>
      </Slider> */}
    </HStack>
  )
}

export default Rating
