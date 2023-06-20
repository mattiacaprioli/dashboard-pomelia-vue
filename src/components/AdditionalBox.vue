<template>
  <div class="additional-box bg-slate-900">
    <div class="mr-2">
      <i :class="weatherIcon"></i> <!-- Utilizza la classe dinamica dell'icona in base alle condizioni meteorologiche -->
    </div>
    <h2 class="text-xl font-bold mb-1">{{ temperature }}°C</h2>
    <p>{{ city }}</p>
    <div class="flex items-center">
      <p class="text-lg font-medium">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      temperature: null,
      city: null,
      description: null
    };
  },
  mounted() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const latitude = 41.902783;
    const longitude = 12.496365;
    const apiKey = '0810cbb33e9936a014b1a42cd7b95205';

    axios
      .get(apiUrl, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: apiKey,
          units: 'metric'
        }
      })
      .then(response => {
        this.temperature = response.data.main.temp;
        this.city = response.data.name;
        this.description = response.data.weather[0].description;
      })
      .catch(error => {
        console.error(error);
      });
  },
  computed: {
    weatherIcon() {
      // Calcola la classe dell'icona in base alla descrizione del meteo
      if (this.description === 'clear sky') {
        return 'fas fa-sun'; // Classe dell'icona del sole di Font Awesome
      } else if (this.description === 'few clouds') {
        return 'fas fa-cloud-sun'; // Classe dell'icona di una nuvola con il sole di Font Awesome
      } else if (this.description === 'scattered clouds') {
        return 'fas fa-cloud'; // Classe dell'icona di una nuvola di Font Awesome
      } else {
        return 'fas fa-question'; // Icona di default in caso di condizioni meteorologiche non riconosciute
      }
    }
  }
};
</script>


<style>
.additional-box {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}
</style>