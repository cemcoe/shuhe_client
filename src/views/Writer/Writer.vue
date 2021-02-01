<template>
  <div class="loading" v-if="isLoading">加载中。。。</div>
  <div v-else>
    <textarea
      v-model="content"
      name="post"
      id="post"
      placeholder="请输入正文"
    ></textarea>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, reactive, onMounted, toRefs } from "vue";
import { getPostDetail } from "network/post.js";
export default {
  setup() {
    const route = useRoute();
    const { pid } = route.params;

    const post = reactive({
      title: "",
      content: "",
    });
    const isLoading = ref(true);

    const getPostInfo = async () => {
      const res = await getPostDetail(pid);
      const data = res.data.post;
      console.log(data);

      post.title = data.title;
      post.content = data.content;
      isLoading.value = false;
    };

    onMounted(getPostInfo());

    return {
      isLoading,
      ...toRefs(post),
    };
  },
};
</script>

<style>
</style>