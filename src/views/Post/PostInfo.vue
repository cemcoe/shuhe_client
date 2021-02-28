<template>
  <div class="info">
    <div class="left">
      <span>字数 {{ postInfo.wordcount }} - </span>
      <span>阅读 {{ postInfo.viewcount }}</span>
    </div>
    <div class="right">
      {{ postInfo.createdAt }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postInfo: {},
  },
};
</script>

<style scoped>
.info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(39, 40, 41, 0.6);
  padding: 10px;
  position: relative;
}
.info::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgb(0, 0, 0);
  transform: scaleY(0.5);
}
</style>