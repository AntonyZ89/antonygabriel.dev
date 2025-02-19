import type { Project } from '~/types'

export default {
  id: 100,
  type: 'file',
  name: 'Music Player',
  description: 'Um aplicativo para reprodução de músicas',
  url: 'https://github.com/AntonyZ89/Music-Player-App',
  images: [
    'https://antonygabriel.dev/images/music-player/DiscoverTab.png',
    'https://antonygabriel.dev/images/music-player/FoldersTab.png',
    'https://antonygabriel.dev/images/music-player/GenresTab.png',
    'https://antonygabriel.dev/images/music-player/PlayerScreen.png',
    'https://antonygabriel.dev/images/music-player/TracksTab.png',
  ],
  html: `
<h2>Clone de interface do aplicativo Pi Player</h2>
<p>Bloco de notas desenvolvido para testar a biblioteca UI Framework <a href="https://reactnativeelements.com">React Native Elements</a> com o objetivo de encontrar a melhor opção para desenvolver aplicativos de maneira rápida e eficiente.</p>
<p>As telas e o aplicativo são apenas para demonstração. Não foram feitos os requisitos de funcionalidade.</p>
<ul><li><strong>Discover</strong> - Aba com a lista de categorias de músicas, como músicas, álbuns, artistas e mais.</li><li><strong>Folders</strong> - Aba com a lista de pastas de músicas.</li><li><strong>Genres</strong> - Aba com a lista de gêneros de músicas.</li><li><strong>Player</strong> - Tela do player, exibindo a música atual e com opções de play, pause, próxima música, música anterior, tocar aleatoriamente, repetir, volume, favoritos e tempo atual.</li><li><strong>Tracks</strong> - Aba com a lista de músicas.</li></ul>
`,
  technologies: [
    {
      name: 'React Native',
      class: 'bg-nvim-blue',
    },
    {
      name: 'JavaScript',
      class: 'bg-nvim-yellow',
    },
    {
      name: 'TypeScript',
      class: 'bg-nvim-green',
    },
  ],
} satisfies Project
