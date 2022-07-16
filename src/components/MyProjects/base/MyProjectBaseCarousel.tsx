import { Box, Divider, VStack } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import NextImage from 'next/image'
interface MyProjectBaseCarouselProps {
  images: Array<string>
}

const MyProjectBaseCarousel: React.FC<MyProjectBaseCarouselProps> = ({ images }) => (
  <VStack align={'normal'} flex={0.8}>
    <Splide
      aria-label={'My Favorite Images'}
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

    <Divider bg={'gray.700'} />
  </VStack>
)

export { MyProjectBaseCarousel }
