<template>
  <div>
    <div class="container noflow">
      <div
        class="row service-type"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div class="col-12 col-md-6 order-md-2 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-2"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
          >
            <img src="../assets/bank.svg" alt="" class=" ico" />
          </div>
        </div>
        <div class="col-12 col-md-6">
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
        </div>
      </div>
      <hr />
      <div
        class="row service-type"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div class="col-12 col-md-6 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-2"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
          >
            <img src="../assets/caravan.svg" alt="" class=" ico" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="big-title">Auto Storage</h2>
          <p class="sub-title">
            <span>Storage for anything with wheels</span>
          </p>
          <p align="justify">
            No longer have the space for your car, caravan, boat or trailer?
            Gabba Storage has cheap rates for storing vehicles of all kinds.
          </p>
        </div>
      </div>
      <!-- <hr />
      <div
        class="row service-type"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div class="col-12 col-md-6 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-2"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
          >
            <img src="../assets/mobilestorage.svg" alt="" class=" ico" />
          </div>
        </div>
        <div class="col-12 col-md-6">
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
        </div>
      </div> -->
      <hr />
      <div
        class="row service-type"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div class="col-12 col-md-6 order-md-2 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-2"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
          >
            <img src="../assets/mechoutline.svg" alt="" class="ico" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="big-title">Rent workshop space.</h2>
          <p class="sub-title">
            <span>Well equipped workshop spaces at competitive rates.</span>
          </p>
          <p align="justify">
            Three-phase and single-phase power with racking, hoist and
            additional office or storage space available. 80 - 240m<sup>2</sup>
            Workshop spaces available in convenient Woolloongabba location. No
            lock-in contracts, week-to-week payments available.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.icon-wrapper {
  width: min-content;
  // margin: auto;
  border-radius: 50%;
  // background: var(--orange-dark);
}

[data-aos='icon-anim'] {
  background-size: 200% 200%;
  background-image: linear-gradient(
    to top,
    rgb(255, 205, 67) 50%,
    rgb(255, 255, 255) 50%
  );
  transition: background-position 0.4s, transform 0.4s;
  transition-timing-function: ease, cubic-bezier(0.45, -0.7, 0.21, 3.25);
  &.aos-animate {
    background-position: 0% 100%;
    color: white;
    transform: scale(1.2);
  }
}

.noflow {
  overflow-x: hidden;
  overflow-y: hidden;
}

.service-type {
  margin: 4rem 0;
}

.center {
  display: grid;
  place-items: center;
}
</style>
