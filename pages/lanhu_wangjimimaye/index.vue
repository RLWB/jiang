<template>
  <div class="page flex-col">
    <div class="wrap1 flex-row justify-between">
      <div class="section1 flex-col">
        <div class="mod1 flex-col">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
        </div>
        <img
          class="img1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng6a64992cb46cbf797469cb76f1321a904491b851394388aeaede9cd14a5e1435.png"
        />
      </div>
      <div class="section2 flex-col">
        <span class="txt1">忘记密码？</span>
        <div class="box1 flex-col justify-center">
          <div class="outer1 flex-row">
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng9efd29c7362c1f36f76ccddcb7c07a6fc99ac826fe9b895bf91173914e7e6843.png"
            />
            <div class="outer2 flex-col"></div>
            <span class="info1">请输入手机号</span>
          </div>
        </div>
        <div class="box2 flex-col">
          <div class="block1 flex-row justify-between">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga46c667c9eeb79ae322bdd9f29bd6dfaf087d2e8dc91ec4b12461667924aa3ea.png"
            />
            <span class="info2">请输入</span>
            <div class="main1 flex-col">
              <button class="bd1 flex-col" @click="onClick_1"><span class="word1">获取验证码</span></button>
              <span class="word2">23s后重新获取</span>
            </div>
          </div>
        </div>
        <div class="box3 flex-col justify-center">
          <div class="section3 flex-row justify-between">
            <img
              class="label3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
            />
            <span class="info3">请输入8-12位密码，须包含数字、英文和符号</span>
          </div>
        </div>
        <div class="box4 flex-col justify-center">
          <div class="section4 flex-row justify-between">
            <img
              class="label4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc837caa568e1fe7d8bc9b3fa08924f93344169564a15c6cdff60e60a1d86e398.png"
            />
            <span class="word3">请在此输入新密码</span>
          </div>
        </div>
        <div class="box5 flex-col">
          <button class="block2 flex-col justify-center align-center" @click="onClick_2">
            <span class="word4">确定</span>
          </button>
          <span class="word5">确定</span>
        </div>
        <div class="box6 flex-row justify-between">
          <span class="word6">登录</span>
          <div class="outer3 flex-col"></div>
          <span class="info4">注册</span>
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
    },
    onClick_2() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />