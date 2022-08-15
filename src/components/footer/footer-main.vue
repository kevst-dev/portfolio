<template>
  <footer>
    <Contact/>
    <div class="container-footer">
      <SubTitle nameTitle="Kevst-dev"/>
      <div class="conatiner-links">
        <SocialLink
          nameIcon="fa-brands fa-linkedin-in"
          url="https://github.com/kevst-dev"
        />
        <SocialLink
          nameIcon="fa-brands fa-github"
          url="https://github.com/kevst-dev"
        />
        <SocialLink
          nameIcon="fa-brands fa-codepen"
          url="https://www.google.com"
        />
      </div>
      <p class="copyright"> 2022 copyright all right reserveda</p>
    </div>
  </footer>
</template>

<script>
  import Contact from './contact/contact-main.vue'
  import SubTitle from '../main/standard/sub-title.vue'
  import SocialLink from './social-link.vue'

  export default {
    components: {
    Contact,
    SubTitle,
    SocialLink
},
    setup() {
      return {
      }
    }
  }
</script>

<style scoped>
  .container-footer {
    margin-bottom: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .conatiner-links {
    display: flex;
    gap: 15px;
  }
  .copyright {
    font-size: var(--font-size-body-text);
    color: var(--color-texto-2);
  }
  /* Tablet */
  @media screen and (max-width: 768px){
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
