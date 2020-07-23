<template>
  <div class="pb-5">
    <div class="container mt-5">
      <h1 class="big-title">Budget Workshop Space</h1>
      <p class="sub-title">
        <span>Your own workshop for as little as $250 per week</span>
      </p>
      <p>
        Gabba Storage has 80m<sup>2</sup> to 240m<sup>2</sup> workshop spaces
        for rent with benches, water, single and triple phase power, racking and
        hoists. Additional office and storage space available to streamline your
        operations.
      </p>
      <p>
        No lock-in contracts, and week-to-week payments available at budget
        rates.
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <h1 class="big-title my-5">Pricing</h1>
          <p>
            Your own workshop space with all of the necessities. In a convenient
            Woolloongabba location.
          </p>

          <div class="grad-border text-center font-weight-bold my-5">
            <p class="bg-white p-3 mb-0">
              Current Offer:
              <span class="font-weight-light">50% OFF First Month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light py-3">
      <div class="container">
        <div class="row d-flex flex-wrap">
          <div
            v-for="(price, i) in prices"
            :key="i"
            class="col-12 col-md-4 my-3"
          >
            <div class="grad-border h-100">
              <div class="h-100  d-flex flex-column justify-content-between">
                <div>
                  <p class="h4 underline">
                    {{ price.name }}:
                    <span class="text-muted small"
                      >{{ price.size }}m<sup>2</sup></span
                    >
                  </p>
                  <p class="lead mt-4">from ${{ price.price }}/week</p>
                </div>
                <div class="text-right">
                  <open-modal>enquire</open-modal>
                </div>
              </div>
            </div>
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
      prices: [
        {
          name: 'Small',
          size: '80',
          price: '250'
        },
        {
          name: 'Medium',
          size: '160',
          price: '400'
        },
        {
          name: 'Large',
          size: '240',
          price: '500'
        }
      ]
    }
  }
}
</script>

<style>
.map-container {
  margin-top: 2rem;
  border: 5px solid var(--orange);
}
</style>
