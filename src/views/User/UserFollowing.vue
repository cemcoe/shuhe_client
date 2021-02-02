<template>
  <div v-if="isLoading" class="isloading">加载中。。。</div>
  <div v-else>
    <p>
      获取用户关注列表
      {{ userList }}
    </p>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { listfollowingUser } from "network/user.js";

export default {
  setup() {
    const route = useRoute();
    const uid = route.params.uid;

    const state = reactive({
      userList: [],
      isLoading: true,
    });

    const getUserList = async () => {
      const res = await listfollowingUser(uid);
      console.log(res.data.following);
      state.userList = res.data.following;
      state.isLoading = false;
    };

    onMounted(getUserList);
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>