<template>
  <div class="mt-8 ml-4 mr-4">
    <h2 class="text-xl font-bold mb-4">Logs</h2>
    <ul>
      <li>
        <login-item v-for="login in logins" :key="login.date" :login="login"></login-item>
      </li>
    </ul>
  </div>
</template>

<script>
import LoginItem from './LoginItem.vue';
import axios from 'axios';

export default {
  components: {
    LoginItem,
  },
  data() {
    return {
      // Array per i dati dei login e variabile per gli errori
      logins: [],
      error: null,
    };
  },
  methods: {
    async fetchData() {
      // Effettua la richiesta per ottenere i dati dei login
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ott-fogliata/vuejs-s2i-repository/master/solar-panels.json');
        this.logins = response.data.logs;
      } catch (error) {
        console.error(error);
        this.error = 'Errore durante il recupero dei login.';
      }
    },
    addLogin(loginData) {
      // Aggiunge un nuovo oggetto login all'inizio dell'array
      const newLogin = {
        date: loginData.date,
        text: loginData.text,
        type: loginData.type,
      };
      this.logins.unshift(newLogin);
    },
  },
  mounted() {
    this.fetchData();

    // Ottiene la data corrente e formatta la data corrente come "YYYY-MM-DD HH:MM:SS"
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Aggiunge un nuovo oggetto login dopo 5 secondi
    setTimeout(() => {
      const newLoginData = {
        date: formattedDate,
        text: 'Last login',
        type: 'info',
      };
      this.addLogin(newLoginData);
    }, 5000);
  },
};
</script>

<style>
</style>