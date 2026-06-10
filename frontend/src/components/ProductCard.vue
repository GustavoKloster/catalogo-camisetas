<template>
  <div class="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 group flex flex-col h-full shadow-lg">
    
    <RouterLink :to="`/produto/${product.slug}`" class="flex flex-col h-full cursor-pointer">
      
      <div class="relative aspect-square overflow-hidden bg-brand-card flex items-center justify-center border-b border-brand-border/50">
        
        <img v-if="product.image_url" :src="product.image_url" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        
        <div v-else class="text-center select-none group-hover:scale-110 transition-transform duration-500">
          <span class="text-5xl block mb-2 opacity-80">👕</span>
          <span class="text-xs font-medium text-gray-500 tracking-wider">Ver Detalhes</span>
        </div>
        
        <span class="absolute top-3 left-3 bg-brand-gold text-brand-dark font-black px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider shadow-md">
          {{ product.version }}
        </span>
      </div>

      <div class="p-4 md:p-5 flex flex-col flex-1 justify-between">
        <div>
          <p class="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-1 truncate">
            {{ product.team }}
          </p>
          <h3 class="text-sm md:text-base font-black text-white leading-snug mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors">
            {{ product.name }}
          </h3>
        </div>
        
        <div class="mt-3 flex flex-col">
  <!-- Parte de cima: Preço Antigo + Etiqueta de Desconto -->
           <div v-if="product.old_price" class="flex items-center gap-2 mb-1">
           <span class="text-sm font-medium text-gray-500 line-through">
      R$ {{ product.old_price.toFixed(2).replace('.', ',') }}
        </span>
    <!-- Etiqueta vermelha para criar senso de urgência -->
           <span class="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
             Oferta
        </span>
   </div>
  
  <!-- Parte de baixo: Preço Atual em Destaque Máximo -->
  <span class="text-2xl font-black text-yellow-400 leading-none">
    R$ {{ product.price.toFixed(2).replace('.', ',') }}
  </span>
</div>
      </div>
      
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Recebe os dados do produto passados pela HomeView
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Formata o valor numérico para a moeda Real (R$)
const formattedPrice = computed(() => {
  const price = props.product.price ?? 0
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
})
</script>
