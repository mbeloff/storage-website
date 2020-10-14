<template>
  <div class="p-3 bg-light form-modal">
    <button class="btn-close fa fa-times float-right" @click="hide()">
      <!-- <i
          class="fa fa-times float-right"
          aria-label="Close"
          @click="hide()"
        ></i> -->
    </button>
    <h1 class="big-title">
      Contact Us
    </h1>
    <p class="sub-title">
      <span> Get a quote or ask a question</span>
    </p>
    <br />
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
  color: var(--primary);
  padding: 0 0 0 0;
  &:focus,
  &:hover {
    // color: rgb(255, 187, 0);
    color: var(--secondary);
    text-shadow: 0 0 0 rgb(255, 255, 255);
    transform: scale(1);
    outline: none;
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    text-shadow: 0 0 0 rgba(255, 211, 115, 0.767);
  }

  70% {
    transform: scale(1);
    text-shadow: 0 0 20px rgba(255, 227, 165, 0.226);
  }

  100% {
    transform: scale(0.95);
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>
