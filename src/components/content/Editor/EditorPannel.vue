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
    <div class="setting" @click="switchMeunStatus">设置</div>
  </div>
  <ul v-show="showMenu" class="menu">
    <li @click="saveToPrivatePost">保存为私密文章</li>
    <li>待定菜单项1</li>
    <li>待定菜单项2</li>
    <li>待定菜单项3</li>
    <li>待定菜单项4</li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  name: "EditorPannel",
  emits: ["insert", "saveToPrivatePost"],
  setup(props, content) {
    const insert = (val) => {
      console.log("insert", val);
      content.emit("insert", val);
    };

    let { showMenu, switchMeunStatus, saveToPrivatePost } = useMenu(content);

    return {
      insert,
      switchMeunStatus,
      showMenu,
      saveToPrivatePost,
    };
  },
};

const useMenu = (content) => {
  let showMenu = ref(false);

  const switchMeunStatus = () => {
    console.log("你点击了设置，为你切换菜单状态");
    showMenu.value = !showMenu.value;
  };

  const saveToPrivatePost = () => {
    console.log('将文章保存为私密')
    // emit 交给主文件处理
    content.emit('saveToPrivatePost')
    
  }

  return {
    showMenu,
    switchMeunStatus,
    saveToPrivatePost,
  };
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
.menu {
  position: fixed;
  right: 0px;
  bottom: 49px;
  line-height: 30px;
  border-left: 1px solid #000;
  left: 0px;
  right: 0px;
  font-size: 14px;
}

ul {
  margin: 0;
  padding: 0;
}
.menu li {
  list-style: none;
  margin: 0;
  padding-left: 10px;
  background-color: rgb(240, 232, 232);
  border-bottom: 1px solid #000;
}
</style>