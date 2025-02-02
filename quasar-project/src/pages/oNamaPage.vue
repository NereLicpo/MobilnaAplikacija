<template>
  <q-page class="q-pa-md page-container">
    <div class="page-header text-center">
      <div class="title">O Nama</div>
      <div class="subtitle">
        Upoznajte naš tim i saznajte više o ljudima koji stoje iza našeg uspjeha.
      </div>
    </div>

    <div class="people-grid">
      <q-card v-for="(person, index) in people" :key="index" class="person-card">
        <q-avatar size="120px" class="avatar">
          <img :src="person.image" alt="Profile picture" />
        </q-avatar>
        <div class="person-info">
          <div class="text-h5 text-orange">{{ person.name }}</div>
          <div class="text-subtitle1">Dob: {{ person.age }}</div>
          <div class="synopsis-text">{{ person.description }}</div>
          <div class="contact-info">
            <q-icon name="phone" class="contact-icon" /> {{ person.contact.phone }} <br />
            <q-icon name="email" class="contact-icon" /> {{ person.contact.email }}
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ONamaPage",
  data() {
    return {
      people: [
        {
          name: "Rene Raymond Polić",
          age: 21,
          description: "Student.",
          contact: { phone: "+385 91 123 4567", email: "rpolic@veleri.hr" },
          image: "/images/rene.png",
        },
        {
          name: "Andrej Smiljanić",
          age: 21,
          description: "Student.",
          contact: { phone: "+385 92 234 5678", email: "asmiljani@veleri.hr" },
          image: "/images/andrej.jpg",
        },
        {
          name: "Kristina Mrkalj",
          age: 22,
          description: "Studentica.",
          contact: { phone: "+385 98 345 6789", email: "kmrkalj@veleri.hr" },
          image: "/images/kristina.png",
        },
        {
          name: "Mateo Miler",
          age: 21,
          description: "Student.",
          contact: { phone: "+385 97 456 7890", email: "mmiler@veleri.hr" },
          image: "/images/mateo.jpg",
        },
        {
          name: "Ante Maričević",
          age: 22,
          description: "Student.",
          contact: { phone: "+385 95 567 8901", email: "amaricevi@veleri.hr" },
          image: "/images/ante.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ✅ Profesionalan dizajn */
.page-container {
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-header {
  margin-bottom: 30px;
  text-align: center;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  color: #ff6600;
  text-transform: uppercase;
}
.subtitle {
  font-size: 1.2rem;
  color: #ddd;
  margin-top: 10px;
}

/* ✅ Grid layout za bolju organizaciju */
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
}

/* ✅ Moderan dizajn kartica */
.person-card {
  background: rgba(20, 20, 20, 0.9);
  color: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.person-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(255, 102, 0, 0.6);
}

/* ✅ Stilizirani avatar */
.avatar img {
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* ✅ Info sekcija */
.person-info {
  margin-top: 15px;
}
.text-orange {
  color: #ff6600;
}
.synopsis-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 10px;
}

/* ✅ Kontakt info */
.contact-info {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #ccc;
}
.contact-icon {
  color: #ff6600;
  margin-right: 5px;
}
</style>
