<template>
  <div class="footer py-3">
    <div class="container pt-3">
      <hr />
      <div class="row">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          <div class="row">
            <div class="col-6">
              <router-link to="/#">
                <img src="../assets/logo.svg" alt="" class="img-fluid mb-2" />
              </router-link>
              <p>
                46 Deshon St,<br />
                Woolloongabba, QLD 4102 <br />
              </p>
            </div>
            <div class="col-5">
              <picture>
                <source srcset="../assets/SSAA.webp" type="image/webp" />
                <source srcset="../assets/SSAA.png" type="image/png" />
                <img src="../assets/SSAA.png" alt="" class="img-fluid" />
              </picture>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-5 col-lg-3 pr-0">
          <h5>Services</h5>
          <ul class="list-unstyled">
            <li>
              <router-link class="link" to="/selfstorage"
                ><i class="fal fa-key fa-fw"></i>Self Storage</router-link
              >
            </li>
            <li>
              <router-link class="link" to="/autostorage"
                ><i class="fal fa-car fa-fw"></i>Auto Storage</router-link
              >
            </li>
            <!-- <li>
              <router-link class="link" to="/mobilestorage"
                ><i class="fal fa-truck-loading fa-fw"></i>Mobile
                Storage</router-link
              >
            </li> -->
            <!-- <li>
              <router-link class="link" to="/workshops"
                ><i class="fal fa-wrench fa-fw"></i>Workshop Space</router-link
              >
            </li> -->
          </ul>
        </div>
        <div class="col-6 col-md-5 col-lg-3 pr-0">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li>
              <router-link class="link" to="/"
                ><i class="fal fa-home fa-fw"></i>Home</router-link
              >
            </li>
            <li>
              <router-link class="link" to="/faq"
                ><i class="fal fa-question-circle fa-fw"></i>F.A.Q.</router-link
              >
            </li>
            <li>
              <router-link class="link" to="/about"
                ><i class="fal fa-info fa-fw"></i>About Us</router-link
              >
            </li>

            <li>
              <open-modal class="link">Message Us</open-modal>
            </li>
            <li class="mt-3 text-muted">
              <router-link class="link" to="/policies"
                ><i class="fal fa-file-alt fa-fw"></i>T&Cs</router-link
              >
            </li>
            <li class="text-muted">
              <router-link class="link" to="/privacy"
                ><i class="fal fa-file-alt fa-fw"></i>Privacy
                Policy</router-link
              >
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
    font-size: 1rem;
    vertical-align: middle;
  }
  li {
    line-height: 1.5rem;
  }
  h5 {
    color: var(--primary);
  }
}
.footer-logo {
  max-width: 200px;
}
</style>
