<template>
  <div>
    <div class="streak position-relative ">
      <parallax :fixed="true">
        <img class="" src="../assets/streak1.jpg" alt="" />
      </parallax>

      <div class="position-absolute streak-content center overlay-1 text-white">
        <div
          class="col-12 col-md-6"
          data-aos="fade-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <p class="h2">Get in Touch</p>
          <p>
            Need storage advice? Head over to the FAQ page, or reach out to get
            a quote or ask a question directly.
          </p>

          <a
            href="javascript:void(0);"
            @click="show()"
            class="btn btn-lg btn-outline-warning mt-2"
          >
            <nobr
              ><i class="fal fa-comment-alt-lines fa-fw mr-2"></i>Get a
              Quote</nobr
            >
          </a>
          <router-link to="/faq">
            <button class="btn btn-lg btn-outline-primary mt-2 ml-2">
              F.A.Q's
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="streak position-relative">
      <img class="streak-img" src="../assets/streak3.jpg" alt="" />
      <div class="position-absolute streak-content center overlay-2 text-white">
        <div
          class="col-12 col-md-6 text-justify"
          data-aos="fade-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <p class="h2 text-left">Brisbane's <nobr>Cheapest Storage</nobr></p>
          <p>
            Standout rates and deals on storage containers, tradesman sheds and
            work areas and storage for vehicles of all kinds.
          </p>

          <div
            class="grad-border text-center font-weight-bold my-2 text-dark shadow-lg"
          >
            <p class="bg-white p-3 mb-0">
              Current Offer:
              <span
                >First 2 Months Container Rental FREE*</span
              >
            </p>
          </div>
          <a href="/specials" class="float-right text-white"
            >more specials <span class="fal fa-chevron-right"></span
          ></a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: { Parallax },
  methods: {
    show() {
      this.$modal.show('contact-modal')
    }
  }
}
</script>

<style lang="scss">
.streak {
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  max-height: 500px;
  max-width: 100vw;
  overflow: hidden;
  margin-top: 0%;
  &:not(:first-of-type) {
    margin-top: -10%;
    @media only screen and (max-width: 768px) {
      margin-top: -3rem;
    }
    @media only screen and (min-width: 1200px) {
      margin-top: -5rem;
    }
  }
}

.streak-img {
  overflow-x: hidden;
  width: 100%;
  object-fit: cover;
  object-position: 0% 0% !important;
  @media only screen and (max-width: 768px) {
    min-height: 400px;
    height: 100%;
  }
}

.streak-content {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.overlay-1 {
  background-color: rgba(6, 8, 22, 0.822);
}

.overlay-2 {
  background-color: rgba(202, 47, 0, 0.61);
}
</style>
