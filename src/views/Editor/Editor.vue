<template>
  <cem-editor :post="post"></cem-editor>
</template>

<script>
import { reactive } from "vue";
import CemEditor from "components/content/Editor/Editor.vue";
export default {
  components: {
    CemEditor,
  },
  setup() {
    const post = reactive({
      title: "",
      content: "",
    });

    return {
      post,
    };
  },
};
</script>

<style>
</style>