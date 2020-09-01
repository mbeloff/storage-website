<template>
  <div class="form">
    <form
      name="newForm"
      method="post"
      id="contact-form"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <p class="sub-title">
        <span> Get a quote or ask a question</span>
      </p>
      <br />
      <input type="hidden" name="form-name" value="newForm" />
      <div class="row">
        <div class="col-md-12 form-group">
          <label class="sr-only">Name</label>

          <input
            class="form-control"
            type="text"
            placeholder="Name"
            aria-label="Your name"
            name="name"
            required
            v-model="form.name"
            ref="name"
          />
          <i class="form-icon fal fa-user"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="sr-only">Phone</label>

          <input
            class="form-control"
            type="tel"
            placeholder="Phone"
            aria-label="Your phone number"
            name="number"
            v-model="form.number"
          /><i class="form-icon fal fa-phone-rotary"></i>
        </div>

        <div class="col-md-6 form-group">
          <label class="sr-only">Email</label>

          <input
            class="form-control"
            type="email"
            placeholder="Email"
            aria-label="Your email address"
            name="email"
            v-model="form.email"
          /><i class="form-icon fal fa-envelope"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="sr-only">type of query</label>

          <select
            class="form-control"
            name="topic"
            aria-required="false"
            aria-invalid="false"
            aria-label="Enquiry subject"
            value=""
            v-model="form.topic"
          >
            <option value="" disabled="disabled" selected="selected"
              >Type of Enquiry</option
            >
            <option value="on-site storage">Storage Unit</option>
            <!-- <option value="mobile storage unit">Mobile Storage Unit</option> -->
            <option value="workshop space">Workshop Space</option>
            <option value="mobile storage">Mobile Storage</option>
            <option value="Unknown">Something Else</option> </select
          ><i class="form-icon fal fa-list"></i>
        </div>
        <div class="col-md-6 form-group">
          <label class="sr-only">Estimated Rental Period</label>

          <select
            class="form-control"
            name="period"
            aria-required="false"
            aria-invalid="false"
            aria-label="Estimated Rental Period"
            value=""
            v-model="form.period"
          >
            <option value="" disabled="disabled" selected="selected"
              >Rental Period
            </option>
            <option value="Unknown">Unknown / Not Applicable</option>
            <option value="Unknown">less than 1 Month</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="1+ Year">1+ Year</option>
          </select>
          <i class="form-icon fal fa-calendar"></i>
        </div>
      </div>

      <transition name="fade">
        <div
          v-show="form.topic === 'workshop space'"
          class="row"
          if="featuresChecklist"
        >
          <label class="col-12" for="featuresChecklist"
            >Do you require any of the following?</label
          >
          <div class="col-12 col-md-6">
            <input
              class="mr-2 ml-2"
              type="checkbox"
              id="racking"
              value="Racking"
              v-model="form.requestedFeatures"
            />
            <label for="racking">Racking</label>
          </div>
          <div class="col-12 col-md-6">
            <input
              class="mr-2 ml-2"
              type="checkbox"
              id="hoist"
              value="Hoist"
              v-model="form.requestedFeatures"
            />
            <label for="hoist">Vehicle Hoist</label>
          </div>
          <div class="col-12 col-md-6">
            <input
              class="mr-2 ml-2"
              type="checkbox"
              id="threePhase"
              value="Three phase power"
              v-model="form.requestedFeatures"
            />
            <label for="threePhase">Three Phase Power</label>
          </div>
          <div class="col-12 col-md-6">
            <input
              class="mr-2 ml-2"
              type="checkbox"
              id="mezzanine"
              value="Mezzanine"
              v-model="form.requestedFeatures"
            />
            <label for="mezzanine">Mezzanine</label>
          </div>
        </div>
      </transition>

      <div class="row">
        <div class="col-md-12 form-group g-mb-40">
          <label class="sr-only">Enter your question here</label>

          <textarea
            class="form-control"
            rows="4"
            placeholder="Hi there, I want to know ..."
            aria-label="Type your enquiry here"
            name="question"
            required
            v-model="form.question"
          ></textarea
          ><i class="form-icon fal fa-comment-alt-lines"></i>
        </div>
      </div>

      <div class="text-right">
        <button
          type="submit"
          class="btn btn-submit text-uppercase"
          aria-label="Submit"
        >
          <p class="gradient-slide mb-0">
            <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
          </p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        number: '',
        email: '',
        topic: '',
        requestedFeatures: [],
        period: '',
        question: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'newForm',
          ...this.form
        })
      })
        .then(() => {
          this.$router.push('success')
          // console.log('success')
          this.$modal.hide('contact-modal')
        })
        .catch(() => {
          this.$router.push('404')
          // console.log('failure')
          this.$modal.hide('contact-modal')
        })
    }
  },
  mounted() {
    console.log('hello')
    setTimeout(() => {
      this.$refs.name.focus()
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.form label {
  font-size: 1rem;
  color: rgb(117, 112, 108);
}

.form-modal label {
  color: var(--primary-light);
}

.form-control {
  background: rgb(255, 255, 255);
  padding-left: 2.4rem;
}

.form-control::placeholder {
  font-weight: 400;
}

select.form-control {
  padding-left: 2.1rem !important;
}

.form-icon {
  position: absolute;
  left: 1.5rem;
  top: 0.7rem;
  color: var(--primary);
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.74, 2.66);
}

.form-control:focus + .form-icon {
  transform: scale(1.5);
  color: rgb(255, 94, 0);
}

textarea::placeholder,
input::placeholder,
select::placeholder {
  color: #808a94;
  font-weight: 100;
}

.btn-submit {
  color: white;
  background: var(--secondary);
  border: var(--secondary) 0.5px solid;
  border-radius: 20px;
  // font-weight: 100;
  &:hover,
  &:focus {
    background: white;
    transform: scale(1.02);
    transition: transform 0.1s cubic-bezier(0.5, -0.24, 0.5, 3.21);
    .gradient-slide {
      background: var(--grad-slide);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: gradientSlide 5s linear infinite;
      animation-fill-mode: forwards;
      animation-direction: normal;
      -moz-animation: gradientSlide 5s linear infinite;
      animation: gradientSlide 5s linear infinite;
    }
  }
  a.gradient-slide {
    color: white;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  height: 100px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
</style>
