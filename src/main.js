import Vue from 'vue'
import App from './App'
import request form '@/utils/request.js';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
import '../static/weui/weui.css'
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
const app = new Vue({
  App
})
app.$mount();
