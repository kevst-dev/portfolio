<template>
  <div class="container-links">
    <a v-if=" urlGithub != null"
    class="link" :href="urlGithub" target="_blank">
      <font-awesome-icon icon="fa-brands fa-github-alt" size="lg"/>
    </a>
    <a v-if=" urlApp != null"
    class="link" :href="urlApp" target="_blank">
      <font-awesome-icon icon="fa-solid fa-share-from-square" size="lg"/>
    </a>
  </div>
</template>

<script>

  export default {
    props: {
      urlGithub: {
        type: String,
        default: null
      },
      urlApp: {
        type: String,
        default: null
      },
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
  .container-links {
    display: flex;
    gap: 15px;
  }

  .link {
    color: var(--color-texto-2);
    transition: 0.4s;
  }
  .link:hover {
    color: var(--color-secundario);
    transform: scale(1.4);
  }
</style>
