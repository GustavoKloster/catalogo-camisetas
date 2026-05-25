<template>
  <div class="min-h-screen bg-brand-dark">

    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <RouterView />

    <!-- Cart Drawer (global) -->
    <CartDrawer />

    <!-- Toast Notification -->
    <Transition name="toast">
      <div
        v-if="toast.visible"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]
               bg-brand-gold text-brand-dark px-6 py-3 rounded-2xl
               font-bold text-sm shadow-2xl flex items-center gap-2"
      >
        <span>✅</span>
        {{ toast.message }}
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import CartDrawer from '@/components/CartDrawer.vue'
import { useToastStore } from '@/stores/toast'

const toast = useToastStore()
</script>

<style>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}
</style>
