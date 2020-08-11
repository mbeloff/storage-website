<template>
  <div class="footer py-3">
    <div class="container pt-3">
      <hr />
      <div class="row">
        <div class="col-12 col-md-4 col-lg-6">
          <router-link to="/#">
            <img src="../assets/logo.svg" alt="" class="footer-logo mb-2" />
          </router-link>
          <p>
            50 Deshon St.<br />
            Woolloongabba, QLD 4102 <br />
          </p>
        </div>

        <div class="col-6 col-md-4 col-lg-3 pr-0">
          <h5>Services</h5>
          <ul class="list-unstyled">
            <li>
              <router-link class="gradient-slide-lite" to="/selfstorage"
                ><i class="fal fa-user fa-fw"></i>Personal Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide-lite" to="/selfstorage"
                ><i class="fal fa-user-tie fa-fw"></i>Business
                Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide-lite" to="/autostorage"
                ><i class="fal fa-car fa-fw"></i>Auto Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide-lite" to="/mobilestorage"
                ><i class="fal fa-map-marker fa-fw"></i>Mobile
                Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide-lite" to="/workshops"
                ><i class="fal fa-wrench fa-fw"></i>Workshop Space</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-3 pr-0">
          <h5>Information</h5>
          <ul class="list-unstyled">
            <li>
              <router-link class="gradient-slide-lite" to="/faq"
                ><i class="fal fa-question-circle fa-fw"></i
                >F.A.Q.s</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide-lite" to="/location"
                ><i class="fal fa-location-arrow fa-fw"></i>Find Us</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide-lite" to="/policies"
                ><i class="fal fa-file-alt fa-fw"></i>T&Cs</router-link
              >
            </li>
            <li>
              <open-modal class="gradient-slide-lite">Message Us</open-modal>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="text-center small m-0">&copy; 2020 gabbastorage.com</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  // margin-top: 5rem;
  background: #1d1c1c;
  color: #dfd2d2;
  font-size: 0.8rem;
  // font-weight: 100;
  text-transform: uppercase;
  i {
    margin-right: 0.25rem;
    color: rgb(160, 147, 142);
  }
  h5 {
    color: var(--orange);
  }
}
.footer-logo {
  max-width: 200px;
}
.gradient-slide-lite {
  color: inherit;
  transition: all 1s;
  &:hover {
    background: var(--grad-slide-lite);
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
</style>
