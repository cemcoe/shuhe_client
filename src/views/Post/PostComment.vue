<template>
  <div>
    <div class="bar">评论 ({{ postComments.length }})</div>

    <div class="comments">
      <div class="comment" v-for="comment in postComments" :key="comment._id">
        <div class="commentator">
          <div class="avatar">
            <router-link :to="'/u/' + comment.commentator._id">
              <img
                :src="
                  'https://jian.cemcoe.com/jianshu_api' +
                  comment.commentator.avatar
                "
                alt="avatar"
              />
            </router-link>
          </div>
          <div class="name">
            <router-link :to="'/u/' + comment.commentator._id">
              {{ comment.commentator.name }}
            </router-link>
          </div>
        </div>
        <div class="comment">
          <div class="content">
            {{ comment.content }}
          </div>
          <div class="comment-info">
            {{ comment.createdAt }}
          </div>
        </div>
      </div>
    </div>

    <!-- {{postComments}} -->
  </div>
</template>

<script>
export default {
  name: "PostComment",
  props: {
    postComments: {
      type: Object
    },
  },
};
</script>

<style scoped>
.comment {
  margin-bottom: 18px;
}
.commentator {
  background-color: rgb(238, 229, 229);
  height: 50px;
  display: flex;
}

.commentator img {
  height: 50px;
}

.comment .content {
  padding: 10px;
}
.comment-info {
  padding-top: 10px;
  font-size: 12px;
  color: rgb(91, 93, 95);
}
</style>