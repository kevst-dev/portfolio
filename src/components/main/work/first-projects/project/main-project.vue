<template>
  <div class="container-project">
    <PhotoProject
      :urlProject="contentProject.urlImage"
    />
    <InformationProject
      :contentProject="contentProject"
    />
  </div>
</template>

<script>
  import PhotoProject from './photo-project.vue'
  import InformationProject from './information-project.vue'

  export default {
    created() {
    },
    props: {
      contentProject: {},
    },
    components: {
      PhotoProject,
      InformationProject
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-project {
    max-width: 1300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
