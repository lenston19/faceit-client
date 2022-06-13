import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'index',
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'faculties',
        path: '/faculties',
        component: () => import('src/pages/FacultiesPage.vue'),
      },
      {
        name: 'groups',
        path: '/groups',
        component: () => import('src/pages/GroupsPage.vue'),
      },
      {
        name: 'players',
        path: '/players',
        component: () => import('src/pages/PlayersPage.vue'),
      },
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
