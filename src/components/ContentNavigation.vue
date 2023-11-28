<template>
    <div class="container-content h-full flex flex-col justify-between">
        <div>
            <div class="flex justify-center pb-6">
                <img src="../assets/svg/logo2.svg">
            </div>
            <div class="container-content-select flex items-center active">
                <i class="material-icons">group</i>
                <span class="pl-2 font-manrope font-bold active">Empleados</span>
            </div>
            <div class="container-content-select flex items-center">
                <i class="material-icons deactivate">work</i>
                <span class="pl-2 font-manrope font-bold">Reclutamiento</span>
            </div>
        </div>
        <div>
            <WhiteButton buttonText="Salir" @clicked="goOut"></WhiteButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import WhiteButton from '../components/WhiteButton.vue'
const router = useRouter();

const goOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push('/login');
}
</script>

<style lang="scss" scoped>
.container-content{
    &-select{
        height: 54px;
        span{
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.20000000298023224px;
        }
    }
    .deactivate{
        color: var(--vt-c-gray-val);
    }
    .active{
        color: var(--vt-c-red-menu);
    }
}
</style>