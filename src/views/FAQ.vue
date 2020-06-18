<template>
  <div class="container my-5 p-0 px-md-3">
    <Faq
      id="accordion-example-1"
      :content="'questions'"
      :faqhead="'Frequently Asked Questions'"
    ></Faq>
    <p>
      If you can't find the answer to your questions here, please
      <a class="gs-link" href="javascript:void(0);" @click="show()"
        ><i class="fal fa-comment-alt-lines mr-1"></i>Send us a message</a
      >
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
