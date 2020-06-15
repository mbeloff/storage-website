<template>
  <div class="p-3">
    <h1 class="big-title" style="font-size: 3rem;">
      Contact Us<i class="fa fa-times float-right" @click="hide()"></i>
    </h1>

    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      What are you storage needs? Let us know what you need help with and we'll
      get back to you<br />
      <br />
      <input type="hidden" name="form-name" value="ask-question" />
      <div class="row">
        <div class="col-md-6 form-group">
          <label class="">First Name</label>
          <input
            class="form-control"
            type="text"
            placeholder="John"
            name="firstname"
          />
        </div>
        <div class="col-md-6 form-group">
          <label class="">Last Name</label>
          <input
            class="form-control"
            type="text"
            placeholder="Doe"
            name="lastname"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="">Phone</label>
          <input
            class="form-control"
            type="tel"
            placeholder="0412 345 678"
            name="Contact Number"
          />
        </div>

        <div class="col-md-6 form-group">
          <label class="">Email</label>
          <input
            class="form-control"
            type="email"
            placeholder="johndoe@gmail.com"
            name="Email"
          />
        </div>
      </div>

      <div class="row">
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
            <option value="Unknown">Unknown</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="1+ Year">1+ Year</option>
            <option value="2+ Years">2+ Years</option>
            <option value="3+ Years">3+ Years</option>
          </select>
        </div>
        <div class="col-md-6 form-group">
          <label class="">I'm enquiring about...</label>
          <select
            class="form-control"
            name="Enquiring About"
            aria-required="false"
            aria-invalid="false"
            value=""
          >
            <option value="" disabled="disabled" selected="selected">-</option>

            <option value="on-site storage">On-site storage</option>
            <option value="mobile storage unit">Mobile Storage</option>
            <option value="workshop space">Workshop Space</option>
            <option value="Unknown">Other</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 form-group g-mb-40">
          <label class="">How can we help you?</label>
          <textarea
            class="form-control"
            rows="4"
            placeholder="Hi there, I want to know ..."
            name="Customer Says"
          ></textarea>
        </div>
      </div>

      <div class="text-center">
        <!-- <div> -->
        <button class="btn text-uppercase">
          <i class="fa fa-paper-plane g-px-5"></i>&nbsp;Submit
        </button>
        <!-- </div> -->
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'QAForm',
  methods: {
    hide() {
      this.$modal.hide('contact-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 0.8rem;
  color: var(--orange-dark);
}

textarea::placeholder,
input::placeholder,
select::placeholder {
  color: #808a94;
}

.btn {
  color: white;
  background: var(--orange-dark);
  border: var(--orange-dark) 0.5px solid;
  border-radius: 20px;
  font-weight: 100;
}
</style>
