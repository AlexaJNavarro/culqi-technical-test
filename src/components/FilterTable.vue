<template>
    <div class="container-table-filter flex items-center py-6">
        <el-input v-model="search" class="w-50 m-2" placeholder="Buscar empleado" :suffix-icon="Search" />
        <div>
            <el-select v-model="valueFilter" class="m-2" placeholder="Select">
                <el-option v-for="item in optionsFilter" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const search = ref('')

const valueFilter = ref({
    value: 'cargo',
    label: 'Nombre cargo',
})

const optionsFilter = [
  {
    value: 'nombre',
    label: 'Nombre',
  },
  {
    value: 'cargo',
    label: 'Nombre cargo',
  },
  {
    value: 'departamento',
    label: 'Departamento',
  },
  {
    value: 'oficina',
    label: 'Oficina',
  },
  {
    value: 'estadoCuenta',
    label: 'Cuenta',
  },
]
</script>