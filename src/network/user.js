import { request } from './request'

/**
 * Request User info Detail
 * @param {number} id
 */
export function getUserInfo(id) {
  return request({
    method: "get",
    url: `/users/${id}`,
  })
}

/**
 * User register
 * @param {string} name
 * @param {string} password
 */
export function register(name, password) {
  return request({
    method: "post",
    url: '/users',
    data: {
      name,
      password
    },
  })
}

/**
 * User login
 * @param {string} name
 * @param {string} password
 */
export function login(name, password) {
  return request({
    method: "post",
    url: '/login',
    data: {
      name,
      password
    },
  })
}

/**
 * listfollowingUser
 * @param {string} id
 * @param {string} type
 */
export function listfollowingUser(id, type = "users") {
  return request({
    method: "get",
    url: `/users/${id}/following`,
    params: {
      type,
    }
  })
}

/**
 * listfollower
 * @param {string} id
 */
export function listfollower(id) {
  return request({
    method: "get",
    url: `/users/${id}/followers`,
    params: {
      id
    }
  })
}

/**
 * follow author
 * @param {string} id
 */
export function followingUser(id) {
  return request({
    method: "put",
    url: `/users/following/${id}`,
    params: {
      id
    }
  })
}

/**
 * unfollow author
 * @param {string} id
 */
export function unfollowingUser(id) {
  return request({
    method: "delete",
    url: `/users/following/${id}`,
    params: {
      id
    }
  })
}

/**
 * request user public post list
 * @param {string} id
 * @param {string} status
 */
// 获取某人文章列表，默认为公开文章
export function getUserPosts(id, status = 'public') {
  return request({
    method: "get",
    url: `/users/${id}/posts`,
    params: {
      status,
    }
  })
}
