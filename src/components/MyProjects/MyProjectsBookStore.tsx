import { Box, SimpleGrid } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/book-store/'

const images = [
  BASE_URL + 'HomeScreen.png',
  BASE_URL + 'HomeDrawer.png',
  BASE_URL + 'BookListScreen.png',
  BASE_URL + 'CartScreen.png',
  BASE_URL + 'LoginScreen.png'
]

const tags = [TagEnum.ReactNative, TagEnum.TypeScript, TagEnum.JavaScript]

const MyProjectsBookStore: React.FC = () => (
  <MyProjectsBase header={<MyProjectBaseHeader repository={'book-store-app'}>Book Store</MyProjectBaseHeader>} tags={tags}>
    <SimpleGrid columns={{ base: 1, md: 2 }} h={'100%'} autoRows={{ base: '0.5fr', md: '1fr' }} overflow={'hidden'}>
      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <Box as={'p'} textAlign={'center'}>
          Aplicativo de venda de livros
        </Box>

        <p>
          Aplicativo desenvolvido com React Native utilizando os componentes da biblioteca Magnus UI, TypeScript e ContextUI para gerenciar
          os itens no carrinho
        </p>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)

export default MyProjectsBookStore
