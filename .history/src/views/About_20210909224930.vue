<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">Back</router-link>
  </div>
    <Footer />
</template>

<script>

import Footer from '../components/Footer.vue'

export default {
  name: 'Privacy',
  components:{
    Footer
  }
}
</script>
<style scoped>
  .about{
    position: relative;
    height: 100vh;
    width: 100%;
  }
</style>