<template>
  <div class="home">
    <div class="container">
      <div class="logo-box shadow-lg rounded" style="">
        <img class="logo" alt="logo" src="../assets/logo2.svg" />
        <h1 class="slogan">unbeatable.</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
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
  background: rgba(255, 255, 255, 0.692);
  max-width: 100%;
}

.home {
  /* padding: 5rem 0; */
  background-image: url(../assets/banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    padding: 5rem 0;
  }
}

h1.slogan {
  font-family: "Playfair Display", serif;
  font-size: 10vw;
  color: #ff8a3c;
  padding-left: 2rem;
  /* margin-left: 4rem; */
  @media screen and (min-width: 1200px) {
    font-size: 6rem;
  }
}
</style>
