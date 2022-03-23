<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="block1 flex-col">
        <img
          class="pic1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng514ac6f1f11d75a3ab719e8fad0f1061cc8cc4deb49ef066ed08c010fad36da1.png"
        />
        <div class="group1 flex-col"></div>
        <div class="group2 flex-col"><span class="info1">23s后重新获取</span></div>
        <div class="group3 flex-col">
          <div class="outer1 flex-row">
            <div class="section1 flex-col"><span class="info2">扫码登录更快捷</span></div>
            <span class="word1">登录</span>
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng0ab73ce67eac01824d00471c74e05604bd48d93aeb3a8b900afe6a8116936c4e.png"
            />
          </div>
          <div class="outer2 flex-row justify-between">
            <span class="word2">验证码登录</span>
            <span class="txt1">密码登录</span>
          </div>
          <div class="outer3 flex-row"><div class="group4 flex-col"></div></div>
          <div class="outer4 flex-row">
            <div class="bd1 flex-col">
              <div class="wrap1 flex-row justify-between">
                <img
                  class="label1"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9efd29c7362c1f36f76ccddcb7c07a6fc99ac826fe9b895bf91173914e7e6843.png"
                />
                <div class="layer1 flex-col"></div>
              </div>
              <span class="word3">185</span>
            </div>
          </div>
          <div class="outer5 flex-row">
            <div class="bd2 flex-col">
              <div class="bd3 flex-row justify-between">
                <img
                  class="icon2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPnga46c667c9eeb79ae322bdd9f29bd6dfaf087d2e8dc91ec4b12461667924aa3ea.png"
                />
                <span class="txt2">请输入</span>
                <button class="box1 flex-col" @click="onClick_1"><span class="txt3">获取验证码</span></button>
              </div>
            </div>
          </div>
          <div class="outer6 flex-row justify-between">
            <div class="box2 flex-col justify-center align-center"><div class="block2 flex-col"></div></div>
            <span class="word4">下次自动登录</span>
          </div>
          <div class="outer7 flex-row">
            <button class="section2 flex-col justify-center align-center" @click="onClick_2">
              <span class="word5">登录</span>
            </button>
          </div>
          <div class="outer8 flex-row">
            <div class="section3 flex-col justify-center"><span class="word6">没有账号？去注册</span></div>
          </div>
          <div class="outer9 flex-row justify-between">
            <div class="layer2 flex-col"></div>
            <span class="txt4">其他账号登录</span>
            <div class="layer3 flex-col"></div>
          </div>
          <div class="outer10 flex-row justify-between">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b669eda35d0abb3908752fc44fe86983e37aa612926a53020e5d37cc38a33e4.png"
            />
            <img
              class="label3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngaf0bd4519153247c88949e9658c7f5ccec76923b45e5ce5d5b05abbb0ecc6c82.png"
            />
          </div>
          <div class="outer11 flex-row justify-between">
            <div class="mod1 flex-col justify-center align-center"><div class="mod2 flex-col"></div></div>
            <div class="mod3">
              <span class="txt5">我已阅读并同意</span>
              <span class="word7">相关服务及隐私政策</span>
            </div>
          </div>
        </div>
        <button class="group5 flex-col justify-center align-center" @click="onClick_3">
          <span class="word8">登录</span>
        </button>
        <div class="group6 flex-col justify-center align-center"><span class="word9">没有账号？去注册</span></div>
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
    },
    onClick_2() {
      alert(1);
    },
    onClick_3() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />