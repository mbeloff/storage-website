<template>
  <div class="p-3">
    <i class="fa fa-times fa-3x float-right" @click="hide()"></i>
    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="mt-5"
    >
      For prompt attention within 1 business hour from your local storage
      manager , complete and submit details of your storage needs.<br />
      <br />
      <input type="hidden" name="form-name" value="ask-question" />
      <!-- <div class="row">
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
      </div> -->
      <input class="form-control" type="text" name="firstname" />
      <input class="form-control" type="text" name="lastname" />
      <textarea
        class="form-control"
        name="customer message"
        id=""
        rows="4"
      ></textarea>

      <!-- <div class="row">
        <div class="col-md-6 form-group">
          <label class="">Phone</label>
          <input
            class="form-control"
            type="tel"
            placeholder="(07) 1234 5678"
            name="customer phone"
          />
        </div>

        <div class="col-md-6 form-group">
          <label class="">Email</label>
          <input
            class="form-control"
            type="email"
            placeholder="johndoe@gmail.com"
            name="customer email"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="">Start date</label>
          <input
            class="form-control"
            id="datepicker"
            placeholder="DD/MM/YYYY"
            autocomplete="off"
          />
          <input type="hidden" id="actualDate" name="startdate" />
        </div>
        <div class="col-md-6 form-group">
          <label class="">Length of time</label>
          <select
            class="form-control"
            name="lengthoftime"
            aria-required="true"
            aria-invalid="false"
          >
            <option value="" disabled="disabled" selected="selected"
              >Select</option
            >
            <option value="Unknown">Unknown</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="1+ Year">1+ Year</option>
            <option value="2+ Years">2+ Years</option>
            <option value="3+ Years">3+ Years</option>
          </select>
        </div>
      </div> -->

      <!-- <div class="row">
        <div class="col-md-12 form-group g-mb-40">
          <label class="">How can we help you?</label>
          <textarea
            class="form-control"
            rows="4"
            placeholder="Hi there, I want to know ..."
            name="customer message"
          ></textarea>
        </div>
      </div> -->

      <div class="text-center">
        <div id="submitDiv">
          <button class="btn text-uppercase btn-primary">
            <i class="fa fa-paper-plane g-px-5"></i>&nbsp;Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "QAForm",
  methods: {
    hide() {
      this.$modal.hide("contact-modal");
    }
  }
};
</script>
