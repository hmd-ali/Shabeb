<template>
    <div class="header-container" ref="header"  @click="log" :class="isScrolled ? 'active' : false">
        <div class="logo">
            <router-link to="/"><img src="../assets/Shabeb-logo.svg" alt="Shabeb Logo"></router-link>
        </div>
        <div class="navigation">
            <a href="/#home"><span>Home</span></a>
            <a href="/#about"><span>About</span></a>
            <a href="/#join-us"><span>Join Us</span></a>
        </div>
    </div>

</template>

<script>


    export default {
        name: 'Header',
        data(){
            return{
                isScrolled : false
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
    .test{
        color: blue;
        color: red;
    }
</style>