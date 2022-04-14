import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Toasted from 'vue-toasted';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false


Vue.use(Toasted)
Vue.use(Vuelidate)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
