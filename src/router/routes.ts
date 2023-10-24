import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue'),
        meta: {
          title: '首頁' // breadcrumb 名稱用
        }
      },
      { path: '/income',
        component: () => import('pages/Income.vue'),
        meta: {
          title: '代理盈虧報表' // breadcrumb 名稱用
        }
      },
      { path: '/provider-report',
        component: () => import('pages/ProviderReport.vue'),
        meta: {
          title: '產品統計報表' // breadcrumb 名稱用
        }
      },
      { path: '/commission-report',
        component: () => import('pages/CommissionReport.vue'),
        meta: {
          title: '代理點位差報表' // breadcrumb 名稱用
        }
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
