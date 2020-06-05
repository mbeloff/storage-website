<template>
  <div id="app">
    <script
      type="application/javascript"
      src="https://kit.fontawesome.com/dcf276a164.js"
      crossorigin="anonymous"
      sameSite="none"
    ></script>
    <div id="topnav"></div>
    <NavBar id="nav"></NavBar>
    <router-view />
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap");

body {
  margin: 0 0 0 0;
  --orange-light: #ff912b;
  --orange-dark: #ff5e00;
  --orange-shadow: 0px 1px 10px rgba(255, 102, 0, 0.315);
  --orange-shadow-hover: 0px 5px 15px rgba(236, 94, 0, 0.466);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#topnav {
  width: 100%;
  height: 35px;

  background: white;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #2980b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#nav {
  text-align: left;
  padding: 30px;
  background: white;

  a {
    // font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    // margin-right: 2rem;

    &.router-link-exact-active {
      color: var(--orange-dark);
    }
  }
}
</style>
