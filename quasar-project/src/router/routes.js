
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'Single Seat - 靜思空間',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('src/pages/front/LoginView.vue'),
        meta: {
          title: 'Single Seat - 會員登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('src/pages/front/RegisterView.vue'),
        meta: {
          title: 'Single Seat - 新會員註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'reset',
        name: 'reset',
        component: () => import('src/pages/front/ResetPassword.vue'),
        meta: {
          title: 'Single Seat - 重設密碼',
          login: false,
          admin: false
        }
      }
    ]
  },

  {
    path: '/myaccount',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'myaccount',
        component: () => import('pages/MyAccount.vue'),
        meta: {
          title: 'Single Seat - 會員中心',
          login: false,
          admin: false
        }
      }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('src/pages/front/AboutView.vue'),
        meta: {
          title: 'Single Seat - 關於我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'location',
        name: 'location',
        component: () => import('src/pages/front/LocationView.vue'),
        meta: {
          title: 'Single Seat - 門市資訊',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/products',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'products',
        component: () => import('src/pages/front/LecturesView.vue'),
        meta: {
          title: 'Single Seat - 活動報名',
          login: false,
          admin: false
        }
      },
      {
        path: ':id',
        name: 'product',
        component: () => import('src/pages/front/EventView.vue'),
        meta: {
          title: 'Single Seat - 活動內容',
          login: false,
          admin: false
        }
      },
      {
        path: 'all',
        name: 'all',
        component: () => import('src/pages/front/LecturesView.vue'),
        meta: {
          title: 'Single Seat - 所有活動',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'menu',
        component: () => import('src/pages/front/MenuView.vue'),
        meta: {
          title: 'Single Seat - 餐飲介紹',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/article',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'article',
        component: () => import('src/pages/front/ArticleView.vue'),
        meta: {
          title: 'Single Seat - 專欄好文',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/service',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'service',
        component: () => import('src/pages/front/ServiceCenter.vue'),
        meta: {
          title: 'Single Seat - 客服資訊',
          login: false,
          admin: false
        }
      },
      {
        path: 'contactus',
        name: 'contactus',
        component: () => import('src/pages/front/ContactView.vue'),
        meta: {
          title: 'Single Seat - 聯絡我們',
          login: false,
          admin: false
        }
      }
    ]
  },

  {
    path: '/admin',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('../pages/admin/HomeView.vue'),
        meta: {
          title: ' Single Seat - 管理 ',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('../pages/admin/ProductsView.vue'),
        meta: {
          title: ' Single Seat - 商品管理 ',
          login: true,
          admin: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'all',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '/404',
    redirect: '/404',
    meta: {
      title: ' Single Seat - 404 ',
      login: false,
      admin: false
    }
  }
]

export default routes
