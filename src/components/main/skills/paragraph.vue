<template>
  <div class="paragraph">
    <hr class="line">
    <p class="text">
      He trabajado con tecnologías <span>Back-End</span> tales como
      <span>Java</span>, <span>Rust</span> y <span>MySql</span>, donde
      he experimentado con el desarrollo de <span>REST APIs</span>.
      Junto a ello he estudiado <span>Linux</span> y <span>Bash</span>,
      obteniendo el conocimiento suficiente para la administración de
      este tipo de sistemas y realizar automatización de tareas en
      él mismo.<br><br>

      Principalmente, me he enfocado en el desarrollo
      <span>Front-End</span>, generando páginas <span>WEB</span>
      accesibles y totalmente responsivas. Usando <span>Figma</span>,
      para maquetar y estructurar la aplicación que esté desarrollando.
      Dependiendo del proyecto utilizo <span>mobile first</span> o
      <span>desktop first</span>. En todo desarrollo aplico prácticas
      de código limpio que me permitan mantener y escalar el proyecto.
      <br><br>

      Actualmente, trabajo con las siguientes tecnologías:
      <br>
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
