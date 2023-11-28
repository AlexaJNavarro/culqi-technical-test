<template>
    <div class="container-navigation flex h-full">
        <div class="container-navigation-left p-8">
            <div class=" flex justify-center">
                <img src="../assets/svg/logo2.svg">
            </div>
            <p>Empleados</p>
            <p>Reclutamiento</p>
        </div>
        <div class="container-navigation-right">
            <div class="container-navigation-right-content flex justify-end px-8">
                <div class="flex items-center">
                    <img src="../assets/svg/logoUser.svg">
                    <p class="pl-2">{{ name }}</p>
                </div>
            </div>
            <div class="container-navigation-right-body flex justify-center items-center p-6">
                <div class="w-full">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name: 'Navigation',
    props: {
        name: String as PropType<string>,
    },
});
</script>

<style lang="scss" scoped>
.container-navigation{
    &-left{
        width: 280px;
        border-right: 1px solid var(--vt-c-light-gray-val);
    }
    &-right{
        width: calc(100% - 280px);
        &-content{
            height: 96px;
            border-bottom: 1px solid var(--vt-c-light-gray-val);
        }
        &-body{
            height: calc(100% - 96px);
            background-color: var(--vt-c-gray-background);
        }
    }
}
</style>