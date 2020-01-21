<template>
  <footer class="footer">
    <div class="container">
      <div class="contact-list">
        <ContactColumn
          v-for="(contact, index) in contacts"
          :title="contact.title"
          :name="contact.name"
          :address="contact.address"
          :telephone="contact.telephone"
          :email="contact.email"
          :bankInfo="contact.bankInfo"
          :website="contact.website"
          :key="index"
        />
      </div>
    </div>
  </footer>
</template>
<script>
import ContactColumn from "./ContactColumn.vue";
export default {
  props: ["contacts"],
  components: {
    ContactColumn
  }
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.footer {
  background-color: $fourth;
  padding-top: 2rem;
}
</style>
