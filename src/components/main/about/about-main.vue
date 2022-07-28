<template>
  <section class="container-about" id="about">
    <StandardTitle nameTitle="sobre mi"/>

    <div class="information">
      <ProfilePhoto/>

      <div class="description">
        <StandardSubTitle nameTitle="Quien soy"/>

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
        <a class="button-show-portfolio" href="#">
          <font-awesome-icon icon="fa-solid fa-cubes-stacked" size="lg"/>
          Mi portafolio
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import StandardTitle from '../standard/title.vue'
  import ProfilePhoto from './profile-photo.vue'
  import StandardSubTitle from '../standard/sub-title.vue'

  export default {
    components: {
      StandardTitle,
      ProfilePhoto,
      StandardSubTitle
    },
    setup() {

      return {
      }
    }
  }
</script>

<style scoped>
  .container-about {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .information {
    margin-top: 60px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 130px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

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


  .button-show-portfolio {
    width: fit-content;
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
  .button-show-portfolio:hover {
    background-color: var(--color-fondo);
    color: var(--color-primario);
  }
  /* Tablet */
  @media screen and (max-width: 768px){

    .information {
      flex-direction: column;
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
