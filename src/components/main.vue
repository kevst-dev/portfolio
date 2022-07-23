<template>
  <main class="main">
    <SectionHome/>
  </main>
</template>

<script>
  import SectionHome from './main/home/home-main.vue'

  export default {
    components: {
      SectionHome
    }
  }
</script>

<style>
  .main {
    margin-top: calc(30px + var(--header-height));
    padding: 0 95px;
    height: 100%;
  }

  /* mobile */
  @media screen and (max-width: 768px){
    .main { padding: 0 20px; }
  }
</style>
