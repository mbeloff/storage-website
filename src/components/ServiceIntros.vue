<template>
  <div>
    <div class="container noflow">
      <div class="row service-type">
        <div class="col-12 col-md-6 order-md-2 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-3"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
            data-aos-offset="-200"
          >
            <img src="../assets/bank.svg" alt="" class="ico" />
          </div>
        </div>
        <div class="col-12 col-md-6 p-0">
          <h2 class="big-title">Cheap, secure self storage.</h2>
          <p class="sub-title">
            <span>Pay as you go, short or long term hire</span>
          </p>
          <p align="justify">
            The best storage prices around. Finally free up some space in your
            home or office. Whether you're decluttering, renovating, moving
            house or looking for a secure location for business archives or
            excess stock, we've got you covered with cost-effective storage
            solutions and easy, convenient, 24-hour access, 7-days a week.
          </p>
        </div>
      </div>
      <hr class="yellow" />
      <div class="row service-type">
        <div class="col-12 col-md-6 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-3"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
            data-aos-offset="-200"
          >
            <img src="../assets/caravan.svg" alt="" class="ico" />
          </div>
        </div>
        <div class="col-12 col-md-6 p-0">
          <h2 class="big-title">Auto Storage</h2>
          <p class="sub-title">
            <span>Storage for anything with wheels</span>
          </p>
          <p align="justify">
            No longer have the space for your car, caravan, boat or trailer?
            Gabba Storage has cheap rates for storing vehicles of all kinds.
            Secure, lockup vehicle storage with easy access during business
            hours. We have covered and uncovered storage units for single or
            multiple vehicles.
          </p>
        </div>
      </div>

      <!-- <hr class="yellow" />
      <div class="row service-type">
        <div class="col-12 col-md-6 order-md-2 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-3"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
            data-aos-offset="-200"
          >
            <img src="../assets/mechoutline.svg" alt="" class="ico" />
          </div>
        </div>
        <div class="col-12 col-md-6 p-0">
          <h2 class="big-title">Rent workshop space.</h2>
          <p class="sub-title">
            <span>Tradesman storage and workshops at competitive rates.</span>
          </p>
          <p align="justify">
            Three-phase and single-phase power with plenty of space for racking
            or a hoist. Additional office or storage space available. 24m<sup
              >2</sup
            >
            - 240m<sup>2</sup>
            Tradesman storage and work spaces available in an easy access
            location. Short-term leases and week-to-week payments available.
          </p>
        </div>
      </div> -->
      <!-- <hr class="yellow" />
      <div class="row service-type">
        <div class="col-12 col-md-6 center">
          <div
            class="icon-wrapper mb-3 mb-md-0 p-3"
            data-aos="icon-anim"
            data-aos-anchor-placement="center-center"
            data-aos-offset="-200"
          >
            <img src="../assets/mobilestorage.svg" alt="" class=" ico" />
          </div>
        </div>
        <div class="col-12 col-md-6 p-0">
          <h2 class="big-title">Mobile storage units.</h2>
          <p class="sub-title">
            <span>Delivered to your door, you pack, we store</span>
          </p>
          <p align="justify">
            Get your goods in storage without ever leaving your house. We can
            deliver storage units anywhere in the Brisbane area. Simply pack up
            your belongings and we'll take the unit away to store at our
            facility. No need to leave your home or office, just pack once and
            let us do the running around.
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
hr.yellow {
  border: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--primary),
    rgba(0, 0, 0, 0)
  );
}

.icon-wrapper {
  width: min-content;
  border-radius: 50%;
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
