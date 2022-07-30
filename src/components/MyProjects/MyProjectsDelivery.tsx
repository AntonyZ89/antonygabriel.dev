import { Box, SimpleGrid } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseCarousel, MyProjectBaseHeader, MyProjectsBase } from './base'

const BASE_URL = '/images/delivery-app/'

const images = [
  BASE_URL + 'home.png',
  BASE_URL + 'product.png',
  BASE_URL + 'order.png',
  BASE_URL + 'checkout.png',
  BASE_URL + 'status.png',
  BASE_URL + 'order-list.png'
]

const tags = [TagEnum.Flutter]

const MyProjectsDelivery: React.FC = () => (
  <MyProjectsBase
    header={
      <MyProjectBaseHeader website={'https://dribbble.com/shots/14261724-Food-delivery-app-prototyping'}>Delivery App</MyProjectBaseHeader>
    }
    tags={tags}
  >
    <SimpleGrid columns={{ base: 1, md: 2 }} autoRows={{ base: '0.5fr', md: '1fr' }} overflow={'hidden'}>
      <MyProjectBaseCarousel images={images} />
      <MyProjectBaseBody>
        <Box as={'p'} textAlign={'center'}>
          Aplicativo de um delivery
        </Box>

        <p>
          Esse aplicativo foi feito baseado no protótipo{' '}
          <a href={'https://dribbble.com/shots/14261724-Food-delivery-app-prototyping'}>compatilhado no dribble</a>.
        </p>

        <p>
          O aplicativo foi feito em Flutter e simula o fluxo de um delivery tendo seus dados salvos na memória do aparelho utilizando{' '}
          <b>ChangeNotifierProvider</b> e possui 5 telas:
        </p>

        {/*
        <p>
          <strong>Login</strong> - Tela de login, exibindo um formulário de login com opção de cadastrar um novo usuário.
        </p>
        */}

        <p>
          <Box
            as={'ul'}
            sx={{
              '> li': {
                marginBottom: 2
              }
            }}
          >
            <li>
              <strong>Home</strong> - Tela inicial do aplicativo, listando os produtos disponíveis para compra, com opção de filtrar por
              nome e categoria.
            </li>

            <li>
              <strong>Produto</strong> - Tela de detalhes do produto, exibindo imagens do produto, nome, descrição, preço, quantidade a ser
              adicionada ao carrinho e um botão com opção de adicionar ao carrinho.
            </li>

            <li>
              <strong>Carrinho</strong> - Tela de carrinho, exibindo os produtos adicionados ao carrinho exibe o valor total do carrinho,
              com opção de remover o produto do carrinho arrastando para a esquerda, aumentar ou diminuir a quantidade e um botão para
              finalizar a compra.
            </li>
            <li>
              <strong>Checkout</strong> - Tela de pagamento, exibindo os dados do cliente, com opção de alterar o endereço de entrega,
              adicionar uma observação ao pedido, alterar a forma de pagamento e um botão para finalizar a compra.
            </li>

            <li>
              <strong>Status</strong> - Tela de status do pedido, exibindo o status do pedido e um mapa para localizar o pedido.
            </li>

            <li>
              <strong>Pedidos</strong> - Tela de pedidos, exibindo todos os pedidos do cliente com opção de visualizar o pedido.
            </li>
          </Box>
        </p>
      </MyProjectBaseBody>
    </SimpleGrid>
  </MyProjectsBase>
)

export default MyProjectsDelivery
