<template>
  <MainHeader/>
  <Main/>
</template>

<script setup>
  import MainHeader from './components/header/main-header.vue'
  import Main from './components/main.vue'
</script>

<style>
  @import './main.css';

  #app {
    width: 100%;
    height: 100vh;
  }
</style>
