<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-6 order-2 order-md-1">
          <h2 class="big-title">Cheap, secure, self storage.</h2>
          <p class="sub-title">
            <span>Pay as you go, short or long term hire</span>
          </p>
          <p align="justify">
            Big and Small storage units available. Finally free up some space in
            your home or office. Whether you're decluttering, renovating, moving
            house or looking for a secure location for business archives or
            excess stock, we've got you covered with cost-effective storage
            solutions in a convenient Woolloongabba location.
          </p>
          <p>
            <open-modal>Send us a message</open-modal>
            to enquire
          </p>
        </div>

        <div class="col-12 col-md-4 offset-md-1 text-center my-auto order-md-2">
          <div class="icon-wrapper mb-3 mb-md-0 p-2">
            <img src="../assets/bank.svg" alt="" class=" ico" />
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <div class="row">
        <div class="col-12 col-md-4 text-center my-auto">
          <div class="icon-wrapper mb-3 mb-md-0 p-2">
            <img src="../assets/mobilestorage.svg" alt="" class=" ico" />
          </div>
        </div>
        <div class="col-12 col-md-6 offset-md-2">
          <h2 class="big-title">Mobile storage units.</h2>
          <p class="sub-title">
            <span>Delivered to your door, you pack, we store</span>
          </p>
          <p align="justify">
            Get your goods in storage without ever leaving your house. Storage
            boxes delivered anywhere in Brisbane area. Take as long as you like
            to pack and then we collect to store securely at our facility. No
            need to leave your home or office, just pack at your leisure and let
            us do the running around.
          </p>
          <p>
            <open-modal>Send us a message</open-modal>
            to enquire.
          </p>
        </div>
      </div>
      <hr class="my-5" />
      <div class="row">
        <div class="col-12 col-md-6 order-2 order-md-1">
          <h2 class="big-title">Rent workshop space.</h2>
          <p class="sub-title">
            <span
              >Conveniently located workshop areas at competitive rates.</span
            >
          </p>
          <p align="justify">
            Three-phase and single-phase power with racking, hoist and
            additional office or storage space available. 80 - 240m<sup>2</sup>
            Workshop spaces available in convenient Woolloongabba location. No
            lock-in contracts, week-to-week payments available.
          </p>
        </div>
        <div class="col-12 col-md-4 offset-md-1 text-center my-auto order-md-2">
          <div class="icon-wrapper mb-3 mb-md-0 p-2">
            <img src="../assets/mechoutline.svg" alt="" class="ico" />
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

<style lang="scss">
a.btn-gs.text-muted {
  padding: 0 0 1rem 0;
  color: rgb(140, 155, 184) !important;
}

.btn-gs i {
  transition: transform 0.25s;
}

.btn-gs i.active {
  transform: rotate(90deg);
}

a.gradient-slide {
  color: var(--orange);
}

.icon-wrapper {
  width: min-content;
  margin: auto;
  border-radius: 50%;
  // background: var(--orange-dark);
}
</style>
