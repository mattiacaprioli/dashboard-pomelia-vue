<template>
  <div class="p-4 border border-gray-200 bg-gray-700 rounded-sm mt-5 flex flex-col md:flex-row md:items-center md:justify-between md:h-40 mr-4 ml-4">
    <!-- Sezione delle informazioni meteo -->
    <div class="flex items-center md:mr-6">
      <div class="mr-6">
        <i :class="['material-icons', 'text-5xl', weatherIcon]"></i>
      </div>
      <div class="flex flex-col">
        <h2 class="text-xl font-bold mb-1">{{ temperature }}°C</h2>
        <p>{{ city }}</p>
        <div class="flex items-center">
          <p class="text-lg font-medium">{{ description }}</p>
        </div>
      </div>
    </div>
    <!-- Sezione del contatore -->
    <div class="flex justify-center items-center mt-4 md:mt-0">
      <div v-for="(digit, index) in formattedCounter" :key="index" class="text-2xl font-bold bg-gray-300 text-gray-800 p-2 m-1 rounded">
        {{ digit }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // Variabili per le informazioni meteo e il contatore
      temperature: null,
      city: null,
      description: null,
      counter: 2344,
      apiKey: '0810cbb33e9936a014b1a42cd7b95205'
    };
  },
  mounted() {
    // Effettua la richiesta per ottenere le coordinate geografiche della città
    const geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct';
    const cityName = 'Rome';

    axios
      .get(geoApiUrl, {
        params: {
          q: cityName,
          limit: 1,
          appid: this.apiKey
        }
      })
      .then(response => {
        const latitude = response.data[0].lat;
        const longitude = response.data[0].lon;

        // Effettua la richiesta per ottenere i dati meteorologici della città
        const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        axios
          .get(weatherApiUrl, {
            params: {
              lat: latitude,
              lon: longitude,
              appid: this.apiKey,
              units: 'metric'
            }
          })
          .then(response => {
            this.temperature = response.data.main.temp;
            this.city = response.data.name;
            this.description = response.data.weather[0].description;

            // Avvia il conteggio del contatore ogni secondo
            setInterval(() => {
              this.counter += 1;
            }, 1000);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  },
  computed: {
    weatherIcon() {
      // Calcola la classe dell'icona in base alla descrizione del meteo
      if (this.description === 'clear sky') {
        return 'fas fa-sun';
      } else if (this.description === 'few clouds') {
        return 'fas fa-cloud-sun';
      } else if (this.description === 'scattered clouds') {
        return 'fas fa-cloud';
      } else {
        return 'fas fa-question';
      }
    },
    formattedCounter() {
      // Formatta il valore del contatore come "000002344"
      return this.counter.toString().padStart(8, '0');
    }
  }
};
</script>

<style>
</style>