<template>
  <nav class="side-drawer" v-bind:class="{ display: display }">
    <ul>
      <li><router-link to="/" class="link">Главная</router-link></li>
      <li><router-link to="/about" class="link">Кто мы</router-link></li>
      <li>
        <router-link to="/services" class="link">Наши услуги</router-link>
      </li>
      <li>
        <router-link to="/routes" class="link"
          >Наши клиенты/партнеры</router-link
        >
      </li>
      <li>
        <router-link to="/partners" class="link">
          Карта маршрутов
        </router-link>
      </li>
      <li>
        <router-link to="/contacts" class="link">Наши Контакты</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["display"]
};
</script>
<style lang="scss" scoped>
@import "../../scss/_variables.scss";
@media (min-width: 769px) {
  .side-drawer {
    display: none;
  }
}
.side-drawer {
  height: 100%;
  background-color: $fourth;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  max-width: 40rem;
  width: 70%;
  z-index: 300;
  transform: translateX(-100%);
  transition: 0.3s ease-out;
  &.display {
    transform: translateX(0);
  }
  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  & li {
    text-align: center;
    // background-color: white;
    & .link {
      text-decoration: none;
      color: black;
      font-size: 2rem;
      line-height: 4rem;
      padding: 1rem;
    }
    & .link:hover,
    & .link:active,
    & .link.router-link-exact-active {
      color: darkcyan;
      border-bottom: 1px solid darkgoldenrod;
    }
  }
}
</style>
