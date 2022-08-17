<template>
  <section class="container-skills" id="skills">
    <StandardTitle nameTitle="Habilidades"/>

    <div class="information">

      <div class="description">
        <StandardSubTitle nameTitle="Que hago"/>
        <Paragraph/>
      </div>

      <Skills/>
    </div>
  </section>
</template>

<script setup>
  import StandardTitle from '../standard/title.vue'
  import StandardSubTitle from '../standard/sub-title.vue'
  import Paragraph from './paragraph.vue'
  import Skills from './technologies/container.vue'
</script>

<style scoped>
  .container-skills {
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
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 35px;
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
