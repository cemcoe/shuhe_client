import { request } from './request'

/**
 * Create New Post
 * @param {object} post
 */
export function createPost(post) {
  return request({
    // 传一个对象过来，以后如果添加字段时就简单了
    method: "post",
    url: '/posts',
    data: post,
  })
}


/**
 * Request Home Post List
 * @param {number} page
 * @param {number} per_page
 */
export function getHomePostList(page = 1, per_page = 10) {
  return request({
    method: "get",
    url: '/posts',
    params: {
      page,
      per_page,
    }
  })
}

/**
 * Request Post Detail
 * @param {number} id
 */
export function getPostDetail(id) {
  return request({
    method: "get",
    url: `/posts/${id}`,
  })
}

/**
 * Update Post
 * @param {number} id
 */
export function updatePost(post, id) {
  return request({
    method: "patch",
    url: `/posts/${id}`,
    data: post,
  })
}

/**
 * Update Post
 * @param {number} pid
 */
export function gotoTrash(pid) {
  const post = {
    "status": -2
  }
  return request({
    method: "patch",
    url: `/posts/${pid}`,
    data: post,
  })
}


// 将文章放到私密文件夹
export function gotoPrivate(pid) {
  const post = {
    "status": "-1"
  }
  return request({
    method: "patch",
    url: `/posts/${pid}`,
    data: post,
  })

}

// 将文章放到公开文件夹
export function gotoPublic(pid) {
  const post = {
    "status": "1"
  }
  return request({
    method: "patch",
    url: `/posts/${pid}`,
    data: post,
  })
}

