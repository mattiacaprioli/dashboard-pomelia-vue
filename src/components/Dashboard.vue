<template>
    <div class="dashboard grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <box title="Power Production" :data="data1"></box>
      </div>
      <div class="col-span-1">
        <box title="This month's Energy" :data="data2"></box>
      </div>
      <div class="col-span-1">
        <box title="Today's Energy" :data="data3"></box>
      </div>
      <div class="col-span-1">
        <box title="Left Time Energy" :data="data4"></box>
      </div>
    </div>
  </template>
  
<script>
import Box from './Box.vue';
  
export default {
    components: {
        Box,
    },
    data() {
        return {
            data1: 'Dati del Box 1',
            data2: 'Dati del Box 2',
            data3: 'Dati del Box 3',
            data4: 'Dati del Box 4',
        };
    },
    mounted() {
      // Effettua le chiamate alle API per ottenere i dati per i box
      // e assegna i dati alle variabili data1, data2, data3, data4
    },
};
</script>