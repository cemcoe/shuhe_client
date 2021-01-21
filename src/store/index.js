import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
  },
  mutations: {
    set_token(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    set_user(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
