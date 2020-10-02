<template>
  <nobr><i class="far fa-link fa-fw"></i><slot></slot></nobr>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
i {
  margin-right: 0.25rem;
  color: var(--secondary);
}
</style>
