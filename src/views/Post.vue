<template>
  <p>pid : {{ pid }}</p>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const pid = route.params.pid;

    return {
      pid,
    };
  },
};
</script>

<style>
</style>