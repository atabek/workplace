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
            <li><a href="#">Кто мы</a></li>
            <li><a href="#">Наши услуги</a></li>
            <li><a href="#">Наши клиенты/партнеры</a></li>
            <li><a href="#">Наши Контакты</a></li>
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
@import "../scss/_variables.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $fourth;
  height: 5.5rem;
  z-index: 100;
  &__logo {
    margin-left: 1rem;
  }
  &__logo a {
    color: black;
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
    transition: 0.2s ease-in;
    &:hover {
      background-color: $secondary;
      border-radius: 0.5rem;
    }
  }
  &__navigation-items a {
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
  }
  &__navigation-items a:hover,
  &__navigation-items a:active {
    // color: #fa923f;
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
