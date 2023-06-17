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
      // Effettua la chiamata API per ottenere i dati dei login più recenti
      // e aggiorna la variabile logins con i dati ricevuti
      // Esempio:
      // axios.get('/api/logins')
      //   .then(response => {
      //     this.logins = response.data;
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });

      // Esempio di dati di login da utilizzare durante lo sviluppo:
      this.logins = [
        { id: 1, username: 'user1', timestamp: '2023-06-01 10:30:00' },
        { id: 2, username: 'user2', timestamp: '2023-06-02 15:45:00' },
        { id: 3, username: 'user3', timestamp: '2023-06-03 09:15:00' },
        // ...
      ];
    },
    addLogin(loginData) {
      // Aggiunge un nuovo login alla lista degli ultimi login
      // Utilizza i dati del nuovo login per creare un oggetto da inserire nella lista
      const newLogin = {
        id: loginData.id,
        username: loginData.username,
        timestamp: loginData.timestamp
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
        id: 4,
        username: 'user4',
        timestamp: '2023-06-03 11:30:00'
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
  
  
  
  
  
  
  