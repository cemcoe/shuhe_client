import { createPost, updatePost } from "network/post";
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

  }
}