<template>
  <div class="container">
    <div class="panel">
      <a
        href="javascript:;"
        v-show="type === 'login'"
        @click="type = 'register'"
        >登录|去注册</a
      >
      <a
        href="javascript:;"
        v-show="type === 'register'"
        @click="type = 'login'"
        >注册|去登录</a
      >
    </div>

    <div>
      <form>
        <div class="username">
          <label for="username">用户名</label>
          <input v-model="name" id="username" type="text" />
        </div>
        <div class="password">
          <label for="password">密码</label>
          <input id="password" v-model="password" type="password" />
        </div>
        <div class="sigin">
          <button
            class="sign-in-button"
            type="button"
            @click="btnClick"
            :disabled="!rightUserNameAndPass"
          >
            <span id="sign-in-loading"></span>
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
const axios = require("axios");
import { login, register } from "network/user";

export default {
  setup() {
    const state = reactive({
      name: "",
      password: "",
      type: "login", // 默认展示登录对话框
      disable: true,
    });

    const loginClick = () => {
      // 按钮不可点击，并提示
      state.disable = false;

      login(state.name, state.password).then((res) => {
        console.log(res);

        if (res.status === 200) {
          console.log("成功");
        } else if (res.status === 401) {
          console.log("失败");
          state.password = "";
          state.disable = true;
        }
      });
    };

    const registerClick = () => {
      // 按钮不可点击，并提示
      state.disable = false;

      register(state.name, state.password).then((res) => {
        if (res.status === 200) {
          state.type = "login";
          state.disable = true;
        } else if (res.status === 409) {
          console.log("失败");
          state.disable = true;
        }
      });
    };

    const btnClick = () => {
      console.log("处理函数", state.type);
      if (state.type === "login") {
        loginClick();
      } else if (state.type === "register") {
        registerClick();
      }
    };

    // 前端检查是否符合规范
    const rightUserNameAndPass = computed(
      () => state.name && state.password && state.disable
    );

    const buttonText = computed(() => {
      // 语义化
      if (state.disable && state.type === "login") {
        return "登录";
      } else if (state.disable && state.type === "register") {
        return "注册";
      } else {
        return "loading";
      }
    });

    return {
      ...toRefs(state),
      loginClick,
      register,
      btnClick,
      rightUserNameAndPass,
      buttonText,
    };
  },
};
</script>

<style scoped>
.container {
  min-width: 300px;
  /* background-color: #000; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  line-height: 28px;
}

label {
  display: inline-block;
  width: 60px;
}

input {
  border: 1px solid #000;
}
</style>