<template>
  <div class="item-container">
    <div class="icon-container">
      <font-awesome-icon :icon="technologie.urlIcon" size="lg"/>
    </div>

    <p class="name">
      {{technologie.title}}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      technologie: {}
    },
    components: {
    },
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .item-container {
    background-color: var(--color-complemento);
    width: 180px;
    height: 74px;
    padding-left: 18px;
    border-radius: 8px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .icon-container {
    background-color: var(--color-fondo);
    width: 38px;
    height: 38px;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .name {
    font-size: var(--font-size-body-text);
    font-weight: 400;
  }
  /* Tablet */
  @media screen and (max-width: 768px){
  }
  /* Mobile */
  @media screen and (max-width: 420px){
    .item-container { width: 158px; }
    .name { font-size: var(--font-size-min); }
  }
</style>
