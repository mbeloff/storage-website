<template>
  <div>
    <div class="home">
      <div class="container">
        <div class="logo-box shadow-lg rounded" style="">
          <img class="logo" alt="logo" src="../assets/logo2.svg" />
          <h1 class="slogan">unbeatable.</h1>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row mx-auto service-info">
        <div class="col-12 col-md-7 order-2 order-md-1">
          <p class="big-title">Cheap, secure, personal storage.</p>
          <p class="sub-title">Easy payments, Short or Long Term Hire</p>
          <a class="btn btn-gs">More Info</a>
        </div>
        <div class="col-12 col-md-4 offset-md-1 text-center my-auto order-md-2">
          <img src="../assets/warehouse.svg" alt="" class="img-fluid ico" />
        </div>
      </div>
      <hr class="my-5" />
      <div class="row mx-auto service-info">
        <div class="col-12 col-md-4 text-center my-auto">
          <img src="../assets/truck.svg" alt="" class="img-fluid ico" />
        </div>
        <div class="col-12 col-md-7 offset-md-1 text-right">
          <p class="big-title">Portable storage boxes.</p>
          <p class="sub-title">We deliver to you, you pack, we store</p>
          <a class="btn btn-gs">More Info</a>
        </div>
      </div>
      <hr class="my-5" />
      <div class="row mx-auto service-info">
        <div class="col-12 col-md-7 order-2 order-md-1">
          <p class="big-title">Rent workshop space</p>
          <p class="sub-title">
            Three-phase and single-phase power, with racking, hoist and office
            space available
          </p>
          <a class="btn btn-gs gradient-border">More Info</a>
        </div>
        <div class="col-12 col-md-4 offset-md-1 text-center my-auto order-md-2">
          <img src="../assets/mechanic.svg" alt="" class="img-fluid ico" />
        </div>
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
  background: rgba(255, 255, 255, 0.747);
  max-width: 100%;
  padding: 1rem;
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

.service-info {
  font-size: 4vw;
  @media screen and (min-width: 996px) {
    font-size: 3rem;
  }
}

.big-title {
  font-family: "Playfair Display", serif;
  color: rgb(255, 115, 0);
  font-size: 2.5em;
  @media only screen and (min-width: 470px) {
    font-size: 1.8em;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.1em;
  }
  @media only screen and (min-width: 996px) {
    font-size: 1em;
  }
}

.sub-title {
  font-size: 1.5em;
  @media only screen and (min-width: 470px) {
    font-size: 1.1em;
  }
  @media only screen and (min-width: 768px) {
    font-size: 0.6em;
  }
  @media only screen and (min-width: 996px) {
    font-size: 0.5em;
  }
}

.ico {
  max-width: 100px;
  @media only screen and (min-width: 768px) {
    max-width: 150px;
  }
}

.btn-gs {
  border: 1px solid var(--orange-light);
  background: white;
  color: var(--orange-light);
  border-radius: 20px;
  box-shadow: var(--orange-shadow);
  padding: 7px 25px;
  transition: all 0.5s;
  &:hover {
    border: 1px solid var(--orange-dark);
    background: white;
    color: var(--orange-dark);
    box-shadow: var(--orange-shadow-hover);
    margin-bottom: 10px;
  }
}
</style>
