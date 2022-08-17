<template>
  <div class="paragraph">
    <hr class="line">
    <p class="text">
      Soy Kevin, un estudiante de octavo semestre de ingeniería de
      sistemas y desarrollador <span>Front-End</span> autodidacta y
      apasionado por nunca parar de aprender.<br><br>

      Siempre he sido una persona muy interesada por la informática,
      pero, inicie mis estudios sobre desarrollo con mayor compromiso,
      al inicio del año <span>2018</span>. Desde entonces me he sumergido
      en un rápido avance para crecer como profesional, proponiéndome
      retos, que me ayudan a mejorar como desarrollador. Puedes ver mi
      trabajo en la sección de Proyectos.
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .paragraph {
    display: flex;
    gap: 15px;
  }

  .line {
    width: 5px;
    border-radius: 5px;
    border: 1px solid var(--color-primario);
    background-color: var(--color-primario);
  }

  .text {
    font-size: var(--font-size-small);
    color: var(--color-texto-1);
    font-weight: 400;
  }

  .text span {
    color: var(--color-primario);
    font-weight: 700;
  }

  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
