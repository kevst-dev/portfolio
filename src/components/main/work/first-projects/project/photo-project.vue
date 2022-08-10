<template>
  <div 
    class="container-photo" 
    :class="{container_photo__invert: isLeftPosition(informationPosition)}"
  >
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
      urlProject: String,
      informationPosition: String
    },
    components: {
    },
    setup() {
      const isLeftPosition = (informationPosition) => {
        return (informationPosition === "left")
      }

      return {
        isLeftPosition
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
  .container_photo__invert {
    grid-column: 3/5;
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
