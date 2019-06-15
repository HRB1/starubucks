// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./utils/flexble.js"
import "./static/fonts/iconfont.css"
import router from './router'
import store from "./store/index";
import {DatePicker,TimePicker} from "element-ui";

Vue.config.productionTip = false

Vue.use(DatePicker);//日期选择器
Vue.use(TimePicker);//时间选择器
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
