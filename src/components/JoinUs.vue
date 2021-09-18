<template>
    <div class="join-container" id="join-us">
        <h1>Apply now!</h1>
        <div class="driver">
            <button @click="() => {this.driver = !this.driver}"><span>Become a driver</span></button>
            <button @click="() => {this.partner = !this.partner}"><span>Become a Partner</span></button>
            <transition name="fade">
                <PopUp @pressed="pressed" v-if="driver"/>
            </transition>
            <transition name="fade">
                <Partner @partner-pressed="partnerPressed" v-if="partner"/>
            </transition>
        </div>
    </div>
</template>

<script>

    import PopUp from '../components/PopUp.vue'
    import Partner from '../components/Partner.vue'

    export default {
        name: 'JoinUs',
        components:{
            PopUp,
            Partner,
        },
        data(){
            return{
                driver: false,
                partner: false,
            }
        },
        methods:{
            pressed(){
                this.driver = !this.driver
            },
            partnerPressed(){
                this.partner = !this.partner
            }
        }


    }
</script>

<style scoped>
    .join-container{
        width: 100%;
        padding: 6rem 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--background);
    }
    .join-container>h1{
        font-size: 4rem;
        color: var(--accent);
        font-weight: 500;
    }
    .driver{
        display: flex;
        flex-direction: row;
        align-items: center;
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
    .slide-fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    @media screen and (max-width:768px) and (min-width:480px){
        .driver{
            flex-direction: column;
        }
    }
    @media screen and (max-width:479px) {
        .join-container h1{
            font-size: 2rem;
        }
        .driver{
            flex-direction: column;
        }
    }
</style>