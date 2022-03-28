<template>
  <div class="container">
    <div class="nav-t">
      <div class="nav-c">
        <p>发现群</p>
        <div class="nav-center">
          <p>动态</p>
          <p>消息</p>
        </div>
        <div class="t-right">
          <span>
            <van-icon name="setting-o" />p
          </span>
        </div>
      </div>
    </div>
    <div class="from">
      <van-search
        class="search"
        v-model="value"
        show-action
        label=""
        placeholder="搜索"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch"></div>
        </template>
      </van-search>
    </div>
    <div class="bottom">
      <ul class="list">
        <li>
          <img src="../assets/1.png" alt="" />
          <p>@我的</p>
          <van-icon name="arrow" />
        </li>
        <li>
          <img src="../assets/2.png" alt="" />
          <p>评论</p>
          <van-icon name="arrow" />
        </li>
        <li>
          <img src="../assets/3.png" alt="" />
          <p>赞</p>
          <van-icon name="arrow" />
        </li>
        <li>
          <img src="../assets/4.png" alt="" />
          <p>微博安全中心</p>
          <van-icon name="arrow" />
          <span>修改密码通知</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsView",
};
</script>

<style scoped>
.nav-c {
  display: flex;
  justify-content: space-around;
}
.nav-c p {
  font-size: 0.35rem;
  line-height:1.61rem;
}
.nav-center{
    width:3.5rem;
    display: flex;
    justify-content: space-around;
}
.t-right i{
    font-size:0.5rem;
}
.from .van-search__content {
  border-radius: 0.5rem;
}
.bottom {
  width: 100%;
  position: relative;
}
.bottom ul {
  width: 100%;
  height: 100%;
  position: relative;
}
.bottom ul li {
  width: 100%;
  height: 1.7rem;
  position: relative;
}
.bottom ul li img {
  width: 1.45rem;
  height: 1.45rem;
  display: block;
  position: absolute;
  margin-left: 0.2rem;
}
.bottom ul li p {
  line-height: 0.6rem;
  position: absolute;
  display: block;
  font-size: 0.35rem;
  margin-left: 2rem;
}
.bottom ul li i {
  font-size: 0.4rem;
  color: #bababc;
  position: absolute;
  margin-left: 6.5rem;
  margin-top: 0.5rem;
}
.bottom ul li span {
  display: block;
  font-size: 0.3rem;
  position: absolute;
  margin-top: 0.9rem;
  margin-left: 2rem;
  color: #ccc;
}
</style>
