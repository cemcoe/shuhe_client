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
      <button :disabled="isLoading" @click="readySearch">
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

  <div class="key">
    你要搜索的关键词<span class="search-key"> {{ key }}</span
    >，
    {{
      isLoading ? "正在为您检索。。。" : `为您找到${searchResult.length}条数据`
    }}
  </div>

  <div class="search-result">
    <!-- 搜索结果 {{ searchResult }} -->
    <post-list :postList="searchResult"></post-list>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import useHotKey from "./useHotKey.js";
import PostList from "components/content/PostList/PostList.vue";

export default {
  name: "Search",
  components: {
    PostList,
  },
  setup() {
    const key = ref("");
    let searchInputBox = ref(null);
    // let isLoading = ref(false);
    const store = useStore();

    const searchResult = computed(() => {
      return store.state.searchResult;
    });
    const isLoading = computed(() => {
      return store.state.searchLoading;
    });

    const readySearch = () => {
      // isLoading.value = true;
      console.log("用户搜索的关键词：", key.value);
      // const res = await search(key.value);
      // state.searchResult = res.data.post;
      // 交给action处理
      store.dispatch("reqSearchResult", key);
      // isLoading.value = false;
    };

    onMounted(() => {
      // 聚焦
      console.log(searchInputBox.value);
      searchInputBox.value.focus();
    });

    const { hotKeys, hotKeyClick } = useHotKey(key, store);

    return {
      key,
      readySearch,
      searchInputBox,
      searchResult,
      hotKeys,
      hotKeyClick,
      // ...toRefs(state),
      isLoading,
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
  border: 0px;
  border-radius: 20px;
  /* margin-left: 10px; */
  box-sizing: border-box;
  font-size: 14px;
  outline-style: none;
  width: 100%;
  display: block;
  margin: 0 auto;
  background-color: rgb(247, 242, 242);
  padding: 6px;
  border-radius: 50px;
  color: rgb(161, 160, 160);
  font-size: 12px;
  letter-spacing: 2px;
  /* 缩进 */
  text-indent: 12px;
}
input::placeholder {
  color: rgb(161, 160, 160);
}

.hot-key ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
.hot-key ul li {
  list-style: none;
  background-color: #ddd;
  margin: 6px;
  padding: 6px 10px;
  border-radius: 6px;
}

.search-key {
  color: #d40;
}
</style>