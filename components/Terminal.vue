<template>
  <div
    class="flex-1 terminal bg-nvim-terminal p-4 rounded-lg border-2 border-nvim-green"
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
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

const projectStore = useProjectStore()

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
    description: 'Exibe esta mensagem de ajuda',
    execute: showHelp,
  },
  clear: {
    description: 'Limpa o terminal',
    execute: clearTerminal,
  },
  projects: {
    description: 'Lista todos os projetos',
    execute: listProjects,
  },
  neofetch: {
    description: 'Exibe informações do sistema',
    execute: showNeofetch,
  },
  cd: {
    description: 'Muda o diretório atual',
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
    description: 'Abre um arquivo',
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
      content: `Comando não encontrado: ${baseCommand}`,
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
              <div>👤 <span class="text-nvim-blue">Nome:</span> Antony Gabriel</div>
              <div>🏷️ <span class="text-nvim-blue">Título:</span> Desenvolvedor Full-Stack</div>
              <div>🌐 <span class="text-nvim-blue">Stack:</span> Vue.js, Node.js, Python, PHP, TypeScript, React</div>
              <div>📂 <span class="text-nvim-blue">Projetos:</span> ${count.value}</div>
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
    output.value.push({ type: 'error', content: `Caminho não encontrado: ${path}` })
    return
  }

  if (target) {
    projectStore.path.push(target.name)
  }
}

function open(path: string) {
  const target = list.value.find(project => project.type === 'file' && project.name.toLowerCase() === path.toLowerCase())

  if (!target) {
    output.value.push({ type: 'error', content: `Arquivo não encontrado: ${path}` })
    return
  }

  projectStore.path.push(target.name)
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
            Bem-vindo ao terminal do portfolio! 
        </p>
        <p>
            Digite 'help' para ver os comandos disponíveis.
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

onMounted(() => {
  focusInput()
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
