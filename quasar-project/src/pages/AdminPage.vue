<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 500px">
      <q-card-section>
        <div class="text-h6">Admin Dashboard</div>
      </q-card-section>
      <q-card-section>
        <p>Welcome, Admin! Here you can manage users, view logs, and more.</p>
      </q-card-section>
      <q-card-actions>
        <q-btn label="Logout" color="negative" @click="logout" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();

    const logout = async () => {
      try {
        await axios.post(
          "http://localhost:3000/api/logout",
          {},
          { withCredentials: true }
        );
        router.push("/"); // Redirect to home after logout
      } catch (error) {
        console.error("Logout failed", error);
      }
    };

    return { logout };
  },
};
</script>
