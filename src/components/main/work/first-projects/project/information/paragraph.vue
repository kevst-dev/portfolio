<template>
  <div
    class="first-project__container-paragraph"
    :class="{first__container_invert: isLeftPosition}"
  >
    <p
      class="first-project__paragraph"
      :class="{first_project__paragraph: isLeftPosition}"
      v-html="paragraph"
    ></p>
  </div>
</template>

<script setup>
  const props = defineProps({
    paragraph: String,
    isLeftPosition: Boolean
  })
</script>

<style >
  .first-project__container-paragraph {
    margin-left: -15%;
    padding: 30px 35px;
    border-radius: 8px;
    background-color: var(--color-complemento);
    font-size: var(--font-size-body-text);
  }

  .first__container_invert {
    margin-left: 0;
    margin-right: -15%;
  }

  .first-project__paragraph {
    font-size: var(--font-size-body-text);
    text-align: right;
    color: var(--color-texto-1);
  }
  .first_project__paragraph {
    text-align: left;
  }

  .first-project__paragraph span {
    font-weight: 700;
    color: var(--color-primario);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .first-project__container-paragraph {
      margin-left: 0;
      padding: 0;
      width: 100%;
      background-color: transparent;
    }
    .first-project__paragraph {
      text-align: left;
    }
  }
</style>
