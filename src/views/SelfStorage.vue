<template>
  <div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 p-0">
          <img src="../assets/storageunit-logo.jpg" alt="" class="img-fluid w-100" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-9 col-lg-10 p-sm-4 ml-md-4 bg-white shift-up">
          <h1 class="big-title">Personal Self Storage</h1>
          <p class="sub-title"><span>De-clutter your life</span></p>
          <div class="body-text text-justify">
            <p>
              Gabba Storage provides affordable storage solutions in a
              convenient location with 24/7 access to your belongings. Great
              rates on storage units for short or long term rental with easy
              payment options.
            </p>
            <p>
              Are you moving house, or clearing out a spare room? Garage full to
              the brim? Now's the perfect time to de-clutter your life. Storage
              units from <nobr>6m<sup>3</sup>.</nobr> We also have discounted
              truck rentals, to make getting your items into storage as easy as
              possible.
            </p>
            <ul class="list-unstyled col-12 col-md-12 col-lg-6">
              <li class="list-item">24-hour access, 7 days a week</li>
              <li class="list-item">Units from 2.3m x 2.3m x 1.5m</li>
              <li class="list-item">Electricity available</li>
            </ul>
          </div>
          <h1 class="big-title mt-5">Self Storage for Business</h1>
          <!-- <p class="sub-title">
        <span>Streamline your business</span>
      </p> -->
          <div class="body-text text-justify">
            <p>
              Budget self storage options for any type of business. Securely
              store excess or seasonal stock, signage or display merchandise,
              tools, materials or archives. Whether your business is expanding
              or downsizing, renovating or relocating, Gabba Storage is
              available with fantastic tax deductable rates and special offers
              on short or long-term rentals.
            </p>
            <p>
              Come and go as you please, with your goods only ever accessible by
              you.
            </p>
            <p>
              If you're in need of some extra space for your business,
              <open-modal>send us a message</open-modal> to discuss your storage
              options. Take advantage of our great rates, easy payment options
              and 24/7 access. Store for a long or as little time as you need.
            </p>
            <p>
              Also check out our
              <router-link to="workshops" class="link"
                ><link-inner>workshop spaces</link-inner></router-link
              >, larger areas suitable for mechanics or other trades, available
              with three-phase power, hoists, racking and more. Store materials
              or tools and have your own space to get more done.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <h1 class="big-title mt-5">Pricing</h1>
          <p>
            Only pay for what you need. Rent storage space from 1 day to a 1
            year, or more! Gabba Storage has a range of storage containers, from
            5m<sup>3</sup> - 10m<sup>3</sup>
          </p>

          <div class="grad-border text-center font-weight-bold mt-3 mb-0">
            <p class="bg-white p-3 mb-0">
              Current Offer:
              <span>First 2 Months FREE*</span>
            </p>
          </div>
          <span class="small float-right"
            >*applicable for any hires over 6 months</span
          >
        </div>
      </div>
    </div> -->
    <!-- <div class="container-fluid bg-light py-3">
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
                      >{{ price.size }}m<sup>3</sup></span
                    >
                  </p>
                  <p class="mt-4 mb-0">from ${{ price.price }}/month</p>
                </div>
                <div class="text-right">
                  <open-modal>enquire</open-modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
        // {
        //   name: 'Small',
        //   size: '1',
        //   price: '15'
        // },
        {
          name: 'Medium',
          size: '5',
          price: '60'
        },
        {
          name: 'Large',
          size: '10',
          price: '125'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.list-group-item {
  &:nth-of-type(2n - 1) {
    background: rgb(241, 238, 234);
  }
}
</style>
