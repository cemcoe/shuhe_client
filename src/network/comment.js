import { request } from './request'

// 请求文章评论
export function getPostComments(postId) {
  return request({
    method: "get",
    url: `/posts/${postId}/comments`
  })

}

// 创建文章评论
export function createPostComment(postId, content) {
  return request({
    method: "post",
    url: `/posts/${postId}/comments`,
    data: {
      content
    }
  })
}