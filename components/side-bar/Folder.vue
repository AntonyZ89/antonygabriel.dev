<template>
  <li
    class="hover:bg-nvim-treehover py-1 px-2 cursor-pointer"
    :class="{ 'bg-nvim-darkgreen hover:!bg-nvim-darkblue': isSelected }"
    @click="handleClick"
  >
    <span>{{ folder.getIcon(props) }}</span>
    {{ name }}  <span v-if="type === 'folder' && items!.length">({{ count }})</span>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

type Props = Project

const props = defineProps<Props>()

const projectStore = useProjectStore()

const isSelected = computed(() => projectStore.selectedProject?.name === props.name)
const count = computed(() => projectCount(props))

function handleClick() {
  if (projectStore.selectedProject?.name === props.name) {
    projectStore.path.pop()
    return
  }

  if (projectStore.selectedProject?.type === 'file' && props.type === 'file') {
    projectStore.path.pop()
  }

  if (
    projectStore.selectedProject?.type === 'folder'
    && projectStore.previousProject?.type === 'folder'
    && projectStore.previousProject.items.some(project => project.name === projectStore.selectedProject!.name)
  ) {
    projectStore.path.pop()
  }

  projectStore.path.push(props.name)
}
</script>
