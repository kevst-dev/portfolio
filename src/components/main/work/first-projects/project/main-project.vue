<template>
  <div class="container-project ">
    <PhotoProject
      :contentProject="contentProject"
    />
    <InformationProject
      :contentProject="contentProject"
    />
  </div>
</template>

<script setup>
  import PhotoProject from './photo-project.vue'
  import InformationProject from './information-project.vue'

  const props = defineProps({
    contentProject: {}
  })
</script>

<style scoped>
  .container-project {
    max-width: 1300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-project {
      width: 100%;
      height: 500px;
      position: relative;
      display: inline-block;
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
