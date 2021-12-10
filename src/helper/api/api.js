import * as axios from 'axios'

const headers = {
  Accept: 'application/json'
}

const apiUrl = process.env.REACT_APP_API_ENDPOINT

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 31000,
  headers: headers
})
