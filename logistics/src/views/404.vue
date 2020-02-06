<template>
  <div class="container">
    <div class="not-found">
      <h1>&#9785;&nbsp;Страница не найдена...</h1>
      <router-link to="/">
        <button class="btn with-border">&#127968;&nbsp;Назад</button>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
.not-found {
  height: 50vh;
  display: flex;
  align-items: center;
  flex-flow: column;
}
</style>
