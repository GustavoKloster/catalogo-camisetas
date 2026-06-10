<template>
  <div class="min-h-screen bg-brand-dark text-white flex flex-col justify-between">
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex-1 w-full">
      
      <div class="mb-8">
        <RouterLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors text-sm font-medium">
          ← Voltar para a Vitrine
        </RouterLink>
      </div>

      <!-- Estrutura de Grid para dividir Imagem (Esquerda) e Detalhes (Direita) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- ================= COLUNA ESQUERDA: SLIDER ================= -->
        <div class="relative w-full h-125 flex items-center justify-center bg-[#1e1e1e] rounded-xl overflow-hidden group border border-zinc-800">
          
          <!-- Badge da Versão -->
          <div class="absolute top-4 left-4 z-10 bg-yellow-400 text-black px-3 py-1 font-bold text-xs rounded-full uppercase">
            {{ product.version }}
          </div>

          <!-- Imagem Principal -->
          <img 
            :src="product.images[currentImageIndex]" 
            :alt="product.name" 
            class="object-contain w-full h-full transition-all duration-300"
          />

          <!-- Botão Voltar -->
          <button 
            v-if="product.images.length > 1" 
            @click="prevImage" 
            class="absolute left-3 p-2 bg-black/60 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <!-- Botão Avançar -->
          <button 
            v-if="product.images.length > 1" 
            @click="nextImage" 
            class="absolute right-3 p-2 bg-black/60 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <!-- Indicadores (Bolinhas) -->
          <div 
            v-if="product.images.length > 1" 
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
          >
            <button 
              v-for="(img, idx) in product.images" 
              :key="idx" 
              @click="setImageUrl(idx)" 
              :class="[
                'w-2.5 h-2.5 rounded-full transition-colors', 
                currentImageIndex === idx ? 'bg-yellow-400 w-4' : 'bg-gray-500 hover:bg-gray-400'
              ]"
            ></button>
          </div>
        </div>

        <!-- ================= COLUNA DIREITA: DETALHES ================= -->
        <div class="flex flex-col gap-6">
          
          <!-- Título e Preço -->
          <div>
            <h2 class="text-brand-gold text-sm font-bold uppercase tracking-wider mb-1">
              {{ product.team }} · {{ product.season }}
            </h2>
            <h1 class="text-3xl md:text-4xl font-black mb-4">{{ product.name }}</h1>
            <p class="text-3xl font-bold text-white">{{ formattedPrice }}</p>
          </div>

          <!-- Tamanhos -->
          <div class="border-t border-brand-border/50 pt-4">
            <div class="flex items-center justify-between mb-2">
              <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Selecione o Tamanho
              </p>
              <span class="text-[11px] text-brand-gold/80 bg-brand-gold/10 px-2 py-0.5 rounded-md font-semibold border border-brand-gold/20">
                Tabela {{ product.version }}
              </span>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <button
                v-for="size in availableSizes"
                :key="size"
                @click="selectedSize = size"
                class="w-12 h-12 rounded-xl border text-sm font-bold transition-all duration-150 flex items-center justify-center"
                :class="selectedSize === size
                  ? 'bg-brand-gold text-brand-dark border-brand-gold scale-105 shadow-lg font-black'
                  : 'bg-brand-card border-brand-border text-gray-300 hover:border-brand-gold/60'"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Personalização -->
          <div class="border-t border-brand-border/50 pt-4">
            <h3 class="text-sm text-brand-gold font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              ✨ Personalize sua Camisa
            </h3>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <input
                  v-model="customName"
                  type="text"
                  maxlength="15"
                  placeholder="Nome"
                  class="w-full bg-brand-card border border-brand-border text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-600"
                />
                <span class="text-[11px] text-gray-500 font-medium pl-1">
                  + R$ 15,00
                </span>
              </div>

              <div class="flex flex-col gap-1.5">
                <input
                  v-model="customNumber"
                  type="text"
                  maxlength="3"
                  placeholder="Número"
                  class="w-full bg-brand-card border border-brand-border text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-600"
                />
                <span class="text-[11px] text-gray-500 font-medium pl-1">
                  + R$ 15,00
                </span>
              </div>
            </div>
          </div>

          <!-- Botões -->
          <div class="border-t border-brand-border/50 pt-5 flex flex-col gap-3">
            <button
              @click="handleAddToCart"
              class="w-full bg-brand-gold text-brand-dark hover:bg-yellow-500 font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 text-base shadow-lg shadow-brand-gold/10"
            >
              Adicionar ao Carrinho
            </button>

            <button
              @click="handleWhatsAppDirect"
              class="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 text-base"
            >
              Pedir Direto via WhatsApp
            </button>
          </div>

        </div> <!-- Fim da Coluna Direita -->
      </div> <!-- Fim do Grid -->

    </main>

    <footer class="w-full border-t border-brand-border bg-brand-surface/40 py-6 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:items-center md:justify-between text-xs text-gray-500">
        <p>© 2026 NomeDaSuaMarca. Todos os direitos reservados.</p>
        <p class="mt-2 md:mt-0">Qualidade Premium Tailandesa 1:1 · Catálogo de Exibição Direta</p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const cart = useCartStore()

const selectedSize = ref<string | null>(null)
const customName = ref('')
const customNumber = ref('')

const product = ref({
  id: 1,
  name: 'Camisa Brasil Jogador 26/27',
  team: 'Seleção Brasileira',
  season: '2026/2027',
  price: 179.99,
  version: 'Jogador',
  images: [
    '/img/camisa_jogador_amarela.jpeg',
    '/img/camisa_jogador_amarela2.jpeg'
  ],
})

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % product.value.images.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + product.value.images.length) % product.value.images.length;
};

const setImageUrl = (index: number) => {
  currentImageIndex.value = index;
};

const sizesMap: Record<string, string[]> = {
  'Jogador': ['P', 'M', 'G', 'GG', '2XL', '3XL'],
  'Torcedor': ['P', 'M', 'G', 'GG', '2XL', '3XL', '4XL'],
  'Feminina': ['P', 'M', 'G', 'GG']
}

const availableSizes = computed(() => {
  return sizesMap[product.value.version] || ['P', 'M', 'G', 'GG']
})

const formattedPrice = computed(() =>
  product.value.price.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL',
  })
)

function handleAddToCart() {
  if (!selectedSize.value) {
    alert('Por favor, selecione um tamanho antes de adicionar ao carrinho!')
    return
  }
  
  cart.addItem({
    ...product.value,
    chosenSize: selectedSize.value,
    customName: customName.value.trim(),
    customNumber: customNumber.value.trim()
  } as any, 1)

function handleWhatsAppDirect() {
  if (!selectedSize.value) {
    alert('Por favor, escolha um tamanho primeiro para montar o pedido!')
    return
  }
  
  let mensagem = `Olá! Vi o catálogo e gostaria de encomendar a seguinte camisa:\n`
  mensagem += `🔹 *${product.value.name}* (${product.value.version}) - Tamanho *${selectedSize.value}*\n`
  
  if (customName.value.trim() || customNumber.value.trim()) {
    mensagem += `\n✨ *Personalização da Camisa:*`
    if (customName.value.trim()) mensagem += `\n- Nome: ${customName.value.toUpperCase()}`
    if (customNumber.value.trim()) mensagem += `\n- Número: ${customNumber.value.trim()}\n`
  }
  
  mensagem += `\nEstá disponível para fecharmos o pedido?`
  
  const url = `https://wa.me/5542998584051?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}
</script>