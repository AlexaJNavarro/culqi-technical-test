<template>
    <div class="container-table">
        <el-table :data="data" height="250" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <div class="container-table-pagination grid grid-cols-2 gap-2">
            <!--
                page-size = cantidad de registros en la tabla
                4 = apartir de que numero salen los puntos
                handleCurrentChange = retorna la paginación
            -->
            <el-pagination
                :page-size="value"
                :pager-count="4" 
                layout="prev, pager, next"
                :total="total"
                @current-change="handleCurrentChange"
            />
            <div class="flex justify-end">
                <p>Mostrando 1 a {{ data.length }} de {{ total }} registros</p>
                <div class="pl-4">
                    <el-select v-model="value" class="m-2" placeholder="Select" @change="handleSizeChange">
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
import { ref } from 'vue'

//Table
const total = ref(48)
const data = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

//Pagination
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

//Select
const value = ref(2)
const options = [
  {
    value: 2,
    label: 2,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 8,
    label: 8,
  }
]
</script>

<style scoped>
</style>