<template>
  <div class="footer py-3">
    <div class="container pt-3">
      <hr>
      <div class="row">
        <div class="col-12 col-md-6">
          <img src="../assets/logo.svg" alt="" class="footer-logo mb-2" />
          <p>
            46 Deshon St.<br />
            Woolloongabba, QLD 4102 <br />
          </p>
        </div>
        <div class="col-6 col-md-3">
          <b>Services</b>
          <ul class="list-unstyled">
            <li>
              <router-link class="gradient-slide" to="/selfstorage"
                >Personal Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide" to="/selfstorage"
                >Business Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide" to="/mobilestorage"
                >Mobile Storage</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide" to="/workshops"
                >Workshop Space</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <b>Information</b>
          <ul class="list-unstyled">
            <li>
              <router-link class="gradient-slide" to="/faq"
                >F.A.Q.s</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide" to="/location"
                >Find Us</router-link
              >
            </li>
            <li>
              <router-link class="gradient-slide" to="/policies"
                >T&Cs</router-link
              >
            </li>
            <li>
              <open-modal>Message Us</open-modal>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="text-center m-0">&copy; gabbastorage.com</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 5rem;
}
.footer-logo {
  max-width: 200px;
}
a.gradient-slide {
  color: inherit;
}
</style>
