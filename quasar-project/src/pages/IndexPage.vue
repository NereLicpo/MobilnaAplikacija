<template>
  <div class="game-page">
    <div class="header">
      <h1>{{ gameTitle }}</h1>
      <p class="tagline">
        Uronite u mračni svijet gdje razum dolazi na kušnju.
      </p>
    </div>
    <div class="game-details">
      <div class="detail">
        <h3>Žanr</h3>
        <p>{{ genre }}</p>
      </div>
      <div class="detail">
        <h3>Platforma</h3>
        <p>{{ platform }}</p>
      </div>
      <div class="detail">
        <h3>Gamemode</h3>
        <p>{{ playerMode }}</p>
      </div>
      <div class="detail">
        <h3>Ocjena</h3>
        <p>8.7/10</p>
      </div>
      <div class="detail">
        <h3>Vrijeme igranja</h3>
        <p>10-15 sati</p>
      </div>
    </div>
    <div class="synopsis">
      <h2>Sinopsis</h2>
      <p>
        <span class="highlight">{{ synopsis }}</span>
      </p>
    </div>
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
        "Igrač preuzima kontrolu nad Krunom, ubicom zarobljenim u raspadnutom svijetu punom stravičnih nakaza. Glavni cilj igre je preživjeti, pronaći hranu i vodu, ali i očuvati zdrav razum dok se suočava s vlastitim unutarnjim demonima i užasima vanjskog svijeta.",
    };
  },
};
</script>

<style scoped>
/* Opći stil */
body {
  margin: 0;
  font-family: "Creepster", cursive; /* Strašan font */
  background: url("https://via.placeholder.com/1600x900?text=Dark+Horror+Background")
    center/cover no-repeat;
  color: #f8f8f8;
}

/* Header sekcija */
.header {
  text-align: center;
  padding: 50px 20px;
  background: rgba(17, 17, 17, 0.95);
  border-bottom: 2px solid #ff4b5c;
  margin-bottom: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}

.header h1 {
  font-size: 40px;
  color: #ff4b5c;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px #000;
}

.header .tagline {
  font-size: 18px;
  color: #ccc;
}

/* Detalji igre */
.game-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto 30px;
  padding: 0 20px;
}

.detail {
  background: rgba(33, 33, 33, 0.95);
  border: 1px solid #444;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  flex: 1 1 200px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.detail h3 {
  font-size: 16px;
  color: #ffa500;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.detail p {
  font-size: 14px;
  color: #f8f8f8;
}

.detail:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
}

/* Sinopsis */
.synopsis {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background: rgba(28, 28, 28, 0.95);
  border-radius: 15px;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.4);
  position: relative;
  color: #fff;
}

.synopsis h2 {
  color: #ffa500;
  font-size: 28px;
  margin-bottom: 15px;
  text-transform: uppercase;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}

.synopsis p {
  font-size: 16px;
  line-height: 1.8;
  color: #ddd;
  text-align: justify;
}

.synopsis .highlight {
  display: block;
  font-size: 18px;
  color: #fff;
  font-style: italic;
  line-height: 1.8;
  padding: 15px;
  background: rgba(255, 75, 92, 0.1);
  border-left: 4px solid #ff4b5c;
  margin: 10px 0;
}

/* Responzivnost */
@media (max-width: 768px) {
  .game-details {
    flex-direction: column;
    gap: 15px;
  }

  .detail {
    margin-bottom: 15px;
  }

  .header h1 {
    font-size: 32px;
  }

  .header .tagline {
    font-size: 16px;
  }

  .synopsis h2 {
    font-size: 24px;
  }
}
</style>
