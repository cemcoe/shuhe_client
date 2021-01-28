import {
  listfollowingUser,
} from "network/user";

export default {
  async listfollowingUser(context) {
    const result = await listfollowingUser(context.state.user._id);
    const followingUsers = result.data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
  },
}