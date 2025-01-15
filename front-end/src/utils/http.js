import axios from 'axios'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_URL+'api',
    timeout: 12000
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  return service
}

export const request = createAxios()