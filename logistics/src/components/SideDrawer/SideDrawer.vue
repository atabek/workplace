<template>
  <nav class="side-drawer" v-bind:class="{ display: display }">
    <ul>
      <li>
        <router-link to="/" class="link">&#127968;&nbsp;Главная</router-link>
      </li>
      <li>
        <router-link to="/about" class="link"
          >&#128712;&nbsp;Кто мы</router-link
        >
      </li>
      <li>
        <router-link to="/services" class="link"
          >&#128129;&nbsp;Наши услуги</router-link
        >
      </li>
      <li>
        <router-link to="/partners" class="link"
          >&#128101;&nbsp;Наши партнеры</router-link
        >
      </li>
      <li>
        <router-link to="/routes" class="link">
          &#9941;&nbsp;Карта маршрутов
        </router-link>
      </li>
      <li>
        <router-link to="/contacts" class="link"
          >&#9990;&nbsp;Наши Контакты</router-link
        >
      </li>
      <li>
        <router-link to="/form" class="link">
          &#9993;&nbsp;Оставить заявку
        </router-link>
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
