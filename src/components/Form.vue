<template>
  <div class="form">
    <form
      name="ask-question"
      method="post"
      id="contact-form"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      What are you storage needs? Let us know what you need help with and we'll
      get back to you<br />
      <br />
      <input type="hidden" name="form-name" value="ask-question" />
      <div class="row">
        <div class="col-md-12 form-group">
          <label class="">Hi, my name is</label>

          <input
            class="form-control"
            type="text"
            placeholder=""
            name="Customer Name"
            required
          />
          <i class="form-icon fal fa-user"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="">Call me back on</label>

          <input
            class="form-control"
            type="tel"
            placeholder=""
            name="Contact Number"
          /><i class="form-icon fal fa-phone-rotary"></i>
        </div>

        <div class="col-md-6 form-group">
          <label class="">Or email me at</label>

          <input
            class="form-control"
            type="email"
            placeholder=""
            name="Email"
          /><i class="form-icon fal fa-envelope"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="">I'm enquiring about...</label>

          <select
            class="form-control"
            name="Enquiring ABout"
            aria-required="false"
            aria-invalid="false"
            value=""
          >
            <option value="" disabled="disabled" selected="selected">-</option>
            <option value="on-site storage">On-site storage</option>
            <option value="mobile storage unit">Mobile Storage</option>
            <option value="workshop space">Workshop Space</option>
            <option value="Unknown">Something Else</option> </select
          ><i class="form-icon fal fa-list"></i>
        </div>
        <div class="col-md-6 form-group">
          <label class="">Estimated Storage Period</label>

          <select
            class="form-control"
            name="Storage Period"
            aria-required="false"
            aria-invalid="false"
            value=""
          >
            <option value="" disabled="disabled" selected="selected">-</option>
            <option value="Unknown">Unknown / Not Applicable</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="1+ Year">1+ Year</option>
            <option value="2+ Years">2+ Years</option>
            <option value="3+ Years">3+ Years</option> </select
          ><i class="form-icon fal fa-calendar"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 form-group g-mb-40">
          <label class="">Now, how can we help you?</label>

          <textarea
            class="form-control"
            rows="4"
            placeholder="Hi there, I want to know ..."
            name="Customer Says"
            required
          ></textarea
          ><i class="form-icon fal fa-comment-alt-lines"></i>
        </div>
      </div>

      <div class="text-center">
        <!-- <div> -->
        <button
          type="submit"
          class="btn btn-submit gradient-slide text-uppercase"
        >
          <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
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
          'form-name': 'ask-question',
          ...this.form
        })
      })
        .then(() => {
          this.$router.push('success')
        })
        .catch(() => {
          this.$router.push('404')
        })
    }
  }
}
</script>

<style scoped lang="scss">
label {
  font-size: 1rem;
  color: var(--orange-light);
}

textarea::placeholder,
input::placeholder,
select::placeholder {
  color: #808a94;
  font-weight: 100;
}

.btn-submit {
  color: white;
  background: #ff4828;
  border: var(--orange-dark) 0.5px solid;
  border-radius: 20px;
  font-weight: 100;
  &:hover {
    box-shadow: 0px 2px 6px 1px #ff11001f;
    font-weight: 400;
  }
}

.form-control {
  padding-left: 2rem;
}

.form-icon {
  position: absolute;
  left: 1.5rem;
  top: 2.7rem;
  // margin-bottom: 10px;
  color: rgb(255, 72, 0);
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.74, 2.66);
}

.form-control:focus + .form-icon {
  transform: scale(1.5);
  color: rgb(255, 0, 76);
}
</style>
