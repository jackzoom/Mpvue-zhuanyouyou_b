import Vue from 'vue'
import App from './index'
import VueI18n from 'vue-i18n'
import i18n from '@/lang'
Vue.use(VueI18n)
App.i18n = new VueI18n(i18n);

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
console.log("i18n:",App);
const app = new Vue(App)
app.$mount()
