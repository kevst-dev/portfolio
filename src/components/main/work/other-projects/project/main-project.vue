<template>
  <div class="container-project ">
    <InformationProject
      :contentProject="contentProject"
    />
  </div>
</template>

<script>
  import InformationProject from './information-project.vue'

  export default {
    created() {
    },
    props: {
      contentProject: {},
    },
    components: {
      InformationProject
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-project {
    background-color: var(--color-complemento);
    border-radius: 10px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-project {
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
