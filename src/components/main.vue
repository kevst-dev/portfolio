<template>
  <main class="main">
    <SectionHome/>
    <SectionAbout/>
  </main>
</template>

<script>
  import SectionHome from './main/home/home-main.vue'
  import SectionAbout from './main/about/about-main.vue'

  export default {
    props: {
      nameTitle: "",
    },
    components: {
      SectionHome,
      SectionAbout
    }
  }
</script>

<style>
  .main {
    width: 100%;
    margin-top: var(--header-height);
    padding: 0 95px;

    display: flex;
    flex-direction: column;
    gap: 120px;
  }

  /* mobile */
  @media screen and (max-width: 768px){
    .main {
      padding: 0 20px;
    }
  }
</style>
