<template>
  <component
    :is="url ? 'a' : 'span'"
    :href="url"
    :target="url ? '_blank' : ''"
    class="h-7 pl-2 relative inline-flex items-center bg-opacity-20"
    :class="{
      'pr-3': !extra,
    }"
  >
    <Icon
      v-if="icon"
      :name="icon"
      class="mr-2"
    />

    <slot />

    <button
      v-if="extra"
      class="ml-3 w-6 text-xl text-nvim-fg bg-gray-400/50 h-full inline-flex items-center justify-center"
      @focus="toggle = true"
      @blur="toggle = false"
    >
      <span class="font-bold">
        +
      </span>

      <div
        v-if="toggle"
        class="absolute border-b border-r shadow bottom-9 max-w-screen-sm bg-nvim-darkgreen text-white py-1 px-2 text-sm"
      >
        <div class="mb-1 font-bold">
          Tecnologias
        </div>

        <span class="text-nvim-fg text-nowrap">
          {{ extra?.join(', ') }}
        </span>
      </div>
    </button>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
  extra?: string[]
  url?: string
}>()

const toggle = ref(false)
</script>
