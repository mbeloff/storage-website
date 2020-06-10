<template>
  <div id="app">
    <script
      type="application/javascript"
      src="https://kit.fontawesome.com/dcf276a164.js"
      crossorigin="anonymous"
      sameSite="none"
    ></script>
    <div id="topnav"></div>
    <NavBar id="nav" class="shadow-sm"></NavBar>
    <modal
      name="contact-modal"
      height="auto"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
    >
      <ContactForm></ContactForm>
    </modal>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    NavBar,
    Footer,
    ContactForm
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap");

body {
  margin: 0 0 0 0;
  --orange-light: #ffa24b;
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
  height: 15px;
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

.orange-shadow {
  box-shadow: var(--orange-shadow);
}

.hover-grow {
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.01);
  }
}

.orange-border {
  border: 3px dotted rgb(255, 102, 0);
  border-radius: 2rem;
}

.big-title {
  font-family: "Playfair Display", serif;
  color: rgb(255, 115, 0);
  font-size: 2rem;

  @media only screen and (min-width: 470px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
  @media screen and (min-width: 996px) {
    font-size: 2.75rem;
  }
}

.sub-title {
  font-size: 1.5rem;
  @media only screen and (min-width: 470px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
  }
  @media only screen and (min-width: 996px) {
    font-size: 2rem;
  }
}

.btn.btn-gs {
  border: 1px solid var(--orange-light);
  background: white;
  color: var(--orange-light);
  border-radius: 20px;
  box-shadow: var(--orange-shadow);
  padding: 7px 25px;
  transition: all 0.5s;
  &:hover {
    border: 2px solid var(--orange-dark);
    background: rgb(255, 255, 255);
    color: var(--orange-dark);
    box-shadow: var(--orange-shadow-hover);
    margin-bottom: 10px;
  }
}

.btn-gs i {
  transition: transform 0.25s;
}

.btn-gs i.active {
  transform: rotate(90deg);
}

.chat-icon {
  height: 20px;
  margin-right: 0.5rem;
}

.ico {
  max-width: 100px;
  @media only screen and (min-width: 768px) {
    max-width: 150px;
  }
}

.more-info-panel {
  font-size: 1rem;
}
</style>
