import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: 'Dashboard',
  //   hidden: true,
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index')
  //   }]
  // },
  // 控制台
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '控制台', icon: 'form', noCache: true }
      }
    ]
  },
  // 商户管理
  {
    path: '/merchant',
    component: Layout,
    redirect: 'merchant',
    children: [
      {
        path: 'index',
        component: () => import('@/views/merchant/index'),
        name: 'merchant',
        meta: { title: '商户管理', icon: 'nested', noCache: true }
      }
    ]
  },
  // 网点管理
  {
    path: '/dot',
    component: Layout,
    redirect: 'dot',
    children: [
      {
        path: 'index',
        component: () => import('@/views/dot/index'),
        name: 'dot',
        meta: { title: '网点管理', icon: 'tree', noCache: true }
      }
    ]
  },
  // 登录管理
  {
    path: '/loginManagement',
    component: Layout,
    redirect: 'loginManagement',
    children: [
      {
        path: 'index',
        component: () => import('@/views/loginManagement/index'),
        name: 'loginManagement',
        meta: { title: '登录管理', icon: 'password', noCache: true }
      }
    ]
  },
  // 账号管理
  {
    path: '/accountManagement',
    component: Layout,
    redirect: 'accountManagement',
    children: [
      {
        path: 'index',
        component: () => import('@/views/accountManagement/index'),
        name: 'accountManagement',
        meta: { title: '账号管理', icon: 'user', noCache: true }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
