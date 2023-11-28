<template>
    <div class="container-loader">
        <div class="container-loader-header flex justify-between items-center">
            <p class="font-manrope font-bold tracking-normal">Empleados</p>
            <div class="border border-little"></div>
        </div>
        <div class="flex justify-between py-6">
            <div class="border border-big"></div>
            <div class="border border-big"></div>
            <div class="border border-big"></div>
        </div>
        <div>
            <div class="grid grid-cols-7 gap-7" v-for="(item, i) in sevenTimes" :key="i">
                <div class="py-4 flex justify-center items-center" v-for="(item, index) in sevenTimes" :key="index">
                    <div class="border border-half w-3/4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sevenTimes = ref(new Array(7).fill(null));
</script>

<style lang="scss" scoped>
.container-loader{
    &-header p{
        font-size: 24px;
        color: var(--vt-c-blue-val);
        font-size: 24px;
        line-height: 34px;
        text-align: left;

    }
}
.border{
    background-color: var(--vt-c-white-soft);
    border-radius: 1rem;
    border: unset;
}

.border-little{
    width: 100px;
    height: 34px;
}

.border-half{
    width: 148px;
    height: 20px;
}

.border-big{
    width: 32%;
    height: 36px;
}
</style>