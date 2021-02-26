<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <cem-icon :theme="theme" name="home"></cem-icon>
      </template>

      <template v-slot:item-icon-active>
        <cem-icon :theme="theme" name="home"></cem-icon>
      </template>

      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/following">
      <template v-slot:item-icon>
        <cem-icon :theme="theme" name="following"></cem-icon>
      </template>

      <template v-slot:item-icon-active>
        <cem-icon :theme="theme" name="following"></cem-icon>
      </template>

      <template v-slot:item-text>
        <div>关注</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/island">
      <template v-slot:item-icon>
        <cem-icon :theme="theme" name="island"></cem-icon>
      </template>

      <template v-slot:item-icon-active>
        <cem-icon :theme="theme" name="island"></cem-icon>
      </template>

      <template v-slot:item-text>
        <div>小岛</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/message">
      <template v-slot:item-icon>
        <cem-icon :theme="theme" name="message"></cem-icon>
      </template>

      <template v-slot:item-icon-active>
        <cem-icon :theme="theme" name="message"></cem-icon>
      </template>

      <template v-slot:item-text>
        <div>消息</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <cem-icon :theme="theme" name="profile"></cem-icon>
      </template>

      <template v-slot:item-icon-active>
        <cem-icon :theme="theme" name="profile"></cem-icon>
      </template>

      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "components/common/TabBar/TabBarItem";
import TabBar from "components/common/TabBar/TabBar";

export default {
  name: "MainTabBar",
  props: {
    theme: {
      type: String,
      default: "",
    },
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
