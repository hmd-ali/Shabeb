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
            <p>This Privacy Policy is part of our <router-link to="/terms">Terms of Use</router-link>, which governs the use of our website located at <router-link to="/"> https://shabeb.com/</router-link> and mobile applications. By submitting personal information through the Shabeb Delivery website, Shabeb Delivery mobile applications, or Shabeb Delivery services, you provide consent to the terms of this Privacy Policy and you expressly consent to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy.</p>
        </div>
        <div class="policies">
            <div class="policy">
                <h1>1. Information We Collect</h1>
                <p>The following information is collected by or on behalf of Shabeb Delivery:</p>
                <ul>
                    <li>User Profile Information: We collect and store this vendor or driver information when you create or update your Shabeb Delivery account or subscribe to our email. This may include your name, business name, [personal or business] email, [personal or business] phone number, login name and password, location information, and payment or banking information (including related payment verification information).* Please note that Shabeb Delivery cannot be used by minors (the age depends on where you reside) without the supervision of a parent or guardian. Shabeb Delivery is not liable for credit/debit card transactions performed by minors without the consent of a parent or guardian.</li>
                    <li>
                        <p>User Transaction Information: We collect and store this transaction data when you provide or update your Shabeb Delivery transaction data or when a transaction is completed. This may include:</p>
                        <ul>
                            <li>your billing information (credit/debit card number, expiration date, CVV code, alternate or additional billing information and billing address),</li>
                            <li>order history and details,</li>
                            <li>date and time of delivery,</li>
                            <li>business receipt data,</li>
                            <li>any promotion, referral code, and related information,</li>
                            <li>recipients’ names, addresses, telephone numbers, and email addresses,</li>
                            <li>network information – including IP address, network carrier and country code, browsing information, such as how you interact with our services, and</li>
                            <li>other information you provide to us, including User Submissions (defined in the Terms of Use).</li>
                        </ul>
                    </li>
                    <li>Shabeb Business Analytics Information: In order to provide our customers with powerful and valuable information, Shabeb Delivery saves all historical transactions to enable advanced analytics. This information allows each business or user to track: their order volume, peak order times, and order item frequency (beta), across a specific time range. Business owners can use this data to plan and forecast. These analytics are separate from Google Analytics, which are explained further in section 4 of this Privacy Policy.</li>
                </ul>
            </div>
            <div class="policy">
                <h1>2. Why We Collect Information from You</h1>
                <p>In brief, Shabeb Delivery gathers personal information mainly to communicate with you and to process your orders, but additionally to help improve our products and customer service, to provide an enhanced and more personalized delivery experience and to inform vendors and drivers of special offers, updates, contests, and more.</p>
                <p>The purposes for gathering information from you include:</p>
                <ul>
                    <li>
                        <p>Providing services and features: Shabeb Delivery collects and uses the necessary information to provide you with its services and features. Shabeb Delivery uses this information to:</p>
                        <ul>
                            <li>Create and update your Shabeb Delivery driver or vendor account,</li>
                            <li>Verify your identity,</li>
                            <li>Provide you with available services based on your location details,</li>
                            <li>Enable the delivery of your order,</li>
                            <li>Process or facilitate payments of certain transactions,</li>
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