<template>
  <a class="social-link" :href="url" target="_blank">
    <font-awesome-icon :icon="nameIcon" size="lg" />
  </a>
</template>

<script scoped>
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
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    background-color: var(--color-complemento);
    color: var(--color-texto-2);
    transition: 0.4s;
  }
  .social-link:hover {
    color: var(--color-secundario);
    transform: scale(1.4);
  }
</style>
