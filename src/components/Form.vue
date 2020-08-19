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
        <span>
          What are you storage needs? Let us know what you need help with and
          we'll get back to you</span
        >
      </p>
      <br />
      <input type="hidden" name="form-name" value="newForm" />
      <div class="row">
        <div class="col-md-12 form-group">
          <!-- <label class="">Hi, my name is</label> -->

          <input
            class="form-control"
            type="text"
            placeholder="Name"
            aria-label="Your name"
            name="name"
            required
            @input="ev => (form.name = ev.target.value)"
          />
          <i class="form-icon fal fa-user"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <!-- <label class="">Call me back on</label> -->

          <input
            class="form-control"
            type="tel"
            placeholder="Phone"
            aria-label="Your phone number"
            name="number"
            @input="ev => (form.number = ev.target.value)"
          /><i class="form-icon fal fa-phone-rotary"></i>
        </div>

        <div class="col-md-6 form-group">
          <!-- <label class="">Or email me at</label> -->

          <input
            class="form-control"
            type="email"
            placeholder="Email"
            aria-label="Your email address"
            name="email"
            @input="ev => (form.email = ev.target.value)"
          /><i class="form-icon fal fa-envelope"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <!-- <label class="">I'm enquiring about...</label> -->

          <select
            class="form-control"
            name="topic"
            aria-required="false"
            aria-invalid="false"
            aria-label="Enquiry subject"
            value=""
            @input="ev => (form.topic = ev.target.value)"
          >
            <option value="" disabled="disabled" selected="selected"
              >Topic</option
            >
            <option value="on-site storage">Storage Unit</option>
            <!-- <option value="mobile storage unit">Mobile Storage Unit</option> -->
            <option value="workshop space">Workshop Space</option>
            <option value="Unknown">Something Else</option> </select
          ><i class="form-icon fal fa-list"></i>
        </div>
        <div class="col-md-6 form-group">
          <!-- <label class="">Estimated Storage Period</label> -->

          <select
            class="form-control"
            name="period"
            aria-required="false"
            aria-invalid="false"
            aria-label="Estimated Storage Period"
            value=""
            @input="ev => (form.period = ev.target.value)"
          >
            <option value="" disabled="disabled" selected="selected"
              >Storage Period
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

      <div class="row">
        <div class="col-md-12 form-group g-mb-40">
          <!-- <label class="">Now, how can we help you?</label> -->

          <textarea
            class="form-control"
            rows="4"
            placeholder="Hi there, I want to know ..."
            aria-label="Type your enquiry here"
            name="question"
            required
            @input="ev => (form.question = ev.target.value)"
          ></textarea
          ><i class="form-icon fal fa-comment-alt-lines"></i>
        </div>
      </div>

      <div class="text-right">
        <!-- <div> -->
        <button
          type="submit"
          class="btn btn-submit text-uppercase"
          aria-label="Submit"
        >
          <p class="gradient-slide mb-0">
            <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
          </p>
        </button>
        <!-- <a class="btn btn-submit text-uppercase" @click="submitAction()">
          <i class="fa fa-paper-plane g-px-5"></i>&nbsp;Submit
        </a> -->
        <!-- </div> -->
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
  }
}
</script>

<style lang="scss" scoped>
.form label {
  font-size: 1rem;
  color: rgb(117, 112, 108);
}

.form-modal label {
  color: var(--orange-light);
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
  color: var(--orange-dark);
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
  background: var(--orange-dark);
  border: var(--orange-dark) 0.5px solid;
  border-radius: 20px;
  font-weight: 100;
  &:hover,
  &:focus {
    background: white;
    transform: scale(1.02);
    transition: transform 0.4s cubic-bezier(0.5, -0.24, 0.5, 3.21);
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
</style>
