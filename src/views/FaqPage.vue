<template>
  <div class="container pb-5 px-0 px-md-3">
    <Faq
      id="accordion-example-1"
      :content="'set1'"
      :faqhead="'Frequently Asked Questions'"
    ></Faq>
    <div class="col-12">
      <p>
        If you can't find the answer to your questions here, please
        <open-modal>send us a message</open-modal>
        and we'll get get back to you as soon as possible.
      </p>
    </div>
  </div>
</template>

<script>
import Faq from '@/components/Faq.vue'
export default {
  components: { Faq },
  data() {
    return {}
  },
  metaInfo: {
    title: 'Cheap Self Storage in Brisbane',
    meta: [
      {
        name: 'description',
        content:
          'Get answers to your self storage questions. Gabba Storage has the best prices Brisbane on self storage units and car storage.',
        vmid: 'description'
      }
    ]
  }
}
</script>

<style></style>
