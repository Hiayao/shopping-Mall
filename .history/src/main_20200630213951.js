import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api'
import { Form } from 'vant';
import { Notify } from 'vant';//vant的消息通知
import { PullRefresh } from 'vant';
import { Lazyload } from 'vant';
import { Dialog } from 'vant';  //弹出框
import { Area } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { AddressList } from 'vant';
import { Toast } from 'vant';
import utils from './utils'


Vue.prototype.$utils = utils
Vue.use(AddressList);

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.use(Area);
Vue.use(Toast);

Vue.use(Lazyload);
Vue.use(Dialog);   //弹出框
Vue.use(Form);
Vue.use(Notify);//vant的消息通知
Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$api = api
Vue.use(PullRefresh);
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
