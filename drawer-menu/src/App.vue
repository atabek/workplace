<template>
  <div id="app">
    <Toolbar @clicked="drawerToggleClickHandler" />
    <Content />
    <SideDrawer :display="sideDrawerOpen" />
    <Backdrop v-if="sideDrawerOpen" @clicked="backdropClickHandler" />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Content from "./components/Content.vue";
import SideDrawer from "./components/SideDrawer/SideDrawer.vue";
import Backdrop from "./components/Backdrop.vue";

export default {
  name: "app",
  components: {
    Toolbar,
    Content,
    SideDrawer,
    Backdrop
  },
  data: function() {
    return {
      sideDrawerOpen: false
    };
  },
  methods: {
    drawerToggleClickHandler() {
      this.sideDrawerOpen = !this.sideDrawerOpen;
    },
    backdropClickHandler() {
      this.sideDrawerOpen = false;
    }
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
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}
</style>
