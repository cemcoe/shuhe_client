<template>
  <router-view/>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar.vue"
export default {
  name: "App",
  components: {
    MainTabBar
  }

}
</script>

<style>

</style>