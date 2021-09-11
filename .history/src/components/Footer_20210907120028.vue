<template>
    <div class="footer-container">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <div class="logo">
            <img src="@/assets/Shabeb-logo.svg" alt="Shabeb Logo">
        </div>
        <div class="splitter"></div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',

    }
</script>

<style scoped>
    .footer-container{
        width: 100%;
        position: relative;
        padding: 4rem 8rem;
        background: var(--color-primary);
    }
    .footer-container .splitter
    .container #nav{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    #nav a:hover{
        color: red;
    }
</style>