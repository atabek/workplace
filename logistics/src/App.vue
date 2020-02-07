<template>
  <div id="app">
    <Toolbar @clicked="drawerToggleClickHandler" />
    <SideDrawer :display="sideDrawerOpen" />
    <Backdrop v-if="sideDrawerOpen" @clicked="backdropClickHandler" />
    <div class="view">
      <router-view />
    </div>
    <FixedContactFormButton />
    <Footer :contacts="contacts" />
  </div>
</template>
<script>
import Toolbar from "./components/Toolbar.vue";
import SideDrawer from "./components/SideDrawer/SideDrawer.vue";
import Backdrop from "./components/Backdrop.vue";
import Footer from "./components/Footer.vue";
import FixedContactFormButton from "./components/FixedContactFormButton.vue";

export default {
  name: "app",
  components: {
    Toolbar,
    SideDrawer,
    Backdrop,
    Footer,
    FixedContactFormButton
  },
  data: function() {
    return {
      sideDrawerOpen: false,
      contacts: [
        {
          title: "Офис в Бишкеке",
          name: "Green World Group Logistics KG",
          address: "г. Бишкек, ул. Киевская 153, пер. пр. Манаса, 720001",
          telephone: "+996(709) 007557",
          email: "info@gwgkg.com"
          // bankInfo: "(жду информацию)",
          // website: "https://gwgkg.com"
        },
        {
          title: "Офис в Токио",
          name: "Green World Group Logistics",
          address:
            "〒105-0003 5F Сасай Билдинг, Ниши Шимбаши, район Минато, город Токио, Япония",
          telephone: "+81(0)5472-0025",
          email: ""
          // bankInfo: "",
          // website: "http://www.gwg-logx.co.jp"
        },
        {
          title: "Офис в Шанхае",
          name: "Green World Group Logistics",
          address:
            "〒20011 1011# ул. Луджиабин, район Хуанпу, город Шанхай, Китай",
          telephone: "+8613818705269",
          email: ""
          // bankInfo: "",
          // website: ""
        }
      ]
    };
  },
  methods: {
    drawerToggleClickHandler() {
      this.sideDrawerOpen = !this.sideDrawerOpen;
    },
    backdropClickHandler() {
      this.sideDrawerOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  height: 100%;
}
body {
  font-family: "Roboto", sans-serif;
  background-color: $backgroundColor;
}
#app {
  height: 100%;
}
.view {
  margin-top: 7rem;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}
.min-height-50vh {
  min-height: 50vh;
}
.min-height-100vh {
  min-height: 100vh;
}
</style>
