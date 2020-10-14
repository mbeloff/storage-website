<template>
  <div class="container d-flex">
    <div class="d-flex flex-column my-auto">
      <h1 class="mb-3">oops :/</h1>
      <h5 class="underline mb-5">
        We couldn't find the page you were looking for. <br />
      </h5>
      <a
        class="my-2 ml-4 link"
        style="font-size: 1.5rem"
        @click="$router.go(-1)"
        ><i class="fal fa-backward align-middle mr-2"></i>go back</a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
a.link {
  color: var(--secondary);
  &:hover {
    text-decoration: underline;
  }
}
</style>
