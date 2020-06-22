<template>
  <div class="p-3">
    <h1 class="big-title">
      Contact Us<i class="fa fa-times float-right" @click="hide()"></i>
    </h1>
    <Form></Form>
  </div>
</template>
<script>
import Form from '@/components/Form.vue'
export default {
  name: 'QAForm',
  components: { Form },
  methods: {
    hide() {
      this.$modal.hide('contact-modal')
    }
  }
}
</script>

<style lang="scss" scoped></style>
