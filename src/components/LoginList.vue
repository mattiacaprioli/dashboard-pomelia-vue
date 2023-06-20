<template>
    <div class="login-list">
        <h2 class="text-xl font-bold mb-4">Ultimi Login</h2>
        <ul>
            <li>
                <login-item v-for="login in logins" :key="login.id" :login="login"></login-item>
            </li>
        </ul>
    </div>
</template>

<script>
import LoginItem from './LoginItem.vue';
import dataService from '../services/dataService';
import axios from 'axios';

export default {
  components: {
    LoginItem,
  },
  data() {
    return {
      logins: []
    };
  },
  methods: {
    fetchLogins() {
      // Effettua la chiamata API per ottenere i dati dei login dal file JSON
      axios.get('../../solar-panels.json')
        .then(response => {
          this.logins = response.data.logs;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addLogin(loginData) {
      // Aggiunge un nuovo login alla lista degli ultimi login
      // Utilizza i dati del nuovo login per creare un oggetto da inserire nella lista
      const newLogin = {
        date: loginData.date,
        text: loginData.text,
        type: loginData.type
      };

      // Aggiungi il nuovo login all'inizio dell'array logins
      this.logins.unshift(newLogin);
    }
  },
  mounted() {
    this.fetchLogins();

    // Esempio di aggiunta di un nuovo login dopo 5 secondi (simulazione di un login effettuato)
    setTimeout(() => {
      const newLoginData = {
        date: '2023-06-03 11:30:00',
        text: 'utente aggiunto',
        type: 'info'
      };
      this.addLogin(newLoginData);
    }, 5000);
  }
};
</script>

<style>
.login-list {
  margin-top: 2rem;
}
</style>
  
