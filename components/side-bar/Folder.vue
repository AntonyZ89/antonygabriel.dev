<template>
  <li
    class="hover:bg-nvim-treehover py-1 px-2 cursor-pointer"
    :class="{ 'bg-nvim-darkgreen hover:!bg-nvim-darkblue': isSelected }"
    @click="handleClick"
  >
    <span>{{ folder.getIcon(props) }}</span>
    {{ name }}  <span v-if="type === 'folder' && items!.length">({{ items!.length }})</span>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

type Props = Project

const props = defineProps<Props>()

const projectStore = useProjectStore()

const isSelected = computed(() => projectStore.selectedProject?.id === props.id)

function handleClick() {
  if (projectStore.selectedProject?.id === props.id)
    return

  if (!projectStore.previousProject) {
    projectStore.path.pop()
  }

  if (
    projectStore.selectedProject?.type === 'folder'
    && projectStore.previousProject?.type === 'folder'
    && projectStore.previousProject.items.some(project => project.id === projectStore.selectedProject!.id)
  ) {
    projectStore.path.pop()
  }

  projectStore.path.push(props.id)
}
</script>
