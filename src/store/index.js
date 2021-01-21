import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    imgBaseUrl: "https://jian.cemcoe.com/jianshu_api"
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
  },
  actions: {
  },
  modules: {
  }
})
