import Vue from 'vue'
import App from './App.vue';
import router from './router';
import YmapPlugin from 'vue-yandex-maps'


const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}
Vue.use(YmapPlugin, settings)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
