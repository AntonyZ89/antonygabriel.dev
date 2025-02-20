<template>
  <div
    v-if="show"
    class="mt-8"
  >
    <div class="text-nvim-green text-xl mb-4">
      :Projeto
    </div>
    <div class="flex flex-col lg:flex-row gap-4">
      <div
        v-if="selectedProject.images!.length > 0"
        class="lg:flex-[0.3] h-[600px]"
      >
        <div class="h-[95%]">
          <ProjectImage :images="selectedProject.images!" />
        </div>

        <div class="text-center mt-2">
          clique para expandir
        </div>
      </div>
      <div
        class="bg-nvim-terminal/50 p-2"
        :class="selectedProject.images!.length === 0 ? 'flex-1': 'md:flex-[0.7]'"
      >
        <div
          class="space-y-3 mb-4"
          v-html="selectedProject.html"
        />

        <div class="text-nvim-green text-xl mb-4">
          :Tecnologias
        </div>

        <div class="flex flex-wrap gap-x-2 gap-y-4 mb-4">
          <Label
            v-for="technology in selectedProject.technologies"
            :key="technology.name"
            :="technology"
          >
            {{ technology.name }}
          </Label>
        </div>

        <a
          :href="selectedProject.url"
          class="inline-block px-4 py-2 bg-nvim-darkblue hover:bg-nvim-darkblue !text-white font-bold"
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
  @apply text-2xl font-bold;
}

:deep(h2) {
  @apply text-xl font-medium;
}

:deep(ul) {
  @apply list-disc pl-6;
}

:deep(code) {
  @apply bg-nvim-terminal text-nvim-fg px-1 py-0.5 block;
}
</style>
