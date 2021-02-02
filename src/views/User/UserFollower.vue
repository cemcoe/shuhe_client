<template>
  <div v-if="isLoading" class="isloading">加载中。。。</div>
  <div v-else>
    <user-list :userList="userList"></user-list>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { listfollower } from "network/user";
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
      const res = await listfollower(uid);
      console.log(res.data.followers);
      state.userList = res.data.followers;
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