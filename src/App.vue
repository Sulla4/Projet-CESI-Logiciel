<template>
  <div id="app">
    <Banner />
    <router-view></router-view>
  </div>
</template>

<script>

import Banner from "./components/Banner";
export default {
  name: 'App',
  components: {
    Banner
  },
}
</script>

<style lang="scss">
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
