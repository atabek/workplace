<template>
  <header class="header">
    <div class="container">
      <nav class="header__navigation">
        <div class="header__toggle-button">
          <DrawerToggleButton @clicked="drawerToggleClickHandler" />
        </div>
        <div class="header__logo">
          <router-link to="/" class="link">
            <img alt="Vue logo" src="../assets/logo.png" />
          </router-link>
        </div>
        <div class="spacer"></div>
        <div class="header__navigation-items">
          <ul>
            <li><router-link to="/" class="link">Главная</router-link></li>
            <li><router-link to="/about" class="link">Кто мы</router-link></li>
            <li>
              <router-link to="/services" class="link">Наши услуги</router-link>
            </li>
            <li>
              <router-link to="/partners" class="link"
                >Наши клиенты</router-link
              >
            </li>
            <li>
              <router-link to="/routes" class="link">
                Карта маршрутов
              </router-link>
            </li>
            <li>
              <router-link to="/contacts" class="link"
                >Наши Контакты</router-link
              >
            </li>
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
  height: 7rem;
  z-index: 100;
  &__logo {
    margin-left: 1rem;
  }
  &__logo .link {
    color: black;
    text-decoration: none;
    font-size: 2rem;
  }
  &__logo img {
    display: block;
    height: 5rem;
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
    margin-left: 0.5rem;
    &::last-child {
      margin-left: 0;
    }
    transition: 0.2s ease-in;
    line-height: 3.5rem;
    &:hover {
      background-color: darken($color: white, $amount: 0.1);
    }
  }
  &__navigation-items .link {
    padding: 1rem;
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 300;
    &:hover,
    &:active,
    &.router-link-exact-active {
      color: darkcyan;
      border-bottom: 2px solid darkgoldenrod;
      background-color: darken($color: white, $amount: 0.1);
    }
  }
}
@media (max-width: 860px) {
  .header__navigation-items .link {
    font-size: 1.25rem;
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
