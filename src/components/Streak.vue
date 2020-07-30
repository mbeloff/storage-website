<template>
  <div>
    <div class="streak position-relative ">
      <img class="streak-img" src="../assets/streak1.jpg" alt="" />
      <div class="position-absolute content center overlay-1 text-white">
        <h1>test</h1>
      </div>
    </div>
    <div class="streak position-relative ">
      <img class="streak-img" src="../assets/streak3.jpg" alt="" />
      <div class="position-absolute content center overlay-2 text-white">
        <h1>test</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.streak {
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  /* background-image: url('../assets/padlocked.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: auto; */
  /* padding-top: 10rem;
  padding-bottom: 10rem; */
  max-height: 700px;
  margin-top: 0%;
  &:not(:first-of-type) {
    margin-top: -10%;
    @media only screen and (min-width: 1200px) {
      margin-top: -5rem;
    }
  }
}

.streak-img {
  width: 100%;
  object-position: 40% 50%;
}

.content {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.overlay-1 {
  background-color: rgba(6, 8, 22, 0.822);
}

.overlay-2 {
  background-color: rgba(255, 81, 0, 0.61);
}
</style>
