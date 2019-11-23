import Vue from 'vue'
import App from './App'

import store from './store'
import {
  fly
} from './utils/request'
import MpvueRouterPatch from 'mpvue-router-patch' // 兼容vue-router写法

// import VueI18n from 'vue-i18n'
// import i18n from './lang'
// Vue.use(VueI18n)
// App.i18n = new VueI18n(i18n);

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$http = fly
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()
