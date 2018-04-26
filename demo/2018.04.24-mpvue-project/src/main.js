import Vue from 'vue'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)

const app = new Vue({
  el: '#app',
  store,
  router,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
