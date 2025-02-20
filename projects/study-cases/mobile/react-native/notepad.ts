import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'notepad',
  description: 'Um aplicativo para criação de notas',
  url: {
    github: 'https://github.com/AntonyZ89/NotePad-app',
  },
  images: [
    '/images/note-pad/app.gif',
    '/images/note-pad/ColorPicker.gif',
    '/images/note-pad/HomeScreen.png',
    '/images/note-pad/NoteListScreen.png',
    '/images/note-pad/NoteScreen.gif',
  ],
  html: `
<h2>Bloco de notas feito em React Native</h2>
<p>Bloco de notas desenvolvido para testar a biblioteca UI Framework <a href="https://reactnativeelements.com">React Native Elements</a> com o objetivo de encontrar a melhor opção para desenvolver aplicativos de maneira rápida e eficiente.</p>
<p>Esse aplicativo permite ao usuário criar notas e organiza-las por cores. Todos os dados são salvos na memória do aplicativo e é utilizado ContextAPI para gerenciar esses dados</p>
`,
  technologies: [
    technology.javascript,
    technology.react_native,
    technology.typescript,
  ],
} satisfies Project
