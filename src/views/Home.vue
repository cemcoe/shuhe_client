<template>
  <div class="home">
    home
    <cem-button type="warning">button</cem-button>
    <ul>
      <li v-for="post in postList" :key="post._id">
        {{ post.title }} - {{ post.author.name }} -- {{ post._id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, reactive, toRefs } from "vue";
import { getHomePostList } from "network/post.js";

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
};
</script>
