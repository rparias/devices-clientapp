import { api } from './api'

export const addNewDevice = (data) => {
  return api.post('/devices', data)
}
