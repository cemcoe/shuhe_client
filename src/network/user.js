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


