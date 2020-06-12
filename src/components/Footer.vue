<template>
  <div class="footer py-3">
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <img src="../assets/logo2.svg" alt="" class="footer-logo mb-2" />
          <p>
            100 Longlands St.<br />
            Woolloongabba, QLD 4102 <br />
          </p>
        </div>
        <div class="col-6 col-md-3">
          <!-- <b>Services</b>
          <ul class="list-unstyled">
            <li>Personal Storage</li>
            <li>Business Storage</li>
            <li>Drop-Off Storage Boxes</li>
            <li>Rent Workspaces</li>
          </ul> -->
        </div>
        <div class="col-6 col-md-3">
          <b>Contact</b>
          <ul class="list-unstyled">
            <li>
              <a href="./faq">Frequently Asked Questions</a>
            </li>
            <li @click="show()">Make an Enquiry</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="text-center m-0">&copy; gabbastorage.com</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('contact-modal')
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 5rem;
}
.footer-logo {
  max-width: 200px;
}
</style>
