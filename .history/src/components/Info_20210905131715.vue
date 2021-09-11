<template>
    <div @click="toggle" :class="[toggled ? 'toggled' : '','info-container' ]">
        <h1 v-if="!toggled"> {{ title }} </h1> 
        <p v-if="toggled"> {{ description }}</p>
        <!-- <Button @click="toggle" :toggled="toggled" :text="toggled ? 'Show less' : 'Show More' " /> -->
    </div>
</template>

<script>

    import Button from './Button.vue'

    export default {
        name: 'Info',
        components:{
            Button,
        },
        props:{
            title: String,
            description: String,
        },
        data(){
            return{
                toggled: false,
            }
        },
        methods:{
            toggle(){
                this.toggled = !this.toggled
            }
        },

    }
</script>

<style scoped>
    .info-container{
        position: relative;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: var(--background);
        color: #f2f3f7;
        border-radius: 2rem;
        width: 35rem;
        height: 40rem;
        cursor: pointer;
        box-shadow:  15px 15px 33px #090b1a,
             -15px -15px 33px #0f122b;
    }
    .info-container:hover{
            box-shadow: inset 15px 15px 33px #090b1a,
            inset -15px -15px 33px #0f122b;
    }
    .info-container.toggled{
            box-shadow: inset 15px 15px 33px #090b1a,
            inset -15px -15px 33px #0f122b;
    }
    .info-container h1{
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
        color: #f2f3f7;
        pointer-events: none;
    }
    p{
        font-size: 2.5rem;
        text-align: center;
        font-weight: 500;
        color: #f2f3f7;
        pointer-events: none;
    }
    

</style>