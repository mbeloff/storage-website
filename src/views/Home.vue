<template>
  <div>
    <div class="home">
      <div class="container">
        <div class="logo-box shadow-lg rounded" style="">
          <img class="logo" alt="logo" src="../assets/logo2.svg" />
          <!-- <h1 class="slogan text-right">unbeatable.</h1> -->
        </div>
      </div>
    </div>
    <ServiceAccordian></ServiceAccordian>
    <Why></Why>
  </div>
</template>

<script>
// @ is an alias to /src
import Why from "@/components/Why.vue";
import ServiceAccordian from "@/components/ServiceAccordian.vue";
export default {
  name: "Home",
  components: {
    Why,
    ServiceAccordian
  }
};
</script>

<style scoped lang="scss">
.logo {
  /* background: white; */
  padding: 1rem;
  max-width: 90%;
}

.logo-box {
  width: max-content;
  /* padding: 1rem 5rem; */
  background: rgba(255, 255, 255, 0.747);
  max-width: 100%;
  padding: 1rem;
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
}

.home {
  background-image: url(../assets/banner2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 75% 25%;
  .container {
    padding: 5rem 0;
  }
}

h1.slogan {
  font-family: "Playfair Display", serif;
  font-size: 10vw;
  color: #635652;
  padding-left: 2rem;
  /* margin-left: 4rem; */
  @media screen and (min-width: 996px) {
    font-size: 3rem;
  }
}
</style>
