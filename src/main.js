import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import essay from './js/essay';
import essayreq from './js/requset/essayreq';
import comment from './js/comment';
import operation from './js/browse_like';
import 'element-ui/lib/theme-chalk/index.css';
 
Vue.use(ElementUI);

// 本地or服务器
const host = process.env.NODE_ENV === "development" ? "http://39.98.119.6:3000" : "http://39.98.119.6:3000";
const instance = axios.create({
    baseURL: host
})
Vue.prototype.axios = instance;

Vue.config.productionTip = false
Vue.prototype.$http = instance
Vue.prototype.$essay = essay;
Vue.prototype.$essayreq = essayreq;
Vue.prototype.$comment = comment;
Vue.prototype.$operation = operation;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


