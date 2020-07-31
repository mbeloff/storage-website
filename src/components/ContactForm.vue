<template>
  <div class="p-3 dark-bg form-modal">
    <h1 class="big-title">
      Contact Us
      <button class="btn-close fa fa-times float-right" @click="hide()">
        <!-- <i
          class="fa fa-times float-right"
          aria-label="Close"
          @click="hide()"
        ></i> -->
      </button>
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

<style lang="scss">
.btn-close {
  border: none;
  background: none;
  color: var(--orange);
}
</style>
