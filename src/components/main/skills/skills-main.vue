<template>
  <section class="container-skills" id="skills">
    <StandardTitle nameTitle="Habilidades"/>

    <div class="information">

      <div class="description">
        <StandardSubTitle nameTitle="Que hago"/>
        <Paragraph/>
      </div>

    </div>
  </section>
</template>

<script>
  import StandardTitle from '../standard/title.vue'
  import StandardSubTitle from '../standard/sub-title.vue'
  import Paragraph from './paragraph.vue'

  export default {
    components: {
      StandardTitle,
      StandardSubTitle,
      Paragraph
    },
    setup() {
      return {
      }
    }
  }
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 130px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .information {
      flex-direction: column;
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
