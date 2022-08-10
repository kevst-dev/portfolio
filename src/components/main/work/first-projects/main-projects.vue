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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 95px;
  }
</style>
