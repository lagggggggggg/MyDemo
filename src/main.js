import Vue from 'vue'
import App from './App.vue'
import router from './Router/router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

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
