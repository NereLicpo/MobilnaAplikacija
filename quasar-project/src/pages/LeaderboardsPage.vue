<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md leaderboard-card">
      <q-card-section>
        <h5 class="leaderboard-title">Hall of Legends</h5>
        <q-list bordered separator>
          <q-item v-for="(player, index) in leaderboard" :key="index" class="leaderboard-item">
            <q-item-section>
              <q-item-label :class="index === 0 ? 'first-place' : 'regular'">
                {{ index + 1 }}. {{ player.name }}
              </q-item-label>
              <q-item-label :class="index === 0 ? 'score-first' : 'score-regular'" caption>
                Score: {{ player.score }}
              </q-item-label>
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
      { name: "Ante Nogavina", score: 1200 },
      { name: "Tinček Carček", score: 1100 },
      { name: "Svan Tipornić", score: 980 },
      { name: "John Floc", score: 920 },
      { name: "Patrik Mokribob", score: 870 },
    ]);
    return { leaderboard };
  },
};
</script>

<style scoped>
.leaderboard-card {
  max-width: 400px;
  background: rgba(20, 20, 20, 0.9);
  color: white;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(255, 102, 0, 0.6);
}

.leaderboard-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6600;
  text-transform: uppercase;
}

.leaderboard-item {
  transition: transform 0.2s ease-in-out;
}

.leaderboard-item:hover {
  transform: scale(1.05);
}

.first-place {
  font-weight: bold;
  color: #ffcc00;
}

.regular {
  color: white;
}

.score-first {
  color: #ffcc00;
  font-weight: bold;
}

.score-regular {
  color: #00bfff;
}
</style>
