import { technologies } from '@mocks'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import Experience from './Experience'

const ExperienceCarousel: React.FC = () => (
  <Splide
    options={{
      rewind: true,
      rewindSpeed: 1500,
      speed: 1000,
      fixedHeight: 400,
      gap: 10,
      arrows: false,
      autoplay: true,
      interval: 3000,
      perPage: 3,
      breakpoints: {
        480: {
          perPage: 1
        },
        1280: {
          perPage: 2
        }
      }
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
