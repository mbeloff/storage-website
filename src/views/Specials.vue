<template>
  <div class="py-5">
    <div class="container py-5">
      <h1 class="big-title">Specials</h1>
      <p class="sub-title">
        <span>Everyday value & great introductory offers</span>
      </p>
    </div>
    <div class="container-fluid bg-light py-3">
      <div class="container">
        <div class="row d-flex flex-wrap">
          <div
            v-for="(special, i) in specials"
            :key="i"
            class="col-12 col-md-4 col-lg-3 my-3"
          >
            <div class="grad-border h-100">
              <div class="h-100 p-1 d-flex flex-column justify-content-between">
                <div>
                  <p class="h4 underline">
                    {{ special.name }}
                  </p>
                  <p class="lead mt-4">
                    {{ special.desc }}
                  </p>
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
      specials: [
        {
          name: 'Discount Truck Hire',
          desc:
            'All storage hires over 1 Month get $50/day off moving truck hire to help shift your items'
        },
        {
          name: '2 Months FREE',
          desc:
            'Pay $0 for the first 2 months when you hire for 6 months of longer'
        },
        {
          name: '50% Off Mobile Storage Units',
          desc: 'For a limited time all hires under 6 months get 50% off'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
a.gradient-slide {
  color: inherit;
}
</style>
