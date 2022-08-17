<template>
  <section class="container-contact" id="contact">
    <TitleStandard nameTitle="Contáctame"/>
    <FormContact/>
  </section>
</template>

<script setup>
  import TitleStandard from '../../main/standard/title.vue'
  import FormContact from './form.vue'
</script>

<style scoped>
  .container-contact{
    width: 100%;
    margin: 60px 0;
    padding: 60px 0;
    background-color: var(--color-complemento);
    display: flex;
    align-items: center;
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
