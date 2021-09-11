<template>
    <div class="popup-container">
        <div class="form">
            <form action="" method="post">

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
        background: rgba(red, green, blue, alpha);
        z-index: 100;
    }
</style>