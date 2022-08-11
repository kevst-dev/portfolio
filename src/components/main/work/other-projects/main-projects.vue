<template>
  <div class="container-projects">
    <Project v-for="project in firstProjects"
      :contentProject="project"
    />
  </div>
</template>

<script>
  import Project from './project/main-project.vue'
  import { firstProjects } from './information-projects.js'

  export default {
    created() {
    },
    components: {
      Project,
    },
    setup() {
      return {
        firstProjects
      }
    }
  }
</script>

<style scoped>
  .container-projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    grid-auto-rows: 380px;
  }
  /* Tablet */
  @media screen and (max-width: 768px){
    .container-projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .container-projects {
      grid-template-columns: 1fr;
    }
  }
</style>
