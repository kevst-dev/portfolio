<template>
  <div class="container">
    <font-awesome-icon icon="fa-regular fa-folder"
      size="2x" class="icon-folder" />
    <Links :urlGithub="urlGithub" :urlApp="urlApp" />
  </div>
</template>

<script setup>
  import Links from './links.vue'

  const props = defineProps({
    urlGithub: String,
    urlApp:String
  })
</script>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .icon-folder {
    color: var(--color-primario);
  }

  .title {
    margin: 0;
    font-size: var(--font-size-heading-4);
    font-weight: 600;
    color: var(--color-primario);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
  }
</style>
