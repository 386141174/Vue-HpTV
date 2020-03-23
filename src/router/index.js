import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // {
  //   path: '/video',
  //   component: () => import('@/components/bodyvideo/Video'),
  //   hidden: true
  // },
  // {
  //   path: '/headnavbar',
  //   name:'name',
  //   component: () => import('@/components/headnavbar/navbar/Send'),
  //   hidden: true
  // },
  {
    path: '/upVideo',
    name: 'upVideo',
    component: () => import('@/views/upVideo/index'),
    meta: { title: '上传视频', noCache: true},
    hidden: true
  },

  {
    path: '/queryVideo',
    name: 'searchVideo',
    component: () => import('@/views/query/index'),
    meta: { title: '搜索视频', noCache: true},
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首 页', icon: 'dashboard'}
    },
      {
        path: '/mobile',
        name: 'mobile',
        component: () => import('@/views/mobile/index'),
        meta: { title: '手机抢课', noCache: true},
        hidden: true
      },
      {
        path: '/privateOrder',
        name: 'privateOrder',
        component: () => import('@/views/privateOrder/index'),
        meta: { title: '订单详情', noCache: true},
        hidden: true
      }

    ],
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {roles:'editor' , title: '教学课堂', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '公开课', icon: 'table' }
      },
      // {
      //   path: 'tree',
      //   name: 'Tree',
      //   component: () => import('@/views/tree/index'),
      //   meta: { title: '教学视频', icon: 'tree' }
      // },
      {
        path: 'live/:id(\\d+)',
        name: 'Live',
        component: () => import('@/views/live/index'),
        meta: { title: '直 播', noCache: true, activeMenu: '/example/table'},
        hidden: true
      },


    ]
  },
  {
    path: '/room',
    name: 'Room',
    component: Layout,
    children:[{
      path:'/room',
      name:'room',
      component: () => import('@/views/table/room/index'),
      meta: { title: '直播间信息', noCache: true, icon: 'tree',role:['teacher']},
      // hidden: true
    }]

  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '活 动', icon: 'form' }
      },
      {
        path: 'activity',
        name: 'Activity',
        component: () => import('@/views/form/activity/index'),
        meta: { title: '活 动', icon: 'form' },
        hidden: true
      }

    ]
  },
  {
    path: '/order',
    name: 'order',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: { title: '控制台', icon: 'chart',role:['admin'],noCache:true }
        // hidden:true
      }],

  },
  {
    path: '/privateOrder',
    component: Layout,
    children: [{
      path: 'privateOrder',
      name: 'privateOrder',
      component: () => import('@/views/privateOrder/index'),
      meta: {title: '订单详情', icon: 'nested', role: ['student'],noCache:true}
    }]
  },
  {
    path:'/myStudent',
    component: Layout,
    children:[{
      path:'/myStudent',
      name:'myStudent',
      component: ()=> import('@/views/myStudent/index'),
      meta:{title:'我的学生',icon:'component',role:['teacher']}
    }]
  },
  {
    path:'/teacherVideo',
    component: Layout,
    children:[{
      path:'/teacherVideo',
      name:'teacherVideo',
      component: ()=> import('@/views/teacherVideo/index'),
      meta:{title:'我的视频',icon:'education',role:['teacher']}
    }]
  },
  {
    path:'/studentCourse',
    component: Layout,
    children:[{
      path:'/studentCourse',
      name:'studentCourse',
      component: ()=> import('@/views/studentCourse/index'),
      meta:{title:'课程回看',icon:'education',role:['student']}
    },
      {
        path:'replay',
        name:'replay',
        component: ()=> import('@/views/studentCourse/videoPage/index'),
        meta:{title:'回看',icon:'education'},
        hidden:true
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: '首 页', icon: 'dashboard', }
  //   }
  //   ],
  // },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/signIn/indext'),
    meta: { title: '注册', icon: 'link' },
    hidden: true
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/pay/index'),
    meta: { title: '支付宝支付', icon: 'link' },
    hidden: true
  },
  {
    path: '/picture',
    name: 'picture',
    component: Layout,
    children: [
      {
        path: 'picture',
        name: 'picture',
        component: () => import('@/views/picture/index'),
        meta: { title: '活动展示', icon: 'link'},
        hidden:true
      },


      ]
  },


  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: '课表',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})


const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default new Router({
  routes: constantRoutes,
  mode: 'history',
});
