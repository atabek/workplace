<template>
  <div class="contact-column">
    <h3 class="heading-tertiary heading-tertiary--tertiary">{{ title }}</h3>
    <ul>
      <li v-if="name">{{ name }}</li>
      <li v-if="address">Адрес: {{ address }}</li>
      <li v-if="telephone">Тел: {{ telephone }}</li>
      <li v-if="email">Email: {{ email }}</li>
      <li v-if="bankInfo">Банк реквизиты: {{ bankInfo }}</li>
      <li v-if="website">
        <a :href="website" target="_blank">{{ website }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "name",
    "address",
    "telephone",
    "email",
    "bankInfo",
    "website"
  ]
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.contact-column {
  height: 100%;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  max-width: 70%;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  & ul {
    padding: 1rem;
    list-style: none;
  }
  & li {
    padding: 1rem 0;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
}
</style>
