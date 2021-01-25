<template>
  <following-user
    :followingUsers="followingUsers"
    :imgBaseUrl="imgBaseUrl"
  ></following-user>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FollowingUser from "./FollowingUser";
export default {
  components: {
    FollowingUser,
  },
  setup() {
    const store = useStore();

    const followingUsers = computed(() => store.state.followingUsers);
    const imgBaseUrl = computed(() => store.state.imgBaseUrl);

    return {
      followingUsers,
      imgBaseUrl,
    };
  },
};
</script>

<style>
</style>