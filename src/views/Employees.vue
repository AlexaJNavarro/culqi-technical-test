<template>
    <div class="container-employees h-full">
      <Navigation :name="'Alexandra Navarro'">
        <Table/>
      </Navigation>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '../components/Navigation.vue'
import Table from '../components/Table.vue';

export default defineComponent({
  name: 'MyComponent',
  components: {
    Navigation,
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