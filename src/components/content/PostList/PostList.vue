<template>
  <div class="container">
    <div v-for="post in postList" :key="post._id" class="post">
      <post-item :post="post"></post-item>
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  props: {
    postList: {},
  },
  components: {
    PostItem,
  },
};
</script>