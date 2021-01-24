import { createPost } from "network/post";
import marked from "marked";

export default function usePost(state) {

  const publish = async () => {
    const post = {
      title: state.title,
      content: state.content,
      status: state.status,
    };


    const res = await createPost(post)
    console.log(res);
  }

  const preview = () => {
    state.isPreview = true;
    state.previewContent = marked(state.content);

    console.log("preview", post);
  };

  return {
    publish,
    preview,

  }
}