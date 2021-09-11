<template>
    <div class="join-container">
        <div class="driver">
            <button  @click="() =>{this.driver = !this.driver}"><span>Become a driver</span></button>
            <button><span>Become a Partner</span></button>
            <PopUp v-if="driver"/>
        </div>
    </div>
</template>

<script>

    import PopUp from '../components/PopUp.vue'

    export default {
        name: 'JoinUs',
        components:{
            PopUp,
            
        },
        data(){
            return{
                driver: false,
            }
        },
        methods:{
            pressed(){
                this.driver = !this.driver
            }
        }


    }
</script>

<style scoped>
    .join-container{
        width: 100%;
        padding: 4rem 8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: var(--background);
    }
    button{
        display: inline-block;
        outline: none;
        border: none;
        border-radius: 4rem;
        padding: 2rem 4rem;
        cursor: pointer;
        margin: 5rem;
        background: var(--color-primary);
        color: var(--background);
        /* color: var(--color-primary); */
        font-size: 2.5rem;
        font-weight: 600;
    }
    button span{
        display: inline-block;
    }
    button:hover{
        background: var(--accent);
        color: var(--color-primary);
    }
    /* button:hover span{
        transform: scale(0.9);
    } */
</style>