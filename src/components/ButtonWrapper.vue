<template>
    <div class="px-5">
        <button class="btn btn-blue mr-5 ">Заказать в Москву</button>
        <button class="btn btn-blue">Заказать в Санкт-Петербург</button>
    </div>
</template>

<script>
    export default {
        name: "ButtonWrapper",
    }
</script>

<style scoped>
    .btn {
        @apply py-2 px-4 rounded-md;
    }
    .btn-blue {
        @apply bg-blue-500 text-white;
    }
    .btn:focus {
        @apply bg-darkGreen;
    }
</style>