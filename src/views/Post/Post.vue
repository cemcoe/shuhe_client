<template>
  <post-header :isAuthor="isAuthor"></post-header>
  <div class="loading" v-if="isLoading">加载中。。。</div>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <author-info :author="author" :isFollowing="isFollowing"></author-info>
    <div class="content" v-html="post.content"></div>
    <post-comment :postComments="postComments"></post-comment>
    <post-tab-bar :postId="post.id" @commentSuccess="commentSuccess"></post-tab-bar>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getPostDetail } from "network/post.js";
import { getPostComments } from "network/comment.js";
import marked from "marked";
import PostHeader from "./PostHeader.vue";
import AuthorInfo from "./AuthorInfo.vue";
import PostComment from "./PostComment.vue";
import PostTabBar from './PostTabBar.vue'

export default {
  components: {
    PostHeader,
    AuthorInfo,
    PostComment,
    PostTabBar,
  },
  setup() {
    const route = useRoute();
    const pid = route.params.pid;
    const isLoading = ref(true);

    const post = reactive({
      id: "",
      title: "",
      content: "",
      postComments: [],
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

      post.id = pid
      post.title = data.title;
      post.content = marked(data.content);
      isLoading.value = false;
    };

    const getComments = async () => {
      const res = await getPostComments(pid);
      console.log(res.data.comments);
      post.postComments = res.data.comments;
      console.log(post.postComments, '....')
    };

    onMounted(() => {
      getPostInfo(), getComments();
    });

    const store = useStore();
    const isFollowing = computed(() => {
      return store.getters.isFollowingAuthor(author);
    });

    const isAuthor = computed(() => {
      return store.getters.isAuthor(author);
    });

    const commentSuccess = () => {
      console.log('TODO: 更新评论列表')
    }

    return {
      post,
      isLoading,
      author,
      store,
      isFollowing,
      isAuthor,
      ...toRefs(post),
      commentSuccess
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