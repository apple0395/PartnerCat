import Vue from 'vue';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import poper from 'popper.js';
import bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 元件，全域註冊
Vue.component('Loading', Loading);

Vue.component('jquery', jquery);
Vue.component('popper', poper);
Vue.component('bootstrap', bootstrap);

// 套件加入到Vue的藍圖內 (原型內)
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
