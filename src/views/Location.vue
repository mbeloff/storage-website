<template>
  <div class="pb-5">
    <div class="map" id="map">
      <!-- <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.8164807353247!2d153.0438404041454!3d-27.49210414385597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d601f611%3A0x22ece874c941c1b!2s46%20Deshon%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1592443353150!5m2!1sen!2sau"
        width="100%"
        height="300"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe> -->
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <h1 class="big-title">Our Location</h1>
          <div class="row">
            <div class="col-6 col-md-12">
              <p class="sub-title">
                <span>We're easy to find</span>
              </p>
              <p>
                46 Deshon St,<br />Woolloongabba 4102 <br />
                QLD, Australia
              </p>
            </div>

            <div class="col-6 col-md-12">
              <div>
                <p class="mb-0"><strong>Monday to Friday</strong></p>
                <p>9am – 4pm</p>
              </div>
              <div>
                <p class="mb-0"><strong>Saturday</strong></p>
                <p>9am – 12pm</p>
              </div>
              <div>
                <p class="mb-0"><strong>Sunday</strong></p>
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7 offset-md-1">
          <h1 class="big-title">
            Contact Us
          </h1>
          <Form></Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components: { Form },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
#contact-form {
  padding: 0 0 0 0 !important;
}

.map {
  margin-bottom: 1rem;
}
</style>
