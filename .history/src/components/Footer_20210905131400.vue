<template>
    <div class="container">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',

    }
</script>

<style scoped>
    .container{
        width: 100%;
        position: relative;
        padding: 4rem 8rem;
    }
    .container #nav{
        
    }
</style>