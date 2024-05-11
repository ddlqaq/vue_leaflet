// token数据持久化
import Cookies from 'js-cookie'

// 约定通用键名
const TokenKey = 'zdl_leaflet_token'

// 从本地浏览器得到token
export function getToken () {
  return Cookies.get(TokenKey)
}

// 传入token，并设置到本地浏览器
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

// 移除本地浏览器得到token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
