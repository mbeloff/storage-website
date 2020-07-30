<template>
  <div id="app" style="min-height: 100vh">
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
    <router-view style="padding-top: 58px" />
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
  --orange-light: #ffcd60;
  --orange-dark: #ffa41c;
  --orange: #ffae00;
  --dark-color: #1d1c1c;
  --light-color: #dfd2d2;
  --grad-slide: linear-gradient(
    to right,
    #ff960d,
    #cc0045,
    #cc0045,
    #1169ec,
    #0baa7a,
    #ff960d
  );
  --grad-slide-lite: linear-gradient(
    to right,
    #ffd45e,
    #ff6196,
    #ff7171,
    #7eb1ff,
    #64ffd0,
    #ffd45e
  );
  --nice-gradient: linear-gradient(-30deg, #ffb90d, #cc0045, #009980);
  --nice-gradient-lite: linear-gradient(-30deg, #ffdd88, #ff8fb4, #81ffea);
  --serif: 'Playfair Display';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #465767;
  display: grid;
  grid-template-rows: 1fr auto;
}

.dark-bg {
  background-color: var(--dark-color);
  color: var(--light-color);
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
    background: var(--grad-slide);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: gradientSlide 5s linear infinite;
    animation-fill-mode: forwards;
    animation-direction: normal;
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
  color: var(--orange-dark);
  font-size: 2.2rem;
  margin-bottom: 0.4rem;
  line-height: 1.3;

  @media only screen and (min-width: 470px) {
    font-size: 2.35rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2.75rem;
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
.underline,
.vnb__popup__bottom__menu-options__option__link--no-highlight {
  position: relative;
  display: inline-block;
  &::after {
    position: absolute;
    left: 0;
    bottom: -1.2rem;
    width: 50%;
    content: '';
    height: 1px;
    background: var(--orange-light);
    background-image: var(--nice-gradient);
  }
}

.vnb__popup__bottom__menu-options__option__link--no-highlight {
  &::after {
    bottom: 0rem;
    left: 1.25rem;
    width: 50%;
  }
}

.ico {
  height: 75px;
}

.grad-border div {
  background: white;
  padding: 0.5rem;
  margin-bottom: 0px;
  border-radius: 2px;
}
</style>
