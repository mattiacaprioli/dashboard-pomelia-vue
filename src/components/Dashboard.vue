<template>
  <div class="dashboard grid grid-cols-2 gap-4 mb-4 ml-4 mr-6">
    <div v-for="(item, index) in boxData" :key="index" class="col-span-1">
      <box :title="item.title" :data="item.data" />
    </div>
  </div>
</template>
  
<script>
import Box from './Box.vue';
import axios from 'axios';

export default {
  components: {
    Box,
  },
  data() {
    return {
      boxData: [
        { title: 'power-production', data: 0 },
        { title: 'month-energy', data: 0 },
        { title: 'today-energy', data: 0 },
        { title: 'left-time-energy', data: 0 },
      ],
    };
  },
  mounted() {
    // Effettua la richiesta dei dati localmente dal file JSON
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('../../src/solar-panels.json')
        .then(response => {
          const data = response.data;
          this.boxData.forEach((item, index) => {
            item.data = data[item.title];
          });
        })
        .catch(error => {
          console.error(error);
          throw new Error('Errore durante il recupero dei dati.');
        });
    },
  },
};
</script>