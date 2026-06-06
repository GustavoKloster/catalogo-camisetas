/// <reference types="vite/client" />

// Diz ao TypeScript que arquivos .vue são módulos válidos
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}