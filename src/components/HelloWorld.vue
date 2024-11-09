<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<style scoped>
.hello {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>