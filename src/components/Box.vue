<template>
  <div class="box bg-[#303134] border rounded-sm border-gray-500 p-6 h-30">
    <h3>{{ title }}</h3>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        data: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>