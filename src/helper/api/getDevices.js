import { api } from './api'

export const getDevices = (params) => {
  console.log({ api })
  return api.get('/devices', { params: params })
}
