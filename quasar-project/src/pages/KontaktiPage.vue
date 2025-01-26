<template>
  <q-page class="contact-page">
    <div class="content text-white">
      <div class="q-pa-xl">
        <h2 class="text-center text-red text-h5">Kontaktirajte nas</h2>
        <p class="text-center">
          Ukoliko imate pitanja ili trebate pomoć, slobodno nas kontaktirajte
          putem dolje navedenih informacija.
        </p>

        <!-- Kartice sa informacijama -->
        <div class="q-my-lg row justify-center">
          <q-card
            class="q-ma-md"
            flat
            bordered
            style="background-color: #2d2d2d; width: 300px;"
          >
            <q-card-section class="text-center">
              <h3 class="text-yellow text-h6">E-mail</h3>
              <p>info@upsidedown.com</p>
            </q-card-section>
          </q-card>

          <q-card
            class="q-ma-md"
            flat
            bordered
            style="background-color: #2d2d2d; width: 300px;"
          >
            <q-card-section class="text-center">
              <h3 class="text-yellow text-h6">Telefon</h3>
              <p>+385 99 123 4567</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Kontakt forma -->
        <div class="q-my-lg row justify-center">
          <q-card
            flat
            bordered
            style="background-color: #2d2d2d; max-width: 600px; width: 100%;"
          >
            <q-card-section>
              <h3 class="text-center text-yellow text-h6">Kontakt Forma</h3>
              <q-form @submit="handleSubmit" class="q-pa-md">
                <q-input
                  v-model="form.ime"
                  outlined
                  label="Vaše ime"
                  class="q-my-sm custom-input"
                  clearable
                />
                <q-input
                  v-model="form.email"
                  outlined
                  label="E-mail"
                  type="email"
                  class="q-my-sm custom-input"
                  clearable
                />
                <q-input
                  v-model="form.poruka"
                  outlined
                  label="Poruka"
                  type="textarea"
                  class="q-my-sm custom-input"
                  clearable
                />
                <q-btn
                  type="submit"
                  color="red"
                  label="Pošalji"
                  class="full-width q-my-sm"
                />
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        ime: "",
        email: "",
        poruka: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.form.ime && this.form.email && this.form.poruka) {
        try {
          const response = await fetch("http://localhost:3000/api/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.form),
          });

          if (response.ok) {
            alert("Poruka uspješno poslana!");
            this.form = { ime: "", email: "", poruka: "" }; // Reset forme
          } else {
            const error = await response.json();
            console.error("Error:", error);
            alert("Greška prilikom slanja poruke.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Greška u komunikaciji sa serverom.");
        }
      } else {
        alert("Molimo ispunite sva polja.");
      }
    },
  },
};
</script>

<style scoped>
.contact-page {
  background: linear-gradient(180deg, #000000, #3c3c3c);
  min-height: 100vh;
}
.text-red {
  color: #b30000;
}
.text-yellow {
  color: #ffc107;
}

/* Stilovi za prilagodbu q-input elemenata */
.custom-input ::v-deep(.q-field__control) {
  color: white; /* Boja teksta */
}
.custom-input ::v-deep(.q-placeholder) {
  color: rgba(255, 255, 255, 0.6); /* Placeholder */
}
.custom-input ::v-deep(.q-field__bottom) {
  border-color: white; /* Boja donjeg okvira */
}
.custom-input ::v-deep(.q-field__label) {
  color: white; /* Labela */
}
</style>
