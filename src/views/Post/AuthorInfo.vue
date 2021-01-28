<template>
  <div class="container">
    <div class="author-info">
      <div class="info-item avatar">
        <router-link :to="'/u/' + author._id">
          <img :src="author.avatar" alt="avatar"
        /></router-link>
      </div>
      <div class="info-item username">
        <router-link :to="'/u/' + author._id">{{ author.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  props: {
    author: {
      type: Object,
      _id: {
        type: String,
      },
      avatar: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.container {
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  align-items: center;
}

.author-info,
.follow {
  flex: 1;
}

.author-info {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.author-info .username a {
  color: #000;
  font-size: 14px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(226, 217, 217);
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* padding-right: 10px; */
}
.username {
  padding-left: 10px;
}

.follow {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  width: 80px;
  padding: 6px 8px;
}
</style>