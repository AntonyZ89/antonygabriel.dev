import { useBreakpointValue } from '@chakra-ui/react'
import { technologies } from '@mocks'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import Experience from './Experience'

const ExperienceCarousel: React.FC = () => (
  <Splide
    aria-label={'My Favorite Images'}
    options={{
      rewind: true,
      rewindSpeed: 1500,
      speed: 1000,
      gap: 10,
      perPage: useBreakpointValue({ base: 1, md: 2 }),
      arrows: false,
      autoplay: true,
      interval: 3000,
      wheel: true
    }}
  >
    {technologies.map((technology, index) => (
      <SplideSlide key={technology.name}>
        <Experience key={index} group={technology} />
      </SplideSlide>
    ))}
  </Splide>
)

export default ExperienceCarousel
