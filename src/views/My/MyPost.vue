<template>
  <div>
    <cem-nav-bar title="我的文章" @click-left="$router.back()">
      <template #left>
        <cem-icon name="back" />
      </template>
    </cem-nav-bar>

    <div class="tabcontrol">
      <div
        v-for="tab in tabs"
        @click="changeStatus(tab)"
        :key="tab.id"
        :class="{ on: tab.status === status }"
      >
        {{ tab.title }}
      </div>
    </div>

    <hr />

    <div class="content" v-if="publicPost.length">
      <div class="public" v-show="status === 'public'">
        <post-list :postList="publicPost"></post-list>
      </div>

      <div class="private" v-show="status === 'private'">
        <post-list :postList="privatePost"></post-list>
      </div>
    </div>

    <div v-else>加载中。。。</div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import PostList from "components/content/PostList/PostList";
import { getUserPosts } from "network/user";

export default {
  components: {
    PostList,
  },
  setup() {
    const state = reactive({
      publicPost: [],
      privatePost: [],
      status: "public",
      tabs: [
        { id: 1, title: "公开文章", status: "public" },
        { id: 2, title: "私密文章", status: "private" },
      ],
    });

    const store = useStore();

    const getPublicPosts = async (uid) => {
      const res = await getUserPosts(uid, "public");
      state.publicPost = res.data;
    };

    const getPrivatePosts = async (uid) => {
      const res = await getUserPosts(uid, "private");
      state.privatePost = res.data;
    };

    const changeStatus = (tab) => {
      if (state.status === tab.status) {
        return;
      }
      state.status = tab.status;
      console.log(state.status);
    };

    onMounted(() => {
      const uid = store.state.user._id;
      getPublicPosts(uid);
      getPrivatePosts(uid);
    });

    return {
      ...toRefs(state),
      getPublicPosts,
      getPrivatePosts,
      changeStatus,
    };
  },
};
</script>

<style scoped>
.tabcontrol {
  margin-top: 10px;
  display: flex;
}
.tabcontrol div {
  flex: 1;
  text-align: center;
  line-height: 20px;
}
.tabcontrol .on {
  color: #f40;
}

.content .on {
  background-color: #666;
}
</style>