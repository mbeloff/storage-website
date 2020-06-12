<template>
  <Faq
    id="accordion-example-1"
    :content="this.questions"
    :faqhead="'Frequently Asked Questions'"
  ></Faq>
</template>

<script>
import Faq from '@/components/Faq.vue'
export default {
  components: { Faq },
  data() {
    return {
      faqhead: String,
      questions: [
        {
          id: 1,
          active: true,
          title: 'What is Self Storage?',
          details: `
      <p>Self Storage centres have a selection of unit sizes that you can hire, from 1 to 10 cubic metres, for short or long term. You bring your goods or possessions to the storage centre, lock them up and come and go as you please during opening hours. You are the only key holder. You can store almost anything, as long as it's not perishable or hazardous.</p>
    `
        },
        {
          id: 2,
          active: false,
          title: 'Do I need my own padlock?',
          details: `
      <p>Yes, you need your own padlock to ensure that you are the sole key holder for your room and to ensure that your room is securely locked at all times.</p>
    `
        },
        {
          id: 3,
          active: false,
          title: `Is there a minimum rental period?`,
          details: `
      <p>Gabba Storage has no minimum or maximum rental periods. You can store goods with us for a little as one day. Perfect if you just need some extra space in a pinch while moving into a new home or office.</p>
    `
        },
        {
          id: 4,
          active: false,
          title: `How much does storage cost?`,
          details: `
      <p>The cost depends on the size of the storage unit you require, and the rental period. <a class="text-warning" @click="show()"
                ><img
                  class="chat-icon"
                  src="../assets/notification.svg"
                  alt=""
                />Contact us today</a
              > to get a quote.</p>
    `
        },
        {
          id: 5,
          active: false,
          title: `What size unit do I need?`,
          details: `
      <p>There are a number of things you may need to conside when estimating how much space you need, these include</p>
      <ul><li>How many items you need to store</li><li>How stackable are they</li><li>Item dimensions</li><li>How frequently you need to access your items - You may need to leave walkway space in the unit to access everything</li></ul>
    `
        },
        {
          id: 6,
          active: false,
          title: `Do I pay weekly or monthly?`,
          details: `
      <p></p>
    `
        },
        {
          id: 7,
          active: false,
          title: `How soon can I move in?`,
          details: `
      <p>You can move in on the same day as you make your enquiry (during office opening hours) providing that you have the relevant documentation needed to complete and sign your contract. Payment of a deposit and the first invoice must be made prior to moving in.</p>
    `
        },
        {
          id: 8,
          active: false,
          title: `What payment methods are available?`,
          details: `
      <p>You can pay via direct debit as well as credit/debit card.</p>
    `
        },
        {
          id: 9,
          active: false,
          title: `Do I need insurance?`,
          details: `
      <p>It is highly recommended that you adequately insure any goods you choose to store. While we make every effort to safeguard items store in our facility, some events are out of our control, such as fire or flooding.</p><p>1. Self storage insurance. This is a convenient way to insure your goods in storage.</p><p>

2. Existing insurance through your home and contents or business insurance. Each insurance company and policy will have different requirements and coverage. Please check with your insurance company whether your existing policy covers your goods while in storage.</p><p>

3. Self insurance. Self insurance means you accept any loss or damage to your stored goods at your own risk and expense. You will have no claim against the self storage facility if your goods are damaged.</p>
    `
        },
        {
          id: 10,
          active: false,
          title: `What items cannot be stored?`,
          details: `
      <p>We do not allow the storage of:</p><ul>
	<li>Hazardous goods, toxic materials</li>
	<li>Pollutants, contaminants, waste</li>
	<li>Perishable goods, live animals, living plants</li>
	<li>Cash and securities, illegal goods</li>
	<li>Explosives, firearms, ammunitions</li>
</ul>
    `
        },
        {
          id: 11,
          active: false,
          title: `Do you offer any discounts?`,
          details: `
      <p>We are currently offering up the the first 2 months free.</p>
    `
        }
      ]
    }
  }
}
</script>

<style></style>
