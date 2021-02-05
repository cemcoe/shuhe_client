import axios from 'axios'
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` || ''
// 当token变化时不能及时更改，只有刷新页面时才行

// 多环境配置
let apiUrl = 'https://jian.cemcoe.com/jianshu_api'

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000, // 设置超时时间10s
  })
  // 2. 请求拦截器，添加jwt token

  instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}` || ''
    // 每个请求都重新设置有点耗费资源，一般token发生改变会是换账号登录，或token过期，可能会有更好的方案。
    console.log('interceptors.request', config)
    return config
  }, error => {
    console.log(error)
  })
  // 3. 响应拦截
  instance.interceptors.response.use(res => {
    console.log('interceptors.response', res)
    return res.data
  }, error => {
    console.log('interceptors.response', error)
    return Promise.reject(error.response.data);
  })
  // 4. 发送真正的网络请求
  return instance(config)
}