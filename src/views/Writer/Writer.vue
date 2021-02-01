<template>
  <div class="loading" v-if="isLoading">加载中。。。</div>
  <div v-else>
    <cem-editor :post="post"></cem-editor>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, reactive, onMounted, toRefs } from "vue";
import { getPostDetail } from "network/post.js";
import CemEditor from "components/content/Editor/Editor.vue";
export default {
  components: {
    CemEditor,
  },
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
      post,
      ...toRefs(post),
    };
  },
};
</script>

<style>
</style>