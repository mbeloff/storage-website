<template>
  <a class="gradient-slide" href="javascript:void(0);" @click="show()"
    ><i class="fal fa-comment-alt-lines mr-1"></i><slot></slot
  ></a>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    show() {
      this.$modal.show('contact-modal')
    }
  }
}
</script>

<style></style>
