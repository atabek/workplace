<template>
  <div class="message">
    <div class="container">
      <h3 class="heading-tertiary">
        <em>Спасибо!</em> Заявка принята. В ближайшее время с Вами свяжется наш
        менеджер.
      </h3>
      <div class="mt1 mb1">
        <router-link class="btn with-border">
          &#128260;&nbsp;Отправить заново
        </router-link>
        <router-link to="/">
          <button class="btn with-border">&#127968;&nbsp;Назад</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.message {
  height: 50vh;
  padding: 2rem 0;
}
</style>
