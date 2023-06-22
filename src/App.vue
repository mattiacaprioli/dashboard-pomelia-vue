<template>
  <div class="flex flex-col">
    <header class="flex items-center h-24 mb-10">
      <img class="h-72 w-auto ml-2" src="./assets/images/logoPomelia.png" alt="Logo Pomelia" />
    </header>
    <div class="flex flex-col md:flex-row md:gap-4">
      <div class="w-full md:w-1/2">
        <dashboard />
      </div>
      <div class="w-full md:w-1/2">
        <additional-box />
      </div>
    </div>
    <div class="w-full mt-4 flex justify-center">
      <login-list />
    </div>
    <footer class="flex items-center justify-center h-12 bg-gray-700 mt-12">
      <p class="text-gray-300">Created by Mattia Caprioli © 2023</p>
    </footer>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import AdditionalBox from './components/AdditionalBox.vue';
import LoginList from './components/LoginList.vue';

export default {
  components: {
    Dashboard,
    AdditionalBox,
    LoginList,
  },
};
</script>

<style>

</style>
