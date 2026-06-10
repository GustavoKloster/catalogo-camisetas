<template>
  <header class="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 bg-brand-gold rounded-lg flex items-center justify-center
                      group-hover:scale-105 transition-transform">
            <span class="text-brand-dark text-lg font-black">⚽</span>
          </div>
          <div class="leading-tight">
            <p class="text-white font-black text-base tracking-tight">GG Imports</p>
            <p class="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">
              Qualidade Premium
            </p>
          </div>
        </RouterLink>

        <!-- Nav Desktop -->
        <nav class="hidden md:flex items-center gap-6">
          <RouterLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/?category=${cat.slug}`"
            class="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            active-class="text-brand-gold"
          >
            {{ cat.icon }} {{ cat.name }}
          </RouterLink>
        </nav>

        <!-- Cart Button -->
        <button
          @click="cart.isOpen = true"
          class="relative flex items-center gap-2 bg-brand-card border border-brand-border
                 hover:border-brand-gold/60 px-4 py-2 rounded-xl transition-all group"
        >
          <ShoppingCartIcon class="w-5 h-5 text-gray-400 group-hover:text-brand-gold transition-colors" />
          <span class="text-sm font-semibold text-white hidden sm:block">Carrinho</span>
          <span
            v-if="cart.totalItems > 0"
            class="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-xs
                   font-black w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ cart.totalItems }}
          </span>
        </button>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'
import { categoryService } from '@/services/api'

const cart       = useCartStore()
const categories = ref([])

onMounted(async () => {
  try {
    const { data } = await categoryService.getAll()
    categories.value = data.data
  } catch (err) {
    console.error('Erro ao carregar categorias:', err)
  }
})
</script>
