<template>
  <user-header></user-header>
  <div v-if="isLoading" class="loading">
    <cem-loading></cem-loading>
  </div>
  <div v-else>
    <user-info :userInfo="user"></user-info>
    <post-list :postList="postList"></post-list>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from "vue";
import { useRoute } from "vue-router";
import { getUserInfo, getUserPosts } from "network/user.js";
import UserHeader from "./UserHeader.vue";
import PostList from "components/content/PostList/PostList.vue";
import UserInfo from "./UserInfo.vue";

export default {
  components: {
    UserHeader,
    UserInfo,
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
      user.avatar = "https://jian.cemcoe.com/jianshu_api" + user.avatar;
      console.log(user);

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