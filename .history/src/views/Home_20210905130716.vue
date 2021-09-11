<template>
  <div class="container">
    <!-- <img class="bg" src="./assets/banner.jpg" alt=""> -->
    <img class="bg" src="../assets/banner.jpg" alt="">
    <Particles
      id="tsparticles"
      :options="options"
    />
    <Hero />
    <Why />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue'
import Why from '../components/Why.vue'
import options from '../options'

export default {
  name: 'Home',
  components: {
    Hero,
    Why,
  },
  setup(){
    return{
      options,
    }
  }
}
</script>
