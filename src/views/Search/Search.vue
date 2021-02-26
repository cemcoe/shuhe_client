<template>
  <div class="header">
    <div class="left" @click="$router.back()">
      <cem-icon name="back"></cem-icon>
    </div>
    <div class="center">
      <input ref="searchInputBox" placeholder="搜索文章专题用户文集" v-model="key" />
    </div>
    <div class="right">
      <button @click="readySearch">
        <cem-icon name="search"></cem-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const key = ref("");
    let searchInputBox = ref(null)

    const readySearch = () => {
      console.log('用户搜索的关键词：', key.value);
    };

    onMounted(() => {
      // 聚焦
      console.log(searchInputBox.value)
      searchInputBox.value.focus()
    })
    return {
      key,
      readySearch,
      searchInputBox,
    };
  },
};
</script>

<style socped>
.header {
  display: flex;

}
.left, .right {
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