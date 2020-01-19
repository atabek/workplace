<template>
  <nav class="side-drawer" v-bind:class="{ display: display }">
    <div class="container">
      <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Our Partners</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["display"]
};
</script>
<style lang="scss">
@media (min-width: 769px) {
  .side-drawer {
    display: none;
  }
}
.side-drawer {
  height: 100%;
  background-color: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  max-width: 40rem;
  width: 70%;
  z-index: 200;
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
      height: 3rem;
      text-align: center;
      line-height: 3rem;
    }
  }
  & a {
    text-decoration: none;
    color: #521751;
    font-size: 1.5rem;
  }
  & a:hover,
  & a:active {
    color: #fa923f;
  }
}
</style>
