import { api } from './api'

export const deleteDevice = (id) => {
  return api.delete(`/devices/${id}`)
}
