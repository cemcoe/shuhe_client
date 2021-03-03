<template>
  <div>
    <div class="follow">
      <div class="following" v-for="user in followingUsers" :key="user._id">
        <div class="item">
          <div class="left">
            <router-link :to="'/u/' + user._id">
              <img :src="imgBaseUrl + user.avatar" alt="avatar" />
            </router-link>
          </div>

          <div class="center">
            <span>
              <router-link :to="'/u/' + user._id">
                {{ user.name }}
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followingUsers: {
      type: Object,
    },
    imgBaseUrl: {
      type: String,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.follow {
  display: flex;

  overflow-y: hidden;
}
.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  flex-direction: column;
  padding: 6px;
  /* border-bottom: 1px solid rgb(207, 198, 207); */
}
.left {
  flex: 0 0 70px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 2px;
  border: 2px solid rgb(223, 77, 77);
}
</style>