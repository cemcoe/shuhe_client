<template>
  <div class="header">
    <div class="left" @click="$router.back()">
      <cem-icon name="back"></cem-icon>
    </div>
    <div class="center">
      <input
        ref="searchInputBox"
        placeholder="搜索文章专题用户文集"
        v-model="key"
      />
    </div>
    <div class="right">
      <button @click="readySearch">
        <cem-icon name="search"></cem-icon>
      </button>
    </div>
  </div>

  <div class="hot-key">
    <h3>热搜词</h3>
    <ul>
      <li v-for="hotkey in hotKeys" @click="hotKeyClick(hotkey)" :key="hotkey">
        {{ hotkey }}
      </li>
    </ul>
  </div>


</template>

<script>
import { ref, onMounted, reactive } from "vue";
import useHotKey from './useHotKey.js'

export default {
  setup() {
    const key = ref("");
    let searchInputBox = ref(null);

    const readySearch = () => {
      console.log("用户搜索的关键词：", key.value);
    };

    onMounted(() => {
      // 聚焦
      console.log(searchInputBox.value);
      searchInputBox.value.focus();
    });

    const { hotKeys, hotKeyClick } = useHotKey(key);

    return {
      key,
      readySearch,
      searchInputBox,
      hotKeys,
      hotKeyClick,
    };
  },
};
</script>

<style socped>
.header {
  display: flex;
}
.left,
.right {
  width: 40px;
  margin: 0 auto;
  text-align: center;
}
.center {
  flex: 1;
}
input {
  width: 100%;
}
</style>