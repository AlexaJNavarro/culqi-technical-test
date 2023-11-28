<template>
    <div class="container-navigation flex h-full">
        <div class="container-navigation-left p-8">
            <ContentNavigation/>
        </div>
        <div class="container-navigation-right">
            <div class="container-navigation-right-content flex items-center px-8">
                <div class="container-navigation-right-content-dropdown">
                    <el-dropdown :hide-on-click="false">
                        <i class="material-icons deactivate">menu</i>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item>
                            <i class="material-icons">group</i>
                            <span class="pl-2 font-manrope font-bold active">Empleados</span>
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <i class="material-icons deactivate">work</i>
                            <span class="pl-2 font-manrope font-bold">Reclutamiento</span>
                          </el-dropdown-item>
                          <el-dropdown-item @click="goOut">
                            <i class="material-icons">logout</i>
                            <span class="pl-2 font-manrope font-bold active">Salir</span>
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                </div>
                <div class="flex items-center">
                    <img src="../assets/svg/logoUser.svg">
                    <p class="pl-2">{{ name }}</p>
                </div>
            </div>
            <div class="container-navigation-right-body flex justify-center items-center p-6">
                <div class="w-full h-full">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import ContentNavigation from './ContentNavigation.vue';
import {removeLocalStorage} from '../services/localStorage.services';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    name: String,
});

const goOut = () => {
    removeLocalStorage()
    router.push('/login');
}

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
            justify-content: end;
            &-dropdown{
                display: none;
            }
        }
        &-body{
            height: calc(100% - 96px);
            background-color: var(--vt-c-gray-background);
        }
    }

    @media (max-width: 910px) {
        &-left{
            display: none;
        }
        &-right{
            width: 100%;
            &-content{
                justify-content: space-between;
                &-dropdown{
                    display: block;
                }
            }
        }
    }

    @media (max-width: 650px) {
        
    }
}
</style>