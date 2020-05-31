import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/router.js';
import store from './store/store.js';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount('#app');
