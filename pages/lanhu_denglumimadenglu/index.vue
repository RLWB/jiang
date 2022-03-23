<template>
  <div class="page flex-col">
    <div class="main1 flex-row justify-between">
      <div class="block1 flex-col">
        <div class="mod1 flex-col">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
        </div>
        <img
          class="pic2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng6a64992cb46cbf797469cb76f1321a904491b851394388aeaede9cd14a5e1435.png"
        />
      </div>
      <div class="block2 flex-col">
        <div class="bd1">
          <span class="info1">欢迎回到音久音乐</span>
          <span class="word1">！</span>
        </div>
        <div class="bd2 flex-row justify-between">
          <span class="txt1">验证码登录</span>
          <span class="txt2">密码登录</span>
          <span class="info2">扫码登录</span>
        </div>
        <div class="bd3 flex-col"></div>
        <div class="bd4 flex-col">
          <div class="group1 flex-row justify-between">
            <div class="bd5 flex-col"></div>
            <div class="bd6 flex-col"></div>
          </div>
          <span class="word2">185</span>
        </div>
        <div class="bd7 flex-col justify-center">
          <div class="section1 flex-row justify-between">
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
            />
            <span class="info3">请输入</span>
          </div>
        </div>
        <div class="bd8 flex-row">
          <span class="word3">忘记密码？</span>
          <div class="group2 flex-col justify-center align-center"><div class="box1 flex-col"></div></div>
          <span class="txt3">下次自动登录</span>
        </div>
        <button class="bd9 flex-col justify-center align-center" @click="onClick_1">
          <span class="word4">登录</span>
        </button>
        <div class="bd10 flex-col justify-center"><span class="word5">没有账号？去注册</span></div>
        <div class="bd11 flex-row justify-between">
          <div class="layer1 flex-col justify-center align-center"><div class="box2 flex-col"></div></div>
          <div class="layer2">
            <span class="txt4">我已阅读并同意</span>
            <span class="word6">相关服务及隐私政策</span>
          </div>
        </div>
        <div class="bd12 flex-row justify-between">
          <div class="section2 flex-col"></div>
          <span class="info4">其他账号登录</span>
          <div class="section3 flex-col"></div>
        </div>
        <div class="bd13 flex-col"></div>
      </div>
    </div>
    <div class="main2 flex-col"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {
    onClick_1() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />