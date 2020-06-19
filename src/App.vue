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
    <router-view style="min-height: 60vh" />
    <Footer></Footer>
  </div>
</template>

<script>
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  components: {
    NavBar,
    Footer,
    ContactForm
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');

body {
  margin: 0 0 0 0;
  --orange-light: #ffa24b;
  --orange-dark: #ff5e00;
  --orange-shadow: 0px 1px 10px rgba(255, 102, 0, 0.315);
  --orange-shadow-hover: 0px 5px 15px rgba(236, 94, 0, 0.466);
  --nice-gradient: linear-gradient(-30deg, #ffb90d, #cc0045, #009980);
  --serif: 'playfair display';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#topnav {
  // width: 100%;
  height: 2px;
  background-image: var(--nice-gradient);
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

.grad-border {
  border-radius: 4px;
  background-image: var(--nice-gradient);
  padding: 1.5px 1.5px !important;
}

.gs-link {
  color: inherit;
  &:hover {
    background: linear-gradient(-45deg, #ffb90d, #cc0045, #009980, #ffb90d);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: AnimationName 5s linear infinite;
    // animation-fill-mode: forwards;
    // animation-direction: normal;
    -moz-animation: AnimationName 5s linear infinite;
    animation: AnimationName 5s linear infinite;
  }
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
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
  font-family: var(--serif);
  font-weight: 400;
  color: rgb(255, 115, 0);
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;

  @media only screen and (min-width: 470px) {
    font-size: 2.25rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
}

.sub-title {
  font-size: 1.3rem;
  @media only screen and (min-width: 470px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
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
  width: 20px;
  margin-right: 0.5rem;
  background-image: url('/src/assets/notification.svg');
}

.ico {
  max-width: 100px;
  // @media only screen and (min-width: 768px) {
  //   max-width: 100px;
  // }
}

.more-info-panel {
  font-size: 1rem;
}

.underline {
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    bottom: -1rem;
    content: '';
    width: 80%;
    height: 1px;
    background: var(--orange-light);
    background-image: var(--nice-gradient);
  }
}
</style>
