<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <input type="text" v-model="content" placeholder="说点什么吧啊" />
      </div>
      <div class="right">
        <div @click="commentSubmit" class="item">
          <cem-icon name="comment"></cem-icon>
          <!-- <span>评论</span> -->
        </div>
        <!-- <div class="item">
          <cem-icon name="like"></cem-icon>
          <span>喜欢</span>
        </div>
        <div class="item">
          <cem-icon name="share"></cem-icon>
          <span>分享</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { createPostComment } from "network/comment";
import { reactive, toRefs } from 'vue';
export default {
  props: {
    postId: {
      type: String
    },
  },
  emits: ['commentSuccess'],
  setup(props, content) {
    const state = reactive({
      content: ""
    })

    const commentSubmit = async() => {
      // console.log(this.content);

      const result = await createPostComment(props.postId, state.content);
      console.log(result);
      if (result.status === 200) {
        console.log("评论创建成功，为你更新评论列表");
        state.content = ''
        content.emit('commentSuccess')

      } else {
        console.log("评论失败了耶");
      }
    }

    return {
      ...toRefs(state),
      commentSubmit,

    }

  },
};
</script>

<style scoped>
.box {
  height: 50px;
}
.container {
  height: 44px;
  /* background-color: rgb(224, 208, 208); */
  position: fixed;
  /* 文章预览zindex1500 */
  z-index: 1501;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 4px rgb(216, 211, 211);
  align-items: center;
}
.container .right {
  flex: 0 0 50px;
  display: flex;
  justify-content: space-around;

}
.container .left {
  flex: 1;
}

input {
  border: 0px;
  border-radius: 20px;
  /* margin-left: 10px; */
  box-sizing: border-box;
  padding: 6px 16px;
  font-size: 14px;

  outline-style: none;
  width: 96%;
  display: block;
  margin: 0 auto;
  background-color: rgb(245, 241, 241);
}

.right span {
  font-size: 12px;
}

.right .item {
  text-align: center;
}
</style>