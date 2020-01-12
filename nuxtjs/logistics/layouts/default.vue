<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn icon>
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" :key="item.icon"
          flat :to="item.to">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-btn class="hidden-md-and-up"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="false"
      temporary
      fixed
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-information
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>About us</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-information',
          title: 'About us',
          to: '/aboutus'
        },
        {
          icon: 'mdi-information',
          title: 'Our services',
          to: '/services'
        },
        {
          icon: 'mdi-information',
          title: 'Our partners',
          to: '/partners'
        },
        {
          icon: 'mdi-information',
          title: 'Form',
          to: '/form'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Company logo'
    }
  }
}
</script>
