<template>
  <div>
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
  components:{

  }
}
</script>
<style>
  html{
    scroll-behavior: smooth;
  }
</style>
