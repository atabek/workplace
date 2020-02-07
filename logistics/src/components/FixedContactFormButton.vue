<template>
  <div class="fixed">
    <button @click="navigateTo" class="btn with-border">
      <span>&nbsp;&#9993;&nbsp;</span>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo() {
      this.$router.push("form");
    }
  }
};
</script>
<style lang="scss">
.fixed {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  & button {
    font-size: 2.5rem;
  }
}
</style>
