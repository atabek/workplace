<template>
  <div id="app">
    <Toolbar @clicked="drawerToggleClickHandler" />
    <SideDrawer :display="sideDrawerOpen" />
    <Backdrop v-if="sideDrawerOpen" @clicked="backdropClickHandler" />
    <div class="view">
      <router-view />
    </div>
  </div>
</template>
<script>
import Toolbar from "./components/Toolbar.vue";
import SideDrawer from "./components/SideDrawer/SideDrawer.vue";
import Backdrop from "./components/Backdrop.vue";

export default {
  name: "app",
  components: {
    Toolbar,
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
@import "./scss/_variables.scss";
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
  font-family: "Roboto", sans-serif;
  background-color: $backgroundColor;
}
#app {
  height: 100%;
}
.view {
  margin-top: 5.5rem;
  margin-bottom: -5.5rem;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}
</style>
