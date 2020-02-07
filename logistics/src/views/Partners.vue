<template>
  <div class="partners min-height-100vh">
    <div class="container">
      <div class="row centered-text">
        <h2 class="heading-secondary">Наши партнеры</h2>
      </div>
      <div class="partners-logo">
        <div class="logo-items" v-for="partner in partners" :key="partner.name">
          <img :src="partner.url" :alt="partner.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.partners {
  width: 100%;
}
</style>
<script>
export default {
  data: function() {
    return {
      partners: [
        {
          name: "Mitsubishi Motors",
          url: require("../assets/partners/mmc.png"),
          alt: "Mitsubishi Motors logo"
        }
      ]
    };
  }
};
</script>
