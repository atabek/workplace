<template>
  <div class="contacts">
    <div class="container">
      <div class="row centered-text">
        <h2 class="heading-secondary">Наши контакты</h2>
      </div>
      <div class="contact-list">
        <ContactColumn
          title="Офис в Бишкеке"
          name="Green World Group Logistics KG"
          address="г. Бишкек, ул. Киевская 153, пер. пр. Манаса, 720001"
          telephone="+996(709) 007557"
          email=""
        />
        <ContactColumn
          title="Офис в Токио"
          name="Green World Group Logistics"
          address="〒105-0003 5F Сасай Билдинг, Ниши Шимбаши, район Минато, город Токио, Япония"
          telephone="+81(0)5472-0025"
          email=""
        />
        <ContactColumn
          title="Офис в Шанхае"
          name="Green World Group Logistics"
          address="〒20011 1011# ул. Луджиабин, район Хуанпу, город Шанхай, Китай"
          telephone="+8613818705269"
          email=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import ContactColumn from "../components/ContactColumn.vue";
export default {
  components: {
    ContactColumn
  }
};
</script>
<style lang="scss">
.contact-list {
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-flow: column;
  }
}
</style>
