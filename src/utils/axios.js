import axios from 'axios'
import { getLocalAccessToken } from './localStorage'
export const customFetch = axios.create({
  baseURL: 'http://14.225.254.190:3000/api',
})
customFetch.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
      // config.headers['x-access-token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
export const normalFetch = axios.create({
  baseURL: 'http://14.225.254.190:3000/api',
})
