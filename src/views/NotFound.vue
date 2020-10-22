<template>
  <div class="container d-flex">
    <div class="d-flex flex-column my-auto">
      <h1 class="mb-3">oops :/</h1>
      <h5 class="underline mb-5">
        We couldn't find the page you were looking for. <br />
      </h5>
      <a
        class="my-2 special-link"
        style="font-size: 1.5rem"
        @click="$router.push({ name: 'Home' })"
        ><i class="fal fa-home align-middle mr-2"></i>back home</a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
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
