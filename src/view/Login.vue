<template>
    <div class="container-login grid grid-cols-2 gap-2 h-full">
        <div class="container-login-content">
            <div class="container-login-content-logo w-full">
                <img class="w-full h-full" src="../assets/svg/login-rectangle.png">
            </div>
            <div class="container-login-content-body flex justify-center items-center">
                <div class="px-12">
                    <img src="../assets/svg/logo.svg">
                    <p class="container-login-content-body-title py-6">Dale más power ⚡ a tus empleados hoy 💪</p>
                    <p class="container-login-content-body-paragraph">Te ayudamos a gestionarlos de manera más sencilla</p>
                </div>
            </div>
        </div>
        <div class="container-login-form flex justify-center items-center">
            <div class="container-login-form-content">
                <p>Inicia sesión</p>
                <p>Correo electrónico<span>*</span></p>
                <input type="text">
                <p>Contraseña<span>*</span></p>
                <input type="password">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.container-login{
    &-content{
        &-logo{
            height: calc(100% - 357px);
        }
        &-body{
            border-top: solid 5px #27A376;
            background-color: #111827;
            color: #FFFFFF;
            height: 357px;
            &-title{
                font-family: Manrope;
                font-size: 48px;
                font-weight: 700;
                line-height: 58px;
                letter-spacing: -0.5px;
                text-align: left;
            }
            &-paragraph{
                font-family: Manrope;
                font-size: 18px;
                font-weight: 400;
                line-height: 27px;
                letter-spacing: 0px;
                text-align: left;
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
            background-color: red;
        }
    }
}

@media(max-width: 1100px){
    .container-login{
        grid-template-columns: repeat(1, minmax(0, 1fr));
        &-content{
            display: none;
        }
    }
}
</style>