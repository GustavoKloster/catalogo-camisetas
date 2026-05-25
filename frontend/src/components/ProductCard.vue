<template>
  <article class="card group flex flex-col cursor-pointer">

    <!-- Imagem 1:1 -->
    <RouterLink :to="`/produto/${product.slug}`" class="block">
      <div class="relative aspect-square overflow-hidden bg-brand-surface">
        <img
          :src="product.image_url"
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-105
                 transition-transform duration-500"
          loading="lazy"
        />

        <!-- Badges -->
        <div class="absolute top-3 left-3 flex flex-col gap-1.5">
          <span v-if="product.featured" class="badge bg-brand-gold text-brand-dark">
            ⭐ Destaque
          </span>
          <span class="badge" :class="versionClass">
            {{ product.version }}
          </span>
        </div>
      </div>
    </RouterLink>

    <!-- Conteúdo do Card -->
    <div class="flex flex-col flex-1 p-4 gap-3">

      <!-- Nome e Temporada -->
      <div>
        <p class="text-xs text-brand-gold font-semibold uppercase tracking-widest">
          {{ product.team }} · {{ product.season }}
        </p>
        <h3 class="text-white font-bold text-base leading-tight mt-0.5">
          {{ product.name }}
        </h3>
      </div>

      <!-- Preço -->
      <p class="text-2xl font-black text-white">
        {{ formattedPrice }}
      </p>

      <!-- Seletor de Tamanho -->
      <div>
        <p class="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">
          Tamanho
        </p>
        <div class="flex gap-2 flex-wrap">
          <button
            v-for="size in product.sizes"
            :key="size"
            @click="selectedSize = size"
            class="w-10 h-10 rounded-lg border text-sm font-bold transition-all duration-150"
            :class="selectedSize === size
              ? 'bg-brand-gold text-brand-dark border-brand-gold scale-105'
              : 'bg-brand-surface border-brand-border text-gray-300 hover:border-brand-gold/60'"
          >
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Aviso de tamanho não selecionado -->
      <p v-if="showSizeWarning" class="text-red-400 text-xs font-semibold -mt-1">
        ⚠️ Selecione um tamanho
      </p>

      <!-- Botões de Ação -->
      <div class="flex flex-col gap-2 mt-auto pt-1">

        <!-- Adicionar ao Carrinho -->
        <button @click="handleAddToCart" class="btn-primary w-full flex items-center justify-center gap-2">
          <ShoppingCartIcon class="w-4 h-4" />
          Adicionar ao Carrinho
        </button>

        <!-- Comprar via WhatsApp -->
        <button @click="handleWhatsApp" class="btn-whatsapp w-full">
          <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148
                     -.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075
                     -.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
                     -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174
                     .198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612
                     -.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01
                     -.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462
                     1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306
                     1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758
                     -.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272
                     -.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378
                     l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51
                     -5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988
                     2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885
                     9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335
                     .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a
                     11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893
                     -11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar via WhatsApp
        </button>

      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: { type: Object, required: true },
})

const cart         = useCartStore()
const selectedSize = ref(null)
const showSizeWarning = ref(false)

const formattedPrice = computed(() =>
  props.product.price.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL',
  })
)

const versionClass = computed(() => ({
  'Jogador': 'bg-blue-600/80 text-white',
  'Retrô':   'bg-purple-600/80 text-white',
  'Seleção': 'bg-brand-green/80 text-white',
}[props.product.version] ?? 'bg-gray-600/80 text-white'))

function validateSize() {
  if (!selectedSize.value) {
    showSizeWarning.value = true
    setTimeout(() => { showSizeWarning.value = false }, 2000)
    return false
  }
  return true
}

function handleAddToCart() {
  if (!validateSize()) return
  cart.addItem(props.product, selectedSize.value)
}

function handleWhatsApp() {
  if (!validateSize()) return
  cart.quickBuyWhatsApp(props.product, selectedSize.value)
}
</script>
