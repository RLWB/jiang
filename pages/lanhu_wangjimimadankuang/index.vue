<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="bd1 flex-col">
        <div class="group1 flex-col">
          <span class="word1">忘记密码</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng0ab73ce67eac01824d00471c74e05604bd48d93aeb3a8b900afe6a8116936c4e.png"
          />
          <div class="section1 flex-col"></div>
          <div class="section2 flex-col justify-center">
            <div class="box1 flex-row">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9efd29c7362c1f36f76ccddcb7c07a6fc99ac826fe9b895bf91173914e7e6843.png"
              />
              <div class="block1 flex-col"></div>
              <span class="txt1">请输入手机号</span>
            </div>
          </div>
          <div class="section3 flex-col">
            <div class="wrap1 flex-row justify-between">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnga46c667c9eeb79ae322bdd9f29bd6dfaf087d2e8dc91ec4b12461667924aa3ea.png"
              />
              <span class="txt2">请输入</span>
              <div class="block2 flex-col">
                <button class="main2 flex-col" @click="onClick_1"><span class="word2">获取验证码</span></button>
                <span class="word3">23s后重新获取</span>
              </div>
            </div>
          </div>
          <div class="section4 flex-col justify-center">
            <div class="bd2 flex-row justify-between">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
              />
              <span class="info1">请输入8-12位密码，须包含数字、英文和符号</span>
            </div>
          </div>
          <div class="section5 flex-col justify-center">
            <div class="mod1 flex-row justify-between">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
              />
              <span class="word4">请在此输入新密码</span>
            </div>
          </div>
          <div class="section6 flex-col">
            <button class="mod2 flex-col justify-center align-center" @click="onClick_2">
              <span class="word5">确定</span>
            </button>
            <span class="info2">确定</span>
          </div>
          <span class="word6">登录</span>
          <div class="section7 flex-col"></div>
          <span class="word7">注册</span>
        </div>
      </div>
      <img
        class="pic1"
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
    },
    onClick_2() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />