<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <q-input
          v-model="message"
          label="Enter your message"
          outlined
          class="q-mb-md"
        />
        <q-file
          v-model="file"
          label="Upload an image"
          accept="image/*"
          @update:model-value="onFileChange"
          multiple
        >
          <template v-slot:append>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <q-btn
          label="Send"
          color="primary"
          class="q-mt-md"
          @click="sendMessage"
        />
      </q-card-section>
      <q-card-section>
        <div v-for="(msg, index) in messages" :key="index" class="q-mb-md">
          <div class="chat-message">
            <p>{{ msg.text }}</p>
            <div v-if="msg.images.length" class="image-container">
              <q-img
                v-for="(img, imgIndex) in msg.images"
                :key="imgIndex"
                :src="img"
                class="full-width"
                style="max-height: 200px; margin-top: 10px"
              />
            </div>
            <q-btn
              label="Delete"
              color="negative"
              @click="deleteMessage(index)"
              class="q-mt-md"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const file = ref(null);
    const message = ref("");
    const messages = ref(JSON.parse(localStorage.getItem("messages")) || []);

    const onFileChange = (selectedFiles) => {
      if (selectedFiles) {
        file.value = Array.from(selectedFiles);
      }
    };

    const sendMessage = () => {
      if (message.value || file.value) {
        const newMessage = {
          text: message.value,
          images: [],
        };

        if (file.value && file.value.length) {
          let imagesLoaded = 0;
          file.value.forEach((imageFile, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              newMessage.images.push(e.target.result);
              imagesLoaded++;
              if (imagesLoaded === file.value.length) {
                messages.value.push(newMessage);
                localStorage.setItem(
                  "messages",
                  JSON.stringify(messages.value)
                );
                message.value = "";
                file.value = null;
              }
            };
            reader.readAsDataURL(imageFile);
          });
        } else {
          messages.value.push(newMessage);
          localStorage.setItem("messages", JSON.stringify(messages.value));
          message.value = "";
          file.value = null;
        }
      }
    };

    const deleteMessage = (index) => {
      messages.value.splice(index, 1);
      localStorage.setItem("messages", JSON.stringify(messages.value));
    };

    return {
      file,
      message,
      messages,
      onFileChange,
      sendMessage,
      deleteMessage,
    };
  },
};
</script>

<style scoped>
.q-card {
  max-width: 100%;
}
.chat-message {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
