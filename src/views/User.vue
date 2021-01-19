<template>
  <p>{{ user.name }}</p>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getUserInfo } from "network/user.js";

export default {
  setup() {
    const route = useRoute();
    const uid = route.params.uid;

    const state = reactive({
      user: {
        name: "",
      },
    });

    onMounted(async () => {
      const res = await getUserInfo(uid);
      const user = res.data.user;

      state.user = user;
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