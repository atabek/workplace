<template>
  <div class="backdrop" @click="onBackDropClick"></div>
</template>
<script>
export default {
  methods: {
    onBackDropClick() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
}
</style>
