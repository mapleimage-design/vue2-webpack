<template>
  <div id="app">
    <!-- <router-view /> -->
    <button @click="show">show</button>
    <button @click="show2">show2</button>
  </div>
</template>

<script>
// import message from "./components/message/message";

export default {
  name: "App",
  methods: {
    show() {
      // message.info("hello");
    },
    show2() {
      this.$message.info("hello");
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
