<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>

/* Globalni CSS za EssentialLink */
q-item-label {
  color: #fff !important;
}

q-item-label[caption] {
  color: #fff !important;
}

q-icon {
  color: #fff !important;
}
