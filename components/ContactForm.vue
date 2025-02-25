<script setup lang="ts">
import type { FetchError } from 'ofetch'
import { ref } from 'vue'

const { t } = useI18n()

const fullName = ref('')
const email = ref('')
const message = ref('')
const status = ref<{ type: 'error' | 'success', text: string }>()
const loading = ref(false)

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function sendContactForm() {
  if (!validateEmail(email.value)) {
    status.value = { type: 'error', text: t('invalid_email') }
    return
  }

  loading.value = true

  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        fullName: fullName.value,
        email: email.value,
        message: message.value,
      }),
    })

    // clean
    email.value = ''
    message.value = ''
    fullName.value = ''

    status.value = { type: 'success', text: response.message }
  }
  catch (exception) {
    console.error(exception)
    const error = exception as FetchError

    status.value = { type: 'error', text: error.message }
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="mt-8 border-t-2 border-nvim-statusbg pt-8">
    <h1 class="text-nvim-green text-xl mb-4">
      :{{ t('lets_talk') }}
    </h1>

    <p
      v-if="status"
      class="my-4 border px-2 py-1"
      :class="status.type === 'error' ? 'text-nvim-red border-nvim-red/50' : 'text-nvim-green border-nvim-green/50'"
    >
      {{ status.text }}
    </p>

    <form
      class="flex flex-col gap-4"
      @submit.prevent="sendContactForm"
    >
      <div>
        <label
          class="text-fg text-lg block mb-2"
        >
          {{ t('your_name') }}
        </label>
        <input
          v-model="fullName"
          type="text"
          :disabled="loading"
          required
          placeholder=">"
          class="bg-nvim-bg border-2 border-nvim-green w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-nvim-green"
        >
      </div>

      <div>
        <label
          class="text-nvim-fg text-lg block mb-2"
        >
          {{ t('email') }}
        </label>
        <input
          v-model="email"
          type="email"
          :disabled="loading"
          required
          placeholder=">"
          class="bg-nvim-bg border-2 border-nvim-green w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-nvim-green"
        >
      </div>

      <textarea
        v-model="message"
        :disabled="loading"
        required
        :placeholder="'> ' + t('message')"
        class="bg-nvim-bg border-2 min-h-32 border-nvim-green p-2 rounded focus:outline-none focus:ring-2 focus:ring-nvim-green"
      />

      <button
        class="self-start disabled:cursor-not-allowed px-6 py-2 bg-nvim-green hover:bg-nvim-darkgreen rounded transition"
        type="submit"
        :disabled="loading"
      >
        {{ t('send') }}
      </button>
    </form>
  </div>
</template>

<i18n lang="yaml">
  en:
    invalid_email: Invalid email
    lets_talk: Let's talk!
    your_name: Your name
    email: E-mail
    send: Send
    message: message
  pt:
    invalid_email: Email inválido
    lets_talk: Vamos conversar!
    your_name: Seu nome
    email: E-mail
    send: Enviar
    message: mensagem
  es:
    invalid_email: Email inválido
    lets_talk: ¡Vamos hablar!
    your_name: Tu nombre
    email: Correo electrónico
    send: Enviar
    message: mensaje
</i18n>
