<template>
    <div class="container-employees h-full">
      <Navigation :name="name">
        <Table/>
      </Navigation>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import Navigation from '../components/Navigation.vue'
import Table from '../components/Table.vue';
const name = ref('')
onMounted(() => {
  const user = localStorage.getItem("user")
  if(user !== null){
    name.value = JSON.parse(user).nombre
  }

});
</script>