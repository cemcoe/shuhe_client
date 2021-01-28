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

    const post = reactive({
      title: "",
      content: "",
    });

    let author = reactive({
      name: "",
      avatar: "",
      _id: "",
    });

    const getPostInfo = async () => {
      const res = await getPostDetail(pid);
      const data = res.data.post;
      console.log(data);

      author.name = data.author.name;
      author.avatar =
        "https://jian.cemcoe.com/jianshu_api" + data.author.avatar;
      author._id = data.author._id;

      post.title = data.title;
      post.content = marked(data.content);
      isLoading.value = false;
    };

    onMounted(getPostInfo());

    return {
      post,
      isLoading,
      author,
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 18px;
}
.content {
  line-height: 28px;
}
.content:deep(img) {
  max-width: 96vw;
  display: block;
  margin: 10px auto;
}
.content:deep(a) {
  text-decoration: none;
}
</style>