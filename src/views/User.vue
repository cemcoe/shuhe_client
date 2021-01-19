<template>
  <p>uid: {{ uid }}</p>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const uid = route.params.uid;

    return {
      uid,
    };
  },
};
</script>

<style>
</style>