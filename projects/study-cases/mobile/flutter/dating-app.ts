import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'dating-app',
  description: 'Um aplicativo para encontrar um casal',
  url: {
    github: 'https://github.com/AntonyZ89/Delivery-App',
  },
  images: [
    '/images/date-app/login.png',
    '/images/date-app/home.png',
    '/images/date-app/chat.png',
  ],
  html: `
<h2>Aplicativo de encontro</h2>
<p>Esse aplicativo foi feito baseado no protótipo <a href="https://dribbble.com/shots/15841440-Dating-App-Prototype-Exploration">compatilhado no dribble</a>. Este aplicativo foi feito com o objetivo de estudar a linguagem Dart e o framework Flutter.</p>
<ul><li><strong>Login</strong> - Tela de login, exibindo dois botões de login: autenticação com Google ou Apple e um botão de cadastro.</li><li><strong>Home</strong> - Tela inicial do aplicativo, listando os usuários disponíveis para encontro, com opção de rejeitar ou aceitar, se rejeitar, irá exibir a próxima pessoa disponível. Se aceitar, irá exibir a tela de chat.</li><li><strong>Chat</strong> - Tela de chat, exibindo o nome do usuário, a foto do usuário e as mensagens.</li></ul>
`,
  technologies: [
    technology.flutter,
  ],
} satisfies Project
