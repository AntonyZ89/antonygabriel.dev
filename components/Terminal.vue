<template>
  <div
    class="flex-1 terminal bg-nvim-terminal p-4 border-2 border-nvim-green"
    @click="focusInput"
  >
    <div
      ref="terminalContentRef"
      class="h-60 overflow-y-auto mb-4"
    >
      <div
        v-for="(line, index) in output"
        :key="index"
        class="font-mono text-sm"
      >
        <span
          v-if="line.type === 'output'"
          class="text-nvim-fg"
          v-html="line.content"
        />
        <span
          v-if="line.type === 'command'"
          class="text-nvim-green"
        >❯ {{ line.content }}</span>
        <span
          v-if="line.type === 'error'"
          class="text-nvim-red"
        >{{ line.content }}</span>
      </div>
    </div>

    <div class="flex items-center">
      <span class="text-nvim-green mr-2">❯</span>
      <input
        ref="inputRef"
        v-model="command"
        type="text"
        class="flex-1 bg-transparent text-nvim-fg focus:outline-none"
        @keyup.enter="executeCommand"
        @keyup.up="historyUp"
        @keyup.down="historyDown"
        @keyup.ctrl.c="command = ''"
        @keydown.tab.prevent="handleAutoComplete"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

const projectStore = useProjectStore()
const { t } = useI18n()

const command = ref<string>()
const output = ref<Array<
  {
    type: 'output' | 'command' | 'error'
    content: string
  }
>>([])
const commandHistory = ref<string[]>([])
const historyIndex = ref(-1)
const commands = {
  help: {
    description: t('description.help'),
    execute: showHelp,
  },
  clear: {
    description: t('description.clear'),
    execute: clearTerminal,
  },
  projects: {
    description: t('description.projects'),
    execute: listProjects,
  },
  neofetch: {
    description: t('description.neofetch'),
    execute: showNeofetch,
  },
  cd: {
    description: t('description.cd'),
    execute: (args: string[]) => {
      const _args = args.join(' ')

      if (_args.startsWith('"')) {
        const nextQuote = _args.indexOf('"', 1)
        return cd(_args.slice(1, nextQuote))
      }

      cd(args[0])
    },
  },
  open: {
    description: t('description.open'),
    execute: (args: string[]) => {
      const _args = args.join(' ')

      if (_args.startsWith('"')) {
        const nextQuote = _args.indexOf('"', 1)
        return open(_args.slice(1, nextQuote))
      }

      open(args[0])
    },
  },
}

const inputRef = ref()
const terminalContentRef = ref()

/** Computed */

const list = computed(() => {
  if (projectStore.selectedProject) {
    if (projectStore.selectedProject.type === 'folder') {
      return projectStore.selectedProject.items
    }

    if (projectStore.previousProject?.type === 'folder')
      return projectStore.previousProject.items
  }

  return projectStore.projects
})

const count = computed(() => projectStore.projects.reduce((acc, project) => acc + projectCount(project), 0))

/** Functions */

function focusInput() {
  inputRef.value.focus()
}

function executeCommand() {
  const cmd = command.value?.trim()
  if (!cmd) return

  addToHistory(cmd)
  processCommand(cmd)
  command.value = undefined
  scrollToBottom()
}

function addToHistory(cmd: string) {
  commandHistory.value.push(cmd)
  historyIndex.value = commandHistory.value.length
}

function processCommand(cmd: string) {
  output.value.push({ type: 'command', content: cmd })

  const [baseCommand, ...args] = cmd.split(' ')

  const command = commands[baseCommand.toLowerCase() as keyof typeof commands]

  if (command) {
    command.execute(args)
  }
  else {
    output.value.push({
      type: 'error',
      content: t('command_not_found', [baseCommand]),
    })
  }
}

function showHelp() {
  const helpText = Object.entries(commands)
    .map(([cmd, config]) =>
      `<p>
    <span class="text-nvim-green">${cmd.padEnd(12)}</span> - ${config.description}
</p>
`,
    ).join('\n')

  output.value.push({ type: 'output', content: helpText })
}

function clearTerminal() {
  output.value = []
}

function listProjects() {
  function generateTreeString(items: Project[], prefix = '') {
    let result = ''

    items.forEach((item, index) => {
      const isLast = index === items.length - 1
      const connector = isLast ? '└── ' : '├── '
      result += prefix + connector + folder.getIcon(item) + ' ' + item.name + '\n'

      if (item.type === 'folder') {
        const newPrefix = prefix + (isLast ? '    ' : '│   ')
        result += generateTreeString(item.items, newPrefix)
      }
    })

    return result
  }

  output.value.push({ type: 'output', content: '<pre>' + generateTreeString(projectStore.projects) + '</pre>' })
}

