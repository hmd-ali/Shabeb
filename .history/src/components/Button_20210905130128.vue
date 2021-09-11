<template>
    <button :class="toggled ? 'toggled' : '' "> <span>{{ text }}</span></button>
</template>

<script>
    export default {
        name: 'Button',
        props:{
            text: String,
            toggled: Boolean,
        },
    }
</script>

<style scoped>
    button{
        padding: 1rem 3rem;
        /* color: var(--accent); */
        color: var(--accent);
        font-size: 2rem;
        font-weight: 600;
        /* background: rgb(78, 11, 185); */
        background: #f2f3f7;
        /* background: white; */
        outline: 0;
        border: 0;
        border-radius: 2rem;
        box-shadow: 
            -.2rem -.2rem .6rem rgba(255,255,255,1),
            -.2rem -.2rem 1rem rgba(255,255,255,.5),
            inset .2rem .2rem .4rem rgba(255,255,255,.1),
            .2rem .2rem .8rem rgba(0,0,0,.15) 
        ;
        transition: all 0.25s ease;
    }
    button:hover{
        box-shadow: 
            inset -.2rem -.2rem .6rem rgba(255,255,255,1),
            inset -.2rem -.2rem 1rem rgba(255,255,255,.5),
            inset .2rem .2rem .4rem rgba(255,255,255,.1),
            inset .2rem .2rem .8rem rgba(0,0,0,.15) 
        ;
        cursor: pointer;
    }
    button:hover span{
        display: inline-block;
        transform: scale(.95);
    }
    .toggled{
        box-shadow: 
            inset -.2rem -.2rem .6rem rgba(255,255,255,1),
            inset -.2rem -.2rem 1rem rgba(255,255,255,.5),
            inset .2rem .2rem .4rem rgba(255,255,255,.1),
            inset .2rem .2rem .8rem rgba(0,0,0,.15) 
        ;        
    }


</style>