<template>
  <header>
    <div class="left">
      <button class="item" @click="goBack">返回</button>
      <span class="item">{{ wordcount }}字</span>
    </div>
    <div class="right">
      <button class="item" @click="preview">预览</button>
      <button class="item" v-if="isNewPost" @click="publish">发布</button>
      <button class="item" v-else @click="update">更新</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "EditorHeader",
  emits: ["goBack", "preview", "publish", "update"],
  props: {
    isNewPost: {
      type: Boolean,
    },
    wordcount: {
      type: Number,
    },
  },
  setup(props, content) {
    const goBack = () => {
      content.emit("goBack");
    };

    const preview = () => {
      console.log("preview click");
      content.emit("preview");
    };

    const publish = () => {
      console.log("publish click");
      content.emit("publish");
    };

    const update = () => {
      console.log("update click");
      content.emit("update");
    };

    return {
      goBack,
      preview,
      publish,
      update,
    };
  },
};
</script>

<style scoped>
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
</style>