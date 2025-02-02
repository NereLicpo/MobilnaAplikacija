<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="email"
          label="Email"
          type="email"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          filled
          class="q-mb-md"
        />
      </q-card-section>

      <q-card-actions class="q-pa-md">
        <q-btn
          :loading="loading"
          label="Login"
          color="primary"
          @click="login"
          class="full-width"
        />
      </q-card-actions>
      <q-card-section v-if="error" class="text-negative">
        {{ error }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);
    const router = useRouter();

    const login = async () => {
      loading.value = true;
      error.value = "";
      try {
        const response = await axios.post("http://localhost:3000/api/login", {
          email: email.value,
          password: password.value,
        });

        if (response.data.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } catch (err) {
        error.value = err.response?.data?.error || "Login failed";
      } finally {
        loading.value = false;
      }
    };

    return { email, password, login, error, loading };
  },
};
</script>
