<template>
    <div class="container-table-header flex justify-between">
        <div class="container-table-header-title font-manrope">
            <p class="font-bold tracking-normal">Empleados</p>
            <p class="font-medium tracking-normal">Gestiona tus empleados</p>
        </div>
        <div class="container-table-header-buttons flex">
            <div class="container-table-header-buttons-new mr-5">
                <WhiteButton buttonText="Descargar" @clicked="download">
                    <i class="material-icons">download</i>
                </WhiteButton>
            </div>
            <div class="container-table-header-buttons-download">
                <BlackButton buttonText="Nuevo" icon="add" @clicked="newValue">
                    <i class="material-icons">add</i>
                </BlackButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import WhiteButton from "../components/WhiteButton.vue"
import BlackButton from "../components/BlackButton.vue"

const newValue = () => {
  console.log("new ===> ")
}

const download = () => {
  console.log("download ===> ")
}
</script>

<style lang="scss" scoped>

.container-table{
    &-header{
    &-title{
      p:first-child{
        font-size: 24px;
        line-height: 31px;
        color: var(--vt-c-blue-val);
      }
      p:last-child{
        font-size: 14px;
        line-height: 22px;
        color: var(--vt-c-dark-gray-val);
      }
    }
    &-buttons{
      &-new{
        width: 150px;
      }
      &-download{
        width: 127px;
      }
    }
  }
}

@media (max-width: 910px) {
  .container-table-header-buttons{
    padding-top: .5rem;
    div{
      width: 50%;
    }
  }
}
</style>