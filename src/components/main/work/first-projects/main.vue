<template>
  <div class="items-container">

    <TechnologiesItem
      v-for="technologie in technologies"
      :technologie="technologie"
    />
  </div>
</template>

<script>
  import TechnologiesItem from './item.vue'
  import  { technologies } from './information-items.js'

  export default {
    created() {
      console.log("Aquii", technologies)
    },
    components: {
      TechnologiesItem
    },
    setup() {
      return {
        technologies,
      }
    }
  }
</script>

<style scoped>

  .items-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    margin-bottom: 80px;
  }
  /* Tablet */
  @media screen and (max-width: 768px){
  }
  /* Mobile */
  @media screen and (max-width: 420px){
    .items-container {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
</style>
