import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api'
import { Form } from 'vant';//vant的消息通知
import { Notify } from 'vant';

Vue.use(Form);
Vue.use(Notify);//vant的消息通知
Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
