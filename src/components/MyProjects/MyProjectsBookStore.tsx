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
          os itens no carrinho.
        </p>

        <Box as={'ul'} sx={{ '> li': { mb: 2 } }}>
          <li>
            <strong>Login</strong> - Tela de login, contendo um formulário de login com campo de email e senha para entrar no aplicativo.
          </li>
          <li>
            <strong>Home</strong> - Tela inicial do aplicativo, listando as categorias dos livros e recomendações de livros baseado nas
            buscas do usuário.
          </li>
          <li>
            <strong>Categoria</strong> - Tela da categoria, listando todos os livros da categoria selecionada.
          </li>
          <li>
            <strong>Carrinho</strong> - Tela do carrinho, listando todos os itens do carrinho, exibindo foto, nome e preço de cada produto,
            permite aumentar e diminuir a quantidade e excluir o produto do carrinho, valor total do carrinho e botão para finalizar a
            compra.
          </li>
        </Box>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)

export default MyProjectsBookStore
