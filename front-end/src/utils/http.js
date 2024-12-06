import axios from 'axios'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: 'http://localhost:3000',
    timeout: 12000
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  return service
}

export const request = createAxios()