<template>
    <div class="join-container">
        <div class="driver">
            <button>Become a driver</button>
            <button>Become a Partner</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JoinUs',

    }
</script>

<style scoped>
    .join-container{
        width: 100%;
        padding: 4rem 8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: var(--background);
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
    button:hover{

    }
</style>