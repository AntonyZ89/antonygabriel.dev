import { Box, HStack, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { TechnologyType } from '@types'
import React, { useState } from 'react'

interface RatingProps {
  technology: TechnologyType
}

const Rating: React.FC<RatingProps> = ({ technology }) => {
  const [level, setLevel] = useState<TechnologyType['level']>(technology.level)

  return (
    <HStack align={'normal'}>
      <Box lineHeight={2}>Skill Level</Box>

      <Slider isReadOnly value={level} min={1} max={5} colorScheme={'teal'} onChange={v => setLevel(v as TechnologyType['level'])}>
        <SliderTrack h={2} rounded={'lg'} bg={'yellow.200'}>
          <SliderFilledTrack bg={'yellow.400'} />
        </SliderTrack>

        <SliderThumb boxSize={5} border={'1px solid black'} borderColor={'blackAlpha.300'} bg={'white'} color={'black'}>
          {level}
        </SliderThumb>
      </Slider>
    </HStack>
  )
}

export default Rating
