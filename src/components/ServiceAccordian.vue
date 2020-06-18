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
        <img src="../assets/warehouse.svg" alt="" class=" ico" />
      </div>
      <div
        class="col-12 order-last more-info-panel collapse"
        id="personal"
        data-parent="#home-accordian"
      >
        <p>
          Gabba Storage has cost-effective self storage solutions in convenient
          Woolloongabba location. Whether you're decluttering, renovating,
          moving house or looking for a secure off-site location for business
          archives or excess stock, we've got you covered.
        </p>
        <p>
          You'll be free to access your items whenever you like during opening
          hours. Our storage units are not accessible to the public and you are
          the only keyholder, so your goods remain secure.
        </p>
        <p>
          <base-open-modal>Send us a message</base-open-modal>
          to enquire
        </p>
      </div>
    </div>
    <hr class="my-5" />
    <div class="row">
      <div class="col-12 col-md-4 text-center my-auto">
        <img src="../assets/truck.svg" alt="" class="ico" />
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
              you like to pack and then we collect to store securely at our
              facility.
            </p>
            <p>
              <base-open-modal>Send us a message</base-open-modal>
              to enquire.
            </p>
          </div>
          <div class="col-12 col-md-4 grad-border">
            <img
              src="../assets/map-circle.jpg"
              alt=""
              class="img-fluid hover-grow"
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
        <img src="../assets/mechanic.svg" alt="" class="ico" />
      </div>
      <div
        class="col-12 order-last more-info-panel collapse"
        id="workshop"
        data-parent="#home-accordian"
      >
        <div class="row p-3" style="min-height: 300px;">
          <div class="col-12 col-md-5 grad-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.8164807353247!2d153.0438404041454!3d-27.49210414385597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d601f611%3A0x22ece874c941c1b!2s46%20Deshon%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1592441935490!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0;border-radius: 4px;"
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
              <base-open-modal>Send us a message</base-open-modal>
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
    }
  }
}
</script>
