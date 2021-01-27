<template>
  <cem-nav-bar title="文章" @click-left="$router.back()">
    <template #left>
      <cem-icon name="back" />
    </template>
    <template #right>
      <cem-icon name="more" />
    </template>
  </cem-nav-bar>
  <div class="loading" v-if="isLoading">加载中。。。</div>
  <h2>{{ post.title }}</h2>
  <div class="content" v-html="post.content"></div>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from "vue";
import { useRoute } from "vue-router";
import { getPostDetail } from "network/post.js";
import marked from "marked";

export default {
  setup() {
    const route = useRoute();
    const pid = route.params.pid;
    const isLoading = ref(true);

    const state = reactive({
      post: {
        title: "",
        content: "",
      },
    });

    onMounted(async () => {
      const res = await getPostDetail(pid);
      const post = res.data.post;
      state.post.title = post.title;
      state.post.content = marked(post.content);
      isLoading.value = false;
    });

    return {
      ...toRefs(state),
      isLoading,
    };
  },
};
</script>

<style scoped>
.content {
  line-height: 28px;
}
.content:deep(img) {
  max-width: 96vw;
  display: block;
  margin: 10px auto;
}
</style>