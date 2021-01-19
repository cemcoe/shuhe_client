<template>
<div class="container">
  <div id="tab-bar">
    <slot></slot>
  </div>

</div>
  
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
.container {
  height: 49px;
}
#tab-bar {
  display: flex;
  background-color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 0 4px rgb(216, 211, 211);
}
</style>
