<script setup lang="ts">
import { ref } from "vue";
import { store } from "../../store";
import { BlogPost } from "../../types";

let isFormValid = ref(false);
const postContent = ref<BlogPost>({
  title: {
    fr: "",
    en: "",
  },
  icon: "",
  content: {
    fr: "",
    en: "",
  },
  date: "",
  id: "",
});

function savePost(): void {
  if (postContent.value.title.fr) {
    store.dispatch("POST_BLOG", { ...postContent.value }).then(() => {
      postContent.value = {
        title: {
          fr: "",
          en: "",
        },
        icon: "",
        content: {
          fr: "",
          en: "",
        },
        date: "",
        id: "",
      };
    });
  }
}
</script>

<template>
  <w-card class="washed-white mt10 blog-posting-card">
    <h1 class="title-font">
      <w-icon class="mr1">mdi mdi-pen</w-icon>New blog post
    </h1>
    <w-form v-model="isFormValid">
      <w-input
        inner-icon-left="mr1 mdi mdi-format-title white"
        color="grey-dark5"
        class="my-input"
        v-model="postContent.title.fr"
        label="Titre FR"
      ></w-input>
      <w-input
        inner-icon-left="mr1 mdi mdi-format-title white"
        color="grey-dark5"
        class="my-input"
        v-model="postContent.title.en"
        label="Titre EN"
      ></w-input>
      <w-input
        inner-icon-left="mr1 mdi mdi-image white"
        color="grey-dark5"
        class="my-input"
        v-model="postContent.icon"
        label="Icon (use prefix mdi mdi-)"
      ></w-input>
      <w-textarea
        inner-icon-left="mr1 mdi mdi-comment-text white"
        color="grey-dark5"
        class="my-input"
        v-model="postContent.content.fr"
        label="Texte FR"
      ></w-textarea>
      <w-textarea
        inner-icon-left="mr1 mdi mdi-comment-text white"
        color="grey-dark5"
        class="my-input"
        v-model="postContent.content.en"
        label="Texte EN"
      ></w-textarea>

      <w-flex class="align-end justify-end mt5">
        <w-button @click="savePost"
          ><w-icon class="mr1">mdi mdi-send</w-icon>SAVE</w-button
        >
      </w-flex>
    </w-form>
  </w-card>
</template>

<style lang="scss" scoped>
.blog-posting-card {
  max-width: 600px;
  width: 100%;
}
</style>
