import { setToken, getToken, removeToken } from '@/utils/storage'
import { login } from '@/api/user'
// 存放的数据
const state = {
  token: getToken() // 从本地浏览器得到token
}

// 修改state中数据的方法
const mutations = {
  setToken (state, token) {
    state.token = token // 存放token至state
    setToken(token) // 存放浏览器token
  },
  removeToken () {
    state.token = null // 移除state的token
    removeToken() // 移除浏览器token
  }
}

// 异步
const actions = {
  async login (context, data) {
    // 调用登录模块，解构出token
    const token = await login(data)
    // const { data: { data: token } } = objdata
    // 调用setToken，传入token
    context.commit('setToken', token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
