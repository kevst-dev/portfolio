<template>
  <a class="social-link" :href="url" target="_blank">
    <font-awesome-icon :icon="nameIcon" size="lg" />
  </a>
</template>

<script>
  export default {
    props: {
      nameIcon: String,
      url: String
    },
    components: {
    },
    setup() {

      return {
      }
    }
  }
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
