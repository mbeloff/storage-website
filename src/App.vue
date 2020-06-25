<template>
  <div id="app">
    <div id="topnav"></div>
    <NavBar id="nav"></NavBar>
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
  --orange-light: #ff5c1c;
  --orange-dark: #ff2600;
  --orange: #ff4828;
  --nice-gradient: linear-gradient(-30deg, #ffb90d, #cc0045, #009980);
  --serif: 'playfair display';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #465767;
}

a:not([href]) {
  /* Styles for anchors without href */
  cursor: pointer;
}

.fa-comment-alt-lines {
  color: var(--orange-dark);
}

.grad-border {
  border-radius: 4px;
  background-image: var(--nice-gradient);
  padding: 1.5px 1.5px !important;
}

.gradient-slide {
  color: inherit;
  &:hover {
    background: linear-gradient(to right, #ffb90d, #cc0045, #009980, #ffb90d);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: gradientSlide 5s linear infinite;
    // animation-fill-mode: forwards;
    // animation-direction: normal;
    -moz-animation: gradientSlide 5s linear infinite;
    animation: gradientSlide 5s linear infinite;
  }
}

@-webkit-keyframes gradientSlide {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
@-moz-keyframes gradientSlide {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
@keyframes gradientSlide {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.big-title {
  font-family: var(--serif);
  font-weight: 400;
  color: var(--orange);
  font-size: 2rem;
  margin-bottom: 0.4rem;
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
  margin: 0 0 2rem 0;
  @media only screen and (min-width: 470px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
}

// sub-title underline gradient
.sub-title span,
.underline {
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    bottom: -1.2rem;
    width: 75%;
    content: '';
    height: 1px;
    background: var(--orange-light);
    background-image: var(--nice-gradient);
  }
}
</style>
