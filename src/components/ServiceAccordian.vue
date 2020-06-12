<template>
  <div class="container my-5" id="home-accordian">
    <div class="row" id="headingOne">
      <div class="col-12 col-md-7 order-2 order-md-1">
        <p class="big-title">Cheap, secure, self storage.</p>
        <p class="sub-title">Easy payments, short or long term hire</p>
        <p style="font-size: 16px;">
          Various sized storage units available. Finally free up some space in
          your home or office.
        </p>
        <a
          class="btn btn-gs"
          @click="moreInfo('personal')"
          data-toggle="collapse"
          data-target="#personal"
          aria-expanded="true"
          aria-controls="personal"
          ><i
            class="fa fa-long-arrow-right fa-fw mr-2"
            :class="{ active: selectedType == 'personal' }"
          ></i
          >More Info</a
        >
      </div>
      <div class="col-12 col-md-4 offset-md-1 text-center my-auto order-md-2">
        <img src="../assets/warehouse.svg" alt="" class="img-fluid ico" />
      </div>
      <div
        class="col-12 order-last more-info-panel collapse"
        id="personal"
        data-parent="#home-accordian"
      >
        <p>
          Gabba Storage has cost-effective self storage solutions in convenient
          Woolloongabba location. Whether you're decluttering, renovating,
          moving house or looking for a secure off-site location for documents
          or valuables, we've got you covered.
        </p>
        <p>
          You'll be free to access your items whenever you like during opening
          hours. Our storage units are not accessible to the public and you are
          the only keyholder, so your goods remain secure.
        </p>
        <p>
          <a class="text-warning" @click="show()"
            ><img
              class="chat-icon"
              src="../assets/notification.svg"
              alt=""
            />Send us a message</a
          >
          to enquire
        </p>

        <!-- <div class="row">
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div
                class="hover-grow orange-border orange-shadow text-center h-100"
              >
                <p class="lead p-3 mb-0">Small</p>
                <img src="../assets/small.svg" alt="" class="w-25" />
                <div class="p-3">
                  <p class="mb-0">1m<sup>3</sup></p>
                  <p class="small text-muted">1m x 1m x 1m</p>
                  <p>ideal for small items and documents</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div
                class="hover-grow orange-border orange-shadow text-center h-100"
              >
                <p class="lead p-3 mb-0">Medium</p>
                <img src="../assets/medium.svg" alt="" class="w-25" />
                <div class="p-3">
                  <p class="mb-0">~6.3m<sup>3</sup></p>
                  <p class="small text-muted">1.2m x 2.4m x 2.2m</p>
                  <p>
                    accommodates some larger items
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div
                class="hover-grow orange-border orange-shadow text-center h-100"
              >
                <p class="lead p-3 mb-0">Large</p>
                <img src="../assets/large.svg" alt="" class="w-25" />
                <div class="p-3">
                  <p class="mb-0">~10.5m<sup>3</sup></p>
                  <p class="small text-muted">2.0m x 2.4m x 2.2m</p>
                  <p>Ideal for multiple large items</p>
                </div>
              </div>
            </div>
          </div> -->
      </div>
    </div>
    <hr class="my-5" />
    <div class="row">
      <div class="col-12 col-md-4 text-center my-auto">
        <img src="../assets/truck.svg" alt="" class="img-fluid ico" />
      </div>
      <div class="col-12 col-md-7 offset-md-1 text-left">
        <p class="big-title">Mobile storage units.</p>
        <p class="sub-title">We deliver to you, you pack, we store</p>
        <p style="font-size: 16px">
          Get your goods in storage without ever leaving your house.
        </p>
        <a
          class="btn btn-gs"
          @click="moreInfo('portable')"
          data-toggle="collapse"
          data-target="#portable"
          aria-expanded="true"
          aria-controls="portable"
          ><i
            class="fa fa-long-arrow-right fa-fw mr-2"
            :class="{ active: selectedType == 'portable' }"
          ></i
          >More Info</a
        >
      </div>
      <div
        class="col-12 order-last more-info-panel collapse"
        id="portable"
        data-parent="#home-accordian"
      >
        <div class="row">
          <div class="col-12 col-md-8">
            <p>
              Storage boxes delivered anywhere in Brisbane area. Take as long as
              you like to pack and then we collect to securely store at our
              facility.
            </p>
            <p>
              <a class="text-warning" @click="show()"
                ><img
                  class="chat-icon"
                  src="../assets/notification.svg"
                  alt=""
                />Send us a message</a
              >
              to enquire.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <img
              src="../assets/map-circle.jpg"
              alt=""
              class="img-fluid hover-grow orange-border orange-shadow"
            />
          </div>
        </div>
      </div>
    </div>
    <hr class="my-5" />
    <div class="row">
      <div class="col-12 col-md-7 order-2 order-md-1">
        <p class="big-title">Rent workshop space</p>
        <p class="sub-title">
          Three-phase and single-phase power, with racking, hoist and office
          space available
        </p>
        <p style="font-size: 16px;">
          Conveniently located workshop space at competitive rates.
        </p>
        <a
          class="btn btn-gs"
          @click="moreInfo('workshop')"
          data-toggle="collapse"
          data-target="#workshop"
          aria-expanded="true"
          aria-controls="workshop"
          ><i
            class="fa fa-long-arrow-right fa-fw mr-2"
            :class="{ active: selectedType == 'workshop' }"
          ></i
          >More Info</a
        >
      </div>
      <div class="col-12 col-md-4 offset-md-1 text-center my-auto order-md-2">
        <img src="../assets/mechanic.svg" alt="" class="img-fluid ico" />
      </div>
      <div
        class="col-12 order-last more-info-panel collapse"
        id="workshop"
        data-parent="#home-accordian"
      >
        <div class="row p-3">
          <div class="col-12 col-md-5 orange-border orange-shadow p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14157.252574725757!2d153.03862873985938!3d-27.49063514184493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d36cffed%3A0x2a3a64161ccbff82!2s100%20Longlands%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1591763927300!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0;border-radius: 2rem;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-12 col-md-7">
            <p class="">
              80 - 240m<sup>2</sup> Workshop spaces available in convenient
              Woolloongabba location. No fixed terms, pay week to week.
            </p>
            <p>
              <a class="text-warning" @click="show()"
                ><img
                  class="chat-icon"
                  src="../assets/notification.svg"
                  alt=""
                />Send us a message</a
              >
              to enquire.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: null
    }
  },
  methods: {
    moreInfo(type) {
      if (type == this.selectedType) {
        this.selectedType = null
      } else {
        this.selectedType = type
      }
    },
    show() {
      this.$modal.show('contact-modal')
    }
  }
}
</script>
