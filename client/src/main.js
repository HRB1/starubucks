// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./utils/flexble.js"
import "./static/fonts/iconfont.css"
import router from './router'
import store from "./store/index";
import publics from "./plugins/index";//封装全局组件

import {DatePicker,TimePicker} from "element-ui";
Vue.use(publics);
Vue.config.productionTip = false

Vue.use(DatePicker);//日期选择器
Vue.use(TimePicker);//时间选择器
console.log()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  publics,
  components: { App },
  template: '<App/>'
})
