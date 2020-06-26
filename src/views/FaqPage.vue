<template>
  <div class="container my-5 p-0 px-md-3">
    <Faq
      id="accordion-example-1"
      :content="'some_category'"
      :faqhead="'Frequently Asked Questions'"
    ></Faq>
    <p>
      If you can't find the answer to your questions here, please
      <open-modal>send us a message</open-modal>
      and we'll get get back to you as soon as possible.
    </p>
  </div>
</template>

<script>
import Faq from '@/components/Faq.vue'
export default {
  components: { Faq },
  data() {
    return {}
  }
}
</script>

<style></style>
