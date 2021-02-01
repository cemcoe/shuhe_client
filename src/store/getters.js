export default {
  isFollowingAuthor: (state) => (author) => {
    // 是否已经关注该作者
    const { followingUsers } = state
    for (let index = 0; index < followingUsers.length; index++) {
      const element = followingUsers[index];
      if (element._id === author._id) {
        // console.log(element._id)
        return true
      }
    }
    return false
  },
  // 登录用户是否是作者，如果是就添加编辑按钮
  isAuthor: state => (author) => {
    const { user } = state
    if (user._id === author._id) {
      return true
    }
    return false
  }
}