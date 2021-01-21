<template>
  <section v-if="loginState">用户登录时展示
    {{user.name}}
  </section>

  <section v-else>用户未登录展示
    <router-link to="/login">请登录</router-link>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore, mapState } from "vuex";
export default {
  setup() {
    const store = useStore();
    const loginState = computed(() => {
      return store.state.token ? true : false;
    });

    const user = computed(() => {
      return store.state.user
    })

    return {
      loginState,
      user,
    };
  },
};
</script>

<style>
</style>