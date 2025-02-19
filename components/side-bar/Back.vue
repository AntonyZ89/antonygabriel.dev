<template>
  <li
    class="hover:bg-nvim-treehover py-1 px-2 cursor-pointer"
    @click="handleClick"
  >
    ../
  </li>
</template>

<script setup lang="ts">
const projectStore = useProjectStore()

function handleClick() {
  const currentProject = projectStore.selectedProject

  projectStore.path.pop()

  if (currentProject!.type === 'file')
    projectStore.path.pop()
}
</script>
