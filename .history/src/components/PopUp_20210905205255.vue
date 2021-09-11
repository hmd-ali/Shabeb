<template>
    <div class="popup-container">
        <div class="form">
            <form action="" method="post">
                <div class="from-item">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name">
                </div>
                <div class="form-tem">
                    <label for="phone">Phone Number: </label>
                    <input type="tel" name="phone" id="phone" pattern="[0-9]{8}">
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
                    <input type="text" name="location" id="location">
                </div>
                <input type="submit" value="Okay">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PopUp',
    }
</script>

<style scoped>
    .popup-container{
        height: 100vh;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        /* background: rgba(255, 0, 0, 0.4); */
        background: pink;
        z-index: 100;
        padding: 4rem 4rem;
    }
    .popup-container .form{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
    }
    .popup-container .form form label{
        display: inline-block;
        width: 20rem;
    }
    .popup-container .form form input{
        display: inline-block;
        width: 20rem;
    }
</style>