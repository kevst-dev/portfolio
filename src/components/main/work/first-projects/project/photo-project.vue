<template>
  <a
    class="container-photo"
    :class="{container_photo__invert: isLeftPosition(contentProject)}"
    :href="contentProject.urlGithub" target="_blank"
  >
    <span class="blur-photo"></span>
    <img
      :src="`${contentProject.urlImage}`"
      alt="Previsualización del proyecto"
      class="photo"
    >
  </a>
</template>

<script setup>
  const props = defineProps({
    contentProject: {}
  })

  const isLeftPosition = (contentProject) => {
    return (contentProject.informationPosition === "left")
  }
</script>

<style scoped>
  .container-photo {
    grid-column: 1/3;
    position: relative;
    height: 362px;
    cursor: pointer;
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
  /* Tablet */
  @media screen and (max-width: 768px){
    .container-photo {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
    .photo { }
  }
</style>
