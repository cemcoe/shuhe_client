export default {
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
    state.user = null;
    state.token = null;
    localStorage.clear();
  },
  // 设置用户关注列表
  receive_following_user(state, followingUsers) {
    state.followingUsers = followingUsers
    localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
  },
  // 更改搜索结果
  receive_search_result(state, result) {
    state.searchResult = result
  },
  // 更改搜索状态
  switch_search_status(state, searchLoading) {
    state.searchLoading = searchLoading
  }
}