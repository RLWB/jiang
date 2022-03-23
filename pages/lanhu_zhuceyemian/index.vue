<template>
  <div class="page flex-col">
    <div class="layer1 flex-row justify-between">
      <div class="group1 flex-col">
        <div class="bd1 flex-col">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
        </div>
        <img
          class="img2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng6a64992cb46cbf797469cb76f1321a904491b851394388aeaede9cd14a5e1435.png"
        />
      </div>
      <div class="group2 flex-col">
        <div class="main1">
          <span class="word1">欢迎注册</span>
          <span class="paragraph1">
            <br />
            音久音乐，开启你的音乐之旅
          </span>
        </div>
        <div class="main2 flex-col">
          <div class="mod1 flex-row justify-between">
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng9efd29c7362c1f36f76ccddcb7c07a6fc99ac826fe9b895bf91173914e7e6843.png"
            />
            <span class="txt1">请输入手机号</span>
          </div>
        </div>
        <div class="main3 flex-col">
          <div class="layer2 flex-row justify-between">
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
            />
            <span class="info1">请输入8-12位密码，须包含数字、英文和符号</span>
          </div>
        </div>
        <div class="main4 flex-col">
          <div class="outer1 flex-row justify-between">
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga46c667c9eeb79ae322bdd9f29bd6dfaf087d2e8dc91ec4b12461667924aa3ea.png"
            />
            <span class="txt2">请输入</span>
            <div class="group3 flex-col">
              <button class="main5 flex-col" @click="onClick_1"><span class="word2">获取验证码</span></button>
              <span class="word3">23s后重新获取</span>
            </div>
          </div>
        </div>
        <div class="main6 flex-col">
          <div class="section1 flex-row justify-between">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnged33145cfc15f60f3ef634eb35fc9af0308e9fae184ccbe285e7778f1ea0a858.png"
            />
            <span class="txt3">请输入邀请码，此项为选填项</span>
          </div>
        </div>
        <div class="main7 flex-col">
          <div class="main8 flex-col justify-center"><span class="txt4">注册</span></div>
          <span class="info2">注册</span>
        </div>
        <div class="main9 flex-col">
          <div class="group4 flex-col justify-center align-center"><span class="word4">已有账号？去登录</span></div>
          <span class="word5">已有账号？去登录</span>
        </div>
        <div class="main10 flex-row justify-between">
          <div class="main11 flex-col justify-center align-center"><div class="block1 flex-col"></div></div>
          <div class="main12">
            <span class="word6">我已阅读并同意</span>
            <span class="txt5">相关服务及隐私政策</span>
          </div>
        </div>
      </div>
    </div>
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