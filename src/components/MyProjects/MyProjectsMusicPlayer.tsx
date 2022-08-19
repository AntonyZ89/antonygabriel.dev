import { Box, SimpleGrid } from '@chakra-ui/react'
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

const tags = [TagEnum.ReactNative, TagEnum.JavaScript, TagEnum.TypeScript]

const MyProjectsMusicPlayer: React.FC = () => (
  <MyProjectsBase header={<MyProjectBaseHeader repository={'Music-Player-App'}>Music Player</MyProjectBaseHeader>} tags={tags}>
    <SimpleGrid columns={{ base: 1, md: 2 }} h={'100%'} autoRows={{ base: '0.5fr', md: '1fr' }} overflow={'hidden'}>
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

        <p>As telas e o aplicativo são apenas para demonstração. Não foram feitos os requisitos de funcionalidade.</p>

        <Box as={'ul'} sx={{ '> li': { mb: 2 } }}>
          <li>
            <strong>Discover</strong> - Aba com a lista de categorias de músicas, como músicas, álbuns, artistas e mais.
          </li>
          <li>
            <strong>Folders</strong> - Aba com a lista de pastas de músicas.
          </li>
          <li>
            <strong>Genres</strong> - Aba com a lista de gêneros de músicas.
          </li>
          <li>
            <strong>Player</strong> - Tela do player, exibindo a música atual e com opções de play, pause, próxima música, música anterior,
            tocar aleatoriamente, repetir, volume, favoritos e tempo atual.
          </li>
          <li>
            <strong>Tracks</strong> - Aba com a lista de músicas.
          </li>
        </Box>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)
export default MyProjectsMusicPlayer
