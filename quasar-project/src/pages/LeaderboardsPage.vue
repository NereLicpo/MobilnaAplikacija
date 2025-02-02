<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <h5>Game Leaderboard</h5>
        <q-list bordered separator>
          <q-item v-for="(player, index) in leaderboard" :key="index">
            <q-item-section>
              <q-item-label>{{ index + 1 }}. {{ player.name }}</q-item-label>
              <q-item-label caption>Score: {{ player.score }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leaderboard = ref([
      { name: "Player1", score: 1000 },
      { name: "Player2", score: 900 },
      { name: "Player3", score: 850 },
    ]);
    return { leaderboard };
  },
};
</script>

<style scoped>
.q-card {
  max-width: 100%;
  text-align: center;
}
</style>
