import { Box, Divider, Flex, StackDirection, useBreakpointValue } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import NextImage from 'next/image'
import React from 'react'
interface MyProjectBaseCarouselProps {
  images: Array<string>
}

const MyProjectBaseCarousel: React.FC<MyProjectBaseCarouselProps> = ({ images }) => {
  const direction = useBreakpointValue<StackDirection>({ base: 'column', md: 'row' })

  return (
    <Flex direction={direction} align={'normal'} flex={0.5}>
      <Box p={2} flex={1}>
        <Splide
          className={'my-project-carousel'}
          options={{
            rewind: true,
            rewindSpeed: 1500,
            speed: 1000,
            gap: 10,
            perPage: 1,
            arrows: false,
            preloadPages: 3,
            interval: 3000,
            wheel: true
          }}
        >
          {images.map(image => (
            <SplideSlide style={{ height: '100%' }} key={image}>
              <Box w={'full'} bg={'red.600'}>
                <NextImage src={image} layout={'fill'} className={'image-responsive'} />
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>

      <Divider orientation={direction === 'column' ? 'horizontal' : 'vertical'} borderColor={'gray.400'} pt={{ base: 2, md: 'initial' }} />
    </Flex>
  )
}

export { MyProjectBaseCarousel }
