import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

export const productService = {
  getAll:    (params = {}) => api.get('/products', { params }),
  getBySlug: (slug)        => api.get(`/products/${slug}`),
}

export const categoryService = {
  getAll: () => api.get('/categories'),
}

export default api
