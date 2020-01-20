<template>
  <div class="contacts">
    <div class="container">
      <div class="row centered-text">
        <h2 class="heading-secondary">Наши контакты</h2>
      </div>
      <div class="contact-list">
        <ContactColumn
          title="Офис в Бишкеке"
          name="Green World Group Logistics KG (Грин Ворлд Групп Лоджистикс КейДжи)"
          address="(в поиске)"
          telephone="(в поиске)"
          email="info@gwgkg.com"
          bankInfo="(жду информацию)"
          website="https://gwgkg.com"
        />
        <ContactColumn
          title="Офис в Японии"
          name="Green World Group Logistics"
          address="〒105-0003 5F Сасай Билдинг, Ниши Шимбаши, район Минато, город Токио, Япония"
          telephone="+81(0)5472-0025"
          email=""
          bankInfo=""
          website="http://www.gwg-logx.co.jp"
        />
        <ContactColumn
          title="Офис в Шанхай"
          name="Green World Group Logistics"
          address="〒20011 1011# ул. Луджиабин, район Хуанпу, город Шанхай, Китай"
          telephone="+8613818705269"
          email=""
          bankInfo=""
          website=""
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
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
}
</style>
