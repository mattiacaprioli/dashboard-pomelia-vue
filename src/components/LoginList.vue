<template>
    <div class="mt-8 ml-4 mr-4">
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

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  setTimeout(() => {
    const newLoginData = {
      date: formattedDate,
      text: 'Last login',
      type: 'info'
    };
    this.addLogin(newLoginData);
  }, 5000);
}
};
</script>

<style>
</style>
  
