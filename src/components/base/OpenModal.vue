<template>
  <a class="gradient-slide" href="javascript:void(0);" @click="show()"
    ><nobr><i class="far fa-comment-alt-lines fa-fw"></i><slot></slot></nobr
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

<style scoped>
i {
  margin-right: 0.25rem;
}
</style>
