<template>
  <div class="contact-form">
    <div class="form">
      <div v-show="showError" class="alert show-error">
        <h1>Opsy! Message not Sent 😅</h1>
        <p>I think some fields are empty, please fill them all out.</p>
      </div>
      <div v-show="sent && !showError" class="alert show-success">
        <h1>Message Sent! 😊</h1>
        <p>Your message was sent successfuly! I'll check them later.</p>
      </div>
      <div class="flex">
        <input v-model="form.name" type="text" placeholder="Name" />
        <input v-model="form.email" type="email" placeholder="Email" />
      </div>
      <input v-model="form.subject" type="text" placeholder="Subject" />
      <textarea
        v-model="form.message"
        name="msg"
        placeholder="Message"
        rows="8"
        @keypress.enter.prevent="sendEmail()"
      ></textarea>
      <div @click.prevent="sendEmail()">
        <GradientBorder
          aria-label="Send Message"
          :withBg="false"
          style="
            margin-top: 5px;
            width: 150px;
            font-size: 1.1rem !important;
            font-weight: 900;
          "
        >
          <p style="margin: 0">{{ sending ? "Sending..." : "Send" }}</p>
        </GradientBorder>
      </div>
    </div>
  </div>
</template>
<script>
import * as emailjs from "emailjs-com";
import GradientBorder from "../components/GradientBorder.vue";
export default {
  name: "Form",
  components: { GradientBorder },
  data: () => {
    return {
      form: {
        subject: "",
        name: "",
        email: "",
        message: "",
      },
      showError: false,
      sent: false,
      sending: false,
    };
  },
  methods: {
    sendEmail() {
      this.sending = true;
      console.log(this.form);
      if (this.checkProperties()) {
        emailjs
          .send(
            "service_o9ibjxo",
            "template_uwu3fwa",
            this.form,
            "user_2O7smuV0SJhDG84fc5C4O"
          )
          .then(() => {
            this.sent = true;
            this.showError = false;
            this.sending = false;
            this.form = {
              subject: "",
              name: "",
              email: "",
              message: "",
            };
          })
          .catch(() => {
            this.sent = false;
            this.showError = true;
            this.sending = false;
          });
      } else {
        this.showError = true;
        this.sending = false;
      }
    },
    checkProperties() {
      let form = this.form;
      return form.subject != "" &&
        form.name != "" &&
        form.email != "" &&
        form.message != ""
        ? true
        : false;
    },
  },
};
</script>
<style lang="scss" >
.contact-form {
  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .alert {
      padding: 10px;
      opacity: 0.8;
      border-radius: 5px;
      h1,
      p {
        margin: 5px;
        color: var(--background);
      }
    }

    .show-error {
      background-color: var(--error);
    }

    .show-success {
      background-color: var(--primary);
    }

    .flex {
      display: flex;
      width: 100%;
      justify-content: space-between;
      gap: 15px;
      input {
        width: 100%;
      }
    }
    input,
    textarea {
      border-radius: 3px;
      border: 1px solid var(--lightBackground);
      padding: 15px 30px;
      background-color: var(--lightBackground);
      color: var(--slate);
      &::placeholder {
        color: var(--slate);
      }

      &:focus {
        border-bottom: 1px solid var(--primary-darker);
      }
    }
    textarea {
      resize: vertical;
    }
  }
}
</style>