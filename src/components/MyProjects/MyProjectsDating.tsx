import { Box } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React, { useState, useRef, useEffect } from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/date-app/'

const images = [BASE_URL + 'login.png', BASE_URL + 'home.png', BASE_URL + 'chat.png']

const MyProjectsDating: React.FC = () => (
  <MyProjectsBase
    header={
      <MyProjectBaseHeader website={'https://dribbble.com/shots/15841440-Dating-App-Prototype-Exploration'}>Dating App</MyProjectBaseHeader>
    }
    tags={[TagEnum.Flutter]}
  >
    <MyProjectBaseCarousel images={images} />
    <MyProjectBaseBody>
      <Box as={'p'} textAlign={'center'}>
        Aplicativo de encontro
      </Box>

      <p>
        Esse aplicativo foi feito baseado no protótipo{' '}
        <a href={'https://dribbble.com/shots/15841440-Dating-App-Prototype-Exploration'}>compatilhado no dribble</a>.
      </p>
    </MyProjectBaseBody>
  </MyProjectsBase>
)

export default MyProjectsDating
