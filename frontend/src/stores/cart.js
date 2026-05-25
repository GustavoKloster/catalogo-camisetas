import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useToastStore } from './toast'

export const useCartStore = defineStore('cart', () => {
  const items    = ref([])
  const isOpen   = ref(false)
  const WHATSAPP = '5511999999999' // ← Substitua pelo número real

  const totalItems = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
  )

  const formattedTotal = computed(() =>
    totalPrice.value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  )

  function addItem(product, size) {
    const toast    = useToastStore()
    const key      = `${product.id}-${size}`
    const existing = items.value.find(i => i.key === key)

    if (existing) {
      existing.quantity++
    } else {
      items.value.push({
        key,
        id:      product.id,
        name:    product.name,
        team:    product.team,
        version: product.version,
        price:   product.price,
        image:   product.image_url,
        size,
        quantity: 1,
      })
    }

    toast.show(`${product.team} (${size}) adicionada ao carrinho!`)
    isOpen.value = true
  }

  function removeItem(key) {
    items.value = items.value.filter(i => i.key !== key)
  }

  function updateQuantity(key, delta) {
    const item = items.value.find(i => i.key === key)
    if (!item) return
    const next = item.quantity + delta
    if (next < 1) {
      removeItem(key)
    } else {
      item.quantity = next
    }
  }

  function clearCart() {
    items.value = []
  }

  function checkoutWhatsApp() {
    if (!items.value.length) return

    const lines = items.value.map(i => {
      const subtotal = (i.price * i.quantity).toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL',
      })
      return `• ${i.name}\n  Tamanho: *${i.size}* | Qtd: *${i.quantity}* | ${subtotal}`
    })

    const message = [
      '🏆 *Pedido — THAI SHIRTS*',
      '━━━━━━━━━━━━━━━━━━━━━━',
      ...lines,
      '━━━━━━━━━━━━━━━━━━━━━━',
      `💰 *Total: ${formattedTotal.value}*`,
      '',
      'Olá! Gostaria de finalizar este pedido. 😊',
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank')
  }

  function quickBuyWhatsApp(product, size) {
    const price = product.price.toLocaleString('pt-BR', {
      style: 'currency', currency: 'BRL',
    })
    const message = [
      `🏆 *THAI SHIRTS — Compra Rápida*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👕 *${product.name}*`,
      `📏 Tamanho: *${size}*`,
      `💰 Valor: *${price}*`,
      ``,
      `Olá! Tenho interesse nesta camisa. 😊`,
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return {
    items, isOpen, totalItems, totalPrice, formattedTotal,
    addItem, removeItem, updateQuantity, clearCart,
    checkoutWhatsApp, quickBuyWhatsApp,
  }
})
