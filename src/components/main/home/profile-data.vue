<template>
  <div class="container-data">
    <div class="title">
      <p class="data-welcome">¡Hola!</p>
      <h1 class="data-title">
        Yo soy <span>Kevin</span> <div>Front-End Developer.</div>
      </h1>
    </div>

    <p class="data-paragraph">
      Desarrollador WEB apasionado por la informática
      y el software libre, enfocado en nunca parar de aprender.
    </p>

    <div class="social-networks">
      <p class="social-title">Sígueme:</p>

      <div class="social-links">
        <a class="social-link" href="#">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg" />
        </a>
        <a class="social-link" href="#">
          <font-awesome-icon icon="fa-brands fa-github" size="lg" />
        </a>
        <a class="social-link" href="#">
          <font-awesome-icon icon="fa-brands fa-codepen" size="lg" />
        </a>
      </div>
    </div>

    <div class="data-buttons">
      <a class="data-button" href="#">
        <font-awesome-icon icon="fa-regular fa-envelope" size="lg" />
        Contáctame
      </a>

      <a class="data-button--outline" href="#">
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        Descargar CV
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style scoped>
  .container-data {
    width: 50%;
    height: 436px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .data-welcome {
    color: var(--color-texto-2);
    font-size: var(--font-size-heading-4);
    font-weight: 500;
  }

  .data-title {
    color: var(--color-texto-1);
    font-size: var(--font-size-heading-1);
    font-weight: 700;
  }
  .data-title span {
    color: var(--color-primario);
  }

  .data-paragraph {
    color: var(--color-texto-1);
    font-size: var(--font-size-body-text);
    font-weight: 400;
  }

  .social-networks {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  .social-title {
    color: var(--color-texto-1);
    font-size: var(--font-size-body-text);
    font-weight: 400;
  }

  .social-links {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .social-link {
    color: var(--color-texto-2);
    transition: 0.4s;
  }
  .social-link:hover {
    color: var(--color-secundario);
    transform: scale(1.4);
  }

  .data-buttons {
    display: flex;
    gap: 35px;
  }

  .data-button {
    cursor: pointer;
    padding: 18px 32px;
    border-radius: 10px;
    border: 2px solid var(--color-primario);

    font-size: var(--font-size-body-text);
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--color-fondo);
    background-color: var(--color-primario);
  }
  .data-button:hover {
    background-color: var(--color-fondo);
    color: var(--color-primario);
  }

  .data-button--outline {
    cursor: pointer;
    padding: 18px 32px;
    border-radius: 10px;
    border: 2px solid var(--color-primario);

    font-size: var(--font-size-body-text);
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--color-primario);
  }
  .data-button--outline:hover {
    background-color: var(--color-primario);
    color: var(--color-fondo);
  }

  /* Desktop-min */
  @media screen and (max-width: 1256px){
    .data-title div {
      font-size: var(--font-size-heading-2);
    }
    .data-button {
      font-size: var(--font-size-small);
      font-weight: 600;
    }
    .data-button--outline {
      font-size: var(--font-size-small);
      font-weight: 600;
    }
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-data {
      width: 80%;
      justify-content: center;
      align-items: center;
      gap: 35px;
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title div {
      font-size: var(--font-size-heading-1);
    }

    .data-title, .data-paragraph {
      text-align: center;
    }
  }

  /* Tablet-min */
  @media screen and (max-width: 584px){
    .container-data {
      width: 100%;
    }
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .container-data {
      height: 100%;
    }
    .data-buttons {
      flex-direction: column;
      gap: 0;
    }
    .data-button, .data-button--outline {
      width: 100%;
      font-size: var(--font-size-min);
    }
    .data-button--outline {
      border: 0px;
      margin: 10px 0;
      padding: 0;
      color: var(--color-primario);
      display: flex;
      justify-content: center;
    }
    .data-button--outline:hover {
      background-color: var(--color-fondo);
      color: var(--color-primario);
      text-decoration-line: underline;
    }
    .data-button--outline svg { display:none }
  }

</style>
