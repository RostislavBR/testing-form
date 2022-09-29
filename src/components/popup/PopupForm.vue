<template>
    <form class="flex flex-wrap">
        <label class="label">
            <span class="block description">Имя</span>
            <input type="text" class="input" placeholder="Иван Иванов">
        </label>
        <label class="label">
            <span class="block description">Телефон</span>
            <input type="text" class="input">
        </label>
        <label class="label">
            <span class="block description">Email</span>
            <input type="email" class="input">
        </label>
        <label class="label">
            <span class="block description">Город</span>
            <select class="input">
                <option v-for="item in city" :key="item">{{item}}</option>
            </select>
        </label>
        <div class="flex flex-grow justify-end pr-8">
            <button class="btn">Отправить</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "PopupForm",
        data: () => ({
            city: ['Москва', 'Санкт-Петербург', 'Казань']
        }),
    }
</script>

<style>
    .label {
        @apply flex flex-col mr-4 mb-4;
    }

    .description {
        @apply relative mb-1 font-medium text-gray-700;
    }

    .description:after {
        content: '*';
        position: absolute;
    }

    .input {
        @apply py-2 pl-3 max-w-inputMaxWidth outline-none border border-gray-300 rounded-md;
    }

    .btn {
        @apply bg-lightGreen py-2 px-4 text-white rounded-md;
    }
</style>