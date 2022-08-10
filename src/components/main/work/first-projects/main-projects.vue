<template>
  <div class="container-projects">
    <Project
      :contentProject="firstProjects[0]"
    />
    <Project
      :contentProject="firstProjects[1]"
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
    z-index: var(--z-back);
  }
</style>
