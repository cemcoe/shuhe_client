<template>
  <cem-nav-bar title="文章" @click-left="$router.back()">
    <template #left>
      <cem-icon name="back" />
    </template>
    <template #right>
      <cem-icon name="more" />
    </template>
  </cem-nav-bar>
</template>

<script>
export default {
  name: "PostHeader",
};
</script>

<style scoped>
</style>