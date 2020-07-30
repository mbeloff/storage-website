<template>
  <div class="pt-0">
    <div class="home">
      <div class="container">
        <div class="grad-border">
          <div class="logo-box">
            <img class="logo" alt="logo" src="../assets/logo.svg" />
            <!-- <h1 class="slogan text-right">unbeatable.</h1> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <under-banner></under-banner> -->
    <service-accordion></service-accordion>
    <streak></streak>
    <!-- <under-banner></under-banner> -->
    <Why></Why>
  </div>
</template>

<script>
// @ is an alias to /src
import Why from '@/components/Why.vue'
import ServiceAccordion from '@/components/ServiceAccordion.vue'
// import UnderBanner from '@/components/UnderBanner.vue'
import Streak from '@/components/Streak.vue'
export default {
  name: 'Home',
  components: {
    Why,
    ServiceAccordion,
    Streak
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.logo {
  padding: 1rem;
  max-width: 75vw;
}

.grad-border {
  width: max-content;
  .logo-box {
    border-radius: 2.5px;
  }
  @media only screen and (max-width: 576px) {
    border-radius: 0;
    .logo-box {
      border-radius: 0 !important;
    }
  }
}

.logo-box {
  background: #1d1c1c;
  max-width: 100%;
  padding: 1rem;
  @media only screen and (max-width: 576px) {
  }
}

.home {
  // background-image: url(../assets/banner2.jpg);
  // background-image: url(../assets/banner2.jpg);
  background-image: linear-gradient(to right, #ff3f1db4 0%, #ffb3252c 100%),
    url(../assets/streak3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
  .container {
    padding: 10rem 0 10rem 0;
  }
}

h1.slogan {
  font-family: 'Playfair Display', serif;
  font-size: 10vw;
  color: #635652;
  padding-left: 2rem;
  /* margin-left: 4rem; */
  @media screen and (min-width: 996px) {
    font-size: 3rem;
  }
}
</style>
