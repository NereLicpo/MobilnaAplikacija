<template>
  <q-page class="q-pa-md" style="background: rgba(0, 0, 0, 0.85); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <div class="page-header text-center">
      <div class="title">O Nama</div>
      <div class="subtitle">Upoznajte naš tim i saznajte više o ljudima koji stoje iza našeg uspjeha.</div>
    </div>

    <q-card class="q-mb-md transparent-bg" v-for="(person, index) in people" :key="index" style="display: flex; align-items: center; justify-content: center; padding: 16px; max-width: 600px;">
      <q-avatar size="150px" class="q-mr-md">
        <img :src="person.image" alt="Profile picture" />
      </q-avatar>
      <div style="text-align: center;">
        <div class="text-h5 text-orange">{{ person.name }}</div>
        <div class="text-subtitle1">Dob: {{ person.age }}</div>
        <div class="q-mt-sm synopsis-text">{{ person.description }}</div>
        <div class="q-mt-sm">
          <q-icon name="phone" /> {{ person.contact.phone }}
          <br />
          <q-icon name="email" /> {{ person.contact.email }}
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "oNamaPage",
  data() {
    return {
      people: [
        {
          name: "Ante Maričević",
          age: 30,
          description: "Razvojni programer s više od 10 godina iskustva.",
          contact: {
            phone: "+385 91 123 4567",
            email: "ante.mari@example.com",
          },
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Andrej Smiljaniž",
          age: 28,
          description: "Dizajnerica koja voli kreativna rješenja.",
          contact: {
            phone: "+385 92 234 5678",
            email: "Smiljandrija@example.com",
          },
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Kristina Mrkalj",
          age: 35,
          description: "Stručnjak za marketing i odnose s javnošću.",
          contact: {
            phone: "+385 98 345 6789",
            email: "kristina.mrkalj@example.com",
          },
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Mateo Miler",
          age: 26,
          description: "Frontend developer s fokusom na UX/UI.",
          contact: {
            phone: "+385 97 456 7890",
            email: "mateo.miler@example.com",
          },
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Rene Reymond Polić",
          age: 40,
          description: "Iskusni projektni menadžer.",
          contact: {
            phone: "+385 95 567 8901",
            email: "Rakjo.master@example.com",
          },
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Page Header */
.page-header {
  margin-bottom: 20px;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  color: #ff6600;
  text-transform: uppercase;
}
.subtitle {
  font-size: 1.2rem;
  color: #fff;
  margin-top: 10px;
}

/* Semi-transparent background for the cards */
.transparent-bg {
  background: rgba(20, 20, 20, 0.9);
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);
}

/* Text Styling */
.text-orange {
  color: #ff6600;
}
.synopsis-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 10px;
}

/* Avatar Styling */
.q-avatar img {
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>
