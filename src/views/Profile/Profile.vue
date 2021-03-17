<template>
  <cem-nav-bar title="我的"> </cem-nav-bar>
  <section v-if="loginState">
    <div class="user">
      <div class="profile" v-if="user._id">
        <div class="left">
          <router-link :to="'/u/' + user._id">
            <img :src="user.avatar" alt="avatar" />
          </router-link>
        </div>

        <div class="center">
          <router-link :to="'/u/' + user._id">
            <span class="user-name">{{ user.name }}</span>
          </router-link>
          <div class="follow">
            <router-link :to="'/u/' + user._id + '/following'">
              <span class="follower">关注 {{ user.following_count }}</span>
            </router-link>
            <router-link :to="'/u/' + user._id + '/follower'">
              <span class="follower">粉丝{{ user.follower_count }}</span>
            </router-link>

            <!-- <span class="fans">粉丝 233</span> -->
          </div>
        </div>
        <div class="right">简书创作者</div>
      </div>
      <div v-else>
        <router-link :to="'/login/'">登录</router-link>
      </div>
      <hr />

      <div class="mine">
        <ul>
          <li>
            <router-link to="/mypost">我的文章</router-link>
          </li>

          <li>我的贴子</li>
          <li>赞和收藏</li>
          <li>我的书架</li>
        </ul>
      </div>
    </div>

    <div class="cell">
      <cem-cell title="我的钱包" value="0张优惠劵" />
      <cem-cell title="活动" value="内容" />
      <cem-cell title="每日任务" value="内容" />
      <cem-cell title="我的小岛/专题/文集" value="内容" />
      <cem-cell title="浏览历史" value="内容" />
      <cem-cell title="开启夜间模式" value="内容" />
      <cem-cell title="设置" value="内容" />
      <cem-cell title="帮助与反馈" value="内容" label="有问题找这里" />
    </div>

    <div>
      <cem-button type="danger" v-if="user._id" @click="signout"
        >退出登录</cem-button
      >

      <div v-if="user._id">
        <router-link :to="'/reset/' + user._id">更新用户信息</router-link>
      </div>
    </div>
  </section>

  <section v-else>
    用户未登录展示
    <router-link to="/login">请登录</router-link>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore, mapState } from "vuex";
export default {
  setup() {
    const store = useStore();
    const loginState = computed(() => {
      return store.state.token ? true : false;
    });

    const user = computed(() => {
      return store.state.user;
    });

    const signout = () => {
      store.commit("signout");
    };

    return {
      loginState,
      user,
      signout,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.user {
  width: 90%;
  margin: 10px auto;
  box-shadow: 0px 0px 10px rgb(223, 217, 217);
  padding: 16px;
  border-radius: 6px;
}
.profile {
  display: flex;
  padding-bottom: 10px;
}
.left {
  width: 50px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
  font-size: 12px;
}

.user-name {
  font-size: 16px;
  font-weight: 300;
  font-size: 12px;
}

.follower {
  padding-right: 10px;
}

.right {
  width: 60px;
  color: #f40;
  font-size: 12px;
}

.mine {
  padding-top: 10px;
}
.mine ul {
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: repeat(4, 25%);
  text-align: center;
}
</style>