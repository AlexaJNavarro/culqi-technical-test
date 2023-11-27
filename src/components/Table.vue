<template>
    <div class="container-table">
        <el-table :data="data" height="250" style="width: 100%">
            <el-table-column prop="nombre" label="Nombre" width="180" />
            <el-table-column prop="cargo" label="Nombre cargo" width="180" />
            <el-table-column prop="departamento" label="Departamento" width="180" />
            <el-table-column prop="oficina" label="Oficina" width="180" />
            <el-table-column prop="estadoCuenta" label="Cuenta" width="180" />
        </el-table>
        <div class="container-table-pagination grid grid-cols-2 gap-2">
            <el-pagination
                :page-size="limit"
                :pager-count="4" 
                layout="prev, pager, next"
                :total="total"
                @current-change="handlePagination"
            />
            <div class="flex justify-end">
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
import {onMounted, ref} from 'vue'
import { getEmployees } from '../services/employees.services'

const total = ref(0)
const data = ref([]);
let limit = ref(5)
let page = ref(1)

const options = [
  {
    value: 5,
    label: 5,
  },
  {
    value: 10,
    label: 10,
  },
  {
    value: 15,
    label: 15,
  }
]

const handlePagination = (val: number) => {
  page.value = val;
  fetchData();
}

const handleLimit = (val: number) => {
  limit.value = val;
  fetchData();
}

const fetchData = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMDgxNjY4LCJleHAiOjE3MDEwODUyNjh9.fs8OfwgI-_wWOXp2Oces9KQAQuldWP0ql0KTicdeF_E";
  try {
    const response = await getEmployees(token, limit.value, page.value);
    data.value = response.data.data
    total.value = response.data.total
    console.log("data.value  => ", data.value )

  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
</style>