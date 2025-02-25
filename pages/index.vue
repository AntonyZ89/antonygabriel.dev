<template>
  <div class="min-h-screen bg-nvim-bg text-nvim-fg font-mono">
    <ActionBar />

    <main class="lg:container mx-auto px-4 py-8">
      <Header />

      <AboutMe :list="tech_specialists" />

      <div>
        <div class="flex flex-col lg:flex-row gap-4">
          <SideBar />
          <Terminal />
        </div>

        <ProjectDetail />
      </div>

      <ContactForm />
    </main>
  </div>
</template>

<script lang="ts" setup>
const i18nHead = useLocaleHead()

const { t } = useI18n()

const tech_specialists = [
  'Vue.js',
  'React',
  'Angular',
  'PHP',
  'Python',
  'TypeScript',
]

const keywords = [
  'Full-Stack',
  'Web',
  'Front-End',
  'Back-End',
  'Cloud',
  'DevOps',
  'Docker',
  'Kubernetes',
  'SQL',
  'NoSQL',
  'Unit Tests',
  'Containers',
  'CI/CD',
  'Git',
  'GitHub',
  'GitLab',
  'AntonyDev',
  'Portfolio',
]

useHead({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs!.lang },
})
useSeoMeta({
  title: t('portfolio'),
  description: t('description', { list: tech_specialists.join(', ') }),
  keywords: tech_specialists.concat(keywords).join(', '),
})
</script>

<i18n lang="yaml">
en:
  description: Full-Stack Developer with more than 6 years of experience in advanced web technologies. Specialist in {list}. With deep knowledge in cloud architectures, Docker, Kubernetes and SQL/NoSQL databases.
pt:
  description: Desenvolvedor Full-Stack com mais de 6 anos de experiência em tecnologias web avançadas. Especialista em {list}. Com profundo conhecimento em arquiteturas cloud, Docker, Kubernetes e bancos de dados SQL/NoSQL.
es:
  description: Desarrollador Full-Stack con más de 6 años de experiencia en tecnologías web avanzadas. Especialista en {list}. Con profundo conocimiento en arquitecturas en la nube, Docker, Kubernetes y bases de datos SQL/NoSQL.
</i18n>
