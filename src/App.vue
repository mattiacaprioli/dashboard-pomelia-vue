<template>
  <div>
    <dashboard></dashboard>
    <additional-box></additional-box>
    <login-list></login-list>
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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
