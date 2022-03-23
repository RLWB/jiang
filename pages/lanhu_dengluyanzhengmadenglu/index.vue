<template>
  <div class="page flex-col">
    <div class="section1 flex-row justify-between">
      <div class="bd1 flex-col">
        <div class="section2 flex-col">
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
      <div class="bd2 flex-col">
        <div class="layer1">
          <span class="word1">欢迎回到音久音乐</span>
          <span class="word2">！</span>
        </div>
        <div class="layer2 flex-row justify-between">
          <span class="txt1">验证码登录</span>
          <span class="info1">密码登录</span>
          <span class="word3">扫码登录</span>
        </div>
        <div class="layer3 flex-col"></div>
        <div class="layer4 flex-col">
          <div class="section3 flex-row justify-between">
            <div class="block1 flex-col"></div>
            <div class="block2 flex-col"></div>
          </div>
          <span class="word4">185</span>
        </div>
        <div class="layer5 flex-col">
          <div class="box1 flex-row justify-between">
            <div class="group1 flex-col"></div>
            <span class="info2">请输入</span>
            <button class="group2 flex-col" @click="onClick_1"><span class="word5">获取验证码</span></button>
          </div>
        </div>
        <div class="layer6 flex-row justify-between">
          <div class="group3 flex-col justify-center align-center"><div class="group4 flex-col"></div></div>
          <span class="word6">下次自动登录</span>
        </div>
        <button class="layer7 flex-col justify-center align-center" @click="onClick_2">
          <span class="word7">登录</span>
        </button>
        <div class="layer8 flex-col justify-center"><span class="word8">没有账号？去注册</span></div>
        <div class="layer9 flex-row justify-between">
          <div class="outer1 flex-col justify-center align-center"><div class="mod1 flex-col"></div></div>
          <div class="outer2">
            <span class="word9">我已阅读并同意</span>
            <span class="word10">相关服务及隐私政策</span>
          </div>
        </div>
        <div class="layer10 flex-row justify-between">
          <div class="box2 flex-col"></div>
          <span class="word11">其他账号登录</span>
          <div class="box3 flex-col"></div>
        </div>
        <div class="layer11 flex-col"></div>
      </div>
    </div>
    <div class="section4 flex-col"></div>
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