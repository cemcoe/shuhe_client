<template>
  <div>
    <header>
      <cem-nav-bar title="关注" @click-left="$router.back()">
        <template #left>
          <cem-icon name="back" />
        </template>
      </cem-nav-bar>
    </header>

    <div class="follow-item" v-for="user in userList" :key="user._id">
      <router-link :to="'/u/' + user._id"> </router-link>

      <div class="item">
        <div class="left">
          <router-link :to="'/u/' + user._id">
            <img :src="imgBaseUrl + user.avatar" alt="avatar" />
          </router-link>
        </div>

        <div class="center">
          <span>
            <router-link :to="'/u/' + user._id">
              {{ user.name }}
            </router-link>
          </span>
          <span>
            <router-link :to="'/u/' + user._id">
              {{ user.bio }}
            </router-link>
          </span>
        </div>
        <!-- 
        <div class="right">
          <cem-button type="primary"
            >取消关注{{ isFollowing(user) }}</cem-button
          >
        </div> -->

        <div class="right">
          <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
          <button v-if="!isFollowing(user)" @click="followingUser(user._id)">
            关注
          </button>
          <cem-button type="primary" v-else @click="unfollowingUser(user._id)"
            >取消关注</cem-button
          >
          <!-- <button v-else @click="unfollowingUser(user._id)">取消关注</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    userList: {},
  },
  setup() {
    const store = useStore();

    const imgBaseUrl = computed(() => store.state.imgBaseUrl);
    const isFollowing = (author) => store.getters.isFollowingAuthor(author);
    // const followingUser = () => {
    //   console.log("following");
    // };

    // const unfollowingUser = () => {
    //   console.log("unfollowing");
    // };

    const followingUser = (uid) => {
      store.dispatch("followingUser", uid);
    };
    const unfollowingUser = (uid) => {
      store.dispatch("unfollowingUser", uid);
    };

    return {
      imgBaseUrl,
      isFollowing,
      followingUser,
      unfollowingUser,
    };
  },
};
</script>

<style scoped>
.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid rgb(207, 198, 207);
}
.left {
  flex: 0 0 60px;
}
.right {
  flex: 0 0 100px;
}
.center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
}

.right {
  text-align: right;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>