<template>
    <div class="footer-container">
        <div class="social">
            <div class="logo"><img src="@/assets/Shabeb-logo.svg" alt="Shabeb Logo"></div>
            <div class="links">
                <ul>
                    <li><a href="https://www.facebook.com/shabebdelivery" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/shabebdelivery/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/ShabebDelivery" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
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
            <div class="partners-container">
                <h1>Our Other Businesses</h1>
                <div class="partners">
                    <a href="https://presentail.com/">Presentail</a>
                </div>
            </div>
            <div class="copyrights">
                <h1>&copy; Copyrights Reserved Shabeb 2021</h1>
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
        /* width: 30rem; */
        justify-content: center;
        align-items: left;
    }
    .footer-container .links-container{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #nav{
        width: 33%;
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
        color: var(--accent);
    }
    #nav a:hover{
        color: var(--accent);
    }
    .copyrights-container{
        width: 33%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .copyrights{
        width: 33%;
        position: relative;
        text-align: center;
    }
    .copyrights h1{
        font-size: 2rem;
        font-weight: 400;
        /* margin-bottom: 2rem; */
    }   
    .partners-container{
        width: 33%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }
    .partners{
        text-align: center;
    }
    .partners-container h1{
        margin-bottom: 2rem;
    }
    .partners a{
        font-size: 3rem;
        text-decoration: none;
        color: var(--background);
        display: inline-block;
    }
    .partners a:hover{
        color: var(--accent);
    }
    @media screen and (max-width:768px) and (min-width:480px){
        .footer-container{
            padding: 1rem 1rem;
        }
        .footer-container .social .logo{
            width: 6rem;
            position: relative;
        }
        .footer-container .social .logo img{
            width: 100%;
        }
        .footer-container .social .links ul{
            font-size: 3rem;
            width: 20rem;
        }
        #nav h1{
            font-size: 1.6rem;
        }
        #nav a{
            font-size: 1.2rem;
        }
        .partners-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .partners-container h1{
            display: inline-block;
            font-size: 1.6rem;
            margin-bottom: 3rem;
            text-align: center;
        }
        .partners-container .partners a{
            font-size: 1.5rem;
        }
        .copyrights h1{
            font-size: 1.4rem;
        }
    }
    @media screen and (max-width:479px){
        .footer-container{
            padding: 1rem 1rem;
        }
        .footer-container .social .logo{
            width: 6rem;
            position: relative;
        }
        .footer-container .social .logo img{
            width: 100%;
        }
        .footer-container .social .links ul{
            font-size: 3rem;
            width: 20rem;
        }
        #nav h1{
            font-size: 1.6rem;
        }
        #nav a{
            font-size: 1.2rem;
        }
        .partners-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .partners-container h1{
            display: inline-block;
            font-size: 1.6rem;
            margin-bottom: 3rem;
            text-align: center;
        }
        .partners-container .partners a{
            font-size: 1.5rem;
        }
        .copyrights h1{
            font-size: 1rem;
        }
    }
</style>