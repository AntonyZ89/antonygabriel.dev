import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'FlyCash',
  description: 'flycash',
  url: {
    website: 'https://flyca.sh',
  },
  images: [
    '/images/flycash/home.png',
    '/images/flycash/register.png',
    '/images/flycash/blog.png',
  ],
  technologies: [
    technology.typescript,
    technology.vuejs,
    technology.nuxt,
  ],
  html: `
<h2>FlyCash - Plataforma de gerenciamento financeiro</h2>
<p>Esse aplicativo foi minha primeira experiência criando um produto do zero para oferecer um serviço por assinatura.</p>
<p>O FlyCash permite ao usuário gerenciar seus gastos de forma simples e intuitiva, com uma interface limpa e fácil de usar.</p>
<p>É possível adicionar transações, como gastos de compras, alugamentos, entregas, etc. Também é possível criar categorias e sub-categorias para agrupar transações e facilitar a navegação.</p>
<p><b><u>Offline</u></b>: O aplicativo é um PWA que funciona direto pelo navegador, permitindo que os usuários acessem e cadastrem seus dados sem precisar se conectar à internet.</p>
`,
} satisfies Project
