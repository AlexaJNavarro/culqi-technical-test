<template>
    <div class="h-full w-full">
      <div class="container-table h-full w-full p-6" v-if="!loaderStore.loader">
        <HeaderTable/>
        <div class="container-table-filter flex items-center py-6">
            <el-input v-model="search" class="w-50 m-2" placeholder="Buscar empleado" :suffix-icon="Search" />
            <div>
                <el-select v-model="valueFilter" class="m-2" placeholder="Select">
                    <el-option v-for="item in optionsFilter" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <el-table class="container-table-content font-manrope font-normal tracking-normal" :data="filterTableData" style="width: 100%">
          <el-table-column :align="'left'">
            <template #header>
              <p>Nombre</p>
            </template>
            <template #default="scope">
              <div class="flex flex-col">
                <span>{{ scope.row.nombre }}</span>
                <span class="container-table-content-correo font-normal tracking-normal">{{ scope.row.correo }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="cargo" label="Nombre cargo" width="180" />
          <el-table-column prop="departamento" label="Departamento" width="180" />
          <el-table-column prop="oficina" label="Oficina" width="180" />
          <el-table-column prop="estadoCuenta" label="Cuenta" width="180" />
          <el-table-column :align="'right'">
            <template #header>
              <p>Acciones</p>
            </template>
            <template #default="scope">
              <el-button class="container-table-content-action visibility">
                <i class="material-icons">visibility</i>
              </el-button>
              <el-button class="container-table-content-action edit">
                <i class="material-icons">edit</i>
              </el-button>
              <el-button class="container-table-content-action delete">
                <i class="material-icons">delete</i>
              </el-button>
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
            <div class="flex justify-end items-center container-table-pagination-content">
                <p class="font-manrope font-medium tracking-normal">Mostrando 1 a {{ data.length }} de {{ total }} registros</p>
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
      <div class="container-table h-full w-full p-6" v-if="loaderStore.loader">
        <Loader/>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {onMounted, computed, ref, Ref} from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getEmployees } from '../services/employees.services'
import { IEmployees } from '../interfaces/employees.interface'
import { useLoaderStore } from '../stores/loader'
import HeaderTable from '../components/HeaderTable.vue'
import Loader from '../components/Loader.vue'
const router = useRouter();
const loaderStore = useLoaderStore()

const total = ref(0)
const data: Ref<IEmployees[]> = ref<IEmployees[]>([]);
let limit = ref(5)
let page = ref(1)
const search = ref('')

const options = [
  {
    value: 5,
    label: "Mostrar 5",
  },
  {
    value: 10,
    label: "Mostrar 10",
  },
  {
    value: 15,
    label: "Mostrar 15",
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
  try {
    const token = localStorage.getItem("token")
    if(token !== null){
      loaderStore.setLoader(true)
      const response = await getEmployees(token, limit.value, page.value);
      data.value = response.data.data
      total.value = response.data.total
      loaderStore.setLoader(false)
    }else{
      router.push('/login');
    }
  } catch (error) {
    router.push('/login');
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.container-table{
  background-color: var(--vt-c-white-val);
  border-radius: 16px;
  &-content{
    font-size: 12px;
    line-height: 19px;
    color: var(--vt-c-blue-val);
    height: calc(100% - 215px);
    &-correo{
      font-size: 10px;
      line-height: 16px;
      color: var(--vt-c-gray-val);
    }
    &-action{
      width: 30px;
      height: 30px;
      padding: 10px;
      border-radius: 8px;
      i{
        font-size: 16px;
        color: var(--vt-c-white-val);
      }
    }
    .visibility{
      background-color: var(--vt-c-green-val);
      border: var(--vt-c-green-val);
    }
    .edit{
      background-color: var(--vt-c-light-blue-background);
      border: var(--vt-c-light-blue-background);
    }
    .delete{
      background-color: var(--vt-c-red-background);
      border: var(--vt-c-red-background);
    }
  }
  &-pagination-content{
    p{
      font-size: 12px;
      line-height: 19px;
      color: var(--vt-c-dark-gray-val);
    }
  }

  @media (max-height: 770px) {
    .container-table{
      &-filter{
        padding: 1rem 0 !important;
      }
      &-pagination{
        padding-top: 1rem !important;
      }
    }
  }

  @media (max-width: 910px) {
    .container-table{
      &-content{
        height: calc(100% - 350px) !important;
      }
      &-filter{
        flex-direction: column;
        div:first-child{
          width: 100% !important; 
        }
        div:last-child{
          width: 100% !important; 
          margin: 0;
          padding-top: 0.5em;
        }
      }
      &-header{
        flex-direction: column;
        justify-content: left;
      }
      &-pagination-content p{
        display: none;
      }
    }
  }
}
</style>