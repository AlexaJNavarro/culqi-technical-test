<template>
    <div class="container-table h-full w-full p-6">
        <div class="container-table-header flex justify-between">
          <div class="container-table-header-title font-manrope">
            <p class="font-bold tracking-normal">Empleados</p>
            <p class="font-medium tracking-normal">Gestiona tus empleados</p>
          </div>
          <div class="container-table-header-buttons flex">
            <div class="container-table-header-buttons-new">
              <WhiteButton buttonText="Descargar" @clicked="download"/>
            </div>
            <div class="container-table-header-buttons-download pl-5">
              <BlackButton buttonText="Nuevo" @clicked="newValue"/>
            </div>
          </div>
        </div>
        <div class="container-table-filter flex py-6">
          <el-input v-model="search" size="small" placeholder="Type to search" />
          <div>
            <el-select v-model="valueFilter" class="m-2" placeholder="Select">
              <el-option
                v-for="item in optionsFilter"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <el-table class="container-table-content font-manrope font-normal tracking-normal" :data="filterTableData" style="width: 100%">
          <el-table-column prop="nombre" label="Nombre" width="180" />
          <el-table-column prop="cargo" label="Nombre cargo" width="180" />
          <el-table-column prop="departamento" label="Departamento" width="180" />
          <el-table-column prop="oficina" label="Oficina" width="180" />
          <el-table-column prop="estadoCuenta" label="Cuenta" width="180" />
          <el-table-column align="right">
            <template #header>
              <p>Acciones</p>
            </template>
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="container-table-pagination grid grid-cols-2 gap-2 pt-6">
            <el-pagination
                :page-size="limit"
                :pager-count="4" 
                layout="prev, pager, next"
                :total="total"
                @current-change="handlePagination"
            />
            <div class="flex justify-end items-center">
                <p>Mostrando 1 a {{ data.length }} de {{ total }} registros</p>
                <div class="pl-4">
                    <el-select v-model="limit" class="m-2" placeholder="Select" @change="handleLimit">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, computed, ref, Ref} from 'vue'
import { getEmployees } from '../services/employees.services'
import { IEmployees } from '../interfaces/employees.interfaces'
import BlackButton from '../components/BlackButton.vue'
import WhiteButton from '../components/WhiteButton.vue'
const total = ref(0)
const data: Ref<IEmployees[]> = ref<IEmployees[]>([]);
let limit = ref(8)
let page = ref(1)
const search = ref('')
const options = [
  {
    value: 3,
    label: "Mostrar 3",
  },
  {
    value: 5,
    label: "Mostrar 5",
  },
  {
    value: 8,
    label: "Mostrar 8",
  }
]


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

const filterTableData = computed(() => 
  data.value.filter(
    (d) =>
      !search.value ||
      d["nombre"].toLowerCase().includes(search.value.toLowerCase())
  )
)

const handlePagination = (val: number) => {
  page.value = val;
  fetchData();
}

const handleLimit = (val: number) => {
  limit.value = val;
  fetchData();
}

const fetchData = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMTIwMjI5LCJleHAiOjE3MDExMjM4Mjl9.2eIY4UREaYvVkDo-asIctWyMOpM9HCL8LP72T9qBzUI";
  try {
    const response = await getEmployees(token, limit.value, page.value);
    data.value = response.data.data
    total.value = response.data.total
    console.log("data.value  => ", data.value )

  } catch (error) {
    console.error('Error:', error);
  }
};

const handleEdit = (index: number, row: any) => {
  console.log(index, row)
}

onMounted(() => {
  fetchData();
});

const newValue = () => {
  console.log("new ===> ")
}

const download = () => {
  console.log("download ===> ")
}
</script>

<style lang="scss" scoped>
.container-table{
  background-color: var(--vt-c-white-val);
  border-radius: 16px;
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
  &-content{
    font-size: 12px;
    line-height: 19px;
    color: var(--vt-c-blue-val);
  }
}
</style>