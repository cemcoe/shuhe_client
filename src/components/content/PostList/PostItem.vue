<template>
  <div class="post-item">
    <router-link :to="postUrl">
      <div class="title">
        <span>{{ post.title }}</span>
      </div>
    </router-link>

    <section class="abstract">
      <!-- 文章中没有图片 -->
      <div class="no-pic" v-if="imgsLinkLength === 0">
        <router-link :to="postUrl">
          <div class="content">
            <div class="text">{{ post.abstract }}</div>
          </div>
        </router-link>
      </div>

      <!-- 文章中有一张图片 -->
      <div class="one-pic" v-if="imgsLinkLength === 1">
        <router-link :to="postUrl">
          <div class="content">
            <div class="text">
              {{ post.abstract }}
            </div>
            <img :src="imgs[0]" alt="imgs" />
            <!-- 文章中有{{imgs.length}}张图片 -->
          </div>
        </router-link>
      </div>

      <!-- 文章中的图片超过三张 -->

      <div class="more-pic" v-if="imgsLinkLength >= 3">
        <router-link :to="postUrl">
          <div class="content">
            <img v-for="img in imgs" :src="img" alt="img" />
          </div>
        </router-link>
      </div>
    </section>

    <div class="meta">
      <span>
        <router-link :to="authorUrl" class="nickname font10px">{{
          post.author.name
        }}</router-link>
      </span>

      <span class="creat-date font10px">{{ createDate }}</span>
      <span class="font10px">{{ post.viewcount }} 阅读</span>
      <span class="font10px">{{ post.commentcount }} 评论</span>
      <span class="font10px">0赞</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    post: {
      type: Object,
    },
  },
  setup(props) {
    const postUrl = computed(() => "/p/" + props.post._id);
    const authorUrl = computed(() => "/u/" + props.post.author._id);
    const createDate = computed(() => props.post.createdAt.split("T")[0]);
    const imgsLinkLength = computed(() => props.post.imgsLink.length);
    const imgs = computed(() => {
      if (props.post.imgsLink.length <= 2) {
        // 取其中一项
        return props.post.imgsLink.slice(0, 1);
      } else if (props.post.imgsLink.length >= 3) {
        // 取前三项
        return props.post.imgsLink.slice(0, 3);
      }
    });

    return {
      postUrl,
      authorUrl,
      createDate,
      imgsLinkLength,
      imgs,
    };
  },
};
</script>

<style scoped>
.post-item {
  padding: 16px 8px;
  box-sizing: content-box;
  margin-bottom: 12px;
  background-color: #fff;
}
.post-item a {
  text-decoration: none;
}
.title span {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  font-weight: 700;
}

.abstract {
  padding-top: 10px;
  padding-bottom: 10px;
}
.abstract .text {
  font-size: 14px;
  color: rgb(97, 101, 105);
  /* margin-top: 12px;
  margin-bottom: 12px; */
  line-height: 28px;
  /* 多行文本截断 */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.one-pic .content {
  display: flex;
  justify-content: space-between;
}

.one-pic .text {
  padding-right: 10px;
}

.one-pic img {
  width: 33%;
  /* padding-left: 10px; */
  border-radius: 6px;
}

.more-pic .content {
  display: flex;
  justify-content: space-between;
}
.more-pic .content img {
  width: 33%;
  border-radius: 6px;
}
.meta {
  color: #c7c4c4;
  padding-right: 12px;
  /* font-size: 12px; */
}

/* // 10px小字体 */
.font10px {
  display: inline-block;
  font-size: 12px;
  transform: scale(0.83, 0.83);
  *font-size: 10px;
}

.meta span {
  padding-right: 12px;
}
</style>