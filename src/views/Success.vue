<template>
  <div class="container d-flex">
    <div class="d-flex flex-column my-auto">
      <h1 class="mb-3">{{ head }}</h1>
      <h5 class="underline mb-5">
        {{ message1 }} <span>{{ name }}</span> {{ message2 }}
      </h5>
      <a
        class="my-2 special-link"
        style="font-size: 1.5rem"
        @click="$router.push({ name: 'Home' })"
        ><i class="fal fa-home align-middle mr-2"></i>back Home</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    head: { type: String, default: 'Success' },
    message1: String,
    message2: String,
    name: String
  },
  mounted() {
    if (!this.$route.params.name) {
      this.$router.push({ name: '404' })
    }
  }
}
</script>

<style lang="scss">
a.special-link {
  color: var(--secondary);
  &:hover {
    text-decoration: underline;
    color: var(--primary);
  }
}

.underline {
  span {
    font-weight: bold;
    color: var(--secondary);
  }
}
</style>
