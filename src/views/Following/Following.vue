<template>
  <cem-nav-bar title="关注"> </cem-nav-bar>
  <following-user
    :followingUsers="followingUsers"
    :imgBaseUrl="imgBaseUrl"
  ></following-user>
  <div v-if="isLoading" class="loading">
    <cem-loading></cem-loading>
  </div>
  <post-list :postList="postList"></post-list>
</template>

<script>
import { computed, onMounted, reactive, toRefs, ref } from "vue";
import { useStore } from "vuex";
import FollowingUser from "./FollowingUser";
import { listfollowingUser } from "network/user";
import PostList from "components/content/PostList/PostList.vue";

export default {
  name: "Following",
  components: {
    FollowingUser,
    PostList,
  },
  setup() {
    const store = useStore();

    const followingUsers = computed(() => store.state.followingUsers);
    const imgBaseUrl = computed(() => store.state.imgBaseUrl);
    const state = reactive({
      postList: [],
    });
    const isLoading = ref(true)

    onMounted(async () => {
      const res = await listfollowingUser(store.state.user._id, "posts");
      state.postList = res.data.postList;
      isLoading.value = false
    });

    return {
      followingUsers,
      imgBaseUrl,
      ...toRefs(state),
      isLoading,
    };
  },
};
</script>

<style>
</style>