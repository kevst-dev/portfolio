<template>
  <div class="container-photo">
    <span class="blur-photo"></span>
    <img
      :src="urlProject"
      alt="Previsualización del proyecto"
      class="photo"
    >
  </div>
</template>

<script>

  export default {
    created() {
    },
    props: {
      urlProject: String
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
  .container-projects {}

  .container-photo {
    grid-column: 1/3;
    position: relative;
    height: 362px;
  }

  .blur-photo {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255, 0.15);
  }
  .blur-photo:hover { background-color: transparent; }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* Mobile */
  @media screen and (max-width: 420px){
    .photo { }
  }
</style>
