import * as axios from 'axios'

export default class Api {
  constructor() {
    this.client = null
    this.api_url = process.env.REACT_APP_API_ENDPOINT
  }

  init = () => {
    const headers = {
      Accept: 'application/json'
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers
    })

    return this.client
  }

  getDevices = (params) => {
    return this.init().get('/devices', { params: params })
  }

  addNewDevice = (data) => {
    return this.init().post('/devices', data)
  }

  updateDevice = (data) => {
    return this.init().put(`/devices/${data.id}`, data)
  }
}
