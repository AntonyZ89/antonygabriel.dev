<template>
  <div class="min-h-screen bg-nvim-bg text-nvim-fg font-mono">
    <ActionBar />

    <main class="lg:container mx-auto px-4 py-8">
      <Header />

      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-3/4">
          <div class="mb-8">
            <div class="text-nvim-green text-xl mb-4">
              :Sobre Mim
            </div>
            <p class="mb-2 leading-relaxed">
              Desenvolvedor Full Stack com mais de 6 anos de experiência em tecnologias web avançadas.
              Especialista em <i>Vue.js</i>, <i>React</i>, <i>Angular</i>, <i>PHP</i>, <i>Python</i> e <i>TypeScript</i>, com profundo conhecimento
              em arquiteturas cloud, Docker, Kubernetes e bancos de dados SQL/NoSQL.
            </p>
            <p class="mb-4 leading-relaxed">
              Formado em Análise e Desenvolvimento de Sistemas, com trajetória em startups inovadoras e empresas
              de médio e grande porte do setor tecnológico.
            </p>

            <div class="text-nvim-green text-xl mb-4">
              :Tecnologias
            </div>

            <div class="flex flex-wrap gap-x-2 gap-y-4 mb-4">
              <Label
                v-for="technology in technologies"
                :key="technology.name"
                :="technology"
              >
                {{ technology.name }}
              </Label>
            </div>

            <div class="text-nvim-green text-xl mb-4">
              :Redes Sociais
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
      </div>

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

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

i {
  @apply text-nvim-green;
}
</style>
