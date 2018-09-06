import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import "confetti-js"
import vueSmoothScroll from 'vue-smoothscroll'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

const router = new VueRouter({routes})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
