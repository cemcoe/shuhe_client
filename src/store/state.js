export default {
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
  imgBaseUrl: "https://jian.cemcoe.com/jianshu_api",
  followingUsers: JSON.parse(localStorage.getItem('followingUsers')),
  searchResult: '', // 搜索结果
  searchLoading: false,
}