<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="catchList">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <main-tab-bar
    v-if="$route.meta.showFooter"
    class="main-tab-bar"
  ></main-tab-bar>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
  setup() {
    // 缓存一级页面，不缓存文章详情页面
    const catchList = ["Home", "Following", "Island", "Message", "Profile"];
    return {
      catchList,
    };
  },
};
</script>

<style>
</style>