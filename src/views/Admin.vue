<script setup lang="ts">
import { ref, computed } from "vue";
import { store } from "../store";

const isLoggedIn = computed(() => {
  return store.state.isLoggedIn;
});

let isFormValid = ref(false);
let isAdmin = ref(false);
const credentials = ref({
  email: "",
  pwd: "",
});

function submitLogin() {
  if (!isAdmin.value) {
    if (credentials.value.email && credentials.value.pwd) {
      store.dispatch("LOG_IN", { ...credentials.value }).then(() => {
        console.log("DONE");
      });
    }
  }
}
</script>

<template>
  <w-form v-model="isFormValid">
    <w-flex class="justify-center align-center">
      <w-input
        class="my-input washed-white admin-input"
        v-model="credentials.email"
        label="email"
        type="email"
      ></w-input>
      <w-input
        class="my-input washed-white admin-input"
        v-model="credentials.pwd"
        label="password"
        type="password"
      ></w-input>
    </w-flex>

    <w-checkbox
      v-model="isAdmin"
      style="display: none"
      label="isAdmin"
      id="isAdmin"
    ></w-checkbox>

    <w-flex class="justify-center align-center mt5">
      <w-button xl @click="submitLogin">SUBMIT</w-button>
    </w-flex>
  </w-form>

  <h1 class="white">{{ isLoggedIn ? "You're in" : "" }}</h1>
</template>

<style lang="scss" scoped>
.admin-input {
  max-width: 300px;
}
</style>
