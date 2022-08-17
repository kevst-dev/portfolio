<template>
  <figure class="container-mask">
    <img
      :src="urlAssets + '/foto-perfil.png'"
      alt="Foto de perfil"
      class="mask-photo"
    >
  </figure>
</template>

<script setup>
  const urlAssets = "src/assets/home"

</script>

<style scoped>
  .container-mask {
    width: 438px;
    height: 436px;
    background-color: var(--color-primario);
    -webkit-mask-image: url(../../../assets/home/blob-para-foto.svg);
    -webkit-mask-repeat: no-repeat;
    mask-image: url(../../../assets/home/blob-para-foto.svg);
    mask-repeat: no-repeat;
    z-index: var(--z-back);
  }

  /* mobile */
  @media screen and (max-width: 520px){
    .container-mask {
      width: 330px;
      height: 340px;
      -webkit-mask-image: url(../../../assets/home/blob-para-foto-mobile.svg.svg);
      -webkit-mask-repeat: no-repeat;
      mask-image: url(../../../assets/home/blob-para-foto-mobile.svg);
      mask-repeat: no-repeat;
    }
    .mask-photo {
      padding-top: 15px;
    }
  }
</style>
