import axios from 'axios'

const service = axios.create({
  timeout: 8000,
  withCredentials: false
})

service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
service.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  return Promise.reject(error)
})

export default service