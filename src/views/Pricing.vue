<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <h1 class="big-title my-5">Storage Pricing</h1>
          <p>
            Only pay for what you need. Rent storage space from 1 day to a 1
            year, or more! Gabba Storage has a range of storage container, from
            1m<sup>3</sup> - 10m<sup>3</sup>
          </p>

          <div class="grad-border text-center font-weight-bold my-5">
            <p>
              Current Offer:
              <span class="font-weight-light">First 2 Months FREE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light">
      <div class="container">
        <div class="row py-4 justify-content-around">
          <div class="col-12 col-md-3 bg-white py-3 my-3">
            <p class="h4 underline">
              Small
              <span class="text-muted small font-weight-light"
                >: 1m<sup>3</sup></span
              >
            </p>
            <p class="lead mt-4">from $32/month</p>
            <div class="col-12 text-right">
              <open-modal>enquire</open-modal>
            </div>
          </div>

          <div class="col-12 col-md-3 bg-white py-3 my-3">
            <p class="h4 underline">
              Medium
              <span class="text-muted small font-weight-light"
                >: 6m<sup>3</sup></span
              >
            </p>
            <p class="lead mt-4">from $48/month</p>
            <div class="col-12 text-right">
              <open-modal>enquire</open-modal>
            </div>
          </div>

          <div class="col-12 col-md-3 bg-white py-3 my-3">
            <p class="h4 underline">
              Large
              <span class="text-muted small font-weight-light"
                >: 10m<sup>3</sup></span
              >
            </p>
            <p class="lead mt-4">from $75/month</p>
            <div class="col-12 text-right">
              <open-modal>enquire</open-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <h1 class="big-title my-5">Workshop Pricing</h1>
          <p>
            Your own workshop spacewith all of the necessities. In a convenient
            Woolloongabba location,
          </p>

          <!-- <div class="grad-border text-center font-weight-bold my-5">
            <p>
              Current Offer:
              <span class="font-weight-light">First 2 Months FREE</span>
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light">
      <div class="container">
        <div class="row py-4 justify-content-around">
          <div class="col-12 col-md-3 bg-white py-3 my-3">
            <p class="h4 underline">
              Small
              <span class="text-muted small font-weight-light"
                >: 80m<sup>2</sup></span
              >
            </p>
            <p class="lead mt-4">from $250/month</p>
            <div class="col-12 text-right">
              <open-modal>enquire</open-modal>
            </div>
          </div>

          <div class="col-12 col-md-3 bg-white py-3 my-3">
            <p class="h4 underline">
              Medium
              <span class="text-muted small font-weight-light"
                >: 160m<sup>2</sup></span
              >
            </p>
            <p class="lead mt-4">from $400/month</p>
            <div class="col-12 text-right">
              <open-modal>enquire</open-modal>
            </div>
          </div>

          <div class="col-12 col-md-3 bg-white py-3 my-3">
            <p class="h4 underline">
              Large
              <span class="text-muted small font-weight-light"
                >: 240m<sup>2</sup></span
              >
            </p>
            <p class="lead mt-4">from $500/month</p>
            <div class="col-12 text-right">
              <open-modal>enquire</open-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {}
  }
}
</script>

<style>
.grad-border p {
  background: white;
  padding: 1rem;
  margin-bottom: 0px;
  border-radius: 2px;
  /* color: var(--orange-dark); */
}
</style>
