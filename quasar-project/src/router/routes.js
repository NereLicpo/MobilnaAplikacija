const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/OigriPage.vue") },
      { path: "Likovi", component: () => import("pages/LikoviPage.vue") },
      { path: "combat", component: () => import("pages/CombatPage.vue") },
      { path: "Onama", component: () => import("pages/oNamaPage.vue") },
      {
        path: "Notes",
        component: () => import("pages/DeveloperNotesPage.vue"),
      },
      { path: "Kontakti", component: () => import("pages/KontaktiPage.vue") },
      { path: "Community", component: () => import("pages/CommunityPage.vue") },
      { path: "Download", component: () => import("pages/DownloadPage.vue") },
      {
        path: "Leaderboards",
        component: () => import("pages/LeaderboardsPage.vue"),
      },
      {
        path: "Login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("pages/AdminPage.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
