import Vue from 'vue';
import VueSession from 'vue-session';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueSession, { persist: true });

const config = {
  mockResources: false
};

new Vue({
  router,
  vuetify,
  render: h => h(App),
  data: {
    config
  }
}).$mount('#app');
