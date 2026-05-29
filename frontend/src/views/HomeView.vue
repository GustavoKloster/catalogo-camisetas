<template>
  <!-- Main container da HomeView -->
  <div class="min-h-screen bg-brand-dark text-white flex flex-col">
    
    <!-- Hero / Banner Superior -->
    <section class="bg-brand-surface border-b border-brand-border py-16 md:py-24 text-center px-4 shadow-sm relative overflow-hidden">
      <!-- Elemento de fundo sutil para dar destaque -->
      <div class="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full w-96 h-96 mx-auto top-10 pointer-events-none"></div>
      
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          Catálogo Premium <span class="text-brand-gold">1:1</span>
        </h1>
        
        <!-- COPY ATUALIZADO: Foco em instigar a compra da 2ª peça -->
        <div class="max-w-2xl mx-auto space-y-3 mt-6">
          <p class="text-xl md:text-2xl font-bold text-brand-gold">
            🔥 DUPLA DE ATAQUE FORMADA! 🔥
          </p>
          <p class="text-gray-300 text-lg">
            Vai levar o manto do seu time? Leve o segundo pagando muito menos!
          </p>
          <p class="text-white font-medium bg-brand-gold/10 inline-block px-4 py-2 rounded-lg border border-brand-gold/20">
            Na compra de qualquer camisa, a <strong class="text-brand-gold">2ª unidade sai com 30% DE DESCONTO!</strong> 😱
          </p>
          <p class="text-sm  text-gray-500 mt-4 italic"> 
            Desconto aplicado direto no WhatsApp.
          </p>
        </div>
      </div>
    </section>

    <!-- Seção da Vitrine / Carrossel -->
    <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      
      <!-- Cabeçalho da Seção -->
      <div class="mb-8 flex items-end justify-between border-b border-brand-border/50 pb-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-black flex items-center gap-2">
            <span class="text-brand-gold">🇧🇷</span> Destaques do Brasil
          </h2>
          <p class="text-sm text-gray-500 mt-1">Conheça as versões disponíveis</p>
        </div>
        <!-- Aviso de deslizar que aparece só em telas maiores -->
        <span class="hidden md:inline-block text-xs text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
          Deslize para ver →
        </span>
      </div>

      <!-- Carrossel (Scroll Horizontal com CSS) -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-2 hide-scrollbar items-stretch">
        
        <!-- Loop puxando os produtos da nossa lista -->
        <div 
          v-for="product in brazilProducts" 
          :key="product.id"
          class="snap-start shrink-0 w-[280px] sm:w-[320px] flex flex-col"
        >
          <!-- Seu componente ProductCard! -->
          <ProductCard :product="product" class="h-full shadow-lg" />
        </div>

      </div>

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

// Nosso "Banco de Dados" provisório. 
const brazilProducts = ref([
  {
    id: 1,
    slug: 'camisa-brasil-26-27-jogador',
    name: 'Camisa Brasil Jogador 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 179.99, 
    version: 'Jogador',
    image_url: '/img/camisa_jogador_amarela.jpeg' 
  },
  {
    id: 2,
    slug: 'camisa-brasil-26-27-torcedor',
    name: 'Camisa Brasil Torcedor 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99, 
    version: 'Torcedor',
    image_url: '/img/camisa_torcedor_amarela.jpeg' 
  },
  {
    id: 3,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99, 
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg' 
  }
])
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
