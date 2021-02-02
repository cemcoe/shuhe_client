import { request } from './request'

export function createIsland(island) {
  return request({
    method: "post",
    url: `/islands`,
    data: island,
  })
}

export function getIslandPostList() {
  return request({
    method: "get",
    url: '/islands/islandPosts',
  })
}

export function getIslandDetail(islandId) {
  return request({
    method: "get",
    url: `/islands/${islandId}`,
  })
}

export function getCurrentIslandPostList(islandId) {
  return request({
    method: "get",
    url: `/islands/${islandId}/islandPosts`,
  })
}
