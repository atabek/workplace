<template>
  <div class="contact-column">
    <h3 class="heading-tertiary">{{ title }}</h3>
    <ul>
      <li v-if="name">{{ name }}</li>
      <li v-if="address">&#127970; {{ address }}</li>
      <li v-if="telephone">&#9743; {{ telephone }}</li>
      <li v-if="email">&#128231; {{ email }}</li>
      <li v-if="bankInfo">&#127974; {{ bankInfo }}</li>
      <li v-if="website">
        &#127760;
        <a :href="website" target="_blank">{{ website }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // data: function() {
  //   return {
  //     background: this.backgroundColor
  //   };
  // },
  props: [
    "title",
    "name",
    "address",
    "telephone",
    "email",
    "bankInfo",
    "website"
    // "backgroundColor"
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
    padding: 0 1rem;
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
