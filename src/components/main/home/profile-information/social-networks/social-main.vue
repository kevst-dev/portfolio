<template>
  <div class="container-social-networks">
    <p class="title">Sígueme:</p>

    <div class="social-links">
      <SocialLink
        nameIcon="fa-brands fa-linkedin-in"
        url="https://github.com/kevst-dev"
      />
      <SocialLink
        nameIcon="fa-brands fa-github"
        url="https://github.com/kevst-dev"
      />
      <SocialLink
        nameIcon="fa-brands fa-codepen"
        url="https://www.google.com"
      />
    </div>
  </div>
</template>

<script setup>
  import SocialLink from './social-link.vue'
</script>

<style scoped>
  .container-social-networks {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  .title {
    color: var(--color-texto-1);
    font-size: var(--font-size-body-text);
    font-weight: 400;
  }

  .social-links {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
</style>
