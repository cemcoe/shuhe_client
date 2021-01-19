<template>
  <div class="home">
    home
    <cem-button type="warning">button</cem-button>
    <post-list :postList="postList"></post-list>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, reactive, toRefs } from "vue";
import { getHomePostList } from "network/post.js";
import PostList from "components/content/PostList/PostList.vue";

export default {
  name: "Home",
  setup() {
    const state = reactive({
      postList: [],
    });

    onMounted(async () => {
      const res = await getHomePostList();
      console.log(res);
      state.postList = res.data.post;
    });

    return {
      ...toRefs(state),
      // 对响应式对象 state 使用扩展运算符后，其内部属性就失去了响应性
    };
  },
  components: {
    PostList,
  },
};
</script>
