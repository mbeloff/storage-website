<template>
  <div class="home">
    <div class="container">
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
  background: white;
  padding: 1rem;
  max-width: 80%;
}
.home {
  padding: 5rem;
}
</style>
