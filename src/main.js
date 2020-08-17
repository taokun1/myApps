// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Dialog } from 'vant'
Vue.use(Vant)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.meta.isLogin) {
    const user = window.sessionStorage.getItem('user')
    if(user){
      next()
    } else {
      Dialog.alert({
        title: '提示',
        message: '您还未登录或登录过期，请重新登录',
      }).then(() => {
        // on close
        router.replace({
          path: '/login',
          query: {
            redirect: to.name
          }
        })
      });
      
    }
    next()
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
