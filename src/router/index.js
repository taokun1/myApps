import Vue from 'vue'
import Router from 'vue-router'
import { Dialog } from 'vant'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Home from '@/pages/home'
import PageSearch from '@/pages/pageSearch'
import Friends from '@/pages/friends'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isLogin: false,
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isLogin: true,
        title: '首页'
      }
    },
    {
      path: '/pagesearch',
      name: 'pagesearch',
      component: PageSearch,
      meta: {
        isLogin: true,
        title: '查询'
      }
    },
    {
      path: '/friends',
      name: 'friend',
      component: Friends,
      meta: {
        isLogin: true,
        title: '朋友'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title
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
export default router