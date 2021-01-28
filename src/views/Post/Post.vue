<template>
  <post-header></post-header>
  <div class="loading" v-if="isLoading">加载中。。。</div>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <author-info :author="author"></author-info>
    <div class="content" v-html="post.content"></div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from "vue";
import { useRoute } from "vue-router";
import { getPostDetail } from "network/post.js";
import marked from "marked";
import PostHeader from "./PostHeader.vue";
import AuthorInfo from "./AuthorInfo.vue";

export default {
  components: {
    PostHeader,
    AuthorInfo,
  },
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

    let author = reactive({
      name: "",
      avatar: "",
      _id: "",
    });

    onMounted(async () => {
      const res = await getPostDetail(pid);
      const post = res.data.post;
      console.log(post);
      author.name = post.author.name;
      author.avatar =
        "https://jian.cemcoe.com/jianshu_api" + post.author.avatar;
      author._id = post.author._id;

      state.post.title = post.title;
      state.post.content = marked(post.content);
      isLoading.value = false;
    });

    return {
      ...toRefs(state),
      isLoading,
      author,
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