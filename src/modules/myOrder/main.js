import Vue from 'vue'
import http from '@utils/http'
import { DropdownMenu, DropdownItem, List } from 'vant'
import 'vant/lib/index.css'
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// import Vconsole from 'vconsole'

import App from './app'
// const vConsole = new Vconsole()
// Vue.use(vConsole)
Vue.use(DropdownMenu).use(DropdownItem).use(List)
Vue.use(v => {
  v.prototype.$http = http
})

const instance = new Vue({
  render: h => h(App)
})

instance.$mount('#app')
