import { api } from './api'

export const getDevices = (params) => {
  return api.get('/devices', { params: params })
}
