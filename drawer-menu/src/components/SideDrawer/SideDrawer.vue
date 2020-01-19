<template>
  <nav class="side-drawer" v-bind:class="{ display: display }">
    <ul>
      <li><a href="#">Кто мы</a></li>
      <li><a href="#">Наши услуги</a></li>
      <li><a href="#">Наши клиенты/партнеры</a></li>
      <li><a href="#">Наши Контакты</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["display"]
};
</script>
<style lang="scss">
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
    & li {
      // height: 3rem;
      text-align: left;
      // line-height: 3rem;
      padding: 3rem;
    }
  }
  & a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  & a:hover,
  & a:active {
    color: $primary;
  }
}
</style>
