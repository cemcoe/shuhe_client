<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 根据是否被点击切换不同的图片，使用时传入两种状态的图片 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- 根据是否处于被点击状态改变文字的颜色 -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const itemClick = () => {
      console.log(route.path);
      router.push(props.path);
    };

    const isActive = computed(() => route.path === props.path);

    const activeStyle = computed(() => {
      if (isActive.value) {
        return { color: "#f40" };
      } else {
        return {};
      }
    });

    return { itemClick, isActive, activeStyle };
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item >>> img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
