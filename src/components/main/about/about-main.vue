<template>
  <section class="container-about" id="about">
    <StandardTitle nameTitle="Sobre mi"/>

    <div class="information">
      <ProfilePhoto/>

      <div class="description">
        <StandardSubTitle nameTitle="Quien soy"/>

        <Paragraph />

        <StandardButton
          name="Mi portafolio"
          styleButton="button-normal"
          urlIcon="fa-solid fa-cubes-stacked"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import StandardTitle from '../standard/title.vue'
  import ProfilePhoto from './profile-photo.vue'
  import StandardSubTitle from '../standard/sub-title.vue'
  import Paragraph from './paragraph.vue'
  import StandardButton from '../standard/button.vue'
</script>

<style scoped>
  .container-about {
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
