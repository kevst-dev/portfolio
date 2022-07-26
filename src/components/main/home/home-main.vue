<template>
  <section class="container-home" id="home">
    <ProfileData/>
    <ProfilePhoto/>
  </section>
</template>

<script>
  import ProfilePhoto from './profile-photo.vue'
  import ProfileData from './profile-data.vue'

  export default {
    components: {
      ProfilePhoto,
      ProfileData
    },
    setup() {

      return {
      }
    }
  }
</script>

<style scoped>
  .container-home {
    width: 100%;
    height: 85vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-home {
      margin-top: 60px;
      flex-direction: column;
      gap: 60px;
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
    .container-home {
      height: 100%;
    }
  }
</style>
