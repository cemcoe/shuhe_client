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
      const answer = window.confirm("嗨伙计，你确定不再需要本页的数据了!");
      if (answer) {
        console.log("TODO: 将文章保存为草稿");
      } else {
        return false;
      }
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