<template>
  <div v-if="isLoading" class="loading">加载中。。。</div>
  <div v-else>
    <p>{{ user.name }}</p>
    <post-list :postList="postList"></post-list>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from "vue";
import { useRoute } from "vue-router";
import { getUserInfo, getUserPosts } from "network/user.js";
import PostList from "components/content/PostList/PostList.vue";

export default {
  components: {
    PostList,
  },
  setup() {
    const route = useRoute();
    const uid = route.params.uid;

    const state = reactive({
      user: {
        name: "",
      },
      postList: [],
      isLoading: true,
    });

    onMounted(async () => {
      const res = await getUserInfo(uid);
      const user = res.data.user;

      const result = await getUserPosts(uid);
      state.postList = result.data;

      state.user = user;
      state.isLoading = false;
    });

    return {
      uid,
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>