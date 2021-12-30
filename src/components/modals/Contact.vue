<script setup lang="ts">
import { ref, computed } from "vue";
import functions from "../../functions";
import { store } from "../../store";
import Button from "../atoms/Button.vue";

const textContent = computed(() => {
  return store.state.textContent.contact;
});

const language = computed(() => {
  return store.state.language.abreviation;
});

const emit = defineEmits(["close"]);

const rules = ref({
  required: (value: string) =>
    !!value || textContent.value.form.validators.required[language.value],
  counterName: (value: string | string[]) =>
    value?.length <= 30 ||
    textContent.value.form.validators.name[language.value],
  counterMessage: (value: string | string[]) =>
    value?.length <= 512 ||
    textContent.value.form.validators.message[language.value],
  email: (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
      pattern.test(value) ||
      textContent.value.form.validators.email[language.value]
    );
  },
});

let isFormValid = ref(false);
let isAdmin = ref(false);
let errorMessage = ref("");
let successMessage = ref("");
let contactInfo = ref({
  name: "",
  email: "",
  message: "",
});

function submitContactRequest() {
  errorMessage.value = "";
  const isFormFilled =
    contactInfo.value.name &&
    contactInfo.value.email &&
    contactInfo.value.message;
  if (!isFormValid.value || !isFormFilled) {
    errorMessage.value = textContent.value.form.errors.empty[language.value];
  } else {
    if (!isAdmin.value) {
      if (functions.isNotDisposableEmail(contactInfo.value.email)) {
        store
          .dispatch("SEND_CONTACT_REQUEST", { ...contactInfo.value })
          .then(() => {
            successMessage.value =
              textContent.value.form.success[language.value];

            setTimeout(() => {
              emit("close");
              contactInfo.value = {
                name: "",
                email: "",
                message: "",
              };
            }, 1500);
          });
      } else {
        errorMessage.value =
          textContent.value.form.errors.phonyEmail[language.value];
      }
    }
  }
}
</script>

<template>
  <w-card class="rust-background">
    <div class="header-decoration lloyd-tartan"></div>
    <w-button
      icon="mdi mdi-close"
      color="white"
      absolute
      top
      right
      outline
      class="box-shadow mt5 mr1"
      @click="emit('close')"
    ></w-button>

    <h1 class="title-font white font-shade mt5">
      <w-icon>mdi mdi-email-edit-outline</w-icon>
      {{ textContent.title[language] }}
    </h1>

    <h4 class="title-font white font-shade mt4">
      {{ textContent.intro[language] }}
    </h4>

    <w-form v-model="isFormValid">
      <w-flex wrap class="my5 form-fields">
        <w-input
          v-model="contactInfo.name"
          color="brown-dark5"
          class="xs12 md5 washed-white my-input"
          :validators="[rules.required, rules.counterName]"
          :label="textContent.form.name[language]"
        >
        </w-input>

        <w-input
          v-model="contactInfo.email"
          color="brown-dark5"
          class="xs12 md5 washed-white my-input"
          :validators="[rules.required, rules.email]"
          :label="textContent.form.email[language]"
        >
        </w-input>
      </w-flex>

      <w-textarea
        v-model="contactInfo.message"
        color="brown-dark5"
        class="washed-white my-textarea"
        :validators="[rules.required, rules.counterMessage]"
        :label="textContent.form.message[language]"
      ></w-textarea>

      <w-flex class="align-end justify-end mt5">
        <h4 class="error">{{ errorMessage }}</h4>
        <h4 class="green">{{ successMessage }}</h4>
      </w-flex>

      <w-flex class="align-end justify-end mt5">
        <Button
          :action="submitContactRequest"
          xl
          round
          outline
          color="white"
          class="title-font"
          ico="mdi mdi-send"
          :content="textContent.form.button[language]"
          :disabled="!isFormValid"
        />
      </w-flex>

      <w-checkbox
        v-model="isAdmin"
        style="display: none"
        label="isAdmin"
        id="isAdmin"
      ></w-checkbox>
    </w-form>
  </w-card>
</template>

<style lang="scss" scoped>
.header-decoration {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 100%;
  opacity: 0.5;
}
.form-fields {
  gap: 20px;
}
</style>
