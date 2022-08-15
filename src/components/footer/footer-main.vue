<template>
  <footer>
    <Contact/>
  </footer>
</template>

<script>
  import Contact from './contact/contact-main.vue'
  export default {
    components: {
      Contact
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-contact{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
