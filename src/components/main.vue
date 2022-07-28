<template>
  <main class="main">
    <SectionHome/>
    <SectionAbout/>
    <SectionSkills/>
    <SectionWork/>
  </main>
</template>

<script>
  import SectionHome from './main/home/home-main.vue'
  import SectionAbout from './main/about/about-main.vue'
  import SectionSkills from './main/skills/skills-main.vue'
  import SectionWork from './main/work/work-main.vue'

  import { scrollEvent } from './main/actions-scroll.js'
  export default {
    created() {
      window.addEventListener('scroll', scrollEvent);
    },
    components: {
      SectionHome,
      SectionAbout,
      SectionSkills,
      SectionWork
    },
    setup() {

      return {
      }
    }
  }
</script>

<style>
  .main {
    width: 100%;
    margin-top: var(--header-height);
    padding: 0 95px;

    display: flex;
    flex-direction: column;
    gap: 120px;
  }

  /* mobile */
  @media screen and (max-width: 768px){
    .main {
      padding: 0 20px;
    }
  }
</style>
