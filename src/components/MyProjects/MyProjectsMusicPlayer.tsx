import { Box } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/music-player/'

const images = [
  BASE_URL + 'DiscoverTab.png',
  BASE_URL + 'FoldersTab.png',
  BASE_URL + 'GenresTab.png',
  BASE_URL + 'PlayerScreen.png',
  BASE_URL + 'TracksTab.png'
]

const MyProjectsMusicPlayer: React.FC = () => (
  <Box>
    <MyProjectsBase
      header={<MyProjectBaseHeader repository={'Music-Player-App'}>Music Player</MyProjectBaseHeader>}
      tags={[TagEnum.ReactNative, TagEnum.JavaScript, TagEnum.TypeScript]}
    >
      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <Box as={'p'} textAlign={'center'}>
          Clone da interface do aplicativo <a href={'https://100pilabs.com'}>Pi Player</a>.{' '}
        </Box>
        <p>
          Aplicativo feito com o intuito de estudar o React Native e testar a biblioteca UI Framework{' '}
          <a href={'https://callstack.github.io/react-native-paper/'}>React Native Paper</a> com o objetivo de encontrar a melhor opção para
          desenvolver aplicativos de maneira rápida e eficiente.
        </p>
      </MyProjectBaseBody>
    </MyProjectsBase>
  </Box>
)

export default MyProjectsMusicPlayer
