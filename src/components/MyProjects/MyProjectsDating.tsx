import { Box, SimpleGrid } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/date-app/'

const images = [BASE_URL + 'login.png', BASE_URL + 'home.png', BASE_URL + 'chat.png']

const tags = [TagEnum.Flutter]

const MyProjectsDating: React.FC = () => (
  <MyProjectsBase
    header={
      <MyProjectBaseHeader website={'https://dribbble.com/shots/15841440-Dating-App-Prototype-Exploration'}>Dating App</MyProjectBaseHeader>
    }
    tags={tags}
  >
    <SimpleGrid columns={{ base: 1, md: 2 }} h={'100%'} autoRows={{ base: '0.5fr', md: '1fr' }} overflow={'hidden'}>
      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <Box as={'p'} textAlign={'center'}>
          Aplicativo de encontro
        </Box>

        <p>
          Esse aplicativo foi feito baseado no protótipo{' '}
          <a href={'https://dribbble.com/shots/15841440-Dating-App-Prototype-Exploration'}>compatilhado no dribble</a>. Este aplicativo foi
          feito com o objetivo de estudar a linguagem Dart e o framework Flutter.
        </p>

        <Box as={'ul'} sx={{ '> li': { mb: 2 } }}>
          <li>
            <strong>Login</strong> - Tela de login, exibindo dois botões de login: autenticação com Google ou Apple e um botão de cadastro.
          </li>

          <li>
            <strong>Home</strong> - Tela inicial do aplicativo, listando os usuários disponíveis para encontro, com opção de rejeitar ou
            aceitar, se rejeitar, irá exibir a próxima pessoa disponível. Se aceitar, irá exibir a tela de chat.
          </li>

          <li>
            <strong>Chat</strong> - Tela de chat, exibindo o nome do usuário, a foto do usuário e as mensagens.
          </li>
        </Box>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)
export default MyProjectsDating
