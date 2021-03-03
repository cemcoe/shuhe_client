<template>
  <div>
    <div class="bar">评论 ({{ postComments.length }})</div>

    <div class="comments">
      <div class="comment" v-for="comment in postComments" :key="comment._id">
        <!-- <div class="commentator">
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
        </div> -->

        <div class="left">
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
        </div>

        <div class="right">
          <router-link class="name" :to="'/u/' + comment.commentator._id">
            {{ comment.commentator.name }}
          </router-link>

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
      type: Object,
    },
  },
};
</script>

<style scoped>
/* .bar {
  padding: 10px;
  background-color: rgb(252, 246, 246);
  margin: 10px 0px;
}
.comment {
  margin-bottom: 18px;
}
.commentator {
  height: 50px;
  display: flex;
}

.commentator img {
  height: 40px;
  border-radius: 50%;
  padding-right: 10px;
}
.commentator .name {
  font-size: 12px;
}

.comment .content {
  font-size: 12px;
}
.comment-info {
  padding-top: 10px;
  font-size: 12px;
  color: rgb(91, 93, 95);
} */

.bar {
  border-top: thin solid #000;
  margin-top: 10px;
  margin-bottom: 10px;
}
.name {
  color: rgb(95, 96, 97);
  padding-bottom: 6px;
  font-size: 12px;
}
.comment {
  display: flex;
  margin-bottom: 10px;
  font-size: 10px;
}
.comment .left {
  width: 40px;
  padding-right: 10px;
}
.comment .left img {
  width: 34px;
  border-radius: 50%;
}

.comment .right {
  display: flex;
  flex-direction: column;
}

.comment .comment-info {
  font-size: 10px;
  color: rgba(106, 106, 107, 0.6);
}
</style>