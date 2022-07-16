import { Box } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/book-store/'

const images = [
  BASE_URL + 'BookListScreen.png',
  BASE_URL + 'CartScreen.png',
  BASE_URL + 'HomeDrawer.png',
  BASE_URL + 'HomeScreen.png',
  BASE_URL + 'LoginScreen.png'
]

const MyProjectsDating: React.FC = () => (
  <Box>
    <MyProjectsBase tags={[TagEnum.ReactNative, TagEnum.TypeScript, TagEnum.JavaScript]}>
      <MyProjectBaseHeader>Dating App</MyProjectBaseHeader>

      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <p>TODO</p>
      </MyProjectBaseBody>
    </MyProjectsBase>
  </Box>
)

export default MyProjectsDating
