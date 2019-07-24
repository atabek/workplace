<template>
  <div class="container">
    <Header />
    <nuxt-link to="/users">Users</nuxt-link>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
