<script setup lang="ts">
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, computed, watch } from "vue";
import firebaseApp from "../firebase";
import { store } from "../store";
import { UnknownObj } from "../types";

const db = getFirestore(firebaseApp);

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

let contactRequests = ref([]) as UnknownObj;

async function fetchContactRequests() {
  let arr = [] as any;
  if (isLoggedIn.value) {
    const q = query(collection(db, "contacts"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      contactRequests.value.push(doc.data());
    });
  }
}

async function dump(contact: UnknownObj) {
  await deleteDoc(doc(db, "contacts", contact.id));

  contactRequests.value = contactRequests.value.filter((el: UnknownObj) => {
    return el.id !== contact.id;
  });
}

watch(
  () => isLoggedIn.value,
  (newVal) => {
    if (newVal) {
      fetchContactRequests();
    }
  }
);
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

  <h1 class="white title-font mt5 font-shade">
    {{ isLoggedIn ? "You're in :)" : "" }}
  </h1>

  <w-flex wrap class="contacts align-center justify-center">
    <w-card
      v-for="(contact, i) in contactRequests"
      :key="`contact_${i}`"
      class="xs12 md6 washed-white contact-card box-shadow"
    >
      <h1 align="left" class="title-font">
        Le {{ contact.date }} de {{ contact.name }}
      </h1>
      <h3 align="left" class="title-font">{{ contact.email }}</h3>
      <w-divider class="my3" />
      <p align="left">{{ contact.message }}</p>
      <w-flex class="align-end justify-end">
        <w-button bg-color="error" @click="() => dump(contact)">
          <w-icon>mdi mdi-close</w-icon>DUMP
        </w-button>
      </w-flex>
    </w-card>
  </w-flex>
</template>

<style lang="scss" scoped>
.admin-input {
  max-width: 300px;
}

.contacts {
  padding: 50px;
  gap: 10px;
}

.contact-card {
  width: 100%;
  max-width: 600px;
  height: 100%;
}
</style>
