<template>
    <div class="container-employees">
        <Table/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Table from '../components/Table.vue';

export default defineComponent({
  name: 'MyComponent',
  components: {
    Table,
  },
  data() {
    return {
    };
  },
  methods: {
  },
});
</script>