<template>
  <div class="game-description">
    <h1>{{ gameTitle }}</h1>
    <div class="game-details">
      <p><strong>Žanr:</strong> {{ genre }}</p>
      <p><strong>Platforma:</strong> {{ platform }}</p>
      <p><strong>Gamemode:</strong> {{ playerMode }}</p>
    </div>
    <h2>Sinopsis:</h2>
    <p>{{ synopsis }}</p>
  </div>
</template>

<script>
export default {
  name: "OpisIgrice",
  data() {
    return {
      gameTitle: "UpsideDown",
      genre: "Psihološki horor, Avantura",
      platform: "PC",
      playerMode: "Single-player",
      synopsis:
        "U igrici igrač kontrolira Krunu ubicu koji je glavni lik u igrici. Glavni cilj igrice je puko preživljavanje u raspadnutom svijetu punom stravičnih nakaza, gdje će lik morati ne samo brinuti o pronalasku hrane i vode, već će morati paziti da ne izgubi pamet."
    };
  }
};
</script>

<style scoped>
.game-description {
  font-family: 'Arial', sans-serif;
  background-color: #222;
  color: #f0f0f0;
  padding: 25px;
  border-radius: 10px;
  max-width: 850px;
  margin: 50px auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #ff5c57;
  font-size: 32px;
  margin-bottom: 15px;
}

.game-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.game-details p {
  font-size: 16px;
  margin: 0;
  color: #ddd;
}

h2 {
  color: #ffa500;
  margin-top: 25px;
  font-size: 24px;
  font-weight: 600;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #ddd;
  text-align: justify;
}

@media (max-width: 768px) {
  .game-description {
    padding: 20px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>
