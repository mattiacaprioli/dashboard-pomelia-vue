<template>
  <div class="box">
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
.box {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
}
</style>