<template>
  <div id="app">
    <bb-header></bb-header>
    <router-view />
  </div>
</template>
<script>
import header from "./components/globals/Header.vue";

export default {
  name: "App",
  components: {
    "bb-header": header,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  color: #2c3e50;
  text-align: left;
  background-color: #000;
  height: 100vh;
}
</style>
