<template>
  <cem-editor :post="post" @routeLeave="routeLeave"></cem-editor>
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
    const routeLeave = () => {
      console.log("TODO: 将文章保存为草稿");
    };

    return {
      post,
      routeLeave,
    };
  },
};
</script>

<style>
</style>