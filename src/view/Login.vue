<template>
    <div class="container-login grid grid-cols-2 gap-2 h-full font-manrope">
        <div class="container-login-content">
            <div class="container-login-content-logo w-full">
                <img class="w-full h-full" src="../assets/svg/login-rectangle.png">
            </div>
            <div class="container-login-content-body flex justify-center items-center">
                <div class="px-12">
                    <img src="../assets/svg/logo.svg">
                    <p class="container-login-content-body-title py-6 font-bold">Dale más power ⚡ a tus empleados hoy 💪</p>
                    <p class="container-login-content-body-paragraph font-normal tracking-normal">Te ayudamos a gestionarlos de manera más sencilla</p>
                </div>
            </div>
        </div>
        <div class="container-login-form flex justify-center items-center">
            <div class="container-login-form-content">
                <p class="text-center font-bold tracking-normal">Inicia sesión</p>
                <div class="py-8 font-medium tracking-normal">
                    <p>Correo electrónico<span>*</span></p>
                    <el-input class="input" v-model="email" placeholder="Ingresa el correo electrónico"/>
                    <p class="pt-6">Contraseña<span>*</span></p>
                    <el-input class="input" v-model="password" placeholder="Ingresa la contraseña" type="password"/>
                </div>
                <div class="container-login-form-content-button">
                    ddcdc
                </div>
                <div class="container-login-form-content-message flex justify-center items-end">
                    <p>
                        <span class="pr-1">¿Eres nuevo aquí?</span>
                        <span>Crea una cuenta</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
.container-login{
    &-content{
        &-logo{
            height: calc(100% - 357px);
        }
        &-body{
            border-top: solid 5px var(--vt-c-green-val);
            background-color: var(--vt-c-blue-val);
            color: var(--vt-c-white-val);
            height: 357px;
            &-title{
                font-size: 48px;
                line-height: 58px;
                letter-spacing: -0.5px;
            }
            &-paragraph{
                font-size: 18px;
                line-height: 27px;
            }
            div{
                img{
                    width: 117px;
                    height: 36px !important;
                }
            }
        }
    }
    &-form{
        &-content{
            width: 480px;
            height: 452px;
            p{
                font-size: 24px;
                line-height: 31px;
                color: var(--vt-c-blue-val);
            }
            div{
                p{
                font-size: 14px;
                line-height: 22px;
                padding-bottom: 10px;
                    span{
                        color: var(--vt-c-red-val);
                    }
                }
                .input{
                    height: 56px;
                    border-radius: 10px;
                }
            }
            &-button{
                height: 56px;
            }
            &-message{
                height: 54px;
                p{
                    padding-bottom: 0 !important;
                    span:first-child{
                        color: var(--vt-c-gray-val);
                    }
                    span:last-child{
                        color: var(--vt-c-green-val);
                    }
                }
            }
        }
    }
}

@media(max-width: 1100px){
    .container-login{
        grid-template-columns: repeat(1, minmax(0, 1fr));
        &-form-content{
            padding: 2rem;
            margin-bottom: 1rem;
        }
    }
}

@media(max-width: 530px){
    .container-login-content-body-title{
        font-size: 30px;
        line-height: 40px;
    }
}

.input .el-input__wrapper{
    background-color: red !important;
}
</style>