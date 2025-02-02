<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-md transparent-bg">
      <div class="text-h6 q-mb-md">Developer Notes</div>
      <div class="dev-notes-container">
        <q-card
          v-for="note in notes"
          :key="note.NoteID"
          flat
          bordered
          class="dev-note-card q-mb-md"
        >
          <q-card-section>
            <div class="text-h6 text-orange q-mb-sm">{{ note.Title }}</div>
            <div class="text-body2 q-mb-sm">{{ note.Content }}</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-body2">
              <strong>Category:</strong> {{ note.Category }}
            </div>
            <div class="text-body2">
              <strong>Priority:</strong> {{ note.Priority }}
            </div>
            <div class="text-body2">
              <strong>Author:</strong> {{ note.Author }}
            </div>
            <div class="text-body2">
              <strong>Status:</strong> {{ note.Status }}
            </div>
            <div class="text-body2">
              <strong>Created At:</strong>
              {{ new Date(note.CreatedAt).toLocaleString() }}
            </div>
            <div class="text-body2">
              <strong>Updated At:</strong>
              {{ new Date(note.UpdatedAt).toLocaleString() }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      notes: [], // Developer notes data
    };
  },
  methods: {
    fetchNotes() {
      axios
        .get("http://192.168.5.11:3000/api/developer-notes")
        .then((response) => {
          this.notes = response.data;
        })
        .catch((error) => {
          console.error("Error fetching developer notes:", error);
        });
    },
  },
  mounted() {
    this.fetchNotes();
  },
};
</script>

<style scoped>
/* Semi-transparent background for the main container */
.transparent-bg {
  background: rgba(0, 0, 0, 0.8); /* Black with 80% opacity */
  color: #fff; /* White text for visibility */
  border-radius: 8px; /* Optional rounded corners */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
  padding: 20px; /* Additional padding for spacing */
}

/* Developer Notes Container */
.dev-notes-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between cards */
  justify-content: center; /* Center the cards */
}

/* Developer Note Card */
.dev-note-card {
  width: 400px; /* Card width */
  transition: transform 0.3s, box-shadow 0.3s;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent dark background */
  color: #fff; /* White text color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

/* Hover effect for cards */
.dev-note-card:hover {
  transform: translateY(-5px); /* Lift effect */
  box-shadow: 0px 4px 16px rgba(255, 165, 0, 0.8); /* Bright orange glow */
}

/* Styling for card sections */
.q-card-section {
  padding: 10px;
}
</style>
