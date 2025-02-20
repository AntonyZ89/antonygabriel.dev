import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'book-store',
  description: 'Um aplicativo para comprar livros',
  url: 'https://github.com/AntonyZ89/book-store',
  images: [
    '/images/book-store/HomeScreen.png',
    '/images/book-store/HomeDrawer.png',
    '/images/book-store/BookListScreen.png',
    '/images/book-store/CartScreen.png',
    '/images/book-store/LoginScreen.png',
  ],
  html: `
<h2>Aplicativo de venda de livros</h2>
<p>Aplicativo desenvolvido com React Native utilizando os componentes da biblioteca Magnus UI, TypeScript e ContextUI para gerenciar os itens no carrinho.</p>
<ul>
<li><strong>Login</strong> - Tela de login, contendo um formulário de login com campo de email e senha para entrar no aplicativo.</li>
<li><strong>Home</strong> - Tela inicial do aplicativo, listando as categorias dos livros e recomendações de livros baseado nas buscas do usuário.</li>
<li><strong>Categoria</strong> - Tela da categoria, listando todos os livros da categoria selecionada.</li>
<li><strong>Carrinho</strong> - Tela do carrinho, listando todos os itens do carrinho, exibindo foto, nome e preço de cada produto, permite aumentar e diminuir a quantidade e excluir o produto do carrinho, valor total do carrinho e botão para finalizar a compra.</li>
</ul>
`,
  technologies: [
    technology.javascript,
    technology.react_native,
    technology.typescript,
  ],
} satisfies Project
