import { reactive } from 'vue'

export default function useHotKey(key, store) {
  const hotKeys = reactive(["你", "我", "他", "震惊", "cemcoe"]);

  const hotKeyClick = (hotkey) => {
    console.log("ss", hotkey);
    // 搜索框改为热词
    key.value = hotkey;
    // TODO触发搜索
    store.dispatch("reqSearchResult", hotkey)
  };

  return {
    hotKeys,
    hotKeyClick,
  };
};