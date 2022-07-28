<template>
  <img
    src="../../../assets/about/foto-perfil.webp"
    alt="Foto de perfil"
    class="photo"
  >
</template>

<script>

  export default {
    components: {
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .photo {
    padding-top: 50px;
    width: 386px;
    height: 506px;
    object-fit: cover;

    background-color: var(--color-primario);
    border-radius: 30px;
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .photo {
      padding-top: 10px;
      width: 321px;
      height: 421px;
    }
  }
</style>
