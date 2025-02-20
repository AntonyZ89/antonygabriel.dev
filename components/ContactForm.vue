<script setup lang="ts">
import type { FetchError } from 'ofetch'
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const status = ref<{ type: 'error' | 'success', text: string }>()
const loading = ref(false)

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function sendContactForm() {
  if (!validateEmail(email.value)) {
    status.value = { type: 'error', text: 'Email inválido!' }
    return
  }

  loading.value = true

  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        fullName: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    })

    // clean
    email.value = ''
    subject.value = ''
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
    <div class="text-nvim-green text-xl mb-4">
      :Contato
    </div>

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
          Nome completo
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
          Email
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

      <div>
        <label
          class="text-nvim-fg text-lg block mb-2"
        >
          Assunto
        </label>
        <input
          v-model="subject"
          type="text"
          :disabled="loading"
          required
          placeholder=">"
          class="bg-nvim-bg w-full border-2 border-nvim-green p-2 rounded focus:outline-none focus:ring-2 focus:ring-nvim-green"
        >
      </div>

      <textarea
        v-model="message"
        :disabled="loading"
        required
        placeholder="> Mensagem"
        class="bg-nvim-bg border-2 min-h-32 border-nvim-green p-2 rounded focus:outline-none focus:ring-2 focus:ring-nvim-green"
      />

      <button
        class="self-start px-6 py-2 bg-nvim-green hover:bg-nvim-darkgreen rounded transition"
        type="submit"
        :disabled="loading"
      >
        Enviar
      </button>
    </form>
  </div>
</template>
