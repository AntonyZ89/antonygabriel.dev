<template>
  <div class="flex-1 md:flex-[0.3] bg-nvim-treebg p-4 rounded-lg">
    <div class="text-nvim-folder mb-2">
      {{ path }}
    </div>
    <ul>
      <SideBarBack
        v-if="showBack"
        :="projectStore.previousProject"
      />
      <SideBarFolder
        v-for="project in list"
        :key="project.name"
        :="project"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
const projectStore = useProjectStore()

const path = computed(() => '~/' + projectStore.breadCrumbs.join('/'))

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

const showBack = computed(() => {
  if (!projectStore.path.length || (projectStore.selectedProject?.type === 'file' && projectStore.previousProject?.type === 'file'))
    return false

  return true
})
</script>
