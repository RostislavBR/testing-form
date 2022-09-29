<template>
    <div class="flex flex-col absolute top-0 right-0 bg-white shadow-xl p-6 rounded-md max-w-popupMaxWidth">
        <h1 class="text-xl font-medium mb-4">Заказать звонок</h1>
        <PopupForm/>
    </div>
</template>

<script>
    import PopupForm from "./PopupForm";

    export default {
        name: "PopupWindow",
        components: {PopupForm}
    }
</script>

<style scoped>

</style>