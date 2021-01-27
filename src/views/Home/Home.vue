<template>
  <cem-nav-bar title="书核"> </cem-nav-bar>

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
