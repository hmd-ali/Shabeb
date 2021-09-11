<template>
    <div class="popup-container">
        <div class="form">
            <form action="" method="post">
                <div class="from-item">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name">
                </div>
                <div class="form-item">
                    <label for="Vehicul type"></label>
                    
                </div>
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
        background: rgba(255, 0, 0, 0.4);
        z-index: 100;
    }
</style>