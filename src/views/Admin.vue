<script setup lang="ts">
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, computed, watch } from "vue";
import firebaseApp from "../firebase";
import router from "../router";
import { store } from "../store";
import { Contact, UnknownObj, UserCredentials } from "../types";
import BlogEditor from "../components/molecules/BlogEditor.vue";

const db = getFirestore(firebaseApp);

const isLoggedIn = computed(() => {
  return store.state.isLoggedIn;
});

let isFormValid = ref(false);
let isAdmin = ref(false);
const credentials = ref<UserCredentials>({
  email: "",
  pwd: "",
});

function goToHome(): void {
  router.push("/");
}

function submitLogin(): void {
  if (!isAdmin.value) {
    if (credentials.value.email && credentials.value.pwd) {
      store.dispatch("LOG_IN", { ...credentials.value }).then(() => {
        console.log("DONE");
      });
    }
  }
}

let contactRequests = ref([]) as unknown as Contact;

async function fetchContactRequests() {
  if (isLoggedIn.value) {
    const q = query(collection(db, "contacts"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      contactRequests.value.push(doc.data());
    });
  }
}

async function dump(contact: Contact | UnknownObj): Promise<void> {
  await deleteDoc(doc(db, "contacts", contact.id));

  contactRequests.value = contactRequests.value.filter((el: Contact) => {
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
      <w-button class="box-shadow" xl round @click="submitLogin">
        <h4 class="title-font">SUBMIT</h4>
      </w-button>
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
      <div class="lloyd-tartan contact-card-top"></div>
      <h1 align="left" class="title-font mt8">
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

  <w-flex class="justify-center align-center mt10">
    <w-button
      class="box-shadow"
      @click="goToHome"
      xl
      round
      outline
      color="white"
    >
      <h4 class="title-font">HOME</h4>
    </w-button>
  </w-flex>

  <w-flex v-if="isLoggedIn" class="justify-center align-center">
    <BlogEditor />
  </w-flex>
</template>

<style lang="scss" scoped>
.admin-input {
  max-width: 300px;
}

.contacts {
  gap: 10px;
  padding: 50px;
}

.contact-card {
  height: 100%;
  max-width: 600px;
  width: 100%;
}

.contact-card-top {
  height: 30px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
