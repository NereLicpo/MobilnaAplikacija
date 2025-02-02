import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import axios from "axios"; // ✅ Import Axios
import routes from "./routes";

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // ✅ Fixed `Router.beforeEach` (uppercase R)
  Router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAdmin) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/check-auth",
          {
            withCredentials: true, // Ensures cookies are sent
          }
        );

        if (response.data.role === "admin") {
          next();
        } else {
          next("/"); // Redirect non-admins to home
        }
      } catch (error) {
        next("/"); // Redirect to home on error
      }
    } else {
      next();
    }
  });

  return Router;
});
