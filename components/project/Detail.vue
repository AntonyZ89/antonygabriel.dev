<template>
  <div
    v-if="show"
    class="mt-8"
  >
    <div class="text-nvim-green text-xl mb-4">
      {{ t('project') }}
    </div>
    <div class="flex flex-col lg:flex-row gap-3">
      <div
        v-if="selectedProject.images!.length > 0"
        class="lg:flex-[0.3] h-[600px]"
      >
        <div class="h-[95%]">
          <ProjectImage :images="selectedProject.images!" />
        </div>

        <div class="text-center mt-2">
          {{ t('click to expand') }}
        </div>
      </div>
      <div
        class="bg-nvim-terminal/50 p-3 flex flex-col"
        :class="selectedProject.images!.length === 0 ? 'flex-1': 'md:flex-[0.7]'"
      >
        <div
          class="space-y-3 mb-4"
          v-html="selectedProject.html[locale]"
        />

        <div class="text-nvim-green text-xl mb-4">
          {{ t('technologies') }}
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

        <div class="space-x-3 flex-1 flex items-end">
          <a
            v-if="selectedProject.url?.website"
            :href="selectedProject.url.website"
            class="flex gap-2 items-center px-4 py-2 bg-nvim-darkblue hover:bg-nvim-darkblue !text-white font-bold"
            target="_blank"
          >
            <Icon
              name="material-symbols:globe"
              class="size-6"
            />

            {{ t('view project') }}
          </a>

          <a
            v-if="selectedProject.url?.github"
            :href="selectedProject.url.github"
            class="flex gap-2 items-center px-4 py-2 bg-nvim-darkblue hover:bg-nvim-darkblue !text-white font-bold"
            target="_blank"
          >
            <Icon
              name="logos:github-icon"
              class="size-6"
            />

            {{ t('view code') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectStore = useProjectStore()

const { t, locale } = useI18n()

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

<i18n lang="json">
{
  "en": {
    "project": ":Project",
    "click to expand": "click to expand",
    "technologies": ":Technologies",
    "view project": "View Project",
    "view code": "View Code"
  },
  "pt": {
    "project": ":Projeto",
    "click to expand": "clique para expandir",
    "technologies": ":Tecnologias",
    "view project": "Ver Projeto",
    "view code": "Ver Código"
  },
  "es": {
    "project": ":Proyecto",
    "click to expand": "haga clic para expandir",
    "technologies": ":Tecnologías",
    "view project": "Ver Proyecto",
    "view code": "Ver Código"
  }
}
</i18n>
