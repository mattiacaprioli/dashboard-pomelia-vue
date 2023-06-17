<template>
    <div class="dashboard grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <box :title="title1" :data="data1" />
      </div>
      <div class="col-span-1">
        <box :title="title2" :data="data2" />
      </div>
      <div class="col-span-1">
        <box :title="title3" :data="data3" />
      </div>
      <div class="col-span-1">
        <box :title="title4" :data="data4" />
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
      title1: '',
      title2: '',
      title3: '',
      title4: '',
      data1: 0,
      data2: 0,
      data3: 0,
      data4: 0,
    };
  },
  mounted() {
    // Effettua la richiesta dei dati localmente dal file JSON
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Importa i dati dal file JSON localmente
      axios.get('../../solar-panels.json')
        .then(response => {
          const data = response.data;
          this.title1 = 'power-production';
          this.data1 = data['power-production'];
          this.title2 = 'month-energy';
          this.data2 = data['month-energy'];
          this.title3 = "today-energy";
          this.data3 = data['today-energy'];
          this.title4 = 'left-time-energy';
          this.data4 = data['left-time-energy'];
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>