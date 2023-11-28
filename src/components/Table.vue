<template>
    <div class="container-table h-full w-full p-6">
        <HeaderTable/>
        
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
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {onMounted, computed, ref, Ref} from 'vue'
import { getEmployees } from '../services/employees.services'
import { IEmployees } from '../interfaces/employees.interface'
import HeaderTable from '../components/HeaderTable.vue'
const router = useRouter();
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
      const response = await getEmployees(token, limit.value, page.value);
      data.value = response.data.data
      total.value = response.data.total
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
}
</style>