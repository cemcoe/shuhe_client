<template>
  <cem-nav-bar
    title="文章"
    @click-left="$router.back()"
    @click-right="changeMenuStatus"
  >
    <template #left>
      <cem-icon name="back" />
    </template>
    <template #right>
      <cem-icon name="more" />
      <div class="menu" v-show="isShowMenu">
        <!-- 文章所有者 -->
        <ul v-if="isAuthor">
          <li>收藏</li>
          <li>分享</li>
          <li @click="edit">编辑</li>
          <li>收入连载</li>
          <li @click="del">删除</li>
        </ul>
        <!-- 看别人的文章 -->
        <ul v-else>
          <li>收藏</li>
          <li>分享</li>
          <li>收入专题</li>
          <li>显示模式</li>
          <li>举报</li>
        </ul>
      </div>
    </template>
  </cem-nav-bar>
  <div class="overlay" v-show="isShowMenu" @click="changeMenuStatus"></div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { gotoTrash } from "network/post.js";

const useMenu = () => {
  const isShowMenu = ref(false);

  const changeMenuStatus = () => {
    isShowMenu.value = !isShowMenu.value;
  };

  return {
    isShowMenu,
    changeMenuStatus,
  };
};

export default {
  name: "PostHeader",
  props: {
    isAuthor: {
      type: Boolean,
    },
  },
  setup() {
    const { isShowMenu, changeMenuStatus } = useMenu();

    const router = useRouter();
    const route = useRoute();
    const edit = () => {
      console.log("跳转到编辑文章界面");
      router.replace("/writer/" + route.params.pid);
    };

    const del = async () => {
      const res = await gotoTrash(route.params.pid);
      console.log(res);
      if (res.status === 200) {
        console.log("已将文章移到垃圾箱");
        router.replace("/");
      }
    };

    return {
      isShowMenu,
      changeMenuStatus,
      edit,
      del,
    };
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  right: 0;
  top: 44px;
  z-index: 3504;
  min-width: 80px;
}
.menu ul {
  padding: 0;
  margin: 0;
}
.menu li {
  line-height: 30px;
  padding: 6px;
  text-align: left;
  list-style: none;
  background-color: #fff;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2999;
  background-color: #000;
  opacity: 0.8;
}
</style>