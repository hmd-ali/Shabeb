<template>
  <div class="container">
    <!-- <img class="bg" src="./assets/banner.jpg" alt=""> -->
    <img class="bg" src="../assets/banner.jpg" alt="">
    <Particles
      id="tsparticles"
      :options="options"
    />
    <Header />
    <Hero />
    <Why />
    <JoinUs />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue'
import Why from '../components/Why.vue'
import Footer from '../components/Footer.vue'
import JoinUs from '../components/JoinUs.vue'
import Header from '../components/Header.vue'
import options from '../options'

export default {
  name: 'Home',
  components: {
    Hero,
    Why,
    Footer,
    JoinUs,
    Header,
  },
  setup(){
    return{
      options,
    }
  }
}
</script>
<style>

:root{
  --color-primary: #ffffff;
  --background: #0C0E22;
  /* --background: #2b1212; */
  --accent: #3a6fe6;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}
body{
  background: var(--background);
}
body::-webkit-scrollbar{
  width: 1rem;
}
body::-webkit-scrollbar-thumb{
  background: var(--accent);
  border-radius: 1rem;
}
body::-webkit-scrollbar-track{
  background: none;
}

.container{
  position: relative;
  width: 100%;
  height: 100vh;
}
.bg{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#tsparticles{
  position: absolute;
  mix-blend-mode: screen;
  height: 100vh;
  width: 100%;
}

</style>