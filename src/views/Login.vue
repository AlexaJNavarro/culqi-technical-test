<template>
    <div class="container-login grid grid-cols-2 gap-2 h-full font-manrope">
        <div class="container-login-content">
            <div class="container-login-content-logo w-full">
                <img class="w-full h-full" src="../assets/svg/login-rectangle.png">
            </div>
            <div class="container-login-content-body flex justify-center items-center">
                <div class="px-12">
                    <img src="../assets/svg/logo.svg">
                    <p class="container-login-content-body-title py-6 font-bold">Dale más power⚡a tus empleados hoy 💪</p>
                    <p class="container-login-content-body-paragraph font-normal tracking-normal">Te ayudamos a gestionarlos de manera más sencilla</p>
                </div>
            </div>
        </div>
        <div 
            class="container-login-form flex justify-center items-center relative"
            :class="{ 'mobile-pb-16': alert, 'mobile-pb-8': !alert }"
            >
            <div class="container-login-form-content">
                <p class="text-center font-bold tracking-normal">Inicia sesión</p>
                <div class="py-8 font-medium tracking-normal">
                    <p class="font-medium">Correo electrónico<span>*</span></p>
                    <el-input 
                        class="input" 
                        v-model="email" 
                        placeholder="Ingresa el correo electrónico"
                        />
                    <p class="pt-6 font-medium">Contraseña<span>*</span></p>
                    <el-input
                        class="input"
                        v-model="password"
                        type="password"
                        placeholder="Ingresa la contraseña"
                        show-password
                    />
                </div>
                <div class="pb-8 flex items-center font-normal tracking-normal container-login-form-content-alert" v-if="alert">
                    <i class="material-icons">error</i>
                    <p class="pl-1 pb-0-important">Correo o contraseña incorrectos</p>
                </div>
                <div class="container-login-form-content-button">
                    <BlackButton buttonText="Iniciar sesión" @clicked="logIn" />
                </div>
                <div class="container-login-form-content-message flex justify-center items-end">
                    <p class="pb-0-important">
                        <span class="pr-1 font-manrope font-medium tracking-normal">¿Eres nuevo aquí?</span>
                        <span class="font-manrope font-medium tracking-normal">Crea una cuenta</span>
                    </p>
                </div>
            </div>
            <p class="container-login-form-rights absolute bottom-6 font-medium tracking-normal">© 2023 Culqi . Todos los derechos reservados</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BlackButton from '../components/BlackButton.vue';
import { signIn } from "../services/auth.services"

const router = useRouter();
const email = ref('')
const password = ref('')
let alert = ref(false)

const logIn = async () => {
  try {
    
    const response = await signIn(email.value, password.value)
    alert.value = false

    localStorage.setItem("token",  response.data.data.token)
    localStorage.setItem("user", JSON.stringify(response.data.data.user))
    router.push('/employees');
  } catch (error) {
    alert.value = true
  }
};

onMounted(() => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
})
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
            &-alert{
                color: var(--vt-c-red-val);
                i{
                    font-size: 12px !important;
                }
                p{
                    color: var(--vt-c-red-val);
                    font-size: 12px !important;
                    line-height: 19px !important;
                }
            }
            &-button{
                height: 56px;
            }
            &-message{
                height: 54px;
                p{
                    span{
                        font-size: 14px;
                        line-height: 22px;
                    }
                    span:first-child{
                        color: var(--vt-c-gray-val);
                    }
                    span:last-child{
                        color: var(--vt-c-green-val);
                    }
                }
            }
        }
        &-rights{
            font-size: 14px;
            line-height: 22px;
            color: var(--vt-c-gray-val);
        }
    }
}

@media(max-width: 1100px){
    .container-login{
        grid-template-columns: repeat(1, minmax(0, 1fr));
        &-form{
            margin: 2rem;
            &-rights{
                font-size: 12px;
            }
        }
    }

    .mobile-pb-8{
        padding-bottom: 2rem;
    }

    .mobile-pb-16{
        padding-bottom: 4rem;
    }
}

@media(max-width: 530px){
    .container-login-content-body-title{
        font-size: 30px;
        line-height: 40px;
    }
}
</style>