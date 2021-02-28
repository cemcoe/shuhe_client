import { reactive } from 'vue'

export default function useHotKey(key) {
  const hotKeys = reactive(["你", "我", "他", "震惊"]);

  const hotKeyClick = (hotkey) => {
    console.log("ss", hotkey);
    // 搜索框改为热词
    key.value = hotkey;
    // TODO触发搜索
    
  };

  return {
    hotKeys,
    hotKeyClick,
  };
};