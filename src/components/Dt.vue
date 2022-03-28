<template>
  <div class="container">
    <div class="nav-t">
      <p><span class="dt">动态</span><span class="xx">消息</span></p>
    </div>
    <div class="t-right">
      <span>
        <van-icon name="setting-o" />
      </span>
    </div>
    <div class="c-conter">
      <div class="c-left">
        <img src="../assets/9.png" alt="" />
      </div>
      <div class="c-center">
        <p class="c-p"><span>超话社区、圈内扒婆</span>等38人</p>
        <p class="c-b">也关注了超话<span>易烊千玺超话</span></p>
        <div class="c-f">
          <img src="../assets/15.png" alt="" />
          <p class="cf-p">11:35</p>
          <p class="cf-r">···</p>
        </div>
      </div>
      <div class="c-right">
        <img src="../assets/14.png" alt="" />
      </div>
    </div>
    <div class="c-conter">
      <div class="c-left">
        <img src="../assets/10.png" alt="" />
      </div>
      <div class="c-center">
        <p class="c-p">视频号<span>怡佃蜂蜜礼记</span>更新了</p>
        <div class="cente">
          <div class="cen-l">
            <img src="../assets/5.png" alt="" />
          </div>
          <div class="cen-r">
            <p>【桂圆汤年糕&视</p>
            <p class="c-c">频教程</p>
            <p class="c-b">1万次观看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="c-footer">
      <img src="../assets/15.png" alt="" />
      <p class="f-p">11:35</p>
      <p class="f-r">···</p>
    </div>
    <div class="c-conter">
      <div class="c-left">
        <img src="../assets/11.png" alt="" />
      </div>
      <div class="c-center">
        <p class="c-p">视频号<span>吞一口大瓜</span>更新了</p>
        <div class="cente">
          <div class="cen-l">
            <img src="../assets/6.png" alt="" />
          </div>
          <div class="cen-r">
            <p>刘星小时候许的心</p>
            <p class="c-c">愿现在都实现</p>
            <p class="c-b">2万次观看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="c-footer">
      <img src="../assets/15.png" alt="" />
      <p class="f-p">11:35</p>
      <p class="f-r">···</p>
    </div>
    <div class="c-conter">
      <div class="c-left">
        <img src="../assets/12.png" alt="" />
      </div>
      <div class="c-center">
        <p class="c-p">视频号<span>怡佃蜂蜜礼记</span>更新了</p>
        <div class="cente">
          <div class="cen-l">
            <img src="../assets/7.png" alt="" />
          </div>
          <div class="cen-r">
            <p>怡佃实验室|</p>
            <p class="c-c">【鲜奶红枣雪梨...</p>
            <p class="c-b">29万次观看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="c-footer">
      <img src="../assets/15.png" alt="" />
      <p class="f-p">11:35</p>
      <p class="f-r">···</p>
    </div>
    <div class="c-conter">
      <div class="c-left">
        <img src="../assets/13.png" alt="" />
      </div>
      <div class="c-center">
        <p class="c-p">视频号<span>凯瑟琳大五</span>更新了</p>
        <div class="cente">
          <div class="cen-l">
            <img src="../assets/8.png" alt="" />
          </div>
          <div class="cen-r">
            <p>2019，那些人生中</p>
            <p class="c-c">的第一次</p>
            <p class="c-b">67万次观看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="c-footer">
      <img src="../assets/15.png" alt="" />
      <p class="f-p">11:35</p>
      <p class="f-r">···</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dt",
  components: {},
};
</script>

<style scoped>
.nav-t {
  width: 7.5rem;
  height: 1.61rem;
  background: #fafafa;
  display: flex;
}
.nav-t p {
  font-size: 0.3rem;
  line-height: 1.61rem;
  justify-content: space-around;
  margin-left: -0.8rem;
}
.nav-t p .xx {
  /* position: absolute; */
  display: block;
  margin-left: 5.5rem;
  margin-top: -1.6rem;
}
.nav-t p .dt {
  display: block;
  margin-left: 3.5rem;
}
.t-center {
  width: 100%;
  height: 1.5rem;
  position: relative;
  background: #fafafa;
  margin-top: -0.35rem;
}
.t-center p {
  position: absolute;
  font-size: 0.35rem;
  line-height: 1rem;
  margin-left: 2.5rem;
  margin-top: 0.5rem;
}
.t-center .t-cleft {
  margin-left: 0.9rem;
}
.t-top .t-left p {
  position: absolute;
  font-size: 0.35rem;
  line-height: 1.5rem;
  /* font-family:'华文行楷'; */
  margin-left: 0.35rem;
}
.t-right span {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  border-radius: 50%;
  position: relative;
  margin-left: 5rem;
  margin-top: -0.7rem;
}
.t-right .icon {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  text-align: center;
  margin-left: 0.02rem;
}
.t-right i {
  font-size: 0.5rem;
  position: absolute;
  margin-left: 1.6rem;
  margin-top: -0.3rem;
}
.c-conter {
  width: 7.5rem;
  height: 2.61rem;
  /* background: red; */
  position: relative;
}
.c-left img {
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  margin: 0.35rem 0 0 0.35rem;
}
.c-center p {
  display: block;
  position: absolute;
  font-size: 0.3rem;
  margin-left: 1.5rem;
  margin-top: 0.3rem;
}
.c-center p span {
  color: #62789d;
}
.c-center .c-b {
  position: absolute;
  margin-top: 0.9rem;
}
.c-right img {
  width: 1.76rem;
  height: 0.85rem;
  position: absolute;
  left: 5.56rem;
  top: 0.3rem;
}
.cente {
  width: 5.5rem;
  height: 1.6rem;
  position: absolute;
  margin-left: 1.5rem;
  margin-top: 1rem;
}
.cente img {
  width: 3rem;
  height: 1.6rem;
  display: block;
}
.cente .cen-r {
  width: 2.5rem;
  height: 1.6rem;
  /* border:1px solid aqua; */
  background: #f8f8f8;
  display: block;
  margin-top: -1.6rem;
  margin-left: 3rem;
}
.cente .cen-r p {
  display: block;
  font-size: 0.25rem;
  margin-left: 0.1rem;
  text-align: center;
}
.cente .cen-r .c-c {
  margin-top: 0.7rem;
}
.cente .cen-r .c-b {
  margin-top: 1.1rem;
}
.c-footer img {
  width: 0.36rem;
  height: 0.3rem;
  position: absolute;
  display: block;
  margin-left: 1.5rem;
}
.c-footer .f-p {
  display: block;
  margin-left: 2.2rem;
  margin-top: 0.5rem;
  font-size: 0.3rem;
}
.c-footer .f-r {
  font-size: 0.5rem;
  display: block;
  margin-left: 6.5rem;
  margin-top: -0.5rem;
}
.c-f img {
  width: 0.36rem;
  height: 0.3rem;
  position: absolute;
  display: block;
  margin-left: 1.5rem;
  margin-top: 2.2rem;
}
.c-f .cf-p {
  position: absolute;
  display: block;
  margin-left: 2.2rem;
  margin-top: 2.2rem;
  font-size: 0.3rem;
}
.c-f .cf-r {
  position: absolute;
  display: block;
  margin-left: 6.5rem;
  margin-top: 2.1rem;
  font-size: 0.3rem;
  font-size: 0.5rem;
}
</style>
