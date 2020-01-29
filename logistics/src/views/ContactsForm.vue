<template>
  <div >
    <form
      class="gform"
      @submit.prevent="onSubmit"
      action="https://script.google.com/macros/s/AKfycbz0YuOmgKE6uVOWiOafPRbA52MuROxr34z0Qv6yIzj0OCzj9kWd/exec"
    >
      <!-- change the form action to your script url -->

      <div class="form-elements">
        <fieldset class="">
          <label for="name">Name: </label>
          <input id="name" name="name" placeholder="What your Mom calls you" />
        </fieldset>

        <fieldset class="">
          <label for="message">Message: </label>
          <textarea
            id="message"
            name="message"
            rows="10"
            placeholder="..."
          ></textarea>
        </fieldset>
        <fieldset class="">
          <label for="email"><em>Your</em> Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            value=""
            required
            placeholder="your.name@email.com"
          />
        </fieldset>
        <fieldset class="">
          <label for="tel"><em>Your</em> Telephone Address:</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            value=""
            required
            placeholder="0777112233"
          />
        </fieldset>
        <fieldset class=" honeypot-field">
          <label for="honeypot"
            >To help avoid spam, utilize a Honeypot technique with a hidden text
            field; must be empty to submit the form! Otherwise, we assume the
            user is a spam bot.</label
          >
          <input id="honeypot" type="text" name="honeypot" value="" />
        </fieldset>

        <button class="button-success pure-button button-xlarge">
          <i class="fa fa-paper-plane"></i>&nbsp;Send
        </button>
        <!-- Customise the Thankyou Message People See when they submit the form: -->
        <div class="thankyou_message" style="display:none;">
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
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
          var formElements = form.querySelector(".form-elements");
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
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
  }
};
</script>
<style lang="scss">
.honeypot-field {
  display: none;
}
</style>
