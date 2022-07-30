import { Box, SimpleGrid } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/orkut/'

const images = [
  BASE_URL + 'login.png',
  BASE_URL + 'my_profile.png',
  BASE_URL + 'friends.png',
  BASE_URL + 'community.png',
  BASE_URL + 'forum.png'
]

const tags = [TagEnum.ReactJS, TagEnum.NextJS, TagEnum.TypeScript, TagEnum.SASS, TagEnum.Vercel]

const MyProjectsOrkut: React.FC = () => (
  <MyProjectsBase header={<MyProjectBaseHeader website={'orkut.in-development.tk'}>Orkut</MyProjectBaseHeader>} tags={tags}>
    <SimpleGrid h={'100%'} autoRows={'0.5fr'} overflow={'hidden'}>
      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <Box as={'p'} textAlign={'center'}>
          Clone da interface do Orkut com um layout mais atual
        </Box>

        <p>
          O objetivo desse projeto inicialmente era refazer a aplicação do Orkut por completo, isso inclui Frontend, Backend e Mobile. Mas
          por falta de tempo para dedicar a esse projeto decidi apenas fazer o Frontend.
        </p>

        <p>
          O layout foi inspirado no layout clássico do Orkut nos primeiros anos de lançamento da plataforma porém com algumas mudanças para
          ficar mais atual. Possui quase todas as telas do Orkut: Login, Cadastro, Perfil, Amigos, Comunidades, Fórum, Depoimentos, Fotos,
          Vídeos, Scraps, etc. Além disso, possui <a href={'https://orkut.in-development.tk/setting'}>sistema de temas</a> para personalizar
          o o layout da maneira que o usuário desejar.
        </p>

        <p>As tecnologias utilizadas nesse projeto foram: ReactJS, NextJS, TypeScript, Chakra UI e SASS</p>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)

export default MyProjectsOrkut
