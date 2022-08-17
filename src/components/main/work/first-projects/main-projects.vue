<template>
  <div class="container-projects">
    <Project v-for="project in firstProjects"
      :contentProject="project"
    />
  </div>
</template>

<script setup>
  import Project from './project/main-project.vue'
  import { firstProjects } from './information-projects.js'
</script>

<style scoped>
  .container-projects {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 95px;
  }
  /* Tablet */
  @media screen and (max-width: 768px){
    .container-projects {
      gap: 60px;
    }
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .container-projects {
      gap: 35px;
    }
  }
</style>
