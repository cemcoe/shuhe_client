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
    {{ isLoading ? "正在为您检索。。。" : `为您找到${searchResult.length}条数据` }}
  </div>

  <div class="search-result">
    <!-- 搜索结果 {{ searchResult }} -->
    <post-list :postList="searchResult"></post-list>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from "vue";
import useHotKey from "./useHotKey.js";
import PostList from "components/content/PostList/PostList.vue";
import { search } from "network/search.js";

export default {
  name: "Search",
  components: {
    PostList,
  },
  setup() {
    const key = ref("");
    let searchInputBox = ref(null);
    let isLoading = ref(false);

    const state = reactive({
      searchResult: [],
    });

    const readySearch = async () => {
      isLoading.value = true;
      console.log("用户搜索的关键词：", key.value);
      const res = await search(key.value);
      state.searchResult = res.data.post;
      isLoading.value = false;
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
      ...toRefs(state),
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
  width: 100%;
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