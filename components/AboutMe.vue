<template>
  <div class="md:w-3/4">
    <div class="mb-8">
      <div class="text-nvim-green text-xl mb-4">
        :{{ t('about_me') }}
      </div>
      <p
        class="mb-2 leading-relaxed"
        v-html="t('paragraph_1', { list: tech_specialists })"
      />
      <p class="mb-4 leading-relaxed">
        {{ t('paragraph_2') }}
      </p>

      <div class="text-nvim-green text-xl mb-4">
        :{{ t('technologies') }}
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-4 mb-4">
        <Label
          v-for="technology in technologies"
          :key="technology.name"
          :="technology"
        >
          {{ t(technology.name) }}
        </Label>
      </div>

      <div class="text-nvim-green text-xl mb-4">
        :{{ t('socials') }}
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-4">
        <Label
          v-for="social in socials"
          :key="social.name"
          :="social"
        >
          {{ social.name }}
        </Label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const props = defineProps<{
  list: string[]
}>()

const tech_specialists = `<span class="text-nvim-yellow">[</span>${props.list}<span class="text-nvim-yellow">]</span>`
</script>

<i18n lang="yaml">
en:
  about_me: About Me
  technologies: Technologies
  socials: Socials
  paragraph_1: Full Stack Developer with more than 6 years of experience in advanced web technologies. Specialist in {list}, with deep knowledge in cloud architectures, Docker, Kubernetes and SQL/NoSQL databases.
  paragraph_2: Formed in Analytics and Development Systems, with experience in startups innovators and companies of medium and large size in the technology sector.
pt:
  about_me: Sobre Mim
  technologies: Tecnologias
  socials: Redes Sociais
  paragraph_1: Desenvolvedor Full Stack com mais de 6 anos de experiência em tecnologias web avançadas. Especialista em {list}, com profundo conhecimento em arquiteturas cloud, Docker, Kubernetes e bancos de dados SQL/NoSQL.
  paragraph_2: Formado em Análise e Desenvolvimento de Sistemas, com trajetória em startups inovadoras e empresas de médio e grande porte do setor tecnológico.
es:
  about_me: Sobre Mim
  technologies: Tecnologías
  socials: Redes Sociales
  paragraph_1: Desarrollador Full Stack con más de 6 años de experiencia en tecnologías web avanzadas. Especialista en {list}, con profundo conocimiento en arquitecturas en la nube, Docker, Kubernetes y bases de datos SQL/NoSQL.
  paragraph_2: Formado en Análisis y Desarrollo de Sistemas, con trayectoria en startups innovadoras y empresas de medio y grande porte en el sector tecnológico.
</i18n>
