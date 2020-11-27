import { createRouter , createWebHistory} from 'vue-router'

const routerHistory = createWebHistory();

/**
 * 为引入的页面自定义路由
 *      path 访问的路由
 *      name 路由的名称【this.$route.name 就可以获取到对应的name了】
 *      component 组件的名称
 *      meta
 *        keepAlive 是否缓存dom
 */
const router = createRouter({
  history : routerHistory,
  routes:[
    {
      path : '/',
      component : import('./views/Home.vue')
    }
  ]
})


export default router
