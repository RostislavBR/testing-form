<template>
    <main>
        <div class="container my-0 mx-auto py-5">
            <ButtonWrapper/>
            <PopupWindow/>
        </div>
    </main>
</template>

<script>
    import ButtonWrapper from "@/components/ButtonWrapper";
    import PopupWindow from "@/components/popup/PopupWindow";

    export default {
        name: "MainPage",
        components: {PopupWindow, ButtonWrapper}
    }
</script>

<style scoped>

</style>