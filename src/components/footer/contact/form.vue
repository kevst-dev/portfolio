<template>
  <form class="container-form">
    <input
      name="name"
      placeholder="Nombre"
      class="input" required
    />
    <input
      name="emailaddress"
      placeholder="Correo electrónico"
      class="input"
      type="email" required
    />
    <textarea
      name="subject"
      placeholder="Tu mensaje"
      class="input textarea" required
    ></textarea>
    <input
      name="submit"
      class="btn-form"
      type="submit"
      value="Enviar"
    />
  </form>
</template>

<script setup>
</script>

<style scoped>
  .container-form {
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .input {
    width: 100%;
    height: 60px;
    background-color: var(--color-fondo);
    outline: none;
    border: none;
    border-radius: 5px;
  }
  .input::placeholder {
    font-size: var(--font-size-small);
    color: var(--color-texto-2);
    padding: 15px;
  }
  .input:focus {
    font-size: var(--font-size-small);
    border: 1px solid var(--color-primario);
    padding: 15px;
    color: var(--color-texto-2);
  }
  .input:focus::placeholder {
    opacity: 50%;
    padding: 0;
  }
  .textarea { height: 100px; }
  .btn-form {
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
  .btn-form:hover {
    background-color: var(--color-fondo);
    color: var(--color-primario);
  }
  /* Tablet */
  @media screen and (max-width: 768px){
  }
  /* Mobile */
  @media screen and (max-width: 420px){
    .container-form {
      padding: 0 20px;
      min-width: 100%;
    }
  }
</style>
