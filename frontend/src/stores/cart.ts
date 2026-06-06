import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useToastStore } from './toast'

// ✅ Tipagem do produto recebido da API
interface Product {
  id:        number
  name:      string
  team:      string
  version:   string
  price:     number
  image_url: string
  slug:      string
}

// ✅ Tipagem do item dentro do carrinho
interface CartItem {
  key:      string
  id:       number
  name:     string
  team:     string
  version:  string
  price:    number
  image:    string
  size:     string
  quantity: number
}

// ✅ Utilitário para formatar moeda BRL (evita duplicação)
const formatBRL = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const useCartStore = defineStore('cart', () => {
  const items  = ref<CartItem[]>([])
  const isOpen = ref(false)

  // ✅ Número do WhatsApp lido de variável de ambiente (não expõe no código)
  const WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER as string

  const totalItems = computed<number>(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0)
  )

  const totalPrice = computed<number>(() =>
    items.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
  )

  const formattedTotal = computed<string>(() =>
    formatBRL(totalPrice.value)
  )

  function addItem(product: Product, size: string): void {
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
        // ✅ Proteção contra price null/undefined vindo da API
        price:   product.price ?? 0,
        image:   product.image_url,
        size,
        quantity: 1,
      })
    }

    toast.show(`${product.team} (${size}) adicionada ao carrinho!`)
    isOpen.value = true
  }

  function removeItem(key: string): void {
    items.value = items.value.filter(i => i.key !== key)
  }

  function updateQuantity(key: string, delta: number): void {
    const item = items.value.find(i => i.key === key)
    if (!item) return
    const next = item.quantity + delta
    if (next < 1) {
      removeItem(key)
    } else {
      item.quantity = next
    }
  }

  function clearCart(): void {
    items.value = []
  }

  function checkoutWhatsApp(): void {
    if (!items.value.length) return

    const lines = items.value.map(i => {
      const subtotal = formatBRL(i.price * i.quantity)
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

  function quickBuyWhatsApp(product: Product, size: string): void {
    // ✅ Proteção contra price null/undefined
    const price = formatBRL(product.price ?? 0)

    const message = [
      '🏆 *THAI SHIRTS — Compra Rápida*',
      '━━━━━━━━━━━━━━━━━━━━━━',
      `👕 *${product.name}*`,
      `📏 Tamanho: *${size}*`,
      `💰 Valor: *${price}*`,
      '',
      'Olá! Tenho interesse nesta camisa. 😊',
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return {
    items, isOpen, totalItems, totalPrice, formattedTotal,
    addItem, removeItem, updateQuantity, clearCart,
    checkoutWhatsApp, quickBuyWhatsApp,
  }
})