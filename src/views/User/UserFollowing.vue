<template>
  <header>
    <cem-nav-bar title="关注" @click-left="$router.back()">
      <template #left>
        <cem-icon name="back" />
      </template>
    </cem-nav-bar>
  </header>
  <div v-if="isLoading" class="isloading">加载中。。。</div>
  <div v-else>
    <user-list :userList="userList"></user-list>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { listfollowingUser } from "network/user.js";
import UserList from "./UserList.vue";

export default {
  components: {
    UserList,
  },
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