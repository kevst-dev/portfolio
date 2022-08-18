<template>
  <div class="container-profile">
    <Title/>

    <p class="paragraph">
      Desarrollador WEB apasionado por la informática
      y el software libre, enfocado en nunca parar de aprender.
    </p>

    <SocialNetworks/>

    <div class="container-buttons">
      <Button
        name="Contáctame"
        href="#contact"
        styleButton="button-normal"
        urlIcon="fa-regular fa-envelope"
      />
      <Button
        v-if="!isMobile()"
        name="Descargar CV"
        download="CV-Kevin.pdf"
        href="Hoja-de-vida.pdf"
        styleButton="button-outline"
        urlIcon="fa-regular fa-file-lines"
      />
      <Button
        v-else
        name="Descargar CV"
        download="CV-Kevin.pdf"
        href="Hoja-de-vida.pdf"
        styleButton="button-text"
      />
    </div>
  </div>
</template>

<script setup>
  import Title from './title.vue'
  import SocialNetworks from './social-networks/social-main.vue'
  import Button from '../../standard/button.vue'

  const isMobile = () => { return (screen.width <= 420) }
</script>

<style scoped>
  .container-profile {
    width: 50%;
    height: 436px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .data-paragraph {
    color: var(--color-texto-1);
    font-size: var(--font-size-body-text);
    font-weight: 400;
  }

  .container-buttons {
    display: flex;
    gap: 35px;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-profile {
      width: 80%;
      justify-content: center;
      align-items: center;
      gap: 35px;
    }

    .paragraph {
      text-align: center;
    }
  }

  /* Tablet-min */
  @media screen and (max-width: 584px){
    .container-profile {
      width: 100%;
    }
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .container-profile {
      height: 100%;
    }
    .container-buttons {
      flex-direction: column;
      gap: 0;
    }
  }
</style>
