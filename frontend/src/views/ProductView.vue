<template>
  <div class="min-h-screen bg-brand-dark text-white flex flex-col justify-between">
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex-1 w-full">
      
      <div class="mb-8">
        <RouterLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors text-sm font-medium">
          ← Voltar para a Vitrine
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-brand-surface border border-brand-border rounded-2xl p-6 md:p-8 shadow-xl">
        
        <div class="relative aspect-square overflow-hidden bg-brand-card border border-brand-border rounded-xl flex items-center justify-center group">
          <div class="text-center p-6 select-none pointer-events-none">
            <span class="text-5xl block mb-3">👕</span>
            <p class="text-brand-gold font-bold text-lg">Espaço da Imagem</p>
            <p class="text-gray-500 text-xs mt-1">Estrutura pronta para exibir as fotos do catálogo</p>
          </div>
          
          <span class="absolute top-4 left-4 bg-brand-gold text-brand-dark font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
            {{ product.version }}
          </span>
        </div>

        <div class="flex flex-col justify-between gap-6">
          
          <div>
            <p class="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-1">
              {{ product.team }} · {{ product.season }}
            </p>
            <h1 class="text-2xl md:text-4xl font-black leading-tight mb-3">
              {{ product.name }}
            </h1>
            <p class="text-3xl font-black text-white">
              {{ formattedPrice }}
            </p>
          </div>

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

        </div>
      </div>
    </main>

    <footer class="w-full border-t border-brand-border bg-brand-surface/40 py-6 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:items-center md:justify-between text-xs text-gray-500">
        <p>© 2026 NomeDaSuaMarca. Todos os direitos reservados.</p>
        <p class="mt-2 md:mt-0">Qualidade Premium Tailandesa 1:1 · Catálogo de Exibição Direta</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const cart = useCartStore()

// Estados para monitorar o tamanho escolhido e a personalização do cliente
const selectedSize = ref(null)
const customName = ref('')
const customNumber = ref('')

// Estrutura do produto (Este objeto será alimentado dinamicamente pelas rotas do seu catálogo depois)
const product = ref({
  id: 1,
  slug: route.params.slug || 'camisa-exemplo',
  name: 'Camisa Brasil Jogador 26/27',
  team: 'Seleção Brasileira',
  season: '2026/2027',
  price: 180.00,
  version: 'Jogador', // Teste mudar para 'Torcedor' ou 'Feminina' para ver a lista de tamanhos mudar sozinha!
  image_url: ''
})

// Mapeamento exato dos tamanhos padrão por versão que você solicitou
const sizesMap = {
  'Jogador': ['P', 'M', 'G', 'GG', '2XL', '3XL'],
  'Torcedor': ['P', 'M', 'G', 'GG', '2XL', '3XL', '4XL'],
  'Feminina': ['P', 'M', 'G', 'GG']
}

// Filtra e retorna automaticamente os tamanhos corretos dependendo da versão definida no produto
const availableSizes = computed(() => {
  return sizesMap[product.value.version] || ['P', 'M', 'G', 'GG']
})

const formattedPrice = computed(() =>
  product.value.price.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL',
  })
)

// Função para injetar os dados selecionados dentro do estado global do carrinho (Pinia)
function handleAddToCart() {
  if (!selectedSize.value) {
    alert('Por favor, selecione um tamanho antes de adicionar ao carrinho!')
    return
  }
  
  // Envia ao carrinho incluindo a personalização opcional feita pelo usuário
  cart.addItem({
    ...product.value,
    chosenSize: selectedSize.value,
    customName: customName.value.trim(),
    customNumber: customNumber.value.trim()
  })
}

// Envia o usuário direto para o WhatsApp montando a string do pedido atual
function handleWhatsAppDirect() {
  if (!selectedSize.value) {
    alert('Por favor, escolha um tamanho primeiro para montar o pedido!')
    return
  }
  
  let mensagem = `Olá! Vi o catálogo e gostaria de encomendar a seguinte camisa:\n`
  mensagem += `🔹 *${product.value.name}* (${product.value.version}) - Tamanho *${selectedSize.value}*`
  
  // Adiciona a formatação de personalização apenas se o usuário preencheu algum campo
  if (customName.value.trim() || customNumber.value.trim()) {
    mensagem += `\n\n✨ *Personalização da Camisa:*`
    if (customName.value.trim()) mensagem += `\n- Nome: ${customName.value.toUpperCase()}`
    if (customNumber.value.trim()) mensagem += `\n- Número: ${customNumber.value.trim()}`
  }
  
  mensagem += `\n\nEstá disponível para fecharmos o pedido?`
  
  // Configurado temporariamente com o padrão Wa.me
  const url = `https://wa.me/5542998584051?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}
</script>
