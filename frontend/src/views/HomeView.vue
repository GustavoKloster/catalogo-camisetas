<template>
<<<<<<< HEAD
  <div class="min-h-screen bg-brand-dark text-white flex flex-col">

    <!-- HERO -->
    <section class="bg-brand-surface border-b border-brand-border py-16 md:py-24 text-center px-4 shadow-sm relative overflow-hidden">
      <div class="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full w-96 h-96 mx-auto top-10 pointer-events-none"></div>

=======
  <!-- Main container da HomeView -->
  <div class="min-h-screen bg-brand-dark text-white flex flex-col">
    
    <!-- Hero / Banner Superior -->
    <section class="bg-brand-surface border-b border-brand-border py-16 md:py-24 text-center px-4 shadow-sm relative overflow-hidden">
      <!-- Elemento de fundo sutil para dar destaque -->
      <div class="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full w-96 h-96 mx-auto top-10 pointer-events-none"></div>
      
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          Catálogo Premium <span class="text-brand-gold">1:1</span>
        </h1>
<<<<<<< HEAD

=======
        
        <!-- COPY ATUALIZADO: Foco em instigar a compra da 2ª peça -->
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
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
<<<<<<< HEAD
          <p class="text-sm text-gray-500 mt-4 italic">
=======
          <p class="text-sm  text-gray-500 mt-4 italic"> 
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
            Desconto aplicado direto no WhatsApp.
          </p>
        </div>
      </div>
    </section>

<<<<<<< HEAD
    <!-- CARROSSÉIS -->
    <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">

      <!-- 1. Mais Vendidas -->
      <CarouselSection
        title="🏆 Mais Vendidas"
        subtitle="As queridinhas dos clientes"
        badge="TOP"
        :products="bestSellers"
      />

      <!-- 2. Seleções Copa 26/27 -->
      <CarouselSection
        title="🌍 Seleções — Copa 26/27"
        subtitle="Versões oficiais das principais seleções"
        badge="Novidade"
        :products="worldCupProducts"
      />

      <!-- 3. Retrô -->
      <CarouselSection
        title="📼 Clássicos Retrô"
        subtitle="Ícones que atravessaram gerações"
        badge="Retrô"
        :products="retroProducts"
      />

      <!-- 4. Brasileirão -->
      <CarouselSection
        title="🇧🇷 Brasileirão"
        subtitle="Os mantos do nosso futebol"
        badge="Série A"
        :products="brasileiraoProducts"
      />

      <!-- BANNER CTA -->
      <section class="rounded-2xl bg-brand-surface border border-brand-border overflow-hidden relative">
        <div class="absolute inset-0 bg-brand-gold/5 pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-10">
          <div>
            <p class="text-xs text-brand-gold font-black uppercase tracking-widest mb-2">Explore mais</p>
            <h3 class="text-2xl md:text-3xl font-black">Quer ver por categoria?</h3>
            <p class="text-gray-400 mt-1 text-sm">Navegue por seleções, clubes brasileiros e retrôs em páginas dedicadas.</p>
          </div>
          <div class="flex flex-wrap gap-3 shrink-0">
            <RouterLink
              v-for="cat in categories"
              :key="cat.slug"
              :to="`/categoria/${cat.slug}`"
              class="px-5 py-2.5 rounded-xl border border-brand-border bg-brand-dark hover:border-brand-gold hover:text-brand-gold transition-all duration-200 font-bold text-sm whitespace-nowrap"
            >
              {{ cat.icon }} {{ cat.name }}
            </RouterLink>
          </div>
        </div>
      </section>
=======
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
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67

    </main>
  </div>
</template>

<<<<<<< HEAD
<script setup lang="ts">
import { ref } from 'vue'
import CarouselSection from '@/components/CarouselSection.vue'

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

interface Category {
  slug: string
  name: string
  icon: string
}

const categories = ref<Category[]>([
  { slug: 'selecoes',    name: 'Seleções',    icon: '🌍' },
  { slug: 'retro',       name: 'Retrô',       icon: '📼' },
  { slug: 'brasileirao', name: 'Brasileirão', icon: '🇧🇷' },
])

// 1. Mais Vendidas — já populado com as camisas do Brasil
const bestSellers = ref<Product[]>([
=======
<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

// Nosso "Banco de Dados" provisório. 
const brazilProducts = ref([
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
  {
    id: 1,
    slug: 'camisa-brasil-26-27-jogador',
    name: 'Camisa Brasil Jogador 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
<<<<<<< HEAD
    price: 179.99,
    version: 'Jogador',
    image_url: '/img/camisa_jogador_amarela.jpeg',
=======
    price: 179.99, 
    version: 'Jogador',
    image_url: '/img/camisa_jogador_amarela.jpeg' 
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
  },
  {
    id: 2,
    slug: 'camisa-brasil-26-27-torcedor',
    name: 'Camisa Brasil Torcedor 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
<<<<<<< HEAD
    price: 149.99,
    version: 'Torcedor',
    image_url: '/img/camisa_torcedor_amarela.jpeg',
=======
    price: 149.99, 
    version: 'Torcedor',
    image_url: '/img/camisa_torcedor_amarela.jpeg' 
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
  },
  {
    id: 3,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
<<<<<<< HEAD
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 4,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 5,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 6,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
])

// 2. Seleções Copa 26/27 — adicione aqui quando tiver as fotos
const worldCupProducts = ref<Product[]>([
  {
    id: 7,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 8,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 9,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 10,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 11,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 12,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
])


// 3. Retrô — adicione aqui quando tiver as fotos
const retroProducts = ref<Product[]>([
  {
    id: 13,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 14,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 15,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 16,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 17,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 18,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
])

// 4. Brasileirão — adicione aqui quando tiver as fotos
const brasileiraoProducts = ref<Product[]>([
  {
    id: 19,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 20,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 21,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 22,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 23,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
  {
    id: 24,
    slug: 'camisa-brasil-26-27-feminina',
    name: 'Camisa Brasil Feminina 26/27',
    team: 'Seleção Brasileira',
    season: '2026/2027',
    price: 149.99,
    version: 'Feminina',
    image_url: '/img/camisa_feminina_amarela.jpeg',
  },
])
</script>
=======
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
>>>>>>> 413c86821c3776cb5d7343b8517455547d5f7f67