function showNeofetch() {
  const neofetch = `
        <div class="text-nvim-green">
          <div class="flex gap-4">
            <pre class="text-nvim-purple">
${getAsciiArt()}
            </pre>
            <div>
<div>👤 <span class="text-nvim-blue">${t('neofetch.name')}:</span> Antony Gabriel</div>
<div>🏷️ <span class="text-nvim-blue">${t('neofetch.title')}:</span> Desenvolvedor Full-Stack</div>
<div>🌐 <span class="text-nvim-blue">${t('neofetch.stack')}:</span> Vue.js, Node.js, Python, PHP, TypeScript, React</div>
<div>📂 <span class="text-nvim-blue">${t('neofetch.projects')}:</span> ${count.value}</div>
            </div>
          </div>
        </div>
      `
  output.value.push({ type: 'output', content: neofetch })
}

function cd(path: string) {
  if (path === '..') {
    if (projectStore.selectedProject?.type === 'file') {
      projectStore.path.pop()
    }

    projectStore.path.pop()

    return
  }

  if (['~', '/'].includes(path) || !path) {
    projectStore.path = []
    return
  }

  if (path === '.')
    return

  const target = list.value.find(project => project.type === 'folder' && project.name.toLowerCase() === path.toLowerCase())

  if (!target) {
    output.value.push({ type: 'error', content: t('path_not_found', [path]) })
    return
  }

  projectStore.select(target)
}

function open(path: string) {
  const target = list.value.find(project => project.type === 'file' && project.name.toLowerCase() === path.toLowerCase())

  if (!target) {
    output.value.push({ type: 'error', content: t('file_not_found', [path]) })
    return
  }

  projectStore.select(target)
}

function historyUp() {
  if (historyIndex.value > 0) {
    historyIndex.value--
    command.value = commandHistory.value[historyIndex.value]
  }
}

function historyDown() {
  if (historyIndex.value < commandHistory.value.length - 1) {
    historyIndex.value++
    command.value = commandHistory.value[historyIndex.value]
  }
}

function scrollToBottom() {
  nextTick(() => {
    terminalContentRef.value.scrollTop = terminalContentRef.value.scrollHeight
  })
}

function printWelcomeMessage() {
  const welcomeMsg = `
        <p>
            ${t('welcome_message_1')}
        </p>
        <p>
            ${t('welcome_message_2')}
        </p>
        _______________________________________________
      `
  output.value.push({ type: 'output', content: welcomeMsg })
}

function getAsciiArt() {
  return `�⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄
⡈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⡇⣠⣤⣤⣤⣤⣄⡀⠈⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
`
}

function handleAutoComplete() {
  console.log('autocomplete')
  if (!command.value) return
  const [cmd, ...args] = command.value.split(' ')

  if (!cmd || args.length > 1 || !['cd', 'open'].includes(cmd)) return

  const [arg] = args

  const project = list.value.find(project => project.name.toLowerCase().startsWith(arg.toLowerCase()))

  if (project)
    command.value = cmd + ' ' + project.name
}

onMounted(() => {
  printWelcomeMessage()
})
</script>

<style scoped>
.terminal {
  font-family: 'Fira Code', monospace;
}

input {
  caret-color: #3d9970;
}

pre {
  white-space: pre-wrap;
  font-family: 'Fira Code', monospace;
}
</style>

<i18n lang="yaml">
en:
  welcome_message_1: Welcome to the portfolio terminal!
  welcome_message_2: Type 'help' to see the available commands.
  description:
    help: Shows this message
    clear: Clears the terminal
    projects: Lists all projects
    neofetch: Shows information about the system
    cd: Changes the current directory
    open: Opens a file
  neofetch:
    name: Name,
    title: Title,
    stack: Stack,
    projects: Projects,
  command_not_found: 'Command not found: {0}'
pt:
  welcome_message_1: Bem-vindo ao terminal do portfolio!
  welcome_message_2: Digite 'help' para ver os comandos disponíveis.
  description:
    help: Exibe esta mensagem de ajuda
    clear: Limpa o terminal
    projects: Lista todos os projetos
    neofetch: Exibe informações do sistema
    cd: Muda o diretório atual
    open: Abre um arquivo
  neofetch:
    name: Nome,
    title: Título,
    stack: Stack,
    projects: Projetos,
  command_not_found: 'Comando não encontrado: {0}'
es:
  welcome_message_1: Bienvenido al terminal del portfolio!
  welcome_message_2: Escriba 'help' para ver los comandos disponibles.
  description:
    help: Muestra este mensaje
    clear: Limpia el terminal
    projects: Lista todos los proyectos
    neofetch: Muestra información del sistema
    cd: Cambia el directorio actual
    open: Abre un archivo
  neofetch:
    name: Nombre,
    title: Título,
    stack: Stack,
    projects: Proyectos,
  command_not_found: 'Comando no encontrado: {0}'
  path_not_found: 'Ruta no encontrada: {0}'
  file_not_found: 'Archivo no encontrado: {0}'
</i18n>
