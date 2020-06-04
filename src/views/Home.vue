<template>
  <div class="home">
    <div class="py-5 container shadow-lg">
      <img class="logo" alt="logo" src="../assets/logo2.svg" />
      <HelloWorld msg="unbeatable." />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.logo {
  /* background: white; */
  padding: 1rem;
  max-width: 90%;
}
.home {
  padding: 5rem 0;
}
</style>
