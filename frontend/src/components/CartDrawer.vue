<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="cart.isOpen"
      class="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
      @click="cart.isOpen = false"
    />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide">
    <aside
      v-if="cart.isOpen"
      class="fixed right-0 top-0 h-full w-full max-w-md bg-brand-surface
             border-l border-brand-border z-50 flex flex-col shadow-2xl"
    >
      <!-- Header do Drawer -->
      <div class="flex items-center justify-between p-5 border-b border-brand-border">
        <div>
          <h2 class="text-white font-black text-xl">Seu Carrinho</h2>
          <p class="text-gray-400 text-sm">{{ cart.totalItems }} item(s)</p>
        </div>
        <button
          @click="cart.isOpen = false"
          class="w-9 h-9 rounded-xl bg-brand-card border border-brand-border
                 flex items-center justify-center hover:border-red-500/60
                 hover:text-red-400 transition-all text-gray-400"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>

      <!-- Lista de Itens -->
      <div class="flex-1 overflow-y-auto p-4 space-y-3">

        <!-- Carrinho Vazio -->
        <div v-if="!cart.items.length" class="flex flex-col items-center justify-center h-full gap-4 text-center">
          <div class="w-20 h-20 rounded-full bg-brand-card border border-brand-border
                      flex items-center justify-center text-4xl">
            🛒
          </div>
          <div>
            <p class="text-white font-bold text-lg">Carrinho vazio</p>
            <p class="text-gray-400 text-sm mt-1">Adicione camisas para continuar</p>
          </div>
          <button
            @click="cart.isOpen = false"
            class="btn-primary mt-2"
          >
            Ver Catálogo
          </button>
        </div>

        <!-- Itens -->
        <TransitionGroup name="list" tag="div" class="space-y-3">
          <div
            v-for="item in cart.items"
            :key="item.key"
            class="flex gap-3 bg-brand-card border border-brand-border
                   rounded-xl p-3 group"
          >
            <!-- Imagem -->
            <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-brand-surface">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <p class="text-white font-bold text-sm leading-tight truncate">
                {{ item.name }}
              </p>
              <p class="text-brand-gold text-xs font-semibold mt-0.5">
                Tamanho: {{ item.size }}
              </p>
              <p class="text-gray-300 font-bold text-base mt-1">
                {{ (item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
              </p>

              <!-- Controle de Quantidade -->
              <div class="flex items-center gap-2 mt-2">
                <button
                  @click="cart.updateQuantity(item.key, -1)"
                  class="w-7 h-7 rounded-lg bg-brand-surface border border-brand-border
                         flex items-center justify-center text-gray-300
                         hover:border-brand-gold/60 hover:text-brand-gold transition-all
                         font-bold text-lg leading-none"
                >
                  −
                </button>
                <span class="text-white font-bold text-sm w-5 text-center">
                  {{ item.quantity }}
                </span>
                <button
                  @click="cart.updateQuantity(item.key, 1)"
                  class="w-7 h-7 rounded-lg bg-brand-surface border border-brand-border
                         flex items-center justify-center text-gray-300
                         hover:border-brand-gold/60 hover:text-brand-gold transition-all
                         font-bold text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Remover -->
            <button
              @click="cart.removeItem(item.key)"
              class="self-start text-gray-600 hover:text-red-400 transition-colors p-1"
            >
              <TrashIcon class="w-4 h-4" />
            </button>
          </div>
        </TransitionGroup>
      </div>

      <!-- Footer com Total e Checkout -->
      <div v-if="cart.items.length" class="p-5 border-t border-brand-border space-y-3">

        <!-- Total -->
        <div class="flex items-center justify-between">
          <span class="text-gray-400 font-medium">Total do Pedido</span>
          <span class="text-white font-black text-2xl">{{ cart.formattedTotal }}</span>
        </div>

        <!-- Botão Checkout WhatsApp -->
        <button
          @click="cart.checkoutWhatsApp()"
          class="btn-whatsapp w-full py-4 text-base"
        >
          <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
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
          Finalizar pelo WhatsApp
        </button>

        <!-- Limpar Carrinho -->
        <button
          @click="cart.clearCart()"
          class="w-full text-gray-500 hover:text-red-400 text-sm font-medium
                 transition-colors py-1"
        >
          Limpar carrinho
        </button>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { XMarkIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.35s cubic-bezier(.4,0,.2,1); }
.slide-enter-from, .slide-leave-to       { transform: translateX(100%); }

.list-enter-active, .list-leave-active { transition: all 0.25s ease; }
.list-enter-from                       { opacity: 0; transform: translateX(20px); }
.list-leave-to                         { opacity: 0; transform: translateX(-20px); }
</style>
