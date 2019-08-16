import Vue from 'vue'
import App from './App.vue'
import router from './Router/router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      fastClick.attach(document.body);
  }, {passive:false});
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
