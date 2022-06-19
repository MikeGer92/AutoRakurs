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

Vue.directive('phone', {
  bind(el) { 
    function replaceNumberForInput(value) {
      let val = ''
      const x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      x[1] = '+7'
      val = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')

      return val
    }

    function replaceNumberForPaste(value) {
      const r = value.replace(/\D/g, '')
      let val = r
      if (val.charAt(0) === '7') {
        val = '8' + val.slice(1)
      }
      return replaceNumberForInput(val)
    }

    el.oninput = function(e) {
      if (!e.isTrusted) {
        return
      }
      this.value = replaceNumberForInput(this.value)
    }

    el.onpaste = function() {
      setTimeout(() => {
        const pasteVal = el.value
        this.value = replaceNumberForPaste(pasteVal)
      })
    }

  }
})
