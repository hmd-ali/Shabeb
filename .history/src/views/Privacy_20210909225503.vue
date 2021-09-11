<template>
  <div class="privacy">
    <h1>This is an privacy page</h1>
    <router-link to="/">Back</router-link>
  </div>
    <
    <Footer />
</template>

<script>

import Footer from '../components/Footer.vue'
import Privacy from '../components/Privacy.vue'

export default {
  name: 'Privacy',
  components:{
    Footer,
    Privacy
  }
}
</script>
<style scoped>
  .privacy{
    position: relative;
    height: 100vh;
    width: 100%;
  }
</style>