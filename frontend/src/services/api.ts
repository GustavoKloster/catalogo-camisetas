import axios from 'axios'

// ✅ Tipagem das respostas da API
export interface Product {
  id:        number
  name:      string
  team:      string
  version:   string
  price:     number
  image_url: string
  slug:      string
}

export interface Category {
  id:   number
  name: string
  slug: string
  icon: string
}

export interface PaginatedResponse<T> {
  data:         T[]
  current_page: number
  last_page:    number
  total:        number
}

export interface ProductFilters {
  category?: string
  search?:   string
  page?:     number
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

export const productService = {
  getAll:    (params: ProductFilters = {}) =>
    api.get<PaginatedResponse<Product>>('/products', { params }),

  getBySlug: (slug: string) =>
    api.get<{ data: Product }>(`/products/${slug}`),
}

export const categoryService = {
  getAll: () => api.get<PaginatedResponse<Category>>('/categories'),
}

export default api