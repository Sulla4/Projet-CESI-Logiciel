<template>
  <div class="banner">
    <Slide right>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
    <div class="header">
      <router-link class="logo" to="/">
      </router-link>
    </div>
  </div>
</template>

<script>
import Slide from "./Menu/Slide";

export default {
  name: "Banner",
  components: {
    Slide
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    margin-bottom: 25px;
  }
  .header {
    height: 101px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      height: 70px;
      width: 401px;
      background-position: center;
      background-size: cover;
      background-image: url("https://imgur.com/LGuEoO0.png");
    }
  }
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: #373a47;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: rgb(63, 63, 65); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: #b8b7ad;
    margin-left: 10%;
    font-size: 20px;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }
</style>
