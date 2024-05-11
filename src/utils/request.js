import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

// 创建axios实例 （基础配置）
const service = axios.create({
  baseURL: '/api', // 基地址，请求接口的时候可以不用加 /api
  timeout: 10000 // 如果10秒没有反应，报错
})

// 请求拦截器 （注入token），在请求的时候进行的操作
service.interceptors.request.use((config) => {
  if (store.state.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}` // 在请求拦截器中配置了token，使用其他接口的时候不用再次写token的配置
  }
  return config
}, (error) => {
  return Promise.reject(error) // 错误终止
})

// 响应拦截器，在返回数据的时候进行的操作
service.interceptors.response.use((response) => {
  const { data, message, success } = response.data // 解构出接口返回的data, message, success
  if (success) {
    return data // 返回的数据中，如果是成功信息，返回data
  } else {
    return Promise.reject(new Error(message)) // 如果是错误信息，终止
  }
}, (error) => {
  Message({ type: 'error', message: error.message }) // 错误，发送提示
  return Promise.reject(error) // 终止
})

export default service
