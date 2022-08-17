<template>
  <a class="social-link" :href="url" target="_blank">
    <font-awesome-icon :icon="nameIcon" size="lg" />
  </a>
</template>

<script setup>
  import { onMounted } from 'vue'

  const props = defineProps({
    nameIcon: String,
    url: String
  })

  onMounted(() => {})
</script>

<style scoped>
  .social-link {
    color: var(--color-texto-2);
    transition: 0.4s;
  }
  .social-link:hover {
    color: var(--color-secundario);
    transform: scale(1.4);
  }
</style>
