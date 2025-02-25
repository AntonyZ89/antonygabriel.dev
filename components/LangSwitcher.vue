<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n()
</script>

<template>
  <div class="absolute top-4 right-4 flex gap-2 bg-nvim-fg/10 px-2 py-1">
    <template
      v-for="(locale, i) in locales"
      :key="locale.code"
    >
      <a
        href="#"
        class="text-nvim-green"
        :class="locale.code === currentLocale && 'font-bold underline underline-offset-2 decoration-emerald-400 decoration-dashed'"
        @click.prevent.stop="setLocale(locale.code)"
      >
        {{ locale.name }}
      </a>
      <span
        v-if="i < locales.length - 1"
        class="text-nvim-darkgreen font-bold"
      >|</span>
    </template>
  </div>
</template>
