<template>
  <section class="container-work" id="work">
    <StandardTitle nameTitle="Portafolio"/>

    <div class="information">

      <div class="first-projects">
        <StandardSubTitle nameTitle="Principales proyectos"/>
        <FirstProjects/>
      </div>

      <Skills/>
    </div>
  </section>
</template>

<script>
  import StandardTitle from '../standard/title.vue'
  import StandardSubTitle from '../standard/sub-title.vue'
  import FirstProjects from './first-projects/main-projects.vue'

  export default {
    components: {
      StandardTitle,
      StandardSubTitle,
      FirstProjects
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-work {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .information {
    margin-top: 60px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .information {
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
