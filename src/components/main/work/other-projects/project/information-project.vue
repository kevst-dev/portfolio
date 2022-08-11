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

<script>
  import Header from './information/header.vue'
  import TitleProject from './information/title.vue'
  import ParagraphProject from './information/paragraph.vue'
  import Technologies from './information/technologies.vue'
  import LinksProject from './information/links.vue'

  export default {
    created() {
    },
    props: {
      contentProject: {}
    },
    components: {
      Header,
      TitleProject,
      ParagraphProject,
      Technologies,
      LinksProject
    },
    setup() {
      const isLeftPosition = (contentProject) => {
        return (contentProject.informationPosition === "left")
      }

      return {
        isLeftPosition
      }
    }
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
