import {
  listfollowingUser,
  followingUser,
  unfollowingUser,
} from "network/user";
import { search } from 'network/search'

export default {
  async listfollowingUser(context) {
    const result = await listfollowingUser(context.state.user._id);
    const followingUsers = result.data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
  },
  // 关注某人
  async followingUser(context, id) {
    // 关注当前用户
    const res = await followingUser(id)
    if (res.status === 401) {
      console.log("关注失败，刷新页面");
      return;
    }
    console.log("关注成功，为您刷新数据");

    // 1. 更新用户的关注列表
    const followingUsers = (await listfollowingUser(context.state.user._id)).data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
    console.log("用户关注列表更新成功");
  },
  // 取关某人
  async unfollowingUser(context, id) {
    const res = await unfollowingUser(id)
    if (res.status === 401) {
      console.log("取消关注失败，刷新页面");
      return;
    }
    // TODO 将取消关注的用户移除state
    console.log("取消关注成功，为您刷新数据");

    // 1. 更新用户关注列表
    const followingUsers = (await listfollowingUser(context.state.user._id)).data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
    console.log("用户关注列表更新成功");
  },

  // 搜索标题和正文中含有搜索词的文章
  async reqSearchResult(context, q) {
    // 更改搜索状态
    context.commit('switch_search_status', true)
    const result = await search(q)
    console.log(result)
    // 触发mutations更改state
    if (result.status === 200) {
      const searchResult = result.data.post
      context.commit('receive_search_result', searchResult)
      context.commit('switch_search_status', false)
    } else {
      context.commit('switch_search_status', false)
      return 404
    }
  },
}