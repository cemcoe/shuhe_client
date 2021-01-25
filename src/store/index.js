import { createStore } from 'vuex'
import {
  listfollowingUser,
} from "network/user";

export default createStore({
  state: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    imgBaseUrl: "https://jian.cemcoe.com/jianshu_api",
    followingUsers: JSON.parse(localStorage.getItem('followingUsers')),
  },
  mutations: {
    set_token(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    set_user(state, user) {
      // 拿到完整的图片地址
      user.avatar = state.imgBaseUrl + user.avatar
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },
    signout(state) {
      state.user = {};
      state.token = '';
      localStorage.clear();
    },
    // 设置用户关注列表
    receive_following_user(state, followingUsers) {
      state.followingUsers = followingUsers
      localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
    },
  },
  actions: {
    async listfollowingUser(context) {
      const result = await listfollowingUser(context.state.user._id);
      const followingUsers = result.data.following
      // 触发mutations更改state
      context.commit('receive_following_user', followingUsers)
    },

  },
  modules: {
  }
})
