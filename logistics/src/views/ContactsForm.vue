<template>
  <div class="form">
    <form action="#">
      <div>
        <label for="fullname">Ф.И.О.</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Фамилия, имя, отчество"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
        />
      </div>

      <div>
        <label for="description">Ваш вопрос</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<style lang="scss">
.form {
  font-size: 1.5rem;
  & label {
    width: 4rem;
  }
}
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
</style>
