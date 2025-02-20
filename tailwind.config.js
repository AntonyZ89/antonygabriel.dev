/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './projects/**/*.{vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'nvim-bg': '#1e1e1e',
        'nvim-fg': '#d4d4d4',
        'nvim-green': '#3d9970',
        'nvim-blue': '#7fdbca',
        'nvim-yellow': '#d7ba7d',
        'nvim-darkblue': '#489c8a',
        'nvim-purple': '#ae81ff',
        'nvim-red': '#ff5555',
        'nvim-statusbg': '#005f5f',
        'nvim-treebg': '#252526',
        'nvim-treehover': '#2a2d2e',
        'nvim-folder': '#75beff',
        'nvim-darkgreen': '#2d7067',
        'nvim-orange': '#ff9e00',
        'nvim-cyan': '#00ffff',
        'nvim-terminal': '#2e2e2e',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
