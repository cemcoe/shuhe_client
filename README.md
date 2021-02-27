<p align="center"><a href="https://shuhe.cemcoe.com" target="_blank" rel="noopener noreferrer"><img width="100" src="./public/img/icons/android-chrome-192x192.png" alt="Vue logo"></a></p>


<h2 align="center">一个文字创作社区</h2>


预览地址：https://shuhe.cemcoe.com

开发日志：https://www.jianshu.com/nb/47900649


## 项目运行
需要先启动服务端，服务端项目地址：https://github.com/cemcoe/jianshu_server

```
git clone git@github.com:cemcoe/shuhe_client.git

cd shuhe_client

npm install

npm run serve
```



## 目录结构
- assets 静态资源 css imgs
- views 路由组件
- components 公共组件
  - common 公共组件
  - content 和业务相关的组件
- utils 功能函数
- store vuex代码
- network 网络请求相关


## 一些方案
- Vue3+axios+cemui
- UI库采用自己封装的 [cem-ui](https://www.npmjs.com/package/cem-ui)，正在不断完善中
- 接口API由 [Node后端项目](https://github.com/cemcoe/jianshu_server) 提供
- 登录注册采用 JWT 方案
- 消息推送方面采用 ajax 短轮询，计划换成 websocket
- 部分文章数据由 [狗屁不通文章生成器](https://suulnnka.github.io/BullshitGenerator/index.html) 生成，没有任何的价值，仅供展示占位使用
- icon图片等来自 [阿里巴巴矢量图标库](https://www.iconfont.cn/)，tabbar 所用 icon 图来自[这](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=29019)

## TODO
- 文章实时保存到服务器
- 消息推送 websocket
- 图片分享 canvas
