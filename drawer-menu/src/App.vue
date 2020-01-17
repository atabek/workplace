<template>
  <div id="app">
    <Toolbar />
    <Content />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Content from "./components/Content.vue";

export default {
  name: "app",
  components: {
    Toolbar,
    Content
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
#app {}
</style>
