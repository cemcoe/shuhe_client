<template>
  <following-user
    :followingUsers="followingUsers"
    :imgBaseUrl="imgBaseUrl"
  ></following-user>
  <post-list :postList="postList"></post-list>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
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

    onMounted(async () => {
      const res = await listfollowingUser(store.state.user._id, "posts");
      state.postList = res.data.postList;
    });

    return {
      followingUsers,
      imgBaseUrl,
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>