<script setup lang="ts">
import { computed, ref } from "vue";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import firebaseApp from "../firebase";
import { BlogPost } from "../types";
import Language from "../components/atoms/Language.vue";
import { store } from "../store";
import router from "../router";

const db = getFirestore(firebaseApp);

const blogPosts = computed(() => {
  return store.state.blogPosts;
});

let retrievedPosts = ref<BlogPost[]>([]);

async function fetchBlogPosts() {
  if (blogPosts.value.length === 0) {
    const q = query(collection(db, "blog"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      retrievedPosts.value.push(doc.data() as BlogPost);
    });
    store.commit("UPDATE_FIELD", {
      field: "blogPosts",
      val: retrievedPosts.value,
    });
  }
}

const language = computed(() => {
  return store.state.language.abreviation;
});

fetchBlogPosts();

function goToHome() {
  router.push("/");
}
</script>

<template>
  <header class="rust-background box-shadow">
    <w-flex wrap class="my5">
      <w-flex class="justify-center align-center white">
        <Language color="brown-light3" shadow />
        <w-button
          bg-color="white"
          class="ml8 box-shadow brown-dark3"
          @click="goToHome"
          ><w-icon class="mr1">mdi mdi-home</w-icon>HOME</w-button
        >
      </w-flex>
    </w-flex>
  </header>

  <w-flex class="justify-start white my10 mt12">
    <h1 class="font-shade blog-main-title mt8 ml10 title-font">Blog</h1>
  </w-flex>

  <w-flex wrap class="blog-post-wrapper align-center justify-center">
    <w-card
      class="xs12 md6 blog-post washed-white mx5 box-shadow"
      v-for="(post, i) in blogPosts"
      :key="`blog_post_${i}`"
    >
      <div class="lloyd-tartan blog-card-tartan"></div>
      <h1 align="start" class="mt8 title-font">
        <w-icon v-if="post.icon">{{ post.icon }}</w-icon>
        {{ post.title[language] }}
      </h1>
      <h6 align="start">{{ post.date }}</h6>
      <p align="start">
        {{ post.content[language] }}
      </p>
    </w-card>
  </w-flex>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 100;
}
.blog-lang {
  width: 100%;
}
.blog-main-title {
  font-size: 3em;
}

.blog-post-wrapper {
  gap: 20px;
}
.blog-post {
  max-width: 600px;
  p,
  h6 {
    padding: 10px;
  }
}
.blog-card-tartan {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  opacity: 0.5;
}
</style>
