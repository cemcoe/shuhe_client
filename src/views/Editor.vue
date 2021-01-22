<template>
  <header>
    <div class="left">
      <button class="item" @click="goBack">返回</button>
      <span class="item">{{ wordcount }}字</span>
    </div>
    <div class="right">
      <button class="item" @click="preview">预览</button>
      <button class="item" @click="publish">发布</button>
    </div>
  </header>

  <div class="content">
    <input v-model="title" type="text" id="title" placeholder="请输入标题" />
    <textarea
      v-model="content"
      name="post"
      id="post"
      placeholder="请输入正文"
    ></textarea>
  </div>

  <div class="pannel">
    <div class="symbols">
      <button>图片</button>
      <button>A</button>
      <button>链接</button>
      <button>#</button>
      <button>#</button>
      <button>#</button>
      <button>#</button>
    </div>
    <div class="setting">设置</div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Editor",
  setup() {
    const state = reactive({
      title: "",
      content: "",
      status: 1,
      wordcount: 0,
    });
    const router = useRouter();

    watch(
      () => state.content,
      (newContent) => {
        console.log(newContent.length);
        state.wordcount = newContent.length;
      }
    );

    const publish = () => {
      let post = {
        title: state.title,
        content: state.content,
        status: state.status,
      };

      console.log("publish", post);
    };

    const preview = () => {
      let post = {
        title: state.title,
        content: state.content,
        status: state.status,
      };

      console.log("preview", post);
    };

    const goBack = () => {
      router.back();
    };

    return {
      ...toRefs(state),
      preview,
      publish,
      goBack,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;
}

header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 44px;
  margin-bottom: 44px;
}

header .item {
  padding: 6px;
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

.pannel {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  display: flex;
  background-color: rgb(231, 221, 221);
  height: 49px;
  line-height: 49px;
  overflow: hidden;
}

.pannel .symbols button {
  margin: 8px;
}

.pannel .setting {
  position: fixed;
  right: 0px;
  bottom: 0px;
  box-shadow: -4px 0px 4px rgb(148, 143, 143);
}
</style>