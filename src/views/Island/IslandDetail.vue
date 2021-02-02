<template>
  <div>
    <header>
      <button @click="$router.back()">返回</button>
    </header>
    <div class="island-info">{{ island.name }} === {{ island.abstract }}</div>

    <div class="create">
      <form>
        <label for="content">帖子</label>
        <input id="content" v-model="islandPost" type="text" />
      </form>
      <button @click="createNewIslandPost">创建新帖子</button>
    </div>

    <div class="container">
      <!-- todo: 将帖子列表抽成组件 -->
      <div class="post" v-for="post in islandPostList" :key="post._id">
        <router-link class="author" :to="'/u/' + post.author._id">
          <img
            class="avatar"
            :src="$store.state.imgBaseUrl + post.author.avatar"
            alt="author"
          />
          <span class="info">
            <span class="name">{{ post.author.name }}</span>
            <span class="date"> {{ post.createdAt }}</span>
          </span>
        </router-link>

        <div class="content">
          {{ post.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getIslandDetail, getCurrentIslandPostList } from "network/island";
import { createIslandPost } from "network/islandPost";

export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      island: {},
      islandPost: "",
      islandPostList: [],
    });

    const getDetail = async () => {
      const res = await getIslandDetail(route.params.islandId);
      console.log(res);
      state.island = res.data.island;
    };

    const getIslandPostList = async () => {
      const res = await getCurrentIslandPostList(route.params.islandId);
      console.log(res);
      state.islandPostList = res.data.islandPost;
    };

    onMounted(() => {
      getDetail(), getIslandPostList();
    });

    const createNewIslandPost = async () => {
      const islandPost = {
        content: state.islandPost,
      };
      const res = await createIslandPost(route.params.islandId, islandPost);
      if (res.status === 200) {
        console.log("帖子创建成功");
        state.islandPost = "";
      }
    };

    return {
      ...toRefs(state),
      createNewIslandPost,
    };
  },
};
</script>

<style scoped>
input {
  border: 1px solid #000;
}

.container {
  background-color: rgb(243, 239, 239);
  font-size: 12px;
}

.post {
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
}

.author img {
  width: 30px;
  height: 30px;
}

.author {
  display: flex;
}

.info {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>