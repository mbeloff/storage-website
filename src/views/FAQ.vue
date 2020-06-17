<template>
  <Faq
    id="accordion-example-1"
    :content="'questions'"
    :faqhead="'Frequently Asked Questions'"
  ></Faq>
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
