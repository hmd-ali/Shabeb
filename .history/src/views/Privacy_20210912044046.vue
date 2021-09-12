<template>
    <div class="privacy-container">
        <div class="title">
            <h1>Privacy Policy</h1>
        </div>
        <div class="info">
            <h1>Shabeb Delivery recognizes and respects the importance of maintaining the privacy of our customers, registered members, and vendors, and has established this Privacy Policy consequently. The information you will find in this Privacy Policy includes:</h1>
            <ul>
                <li>the personal information we may collect from you when you visit our website, respond or subscribe to our emails, use our mobile applications, place orders through social media applications (such as WhatsApp or Facebook Messenger), or otherwise contact us via telephone, text (SMS), or email,</li>
                <li>why we gather information from you,</li>
                <li>how we collect it,</li>
                <li>how we use it (including with whom we may share it), and</li>
                <li>the choices you have regarding our use of, and your access to and correction of, personal information you have provided.</li>
            </ul>
            <p>This Privacy Policy is part of our <router-link to="/terms">Terms of Use</router-link>, which governs the use of our website located at <a href="https://shabeb.com/" and mobile applications. By submitting personal information through the Shabeb Delivery website, Shabeb Delivery mobile applications, or Shabeb Delivery services, you provide consent to the terms of this Privacy Policy and you expressly consent to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy.</p>
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
                    <li></li>
                </ul>
            </div>
            <div class="policy">
                <h1></h1>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="policy">
                <h1></h1>
                <p></p>
            </div>
            <div class="policy">
                <h1></h1>
                <p></p>
            </div>
            <div class="policy">
                <h1></h1>
                <p></p>
            </div>
            <div class="modification">
                <p>Shabeb Delivery - Terms of Use Version 1.1</p>
                <h1>Last Modified: <span>April 15, 2020</span></h1>
                <h1>Effective Date: <span>April 17, 2020</span></h1>
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