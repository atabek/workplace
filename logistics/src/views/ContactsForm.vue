<template>
  <div class="container min-height-50vh">
    <div class="row centered-text">
      <h2 class="heading-secondary">Форма заявки</h2>
    </div>
    <div class="form-container">
      <form
        class="gform"
        @submit.prevent="onSubmit"
        action="https://script.google.com/macros/s/AKfycbyGdpWSagzzr4nA6C4ENzdekN6RJ973prmqwHU7MA/exec"
      >
        <!-- 
          new - https://script.google.com/macros/s/AKfycbyGdpWSagzzr4nA6C4ENzdekN6RJ973prmqwHU7MA/exec
          old - https://script.google.com/macros/s/AKfycbz0YuOmgKE6uVOWiOafPRbA52MuROxr34z0Qv6yIzj0OCzj9kWd/exec
        -->
        <!-- change the form action to your script url -->
        <div class="form-elements">
          <div class="form-element-item">
            <label for="name">Ф.И.О. </label>
            <input id="name" name="name" placeholder="" type="text" />
          </div>

          <div class="form-element-item">
            <label for="message">Ваш вопрос: </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="..."
            ></textarea>
          </div>
          <div class="form-element-item">
            <label for="email">Электрнонная почта:</label>
            <input
              id="email"
              name="email"
              type="email"
              value=""
              placeholder="your.name@email.com"
            />
          </div>
          <div class="form-element-item">
            <label for="tel">Ваш телефон:</label>
            <input
              id="tel"
              name="tel"
              type="tel"
              value=""
              required
              placeholder="0777112233"
            />
          </div>
          <div class="honeypot-field">
            <label for="honeypot"
              >To help avoid spam, utilize a Honeypot technique with a hidden
              text field; must be empty to submit the form! Otherwise, we assume
              the user is a spam bot.</label
            >
            <input id="honeypot" type="text" name="honeypot" value="" />
          </div>

          <button class="btn with-border">
            <span>&#10173;&nbsp;Отправить</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showForm: true
    };
  },
  methods: {
    onSubmit() {
      var form = event.target;
      var formData = this.getFormData(form);
      var data = formData.data;
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
        }
      };
      xhr.onerror = function() {
        alert("Error sending form data... Check your internet connection.");
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      this.$router.push({ path: "message" });
      xhr.send(encoded);
      // this.showForm = false;
    },
    getFormData(form) {
      var elements = form.elements;
      var honeypot;
      var fields = Object.keys(elements)
        .filter(function(k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        })
        .map(function(k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function(item, pos, self) {
          return self.indexOf(item) == pos && item;
        });
      var formData = {};
      fields.forEach(function(name) {
        var element = elements[name];
        // singular form elements just have one value
        formData[name] = element.value;
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSend = form.dataset.email || ""; // no email by default
      return { data: formData, honeypot: honeypot };
    }
    // showFormClickHandler() {
    //   this.showForm = true;
    // }
  }
};
</script>
<style lang="scss">
.form-container {
  font-size: 1.5rem;
}
.form-elements {
  padding: 1.5rem 0;
}
.form-element-item {
  margin: 1.5rem 0;
}
form input[type="text"],
form input[type="email"],
form input[type="password"],
form input[type="tel"],
form textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  resize: none;
}
form input[type="text"]:focus,
form input[type="email"]:focus,
form input[type="password"]:focus,
form input[type="tel"]:focus,
form textarea {
  background-color: #ddd;
  outline: none;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.honeypot-field {
  display: none;
}
.with-border {
  border: 1px solid steelblue;
}
.mb1 {
  margin-bottom: 1rem;
}
.mt1 {
  margin-top: 1rem;
}
</style>
