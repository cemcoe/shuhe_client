<template>
  <div class="container">
    <div class="background"></div>
    <div class="user">
      <!-- 用户信息 -->

      <div class="user-info">
        <!-- {{user._id}} -->

        <div class="top">
          <div class="avatar">
            <img :src="userInfo.avatar" alt="avatar" />
          </div>
          <div class="info">
            <cem-button type="primary">简信</cem-button>

            <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
            <cem-button
              type="primary"
              v-if="!isFollowingAuthor"
              @click="followingUser"
            >
              关注</cem-button
            >
            <cem-button type="primary" v-else @click="unfollowingUser"
              >取消关注</cem-button
            >

            <cem-button type="primary">礼物</cem-button>
          </div>
        </div>

        <div class="name">
          <span>{{ userInfo.name }}</span>
        </div>
        <div class="bio">
          {{ userInfo.bio }}
        </div>
        <div class="follow">
          <router-link :to="'/u/' + userInfo._id + '/following'">
            <span class="follower">关注{{ userInfo.following_count }}</span>
          </router-link>

          |

          <router-link :to="'/u/' + userInfo._id + '/follower'">
            <span class="follower">粉丝{{ userInfo.follower_count }}</span>
          </router-link>
        </div>
      </div>
      <hr />
      <div>简书创作者 | 日更达人</div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();
    const followingUser = () =>
      store.dispatch("followingUser", props.userInfo._id);

    const unfollowingUser = () => {
      store.dispatch("unfollowingUser", props.userInfo._id);
    };

    const isFollowingAuthor = computed(() =>
      store.getters.isFollowingAuthor(props.userInfo)
    );
    return {
      followingUser,
      isFollowingAuthor,
      unfollowingUser,
    };
  },
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 30vw;
  background-color: rgb(235, 224, 235);
  margin: 0;
  padding: 0;
}
.user {
  padding: 10px;
}

.top {
  display: flex;
  justify-content: space-between;
}
.avatar {
  margin-top: -51px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 6px solid #fff;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.bio {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  color: rgb(56, 58, 59);
}

.info {
  display: flex;
}
</style>