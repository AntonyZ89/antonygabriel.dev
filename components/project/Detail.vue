<template>
  <div
    v-if="show"
    class="mt-8"
  >
    <div class="text-nvim-green text-xl mb-4">
      :Projeto
    </div>
    <div class="flex gap-4">
      <div class="flex-[0.3] h-96">
        <ProjectImage :images="selectedProject.images" />
      </div>
      <div class="flex-[0.7]">
        <h1>
          {{ selectedProject.name }}
        </h1>
        <p class="text-nvim-fg mb-4">
          {{ selectedProject.description }}
        </p>

        <div v-html="selectedProject.html" />
        <a
          :href="selectedProject.url"
          class="inline-block px-4 py-2 bg-nvim-darkblue hover:bg-nvim-darkblue !text-white font-bold rounded"
          target="_blank"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectStore = useProjectStore()

const show = computed(() => projectStore.selectedProject?.type === 'file')
const selectedProject = computed(() => projectStore.selectedProject!)
</script>

<style scoped>
:deep(a) {
  @apply text-nvim-yellow/60 hover:text-nvim-yellow transition-colors;
}

:deep(h1) {
  @apply text-2xl mb-4 font-bold;
}

:deep(h2) {
  @apply text-xl mb-4 font-medium;
}

:deep(p) {
  @apply mb-4;
}
</style>
