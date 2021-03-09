import { createPost, updatePost, gotoPrivate } from "network/post";
import marked from "marked";
import { useRoute, useRouter } from 'vue-router'

export default function usePost(state) {

  // 判断是否是新文章
  const route = useRoute()
  const router = useRouter()
  // /editor vs /writer/:pid
  const isNewPost = route.params.pid ? false : true

  const publish = async () => {

    const post = {
      title: state.title,
      content: state.content,
      status: state.status,
    };

    // TODO
    // 如果是已经发布过的就更新
    const res = await createPost(post)
    console.log(res);
    router.replace(`/p/${res._id}`);
  }

  const update = async () => {
    const pid = route.params.pid
    const post = {
      title: state.title,
      content: state.content,
      status: state.status,
    };
    const res = await updatePost(post, pid)

    // 更新成功跳转路由
    router.replace(`/p/${pid}`);


    console.log('update', res);
  }

  const saveToPrivatePost = async () => {
    console.log('收到子组件的事件：saveToPrivatePost')
    const post = {
      title: state.title,
      content: state.content,
      status: -1,
    };

    // TODO
    // 如果是已经发布过的就更新
    if (isNewPost) {
      const res = await createPost(post)
      console.log(res);
      router.replace(`/p/${res._id}`);
    } else {
      // TODO
      // 如果是已经发布过的就更新
      // 发送更新文章请求
      gotoPrivate(route.params.pid).then((res) => {
        if (res.status === 200) {
          console.log("该篇文章已经移到了你的私密文件夹，为你跳到首页");
          // 跳到首页
          setTimeout(() => {
            router.replace(`/`);
          }, 1000);
        }
      })
    }
  }

  const preview = () => {
    state.isPreview = true;
    state.previewContent = marked(state.content);

    console.log("preview", post);
  };

  return {
    publish,
    preview,
    update,
    isNewPost,
    saveToPrivatePost,

  }
}