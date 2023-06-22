<template>
    <li class="mb-2 flex items-center">
      <span class="font-medium mr-2">{{ login.date }}</span>
      <span class="text-gray-400">- {{ login.text }}</span>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      login: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style>
  /* Aggiungi gli stili desiderati per gli elementi della lista dei login */
  </style>
  