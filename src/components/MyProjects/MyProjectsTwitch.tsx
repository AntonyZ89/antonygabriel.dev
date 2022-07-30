import { Box, SimpleGrid } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/twitch/'

const images = [BASE_URL + 'Home.png', BASE_URL + 'Following.png', BASE_URL + 'Browse.png', BASE_URL + 'Esports.png']

const tags = [TagEnum.ReactJS, TagEnum.NextJS, TagEnum.TypeScript, TagEnum.SASS, TagEnum.Vercel]

const MyProjectsTwitch: React.FC = () => (
  <MyProjectsBase header={<MyProjectBaseHeader website={'https://twitch-ui-clone.vercel.app'}>Twitch</MyProjectBaseHeader>} tags={tags}>
    <SimpleGrid h={'100%'} autoRows={'0.5fr'} overflow={'hidden'}>
      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <Box as={'p'} textAlign={'center'}>
          Clone da interface da Twitch
        </Box>

        <p>Clone da interface da Twitch para testar a biblioteca Chakra UI e o NextJS</p>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)

export default MyProjectsTwitch
