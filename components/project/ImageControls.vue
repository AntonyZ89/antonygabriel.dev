<script setup lang="ts">
const props = withDefaults(defineProps<{
  currentIndex: number
  count: number
  y?: string
  size?: string
}>(), {
  size: '0.75rem',
  y: '0.5rem',
})

const emit = defineEmits<{
  (e: 'next' | 'prev'): void
}>()

function click(index: number) {
  if (index === props.currentIndex) return

  if (index > props.currentIndex) {
    for (let i = props.currentIndex; i < index; i++) {
      emit('next')
    }
    return
  }

  for (let i = props.currentIndex; i > index; i--) {
    emit('prev')
  }
}
</script>

<template>
  <span
    :style="{
      '--y': y,
      '--size': size,
    }"
  >
    <button
      class="absolute left-2 top-1/2 -translate-y-1/2 text-nvim-green border-nvim-green border text-2xl bg-nvim-bg px-2 py-1 rounded hover:bg-nvim-darkgreen transition"
      @click="$emit('prev')"
    >
      h
    </button>

    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 text-nvim-green border-nvim-green border text-2xl bg-nvim-bg px-2 py-1 rounded hover:bg-nvim-darkgreen transition"
      @click="$emit('next')"
    >
      l
    </button>

    <div class="absolute bottom-[var(--y)] left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(index) in count"
        :key="index"
        class="size-[var(--size)] rounded-full"
        :class="index - 1 === currentIndex ? 'bg-nvim-green' : 'bg-nvim-statusbg'"
        @click="click(index - 1)"
      />
    </div>
  </span>
</template>
