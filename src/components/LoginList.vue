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

export default {
  components: {
    LoginItem,
  },
  data() {
    return {
      logins: [],
      error: null
    };
  },
  methods: {
    async fetchLogins() {
      try {
        const response = await dataService.fetchData();
        this.logins = response.logs;
      } catch (error) {
        console.error(error);
        this.error = 'Errore durante il recupero dei login.';
      }
    },
    addLogin(loginData) {
      const newLogin = {
        date: loginData.date,
        text: loginData.text,
        type: loginData.type
      };
      this.logins.unshift(newLogin);
    }
  },
  mounted() {
    this.fetchLogins();

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
  
