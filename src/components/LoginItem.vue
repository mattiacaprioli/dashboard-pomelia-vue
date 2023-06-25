<template>
  <li class="mb-2 flex items-center">
    <span class="font-medium mr-2 lg:text-base">{{ login.date }}</span>
    <span class="text-gray-400 text-sm lg:text-base">- {{ login.text }}</span>
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
  </style>