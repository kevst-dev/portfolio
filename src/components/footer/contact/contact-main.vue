<template>
  <section class="container-contact" id="contact">
    <TitleStandard nameTitle="Contáctame"/>
    <FormContact/>
  </section>
</template>

<script>
  import TitleStandard from '../../main/standard/title.vue'
  import FormContact from './form.vue'

  export default {
    components: {
      TitleStandard,
      FormContact
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-contact{
    margin: 60px 0;
    padding: 60px 0;
    width: 100%;
    background-color: var(--color-complemento);
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  /* Tablet */
  @media screen and (max-width: 768px){
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
