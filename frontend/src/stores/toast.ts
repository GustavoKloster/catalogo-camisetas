import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const visible = ref<boolean>(false)
  const message = ref<string>('')

  // ✅ Usando ref em vez de variável solta — evita vazamento com HMR
  const timer = ref<ReturnType<typeof setTimeout> | null>(null)

  function show(msg: string): void {
    message.value = msg
    visible.value = true

    if (timer.value !== null) clearTimeout(timer.value)

    timer.value = setTimeout(() => {
      visible.value = false
      timer.value = null
    }, 2500)
  }

  return { visible, message, show }
})