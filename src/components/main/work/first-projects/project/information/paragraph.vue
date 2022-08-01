<template>
  <div class="first-project__container-paragraph">
    <p class="first-project__paragraph" v-html="paragraph"></p>
  </div>
</template>

<script>

  export default {
    props: {
      paragraph: String
    },
    components: {
    },
    setup() {
      return {
      }
    }
  }
</script>

<style >
  .first-project__container-paragraph {
    margin-left: -15%;
    padding: 30px 35px;
    border-radius: 8px;
    background-color: var(--color-complemento);
    font-size: var(--font-size-body-text);
  }

  .first-project__paragraph {
    font-size: var(--font-size-body-text);
    text-align: right;
    color: var(--color-texto-1);
  }
  .first-project__paragraph span {
    font-weight: 700;
    color: var(--color-primario);
  }
</style>
