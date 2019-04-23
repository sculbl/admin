import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import store from './store'
import router from './routers'
import * as filters from './filters'
import plugIn from './utils'

import 'normalize.css/normalize.css'
import './styles/element-variables.scss'
import '@/styles/index.scss'
import './permission'
import './icons'

Vue.use(Element, { size: 'small' })

Vue.use(plugIn)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
