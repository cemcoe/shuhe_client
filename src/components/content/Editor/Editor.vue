<template>
  <editor-header
    :isNewPost="isNewPost"
    @goBack="goBack"
    @preview="preview"
    @publish="publish"
    @update="update"
    :wordcount="wordcount"
  ></editor-header>

  <div class="preview" v-show="isPreview">
    <div v-html="previewContent"></div>
  </div>

  <div class="editor" v-show="!isPreview">
    <div class="content">
      <input v-model="title" type="text" id="title" placeholder="请输入标题" />
      <textarea
        v-model="content"
        name="post"
        id="post"
        placeholder="请输入正文"
      ></textarea>
    </div>

    <editor-pannel @insert="insert"></editor-pannel>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";

import usePost from "./usePost.js";
import useInsertText from "./useInsertText.js";
import EditorHeader from "./EditorHeader.vue";
import EditorPannel from "./EditorPannel.vue"
export default {
  name: "CemEditor",
  props: {
    post: {
      type: Object,
      title: {
        type: String,
      },
      content: {
        type: String,
      },
    },
  },
  components: {
    EditorHeader,
    EditorPannel,
  },
  emits: ["routeLeave"], // this line
  // https://stackoverflow.com/questions/64220737/vue-3-emit-warning-extraneous-non-emits-event-listeners
  setup(props, content) {
    const state = reactive({
      title: "",
      content: "",

      status: 1,
      wordcount: 0,
      isPreview: false,
      previewContent: "",
    });

    state.title = props.post.title;
    state.content = props.post.content;

    const router = useRouter();

    watch(
      () => state.content,
      (newContent) => {
        console.log(newContent.length);
        state.wordcount = newContent.length;
      }
    );

    const { publish, preview, isNewPost, update } = usePost(state);

    const goBack = () => {
      // 如果在预览状态下点击，则切换为编辑状态
      // 如果是编辑状态，则路由切换
      if (state.isPreview) {
        state.isPreview = false;
      } else {
        router.back();
      }
    };

    const insert = (value) => {
      console.log("insert", value);
      const dom = document.querySelector("#post");
      useInsertText(dom, value);
    };

    // 路由拦截
    onBeforeRouteLeave(() => {
      const answer = window.confirm("嗨伙计，你确定不再需要本页的数据了!");
      if (answer) {
        content.emit("routeLeave");
      } else {
        return false;
      }
    });

    return {
      ...toRefs(state),
      preview,
      publish,
      goBack,
      insert,
      isNewPost,
      update,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.content {
  margin-top: 44px;
  margin-bottom: 49px;
  /* overflow-y: scroll; */
}

.content #title {
  outline: 0 none;
  border: none !important;
  font-size: 20px;
  padding: 8px;
}

::-webkit-input-placeholder {
  color: #ccc;
}

.content #post {
  outline: 0 none;
  border: none !important;
  width: 100%;
  height: 100%;
  resize: none;
  height: calc(100vh - 200px);
  /* 剪掉头和尾以及title高度 */
  padding: 8px;
  box-sizing: border-box;
}

.preview {
  margin-top: 44px;
}
</style>