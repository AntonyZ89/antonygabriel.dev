<template>
  <li
    class="hover:bg-nvim-treehover py-1 px-2 cursor-pointer"
    :class="{ 'bg-nvim-darkgreen hover:!bg-nvim-darkblue': isSelected }"
    @click="projectStore.select($props)"
  >
    <span>{{ folder.getIcon(props) }}</span>
    {{ name }} <span v-if="type === 'folder' && items!.length">({{ count }})</span>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

type Props = Project

const props = defineProps<Props>()

const projectStore = useProjectStore()

const isSelected = computed(() => projectStore.selectedProject?.name === props.name)
const count = computed(() => projectCount(props))
</script>
