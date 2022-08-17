<template>
  <a class="social-link" :href="url" target="_blank">
    <font-awesome-icon :icon="nameIcon" size="lg" />
  </a>
</template>

<script setup>
  const props = defineProps({
    nameIcon: String,
    url: String
  })
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
