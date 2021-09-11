<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>

import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components:{
    Footer
  }
}
</script>