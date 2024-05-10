import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet' // 引入Leaflet库并且将它导出到变量L中(整体导入)
import 'leaflet.pm' // 引入Leaflet.pm插件
import 'leaflet.pm/dist/leaflet.pm.css'

Vue.use(ElementUI) // 将element-ui的所有组件进行导入注册
Vue.L = Vue.prototype.$L = L // 将Leaflet库绑定在Vue的原型上，这样在任何一个vue组件内都能通过this.$L来使用它

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

delete L.Icon.Default.prototype._getIconUrl // 移除默认图标的_getIconUrl方法, 因为这方法在一些情况下可能导致图标路径错误
L.Icon.Default.mergeOptions({ // 设置默认的图标
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
