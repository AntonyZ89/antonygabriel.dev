import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'orkut-clone',
  description: 'Um aplicativo para compartilhar fotos e vídeos',
  url: {
    github: 'https://orkut.in-development.tk/',
  },
  images: [
    '/images/orkut/login.png',
    '/images/orkut/my_profile.png',
    '/images/orkut/friends.png',
    '/images/orkut/forum.png',
    '/images/orkut/community.png',
  ],
  html: `
<h2>Clone da interface do Orkut com um layout mais atual</h2>
<p>O objetivo desse projeto inicialmente era refazer a aplicação do Orkut por completo, isso inclui Frontend, Backend e Mobile. Mas por falta de tempo para dedicar a esse projeto decidi apenas fazer o Frontend.</p>
<p>O layout foi inspirado no layout clássico do Orkut nos primeiros anos de lançamento da plataforma porém com algumas mudanças para ficar mais atual. Possui quase todas as telas do Orkut: Login, Cadastro, Perfil, Amigos, Comunidades, Fórum, Depoimentos, Fotos, Vídeos, Scraps, etc. Além disso, possui <a href="https://orkut.in-development.tk/setting">sistema de temas</a> para personalizar o o layout da maneira que o usuário desejar.</p>
<p>As tecnologias utilizadas nesse projeto foram: ReactJS, NextJS, TypeScript, Chakra UI e SASS</p>
`,
  technologies: [
    technology.nextjs,
    technology.react,
    technology.sass,
    technology.typescript,
  ],
} satisfies Project
