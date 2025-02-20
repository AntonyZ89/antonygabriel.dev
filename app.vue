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
              Desenvolvedor Full Stack com 6 anos de experiência em tecnologias como PHP, Vue.js,
              Python e React. Especializado na criação de soluções eficientes e de alta qualidade,
              tanto no backend quanto no frontend. Tenho experiência em integração de sistemas,
              desenvolvimento de APIs, automação de processos e otimização de fluxos de trabalho.
            </p>
            <p class="mb-4 leading-relaxed">
              Gosto de resolver problemas complexos e garantir que as soluções sejam bem documentadas
              e fáceis de manter.
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
</style>
