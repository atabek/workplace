<template>
  <header class="header">
    <div class="container">
      <nav class="header__navigation">
        <div class="header__toggle-button">
          <DrawerToggleButton @clicked="drawerToggleClickHandler" />
        </div>
        <div class="header__logo"><a href="/">The LOGO</a></div>
        <div class="spacer"></div>
        <div class="header__navigation-items">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Partners</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton.vue";
export default {
  components: {
    DrawerToggleButton
  },
  methods: {
    drawerToggleClickHandler() {
      this.$emit("clicked");
    }
  }
};
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #521751;
  height: 5.5rem;
  &__logo {
    margin-left: 1rem;
  }
  &__logo a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }
  .spacer {
    flex: 1;
  }
  &__navigation {
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__navigation-items ul {
    list-style: none;
    display: flex;
  }
  &__navigation-items li {
    padding: 1rem;
  }
  &__navigation-items a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
  &__navigation-items a:hover,
  &__navigation-items a:active {
    color: #fa923f;
  }
}
@media (max-width: 768px) {
  .header__navigation-items {
    display: none;
  }
}
@media (min-width: 769px) {
  .header__toggle-button {
    display: none;
  }
  .header__logo {
    margin-left: 0;
  }
}
</style>
