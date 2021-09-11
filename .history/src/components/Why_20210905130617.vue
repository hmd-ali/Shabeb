<template>
    <div class="container">
        <div class="mission">
            <img src="./" alt="">
            <p>Here at Shabeb, our <span>mission</span> is to help you <span>grow</span> your <span>business</span> one delivery at a time. We're here to take away the stress of making sure your deliveries arrive both on <span>time</span> and in <span>good condition</span>. The best part is that you'll immediately notice <span>savings</span> when you switch to our <span>solutions</span>.</p>
        </div>
        <div class="content">
            <h1>Why join us?</h1>
            <div class='info-cont'>
                <Info title="Convenient Pick up & Delivery" description="Get your goods where they need to go with the least hassle possible." />
                <Info title="Live Order Tracking" description="Track your orders as they explore the roads with us and reach their destination." />
                <Info title="24/7 Support & Service" description="Our services are available 24/7 and our customer support office is always ready to answer your call." />
            </div>
        </div>
    </div>
</template>

<script>

    import Info from './Info.vue'

    export default {
        name: 'Why',
        components:{
            Info,
        }
    }
</script>

<style scoped>
    .container{
        position: relative;
        min-height: 100vh;
        height: fit-content;
        width: 100%;
        background: var(--background);
        color: var(--accent);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 20%;

        --color-primary: #ffffff;
        --background: #0C0E22;
        --accent: #3a6fe6;

    }
    .mission{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 4rem 10rem;
        background: var(--color-primary);
        border-radius: 4rem;
        color: var(--background);
        margin-top: 10rem;
        margin-bottom: 10rem;
    }
    .mission img{
        width: 50rem;
        height: 50rem;
    }
    .mission p{
        font-size: 2.4rem;
        font-weight: 500;
        width: 50rem;
        text-align: justify;
        letter-spacing: .3rem;
        line-height: 1.6;
    }
    /* .mission p span:nth-child(1){
        color: #FF8B7B;
    }
    .mission p span:nth-child(2){
        color: #407BFF;
    }
    .mission p span:nth-child(3){
        color: #9C73FF;
    }
    .mission p span:nth-child(4){
        color: #01F0FF;
    }
    .mission p span:nth-child(5){
        color: #407BFF;
    }
    .mission p span:nth-child(6){
        color: #FF8B7B;
    }
    .mission p span:nth-child(7){
        color: #FFCEA9;
    } */
    .mission p span{
        color: #3a6fe6;
    }
    .content{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content>h1{
        font-size: 4rem;
        /* color: var(--color-primary); */
        color: var(--accent);
        font-weight: 400;
        margin-bottom: 10rem;
    }
    .content .info-cont{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>