import { request } from './request'

export function createIslandPost(islandId, islandPost) {
  return request({
    method: "post",
    url: `/islands/${islandId}/islandPosts`,
    data: islandPost
  })
}
