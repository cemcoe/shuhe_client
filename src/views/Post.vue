<template>
  <p>{{ post.title }}</p>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getPostDetail } from "network/post.js";
export default {
  setup() {
    const route = useRoute();
    const pid = route.params.pid;

    const state = reactive({
      post: {
        title: "",
      },
    });

    onMounted(async () => {
      const res = await getPostDetail(pid);
      state.post = res.data.post;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>