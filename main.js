
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import _conf from './static/js/conf.js';
Vue.prototype.conf = _conf;

import _http from './static/js/http.js';
Vue.prototype.confhttp = _http;


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif