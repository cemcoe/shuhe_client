import { request } from './request'

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

