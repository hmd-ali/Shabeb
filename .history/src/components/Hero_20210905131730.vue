<template>
    <div class="container">
        <div class="content">
            <h1>Fastest<br> Delivery<br>Service</h1>
            <p>Learn more</p>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="social">
            <ul>
                <li class="rotate"><a href="#">Follow</a></li>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hero',
    }
</script>

<style scoped>
    .container{
        position: relative;
        width: 100%;
        height: 100vh;
        /* pointer-events: none; */
        display: flex;
        align-items: center;
    }
    .content{
        /* position: absolute;
        right: 30%;
        top: 50%;
        transform: translateY(-50%); */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container .content h1{
        font-size: 14rem;
        color: var(--color);
        /* color: transparent; */
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        line-height: 0.73;
        text-transform: uppercase;
        letter-spacing: -12px;
        clip-path: polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%);
        /* stroke-width: 2px; */
        /* -webkit-text-stroke-color: #f30808; */
        
    }
    .container .content p{
        font-size: 2rem;
        color: var(--color);
        margin-top: 2rem;
    }
    .container .content .fa-chevron-down{
        color: var(--color);
        font-size: 4rem;
        margin-top: 2rem;
    }
    .social{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
    }
    .social ul{
        list-style: none;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .social ul li{
        margin-bottom: 2rem;
    }
    .social ul li a{
        /* color: #00D1FF; */
        color: var(--color);
        text-decoration: none;
    }
    .social ul li:first-child a{
        display: inline-block;
        transform: rotate(90deg);
        margin-bottom: 2rem;
        cursor: none;
    }
</style>