import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes, faCheck, faUndo, faSave, faPlay, faStepForward, faPen, faPause } from '@fortawesome/free-solid-svg-icons'
import draggable from 'vuedraggable'
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.stylus'

Vue.config.productionTip = false
library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('draggable', draggable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
