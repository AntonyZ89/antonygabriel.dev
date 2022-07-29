import { Box } from '@chakra-ui/react'
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

const MyProjectsBookStore: React.FC = () => (
  <MyProjectsBase
    header={<MyProjectBaseHeader repository={'book-store-app'}>Book Store</MyProjectBaseHeader>}
    tags={[TagEnum.ReactNative, TagEnum.TypeScript, TagEnum.JavaScript]}
  >
    <MyProjectBaseCarousel images={images} />
    <MyProjectBaseBody>
      <Box as={'p'} textAlign={'center'}>
        Aplicativo de venda de livros
      </Box>

      <p>
        Aplicativo desenvolvido com React Native utilizando os componentes da biblioteca Magnus UI, TypeScript e ContextUI para gerenciar os
        itens no carrinho
      </p>
    </MyProjectBaseBody>
  </MyProjectsBase>
)

export default MyProjectsBookStore
