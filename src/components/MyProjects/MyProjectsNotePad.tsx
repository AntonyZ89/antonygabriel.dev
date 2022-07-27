import { Box } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/note-pad/'

const images = [
  BASE_URL + 'app.gif',
  BASE_URL + 'ColorPicker.gif',
  BASE_URL + 'HomeScreen.png',
  BASE_URL + 'NoteListScreen.png',
  BASE_URL + 'NoteScreen.png'
]

const MyProjectsNotePad: React.FC = () => (
  <MyProjectsBase
    header={<MyProjectBaseHeader repository={'NotePad-app'}>Bloco de Notas</MyProjectBaseHeader>}
    tags={[TagEnum.ReactNative, TagEnum.JavaScript, TagEnum.TypeScript]}
  >
    <MyProjectBaseCarousel images={images} />
    <MyProjectBaseBody>
      <Box as={'p'} textAlign={'center'}>
        Bloco de notas feito em React Native
      </Box>

      <p>
        Bloco de notas desenvolvido para testar a biblioteca UI Framework{' '}
        <a href={'https://reactnativeelements.com'}>React Native Elements</a> com o objetivo de encontrar a melhor opção para desenvolver
        aplicativos de maneira rápida e eficiente.
      </p>

      <p>
        Esse aplicativo permite ao usuário criar notas e organiza-las as notas por cores. Todos os dados são salvos na memória do aplicativo
        e é utilizado ContextAPI para gerenciar esses dados
      </p>
    </MyProjectBaseBody>
  </MyProjectsBase>
)

export default MyProjectsNotePad
