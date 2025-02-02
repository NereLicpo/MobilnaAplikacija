<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <h5>Download Available File</h5>
        <q-btn
          v-if="fileUrl"
          :href="fileUrl"
          download="developer_file"
          label="Download File"
          color="primary"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const fileUrl = ref("/path-to-developer-file.ext"); // Change this to your actual file path
    return { fileUrl };
  },
};
</script>

<style scoped>
.q-card {
  max-width: 100%;
  text-align: center;
}
</style>
