<template>
  <header class="flex flex-col gap-y-4 justify-end border-l-4 border-nvim-green pl-4 mb-8">
    <div>
      <NuxtImg
        src="/images/profile.jpeg"
        alt="Perfil"
        class="rounded-full"
        height="200px"
        width="200px"
      />
    </div>

    <div>
      <h1 class="text-3xl mb-2">
        :AntonyDev
      </h1>
      <div class="text-nvim-blue">
        > 👋 {{ t('welcome') }} <CursorBlink />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
en:
  welcome: Welcome to my professional development environment
pt:
  welcome: Bem-vindo ao meu ambiente de desenvolvimento profissional
es:
  welcome: Bienvenido al mio ambiente de desarrollo profesional
</i18n>
