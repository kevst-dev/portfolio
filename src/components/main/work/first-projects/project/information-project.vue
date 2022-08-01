<template>
  <div class="container-information">
    <TitleProject :name="contentProject.name"/>

    <ParagraphProject :paragraph="contentProject.paragraph"/>

    <Technologies :nameTechnologies="contentProject.technologies" />

    <LinksProject
      :urlGithub="contentProject.urlGithub"
      :urlApp="contentProject.urlApp"
    />
  </div>
</template>

<script>
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
      TitleProject,
      ParagraphProject,
      Technologies,
      LinksProject
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-information{
    position: relative;
    grid-column: 3/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 25px;
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .photo { }
  }
</style>
