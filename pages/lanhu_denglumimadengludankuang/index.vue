<template>
  <div class="page flex-col">
    <div class="section1 flex-col">
      <div class="box1 flex-col">
        <div class="mod1 flex-col">
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng0ab73ce67eac01824d00471c74e05604bd48d93aeb3a8b900afe6a8116936c4e.png"
          />
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng514ac6f1f11d75a3ab719e8fad0f1061cc8cc4deb49ef066ed08c010fad36da1.png"
          />
          <span class="word1">登录</span>
          <div class="group1 flex-col"><span class="info1">扫码登录更快捷</span></div>
          <div class="group2 flex-col"></div>
          <span class="txt1">验证码登录</span>
          <span class="txt2">密码登录</span>
          <div class="group3 flex-col"></div>
          <div class="group4 flex-col justify-center">
            <div class="bd1 flex-row">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9efd29c7362c1f36f76ccddcb7c07a6fc99ac826fe9b895bf91173914e7e6843.png"
              />
              <div class="layer1 flex-col"></div>
              <span class="info2">请输入手机号</span>
            </div>
          </div>
          <div class="group5 flex-col justify-center">
            <div class="outer1 flex-row justify-between">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
              />
              <span class="word2">请输入</span>
            </div>
          </div>
          <span class="word3">忘记密码？</span>
          <div class="group6 flex-col justify-center align-center"><div class="mod2 flex-col"></div></div>
          <span class="word4">下次自动登录</span>
          <div class="group7 flex-col">
            <button class="bd2 flex-col justify-center align-center" @click="onClick_1">
              <span class="word5">登录</span>
            </button>
            <span class="word6">登录</span>
          </div>
          <div class="group8 flex-col">
            <div class="section2 flex-col justify-center"><span class="info3">没有账号？去注册</span></div>
            <span class="word7">没有账号？去注册</span>
          </div>
          <div class="group9 flex-col"></div>
          <span class="word8">其他账号登录</span>
          <div class="group10 flex-col"></div>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b669eda35d0abb3908752fc44fe86983e37aa612926a53020e5d37cc38a33e4.png"
          />
          <div class="group11 flex-col justify-center align-center"><div class="layer2 flex-col"></div></div>
          <div class="group12">
            <span class="word9">我已阅读并同意</span>
            <span class="word10">相关服务及隐私政策</span>
          </div>
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />