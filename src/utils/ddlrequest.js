import axios from 'axios'
// import store from '@/store'
import { Message } from 'element-ui'

// 创建axios实例 （基础配置）
const service = axios.create({
  baseURL: '/ddl', // 基地址，请求接口的时候可以不用加 /api
  timeout: 10000 // 如果10秒没有反应，报错
})

// 响应拦截器，在返回数据的时候进行的操作
service.interceptors.response.use((response) => {
  const { code, data, msg } = response.data // 解构出接口返回的data, message, success
  if (code === 1) {
    return data // 返回的数据中，如果是成功信息，返回data
  } else {
    return Promise.reject(new Error(msg)) // 如果是错误信息，终止
  }
}, (error) => {
  Message({ type: 'error', message: error.message }) // 错误，发送提示
  return Promise.reject(error) // 终止
})

export default service
