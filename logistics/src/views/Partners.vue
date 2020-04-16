<template>
  <div class="partners min-height-100vh">
    <div class="container">
      <div class="row centered-text">
        <h2 class="heading-secondary">Наши партнеры</h2>
      </div>
      <div class="partners-logo">
        <!-- <div class="logo-item" v-for="partner in partners" :key="partner.name">
          <img :src="partner.url" :alt="partner.alt" />
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.partners {
  width: 100%;
}
.partners-logo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.logo-item {
  max-width: 40%;
  & img {
    display: block;
    width: 100%;
    overflow: hidden;
  }
}
</style>
<script>
export default {
  // data: function() {
  //   return {
  //     partners: [
  //       {
  //         name: "Mitsubishi Motors",
  //         url: require("../assets/partners/mmc.png"),
  //         alt: "Mitsubishi Motors logo"
  //       },
  //       {
  //         name: "ISUZU MOTOR",
  //         url: require("../assets/partners/isuzu.png"),
  //         alt: "ISUZU MOTOR logo"
  //       },
  //       {
  //         name: "Dai Nippon Construction",
  //         url: require("../assets/partners/dnc.png"),
  //         alt: "Dai Nippon Constrction logo"
  //       },
  //       {
  //         name: "Fuji Electric",
  //         url: require("../assets/partners/fujielectric.png"),
  //         alt: "Fuji Electric logo"
  //       },
  //       {
  //         name: "KOMATSU Tsusho",
  //         url: require("../assets/partners/komatsu.png"),
  //         alt: "KOMATSU Tsusho logo"
  //       },
  //       {
  //         name: "Toyo Tires",
  //         url: require("../assets/partners/toyotires.png"),
  //         alt: "Toyo Tires logo"
  //       },
  //       {
  //         name: "Mitsubishi Corp",
  //         url: require("../assets/partners/mitsubishicorp.png"),
  //         alt: "Sumitomo Corp logo"
  //       },
  //       {
  //         name: "Sumitomo Corp",
  //         url: require("../assets/partners/sumitomocorp.png"),
  //         alt: "Sumitomo Corp logo"
  //       },
  //       {
  //         name: "Showa Denkou",
  //         url: require("../assets/partners/showadenkou.png"),
  //         alt: "Toyota Tsusho logo"
  //       },
  //       {
  //         name: "Toyota Tsusho",
  //         url: require("../assets/partners/toyotatsusho.png"),
  //         alt: "Toyota Tsusho logo"
  //       }
  //     ]
  //   };
  // }
};
</script>
