import { api } from './api'

export const updateDevice = (data) => {
  return api.put(`/devices/${data.id}`, data)
}
