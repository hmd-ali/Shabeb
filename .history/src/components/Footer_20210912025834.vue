<template>
    <div class="footer-container">
        <div class="social">
            <div class="logo"><img src="@/assets/Shabeb-logo.svg" alt="Shabeb Logo"></div>
            <div class="links">
                <ul>
                    <li><a href="https://www.facebook.com/shabebdelivery" target="_blank" ><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/shabebdelivery/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/ShabebDelivery" target="_blank"><i class="fab fa-twitter"></i></a></li>
                </ul>
        </div>
        </div>
        <div class="splitter"></div>
        <div class="links-container">
            <div id="nav">
                <h1>Site Map</h1>
                <router-link to="/">Home</router-link>
                <router-link to="/privacy">Privacy Policy</router-link>
                <router-link to="/terms">Terms and Conditions</router-link>
            </div>
        </div>
        
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
        border-top-right-radius: 4rem;
        border-top-left-radius: 4rem;
    }
    .footer-container .splitter{
        width: 100%;
        height: 3px;
        border-radius: 2rem;
        margin: 2rem 0;
        background: var(--background);
    }
    .footer-container .social{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
    .footer-container .social .links{
        position: relative;
        display: flex;
        align-items: center;
    }
    .footer-container .social .links ul{
        list-style: none;
        display: flex;
        font-size: 4rem;
        width: 30rem;
        align-items: center;
        justify-content: space-around;
    }
    .footer-container .social .links ul li a{
        display: inline-block;
        color: var(--background);
    }
    .footer-container .social .links ul li a:hover{
        color: var(--accent);
        transform: translateY(-.5rem);
    }
    .footer-container #nav{
        display: flex;
        flex-direction: column;
        width: 30rem;
        justify-content: center;
        align-items: left;
    }
    #nav h1{
        margin-bottom: 2rem;
    }
    #nav a {
        font-weight: 500;
        font-size: 1.5rem;
        color: var(--background);
        text-decoration: none;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    #nav a:hover{
        color: var(--accent);
    }
</style>