<template>
  <div
    class="container-information"
    :class="{container_information__invert: isLeftPosition(contentProject)}"
  >
    <TitleProject
      :name="contentProject.name"
      :isLeftPosition="isLeftPosition(contentProject)"
    />

    <ParagraphProject
      :paragraph="contentProject.paragraph"
      :isLeftPosition="isLeftPosition(contentProject)"
    />

    <Technologies
      :nameTechnologies="contentProject.technologies"
      :isLeftPosition="isLeftPosition(contentProject)"
    />

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
    position: relative;
    grid-column: 3/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 25px;
  }

  .container_information__invert {
    grid-column: 1/3;
    grid-row: 1/2;
    align-items: flex-start;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-information {
      width: 100%;
      height: 100%;
      background-color: rgba(61, 66, 82, 0.85);
      position: absolute;
      top: 0;
      left: 0;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 30px;
      border-radius: 10px;
    }
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .container-information {
      padding: 20px;
    }
  }
</style>
