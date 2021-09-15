import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const defaultConfig: AxiosRequestConfig = {
  method: 'GET',
  url: '/todos?_start=10&_limit=10',
}

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
})

function makeRequest(config: AxiosRequestConfig = defaultConfig) {
  return instance(config)
    .then((res) => res.data)
    .catch((res) => alert(JSON.stringify(res)))
}

export { makeRequest }
