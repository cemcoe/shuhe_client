<template>
  <div class="pannel">
    <div class="symbols">
      <button @click="insert('![]()')">图片</button>
      <button @click="insert('A')">A</button>
      <button @click="insert('[]()')">链接</button>
      <button @click="insert('# ')">#</button>
      <button @click="insert('* ')">*</button>
      <button @click="insert('- ')">-</button>
    </div>
    <div class="setting">设置</div>
  </div>
</template>

<script>
export default {
  name: "EditorPannel",
  emits: ['insert'],
  setup(props, content) {
    const insert = (val) => {
      console.log('insert', val)
      content.emit('insert', val)
    }

    return {
      insert
    }
  }
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
  margin: 12px;
}

.pannel .setting {
  position: fixed;
  right: 0px;
  bottom: 0px;
  width: 49px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  border-left: 1px solid #000;
}
</style>