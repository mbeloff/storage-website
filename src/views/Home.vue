<template>
  <div>
    <div class="home">
      <div class="container">
        <div class="grad-border">
          <div class="logo-box shadow-lg" style="">
            <img class="logo" alt="logo" src="../assets/logo.svg" />
            <!-- <h1 class="slogan text-right">unbeatable.</h1> -->
          </div>
        </div>
      </div>
    </div>
    <under-banner></under-banner>
    <service-accordion></service-accordion>
    <under-banner></under-banner>
    <Why></Why>
  </div>
</template>

<script>
// @ is an alias to /src
import Why from '@/components/Why.vue'
import ServiceAccordion from '@/components/ServiceAccordion.vue'
import UnderBanner from '@/components/UnderBanner.vue'
export default {
  name: 'Home',
  components: {
    Why,
    ServiceAccordion,
    UnderBanner
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
  background: rgba(255, 255, 255, 1);
  max-width: 100%;
  padding: 1rem;
  @media only screen and (max-width: 576px) {
  }
}

.home {
  // background-image: url(../assets/banner2.jpg);
  background-image: url(../assets/banner2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25% 45%;
  .container {
    padding: 5rem 0;
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
