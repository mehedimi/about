import Vue from 'vue'
import App from './App.vue'
import './libs/kube/sass/kube.scss'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
