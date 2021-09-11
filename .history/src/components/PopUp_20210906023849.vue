<template>
    <div class="popup-container">
        <div class="form">
            <form action="" method="post">
                <div class="form-item">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Jon Doe">
                </div>
                <div class="form-item">
                    <label for="phone">Phone Number: </label>
                    <input type="tel" name="phone" id="phone" pattern="[0-9]{8}" placeholder="03123456">
                </div>
                <div class="form-item">
                    <label for="type">Vehicle Type</label>
                    <select name="type" id="type">
                        <option value="moto">Motorcycle</option>
                        <option value="car">Car</option>
                        <option value="van">Van</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Beirut">
                </div>
            </form>
            <button><span>Submit</span></button>
            <button @click="pressed"><i class="fas fa-times"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PopUp',
        methods:{
            pressed(){
                this.$emit('pressed')
            }
        },
        emits:['pressed'],

    }
    
</script>

<style scoped>
    .popup-container{
        height: 100vh;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        padding: 4rem 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, .6);
    }
    .popup-container .form{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: var(--color-primary);
        padding: 10rem 5rem;
        border-radius: 2rem;
    }
    .popup-container .form form{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .popup-container .form form .form-item{
        display: flex;
        width: 50rem;
        align-items: center;
        position: relative;
        margin: 1rem;
    }
    .popup-container .form form label{
        display: inline-block;
        width: 20rem;
        font-size: 2rem;
        text-align: left;
        color: var(--accent);
    }
    .popup-container .form form select{
        display: inline-block;
        width: 20rem;
        text-align: center;

    }
    .popup-container .form form input{
        display: inline-block;
        width: 20rem;
        padding: 1rem 1rem;
        outline: none;
        border: none;
        border-bottom: 1px solid var(--background);
        color: var(--background);
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;
    }
    .popup-container .form  button{
        width: fit-content;
        padding: 1rem 2rem;
        font-size: 2rem;
        background: var(--accent);
        border: none;
        outline: none;
        border-radius: 3rem;
        margin-top: 4rem;
        cursor: pointer;
    }
    .popup-container .form button span{
        display: inline-block;
        color: var(--color-primary);
    }
    .popup-container .form  button:hover{
        background: #264a9c;
    }
    .popup-container .form form button:hover span{
        transform: scale(0.98);
        
    }

</style>