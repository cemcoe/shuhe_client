import { reactive } from 'vue'

export default function useHotKey(key) {
  const hotKeys = reactive(["你", "我", "他", "震惊"]);

  const hotKeyClick = (hotkey) => {
    console.log("ss", hotkey);
    // 搜索框改为热词
    key.value = hotkey;
  };

  return {
    hotKeys,
    hotKeyClick,
  };
};