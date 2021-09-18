<template>
    <div class="header-container" ref="header"  @click="log" :class="isScrolled ? 'active' : false">
        <div class="logo">
            <router-link to="/"><img src="../assets/Shabeb-logo.svg" alt="Shabeb Logo"></router-link>
        </div>
        <div class="navigation">
            <a href="/#home"><span>Home</span></a>
            <a href="/#about"><span>About</span></a>
            <a href="/#join-us"><span>Join Us</span></a>
            <button @click="this.toggled = !this.toggled"><i class="fas fa-bars"></i></button>
        </div>
        <div v-if="toggled" class="mobile-nav">
            <a @click="this.toggled = !this.toggled" href="/#home"><span>Home</span></a>
            <a @click="this.toggled = !this.toggled" href="/#about"><span>About</span></a>
            <a @click="this.toggled = !this.toggled" href="/#join-us"><span>Join Us</span></a>
            <button @click="this.toggled = !this.toggled"><i class="fas fa-times"></i></button>
        </div>
    </div>

</template>

<script>


    export default {
        name: 'Header',
        data(){
            return{
                isScrolled : false,
                toggled: false
            }
        },
        mounted(){
            window.addEventListener('scroll', () => {window.scrollY > 0 ? this.isScrolled = true : this.isScrolled = false})
        }
    }
</script>

<style scoped>
    .header-container{
        position: fixed;
        width: 100%;
        padding: 2rem 8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
        transition: padding 500ms;
    }
    .header-container.active{
        padding: 1rem 8rem;
        background: var(--color-primary);
        border-bottom-left-radius: 4rem;
        border-bottom-right-radius: 4rem;
    }
    .navigation{
        position: relative;
        display: flex;
        width: 50rem;
        justify-content: space-around;
        align-items: center;
    }
    .navigation a{
        display: inline-block;
        padding: 1rem 2rem;
        border-radius: 2rem;
        text-decoration: none;
        color: var(--backfround);
    }
    .navigation a:active{
        color: var(--background);
    }
    .navigation a:visited{
        color: var(--background);
    }
    .navigation a:hover{
        color: var(--accent);
    }
    .navigation a span{
        font-size: 2rem;
    }
    .navigation button{
        background: none;
        border: none;
        font-size: 3rem;
    }
    .navigation button{
        display: none;
    }
    .mobile-nav{
        position: fixed;
        width: 100%;
        height: 100vh;
        padding: 4rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        top: 0;
        left: 0;
        background: var(--background);
    }
    .mobile-nav a{
        font-size: 2rem;
        padding: 2rem;
        color: var(--accent);
        text-decoration: none;
        text-transform: uppercase;
    }
    .mobile-nav button{
        position: absolute;
        top: 5%;
        right: 5%;
        background: none;
        border: none;
        font-size: 3rem;
        color: var(--accent);
    }
    .test{
        color: blue;
        color: red;
        color: white;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        .header-container{
            padding: 1rem 2rem;
        }
        .header-container .logo{
            width: 10rem;
            position: relative;
        }
        .header-container .logo img{
            width: 100%;
        }
        .header-container.active{
            padding: 1rem 1rem;
        }
        .navigation{
            width: unset;
            padding: 2rem;
        }
        .navigation a{
            display: none;
        }
        .navigation button{
            display: block;
        }

    }
    @media screen and (max-width:479px){
        .header-container{
            padding: 1rem 2rem;
        }
        .header-container .logo{
            width: 5em;
            position: relative;
        }
        .header-container .logo img{
            width: 100%;
        }
        .header-container.active{
            padding: 1rem 1rem;
        }
        .navigation button{
            display: block;
        }
        .navigation{
            width: unset;
            padding: 2rem;
        }
        .navigation a{
            display: none;
        }

    }

</style>