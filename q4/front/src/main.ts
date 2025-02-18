import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store/'
import './registerServiceWorker'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
