<template>
  <section>
    <!-- Cabeçalho -->
    <div class="mb-8 flex items-end justify-between border-b border-brand-border/50 pb-4">
      <div>
        <h2 class="text-2xl md:text-3xl font-black">{{ title }}</h2>
        <p v-if="subtitle" class="text-sm text-gray-500 mt-1">{{ subtitle }}</p>
      </div>
      <div class="flex items-center gap-2">
        <!-- Setas de navegação -->
        <button
          v-if="products.length"
          @click="scroll(-1)"
          class="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-brand-border bg-brand-surface hover:border-brand-gold hover:text-brand-gold transition-all duration-200 text-gray-400"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          v-if="products.length"
          @click="scroll(1)"
          class="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-brand-border bg-brand-surface hover:border-brand-gold hover:text-brand-gold transition-all duration-200 text-gray-400"
          aria-label="Próximo"
        >
          ›
        </button>
        <span
          v-if="badge"
          class="text-xs text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20"
        >
          {{ badge }}
        </span>
      </div>
    </div>

    <!-- Estado vazio -->
    <div
      v-if="!products.length"
      class="flex items-center justify-center py-16 text-gray-600 border border-dashed border-brand-border rounded-2xl"
    >
      <span class="text-4xl mr-3">👕</span>
      <p class="font-medium">Em breve — novas camisas chegando!</p>
    </div>

    <!-- Carrossel -->
    <div class="relative" v-else>
      <div
        ref="track"
        class="flex gap-6 pb-4 pt-2 overflow-x-auto scroll-smooth"
        style="-ms-overflow-style: none; scrollbar-width: none;"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="shrink-0 w-[260px] sm:w-[300px] flex flex-col"
        >
          <ProductCard :product="product" class="h-full shadow-lg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

interface Product {
  id:        number
  slug:      string
  name:      string
  team:      string
  season:    string
  price:     number
  version:   string
  image_url: string
}

defineProps<{
  title:     string
  subtitle?: string
  badge?:    string
  products:  Product[]
}>()

const track = ref<HTMLElement | null>(null)

function scroll(dir: 1 | -1) {
  if (!track.value) return
  const cardWidth = 300 + 24 // largura do card + gap
  track.value.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' })
}
</script>

<style scoped>
div[ref="track"]::-webkit-scrollbar {
  display: none;
}
</style>