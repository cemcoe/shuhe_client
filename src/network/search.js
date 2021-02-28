import { request } from './request'

export function search(q) {
  return request({
    method: "get",
    url: `/posts?q=${q}`,
  })
}