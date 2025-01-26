const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/OigriPage.vue') },
      { path: '/Likovi', component: () => import('pages/LikoviPage.vue') },
      { path: '/combat', component: () => import('pages/CombatPage.vue') },
      { path: '/Onama', component: () => import('pages/oNamaPage.vue') },
      { path: '/Notes', component: () => import('pages/DeveloperNotesPage.vue') },
      { path: '/Kontakti', component: () => import('pages/KontaktiPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
