<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()

const currentIndex = ref(0)
const autoSlide = ref(false) // Defina como false se não quiser auto-slide
const expandImage = ref(false)
let interval: NodeJS.Timeout | null = null

const currentImage = computed(() => props.images[currentIndex.value])

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
    <div class="h-full w-full flex items-center justify-center bg-nvim-bg">
      <NuxtImg
        v-if="!currentImage.endsWith('.gif')"
        :src="currentImage"
        alt="Carrossel"
        class="max-w-full max-h-full object-cover cursor-pointer transition-all duration-500"
        sizes="600px"
        quality="80"
        @click="expandImage = true"
      />
      <img
        v-else
        :src="currentImage"
        alt="Carrossel"
        class="max-w-full max-h-full cursor-pointer object-cover transition-all duration-500"
        @click="expandImage = true"
      >
    </div>

    <ProjectImageControls
      :current-index
      :count="images.length"
      @prev="prevImage"
      @next="nextImage"
    />

    <div
      v-if="expandImage"
      class="z-10 fixed top-0 left-0 w-full h-full bg-nvim-bg/50 transition-all duration-500"
      @click.self="expandImage = false"
    >
      <div class="absolute w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          :src="currentImage"
          alt="Carrossel"
          class="max-h-[80vh] bg-nvim-bg mx-auto cursor-pointer object-cover transition-all duration-500"
          @click="nextImage"
        >
      </div>

      <button
        class="absolute top-6 right-6 size-12 text-nvim-green text-2xl px-2 py-1 bg-nvim-darkgreen/20 flex items-center rounded hover:bg-nvim-darkgreen/50 transition"
        @click="expandImage = false"
      >
        <Icon
          name="material-symbols:close-rounded"
          class="size-10"
        />
      </button>

      <ProjectImageControls
        :current-index
        :count="images.length"
        y="10vw"
        size="1.5rem"
        @prev="prevImage"
        @next="nextImage"
      />
    </div>
  </div>
</template>
