<template>
  <div class="container d-flex">
    <div class="h-100 my-auto">
      <h1 class="mb-3">oops :/</h1>
      <h3 class="underline mb-5 font-weight-light">
        We couldn't find the page you were looking for. <br />
      </h3>
      <a
        class="my-5 ml-4 font-weight-light gradient-slide"
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

<style scoped lang="scss"></style>
