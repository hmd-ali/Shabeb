<template>
    <div class="privacy-container">
        <div class="title">
            <h1>Privacy Policy</h1>
        </div>
        <div class="info">
            <h1></h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <p></p>
        </div>
        <div class="policies">
            <div class="policy">
                <h1></h1>
                <p></p>
                <ul>
                    <li></li>
                    <li>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div class="policy">
                <h1></h1>
                <p></p>
                <p></p>
                <ul>
                    <li>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li></li>
                    <li></li>
                    <li>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="policy">
                <h1></h1>
                <p></p>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                    <li>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
        <Footer />
</template>

<script>

    import Footer from '../components/Footer.vue'

    export default {
        name: 'Privacy',
        components:{
            Footer,
        },
    }
</script>

<style scoped>
  .privacy-container{
    padding: 5rem 5rem;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    font-size: 2rem;

  }
  h1{
    font-size: 4rem;
    margin: 4rem auto;
    display: inline-block;
  }
  p{
    font-size: 2rem;
    margin: 4rem;
    margin-left: 0;
  }
  ul{
    margin: 2rem;
    margin-left: 0;
  }


</style>