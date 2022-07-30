import { Box } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/twitch/'

const images = [BASE_URL + 'Home.png', BASE_URL + 'Following.png', BASE_URL + 'Browse.png', BASE_URL + 'Esports.png']

const MyProjectsTwitch: React.FC = () => (
  <MyProjectsBase
    direction={'column'}
    header={<MyProjectBaseHeader website={'https://twitch-ui-clone.vercel.app'}>Twitch</MyProjectBaseHeader>}
    tags={[TagEnum.ReactJS, TagEnum.NextJS, TagEnum.TypeScript, TagEnum.SASS, TagEnum.Vercel]}
  >
    <MyProjectBaseCarousel images={images} />
    <MyProjectBaseBody>
      <Box as={'p'} textAlign={'center'}>
        Clone da interface da Twitch
      </Box>

      <p>Clone da interface da Twitch para testar a biblioteca Chakra UI e o NextJS</p>
    </MyProjectBaseBody>
  </MyProjectsBase>
)

export default MyProjectsTwitch
