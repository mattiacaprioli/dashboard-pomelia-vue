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
    this.fetchData();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },
  methods: {
    fetchData() {
      axios
        .get('https://raw.githubusercontent.com/ott-fogliata/vuejs-s2i-repository/master/solar-panels.json')
        .then(response => {
          const data = response.data;
          this.boxData.forEach(item => {
            item.data = data[item.title];
          });
        })
        .catch(error => {
          console.error(error);
          // Gestisci l'errore se la richiesta fallisce
        });
    },
  },
};
</script>