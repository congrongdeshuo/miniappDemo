import Vue from 'vue'
import App from './App'
import fly from './utils/request'
import '../static/css/app.css'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$http = fly

const app = new Vue({
  App
})
app.$mount()
