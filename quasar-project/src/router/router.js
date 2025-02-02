import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard to check if the user is an admin
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAdmin) {
    try {
      const response = await axios.get("http://localhost:3000/api/check-auth", {
        withCredentials: true,
      });

      if (response.data.role === "admin") {
        next();
      } else {
        next("/"); // Redirect to home if not an admin
      }
    } catch (error) {
      next("/"); // Redirect to home on error
    }
  } else {
    next();
  }
});

export default router;
