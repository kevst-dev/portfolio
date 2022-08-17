<template>
  <div class="container-information">
    <Header
      :urlGithub="contentProject.urlGithub"
      :urlApp="contentProject.urlApp"
    />

    <TitleProject :name="contentProject.name"/>

    <ParagraphProject :paragraph="contentProject.paragraph" />

    <Technologies
      :nameTechnologies="contentProject.technologies"
    />

  </div>
</template>

<script setup>
  import Header from './information/header.vue'
  import TitleProject from './information/title.vue'
  import ParagraphProject from './information/paragraph.vue'
  import Technologies from './information/technologies.vue'

  const props = defineProps({
    contentProject: {}
  })

  const isLeftPosition = (contentProject) => {
    return (contentProject.informationPosition === "left")
  }
</script>

<style scoped>
  .container-information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
  }

  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
