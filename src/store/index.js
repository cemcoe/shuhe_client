import { createStore } from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state,
  mutations,
  actions,
  getters: {
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

  },
  modules: {
  }
})
