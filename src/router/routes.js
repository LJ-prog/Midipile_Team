const routes = [
  {
    path: "/",
    component: () => import("src/layouts/SearchLayout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      { path: "/lucas", component: () => import("pages/SaCles.vue") },
      {
        path: "/profile/:id",
        name: "profile",
        component: () => import("pages/profilePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
