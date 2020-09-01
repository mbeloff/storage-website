<template>
  <div class="container-fluid text-white under-banner">
    <!-- <div
      class="container d-flex flex-column flex-md-row justify-content-between pt-4"
    >
      <div class="d-flex flex-row flex-md-column mb-3 text-center">
        <img src="../assets/bank.svg" />
        <p>Best Deals</p>
      </div>
      <div class="d-flex flex-row flex-md-column mb-3 text-center">
        <img src="../assets/freetruck.svg" />
        <p>
          Free Truck Hire
        </p>
      </div>
      <div class="d-flex flex-row flex-md-column mb-3 text-center">
        <img src="../assets/mobilestorage.svg" />
        <p>We Come to You</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.under-banner {
  height: 1rem;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
  background: var(--primary);
  // background: rgb(34, 32, 32);
  p {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0;
    vertical-align: middle;
  }
  i {
    vertical-align: middle;
  }
  img {
    height: 75px;
    width: auto;
    margin-bottom: 0.5rem;
  }
}
</style>
