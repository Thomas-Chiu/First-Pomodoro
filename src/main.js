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
import { faTimes, faCheck, faUndo, faSave, faPlay, faFastForward, faPen, faPause, faChartBar, faCog, faStream, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import draggable from 'vuedraggable'
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.stylus'
import WCharts from 'vue-wcharts'

Vue.config.productionTip = false
library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faFastForward, faAndroid, faPlusSquare, faChartBar, faCog, faStream, faFastBackward)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('draggable', draggable)
Vue.use(WCharts, {
  // Colors Palette
  colors: [
    'tomato'
  ],
  // Theme styles
  theme: {
    WLine: {
      styles: {
        fill: '',
        stroke: '',
        strokeWidth: 5,
        strokeDasharray: 0
      },
      dot: {
        fill: '#093830',
        strokeWidth: -1
      }
    },
    WXAxis: {
      styles: {
        stroke: '#093830'
      },
      mark: {
        stroke: '#093830'
      }
    },
    WYAxis: {
      styles: {
        stroke: '#093830'
      },
      mark: {
        stroke: '#093830'
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
