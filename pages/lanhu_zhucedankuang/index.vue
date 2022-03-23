<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="bd1 flex-col">
        <div class="bd2 flex-col">
          <span class="word1">注册</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng0ab73ce67eac01824d00471c74e05604bd48d93aeb3a8b900afe6a8116936c4e.png"
          />
          <div class="box1 flex-col"></div>
          <div class="box2 flex-col">
            <div class="outer1 flex-row">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9efd29c7362c1f36f76ccddcb7c07a6fc99ac826fe9b895bf91173914e7e6843.png"
              />
              <div class="layer1 flex-col"></div>
              <span class="txt1">请输入手机号</span>
            </div>
          </div>
          <div class="box3 flex-col">
            <div class="group1 flex-row justify-between">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
              />
              <span class="info1">请输入8-12位密码，须包含数字、英文和符号</span>
            </div>
          </div>
          <div class="box4 flex-col">
            <div class="outer2 flex-row justify-between">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnga46c667c9eeb79ae322bdd9f29bd6dfaf087d2e8dc91ec4b12461667924aa3ea.png"
              />
              <span class="word2">请输入</span>
              <div class="mod1 flex-col">
                <button class="box5 flex-col" @click="onClick_1"><span class="info2">获取验证码</span></button>
                <span class="txt2">23s后重新获取</span>
              </div>
            </div>
          </div>
          <div class="box6 flex-col justify-center">
            <div class="outer3 flex-row justify-between">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnged33145cfc15f60f3ef634eb35fc9af0308e9fae184ccbe285e7778f1ea0a858.png"
              />
              <span class="word3">请输入邀请码，此项为选填项</span>
            </div>
          </div>
          <div class="box7 flex-col">
            <div class="mod2 flex-col justify-center"><span class="txt3">注册</span></div>
            <span class="info3">注册</span>
          </div>
          <div class="box8 flex-col">
            <div class="main2 flex-col justify-center align-center"><span class="info4">已有账号？去登录</span></div>
            <span class="txt4">已有账号？去登录</span>
          </div>
          <div class="box9 flex-col justify-center align-center"><div class="wrap1 flex-col"></div></div>
          <div class="box10">
            <span class="word4">我已阅读并同意</span>
            <span class="info5">相关服务及隐私政策</span>
          </div>
        </div>
      </div>
      <img
        class="img1"
        referrerpolicy="no-referrer"
        src="./assets/img/SketchPng11c158f339335c5213b2493b5d83f53b566c0f3d87730aa447a40da59a743bde.png"
      />
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