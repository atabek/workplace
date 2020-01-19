<template>
  <button class="toggle-button" @click="onClickMenuButton">
    <div class="toggle-button__line"></div>
    <div class="toggle-button__line"></div>
    <div class="toggle-button__line"></div>
  </button>
</template>
<script>
export default {
  methods: {
    onClickMenuButton() {
      this.$emit("clicked");
    }
  }
};
</script>
<style lang="scss">
.toggle-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  width: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &__line {
    height: 0.2rem;
    width: 2rem;
    background-color: white;
  }
}
</style>
