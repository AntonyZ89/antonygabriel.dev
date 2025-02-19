<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()

const currentIndex = ref(0)
const autoSlide = ref(false) // Defina como false se não quiser auto-slide
let interval: NodeJS.Timeout | null = null

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevImage() {
  currentIndex.value
    = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'l') nextImage() // Neovim: Avançar (l)
  if (event.key === 'h') prevImage() // Neovim: Voltar (h)
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  if (autoSlide.value) {
    interval = setInterval(nextImage, 3000) // Muda a cada 3s
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)

  if (interval)
    clearInterval(interval)
})
</script>

<template>
  <div class="relative w-full h-full max-w-3xl mx-auto border-2 border-nvim-green rounded overflow-hidden">
    <!-- Imagem Ativa -->
    <div class="h-full flex items-center justify-center bg-nvim-bg">
      <img
        :src="images[currentIndex]"
        alt="Carrossel"
        class="max-w-full max-h-full object-cover transition-all duration-500"
      >
    </div>

    <!-- Controles -->
    <button
      class="absolute left-2 top-1/2 -translate-y-1/2 text-nvim-green text-2xl bg-nvim-bg px-2 py-1 rounded hover:bg-nvim-darkgreen transition"
      @click="prevImage"
    >
      h
    </button>

    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 text-nvim-green text-2xl bg-nvim-bg px-2 py-1 rounded hover:bg-nvim-darkgreen transition"
      @click="nextImage"
    >
      l
    </button>

    <!-- Indicadores -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      <span
        v-for="(_, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full"
        :class="index === currentIndex ? 'bg-nvim-green' : 'bg-nvim-statusbg'"
      />
    </div>
  </div>
</template>
