<script setup>
// Função para o botão "Ver Catálogo" rolar a tela suavemente até a vitrine
const scrollToCatalog = () => {
  const catalogSection = document.getElementById('catalogo');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <main>
    <section class="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark border-b border-brand-border">
      <div class="absolute inset-0 opacity-5 pointer-events-none select-none"
           style="background-image: repeating-linear-gradient(
             45deg, #F5A623 0px, #F5A623 1px,
             transparent 1px, transparent 60px
           )">
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 mb-4">
            <span class="badge bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs px-3 py-1 rounded-full">
              🏆 Copa do Mundo 2026
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white leading-tight">
            Camisas Thai
            <span class="text-brand-gold block">Premium</span>
          </h1>
          <p class="text-gray-400 text-lg mt-4 leading-relaxed max-w-lg">
            Versões de jogador, retrô e seleções. Qualidade tailandesa de alto nível,
            entregue direto para você.
          </p>
          <div class="flex flex-wrap gap-3 mt-8">
            <button
              @click="scrollToCatalog"
              class="btn-primary bg-brand-gold text-brand-dark font-bold px-8 py-3 text-base rounded-lg hover:bg-yellow-500 transition"
            >
              Ver Catálogo
            </button>
            <a
              href="https://wa.me/5542999999999"
              target="_blank"
              class="btn-whatsapp bg-[#25D366] text-white font-bold px-8 py-3 text-base rounded-lg flex items-center gap-2 hover:bg-[#1ebd5b] transition"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div class="relative border-t border-brand-border bg-brand-surface/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-brand-border/30">
            <div class="flex flex-col items-center">
              <span class="text-brand-gold font-bold text-xl md:text-2xl mb-1">1:1</span>
              <span class="text-gray-400 text-xs uppercase tracking-wider">Padrão Original</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-brand-gold font-bold text-xl md:text-2xl mb-1">Tecido</span>
              <span class="text-gray-400 text-xs uppercase tracking-wider">Respirável</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-brand-gold font-bold text-xl md:text-2xl mb-1">P ao GG</span>
              <span class="text-gray-400 text-xs uppercase tracking-wider">Tamanhos</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-brand-gold font-bold text-xl md:text-2xl mb-1">Ponta Grossa</span>
              <span class="text-gray-400 text-xs uppercase tracking-wider">Retirada Local</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="catalogo" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-bold text-white border-l-4 border-brand-gold pl-4">Coleção 26/27</h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        
        <div class="col-span-full py-20 text-center border-2 border-dashed border-brand-border rounded-xl">
          <p class="text-brand-gold text-lg mb-2">A vitrine está pronta!</p>
          <p class="text-gray-500 text-sm">Os componentes de camisa serão renderizados aqui.</p>
        </div>

      </div>
    </section>

  </main>
</template>