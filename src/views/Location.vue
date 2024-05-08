<template>
  <div class="container">
    <div class="map" id="map">
      <!-- <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.26766718953!2d153.04183271505732!3d-27.49204988288161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a472def8371%3A0xf9c06e864fa9beca!2s50%20Deshon%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1597105858794!5m2!1sen!2sau"
        width="100%"
        height="300"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe> -->
      <a href="https://goo.gl/maps/QbNcXsaZ7G2Sqn4EA"
        ><img
          class="img-fluid"
          src="../assets/map3.jpg"
          alt=""
          style="margin-top: -30px"
      /></a>
    </div>
    <div class="container pb-3">
      <div class="row">
        <div class="col-12 py-3">
          <h1 class="big-title">About Us</h1>
          Gabba Storage is a family owned Australian business offering
          self-storage solutions to individuals and business in the Brisbane
          area. Trust Gabba Storage to keep your goods secure, while providing
          great customer service and unbeatable prices.
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <!-- <h1 class="big-title">Our Location</h1> -->
          <div class="row">
            <div class="col-6 col-md-12">
              <p class="sub-title">
                <span>Find Us</span>
              </p>
              <p class="mb-0">
                100 Longlands St,<br />Woolloongabba 4102 <br />
                QLD, Australia
              </p>
              <a
                v-if="$store.state.global.phone"
                class="mb-4"
                :href="`tel:${$store.state.global.phone}`"
              >
                {{ $store.state.global.phone }}
              </a>
              <p>
                <a
                  class="small"
                  href="https://www.google.com/maps/place/100+Longlands+St,+Woolloongabba+QLD+4102"
                  ><i class="far fa-map-marker-alt"></i> get directions</a
                >
              </p>
            </div>

            <div class="col-6 col-md-12">
              <div>
                <p class="mb-0"><strong>Monday to Friday</strong></p>
                <p>{{ this.hours.monFri }}</p>
              </div>
              <div>
                <p class="mb-0"><strong>Saturday</strong></p>
                <p>{{ this.hours.sat }}</p>
              </div>
              <div>
                <p class="mb-0"><strong>Sunday</strong></p>
                <p>{{ this.hours.sun }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7 offset-md-1">
          <!-- <h1 class="big-title">
            Contact Us
          </h1> -->
          <p class="sub-title">
            <span> Get a quote or ask a question</span>
          </p>
          <br />
          <Form></Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  metaInfo: {
    title: 'Contact Us',
    meta: [
      {
        name: 'description',
        content:
          "We're here for all your self storage needs. Get in touch for quote on the cheapest self storage in Brisbane.",
        vmid: 'description'
      }
    ]
  },
  components: { Form },
  data() {
    return {
      hours: this.$store.state.global.hours
    }
  }
}
</script>

<style scoped lang="scss">
#contact-form {
  padding: 0 0 0 0 !important;
}

.map {
  margin-bottom: 1rem;
  // min-height: 300px;
}
</style>
