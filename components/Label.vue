<template>
  <component
    :is="url ? 'a' : 'span'"
    ref="selfRef"
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
      @mouseenter="toggle = true"
      @mouseleave="toggle = false"
    >
      <span class="font-bold">
        +
      </span>

      <div
        v-show="toggle"
        ref="toggleRef"
        class="fixed z-10 border-b border-r shadow bg-nvim-darkgreen text-white py-1 px-2 text-sm"
      >
        <div class="mb-1 font-bold">
          {{ t('technologies') }}
        </div>

        {{ extra?.join(', ') }}
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

const { t } = useI18n()

const toggle = ref(false)
const selfRef = ref<HTMLDivElement>()
const toggleRef = ref<HTMLDivElement>()

watch(toggle, async (value) => {
  if (!value) {
    toggleRef.value!.style.left = 'inherit'
    toggleRef.value!.style.right = 'inherit'
    return
  }

  await nextTick()

  adjustPosition()
})

/** Functions */

function adjustPosition() {
  if (!toggleRef.value) return

  const width = toggleRef.value!.clientWidth
  const windowWidth = window.innerWidth
  const toggleX = () => toggleRef.value!.getBoundingClientRect().x
  const selfY = selfRef.value!.getBoundingClientRect().y

  if (toggleX() < 16) {
    toggleRef.value!.style.left = '1rem'
  }

  if (toggleX() + width > windowWidth - 16) {
    toggleRef.value!.style.right = '1rem'

    if (toggleX() < 16) {
      toggleRef.value!.style.left = '1rem'
    }
  }

  toggleRef.value!.style.top = `${selfY - toggleRef.value!.clientHeight - 4}px`
}

onMounted(() => {
  document.addEventListener('scroll', adjustPosition)
})

onUnmounted(() => {
  document.removeEventListener('scroll', adjustPosition)
})
</script>

<i18n lang="yaml">
en:
  technologies: Technologies
pt:
  technologies: Tecnologias
es:
  technologies: Tecnologías
</i18n>
