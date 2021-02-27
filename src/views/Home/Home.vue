<template>
  <div class="nav">
    <div @click="$router.push('/search')">多喝热水，早睡早起</div>
  </div>

  <div v-if="isLoading" class="loading">加载中。。。</div>

  <post-list :postList="postList"></post-list>

  <div class="write">
    <router-link to="/editor"> <cem-icon name="write"></cem-icon></router-link>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, reactive, toRefs, ref } from "vue";
import { getHomePostList } from "network/post.js";
import PostList from "components/content/PostList/PostList.vue";

export default {
  name: "Home",
  setup() {
    const state = reactive({
      postList: [],
    });

    const isLoading = ref(true);

    onMounted(async () => {
      const res = await getHomePostList();
      console.log(res);
      state.postList = res.data.post;
      isLoading.value = false;
    });

    return {
      ...toRefs(state),
      // 对响应式对象 state 使用扩展运算符后，其内部属性就失去了响应性
      isLoading,
    };
  },
  components: {
    PostList,
  },
};
</script>

<style scoped>
.nav div {
  margin: 6px auto;
  width: 90%;
  background-color: rgb(247, 242, 242);
  padding: 6px;
  text-align: center;
  border-radius: 50px;
  color: rgb(161, 160, 160);
  font-size: 12px;
  letter-spacing: 2px;
}

.write {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 50px;
  bottom: 80px;
  border-radius: 50%;
  /* background-color: rgb(236, 221, 221); */
  background-color: #fff;
  line-height: 40px;
  text-align: center;
  padding: 10px;
  /* box-shadow: 0 0 40px rgb(8, 8, 8); */
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
}
.write a {
  width: 100%;
  height: 100%;
  display: block;
  color: #fff;
}
</style>
