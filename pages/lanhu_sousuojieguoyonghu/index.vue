<template>
  <div class="page flex-col">
    <div class="layer1 flex-col">
      <div class="mod1 flex-col align-center">
        <div class="box1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <div class="wrap1 flex-col align-center"><span class="word1">发现音乐</span></div>
          <span class="txt1">我的音乐</span>
          <span class="txt2">音乐人开放平台</span>
          <span class="word2">关于我们</span>
          <div class="wrap2 flex-col"><span class="word3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="word4">登录/注册</span>
        </div>
      </div>
      <div class="mod2 flex-col">
        <div class="box2 flex-row justify-between">
          <span class="word5">推荐</span>
          <span class="word6">音乐人</span>
          <span class="word7">排行榜</span>
          <span class="txt3">歌手</span>
          <span class="word8">专辑</span>
          <span class="word9">歌单</span>
          <span class="info1">MV</span>
        </div>
        <div class="box3 flex-row"><div class="outer1 flex-col"></div></div>
      </div>
      <div class="mod3">
        <span class="word10">发现音乐&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
        <span class="txt4">&nbsp;&nbsp;&nbsp;搜索</span>
      </div>
      <div class="mod4 flex-row justify-between">
        <div class="block1 flex-col justify-center">
          <div class="bd1 flex-row justify-between">
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="txt5">李</span>
          </div>
        </div>
        <button class="block2 flex-col justify-center align-center" @click="onClick_1">
          <span class="info2">搜索</span>
        </button>
      </div>
      <div class="mod5 flex-col">
        <div class="box4 flex-col">
          <div class="section1 flex-row justify-between">
            <span class="info3">歌曲</span>
            <span class="txt6">歌手</span>
            <span class="word11">专辑</span>
            <span class="word12">歌单</span>
            <span class="word13">MV</span>
            <span class="txt7">用户</span>
          </div>
          <div class="section2 flex-col"></div>
          <div class="section3 flex-row justify-between">
            <div class="section4 flex-col">
              <img
                class="pic2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng0e02fc48f32e3981e85175b8c28bdfb83b5fd3093579e8d53ed221ef7a57f6ce.png"
              />
              <div class="layer2 flex-col"></div>
            </div>
            <div class="section5 flex-col">
              <img
                class="img1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngb9a7d5721712a96810b7125232eb8fac21a2e5027035e7794bcf28446dba8882.png"
              />
              <div class="box5 flex-col"></div>
            </div>
            <div class="section6 flex-col">
              <div class="layer3 flex-col"></div>
              <div class="layer4 flex-col"></div>
            </div>
            <div class="section7 flex-col">
              <div class="layer5 flex-col"><div class="group1 flex-col"></div></div>
            </div>
            <div class="section8 flex-col">
              <img
                class="pic3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng7ea99d4b72a127c2a4eb7530eab8e383740eab3043d7249298b12ce6fbc01069.png"
              />
              <div class="section9 flex-col"></div>
            </div>
          </div>
          <div class="section10 flex-row justify-between">
            <span class="word14">第一天</span>
            <span class="word15">阿橘</span>
            <span class="txt8">阿眠</span>
            <span class="info4">王靖雯</span>
            <span class="txt9">猪猪男生</span>
          </div>
          <div class="section11 flex-row justify-between">
            <div class="outer2 flex-col justify-center">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
              />
              <span class="word16">关注</span>
            </div>
            <button class="outer3 flex-col justify-center" @click="onClick_2">
              <span class="word17">相互关注</span>
            </button>
            <button class="outer4 flex-col justify-center" @click="onClick_3">
              <span class="info5">相互关注</span>
            </button>
            <button class="outer5 flex-col justify-center" @click="onClick_4">
              <span class="word18">已关注</span>
            </button>
            <button class="outer6 flex-col justify-center" @click="onClick_5">
              <span class="txt10">相互关注</span>
            </button>
          </div>
          <div class="section12 flex-row justify-between">
            <div class="group2 flex-col">
              <img
                class="img2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng0e02fc48f32e3981e85175b8c28bdfb83b5fd3093579e8d53ed221ef7a57f6ce.png"
              />
              <div class="layer6 flex-col"></div>
            </div>
            <div class="group3 flex-col">
              <img
                class="img3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngb9a7d5721712a96810b7125232eb8fac21a2e5027035e7794bcf28446dba8882.png"
              />
              <div class="box6 flex-col"></div>
            </div>
            <div class="group4 flex-col">
              <div class="outer7 flex-col"></div>
              <div class="outer8 flex-col"></div>
            </div>
            <div class="group5 flex-col">
              <div class="box7 flex-col"><div class="outer9 flex-col"></div></div>
            </div>
            <div class="group6 flex-col">
              <img
                class="img4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng7ea99d4b72a127c2a4eb7530eab8e383740eab3043d7249298b12ce6fbc01069.png"
              />
              <div class="section13 flex-col"></div>
            </div>
          </div>
          <div class="section14 flex-row justify-between">
            <span class="word19">第一天</span>
            <span class="word20">阿橘</span>
            <span class="word21">阿眠</span>
            <span class="txt11">王靖雯</span>
            <span class="word22">猪猪男生</span>
          </div>
          <div class="section15 flex-row justify-between">
            <div class="box8 flex-col justify-center">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
              />
              <span class="info6">关注</span>
            </div>
            <button class="box9 flex-col justify-center" @click="onClick_6">
              <span class="word23">相互关注</span>
            </button>
            <button class="box10 flex-col justify-center" @click="onClick_7">
              <span class="info7">相互关注</span>
            </button>
            <button class="box11 flex-col justify-center" @click="onClick_8"><span class="info8">已关注</span></button>
            <button class="box12 flex-col justify-center" @click="onClick_9">
              <span class="info9">相互关注</span>
            </button>
          </div>
        </div>
        <div class="box13 flex-col"></div>
      </div>
    </div>
    <div class="layer7 flex-col">
      <div class="group7 flex-row">
        <div class="layer8 flex-col">
          <img
            class="label3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="layer9 flex-col justify-between">
          <div class="box14 flex-row">
            <span class="info10">慢慢喜欢你</span>
            <span class="txt12">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="word24">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="img5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="icon2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
        />
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="label5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="icon3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="icon4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="layer10 flex-col">
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="icon5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="layer11 flex-col justify-between">
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
          />
          <img
            class="icon6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
          />
        </div>
      </div>
      <div class="group8 flex-col justify-center"><span class="info11">123</span></div>
    </div>
    <div class="layer12 flex-col">
      <div class="bd2 flex-col">
        <div class="group9 flex-row justify-between">
          <span class="txt13">关于我们</span>
          <span class="txt14">监督举报</span>
          <span class="word25">广告服务</span>
          <span class="word26">版权指引</span>
          <span class="word27">隐私政策</span>
          <span class="word28">招聘信息</span>
          <span class="info12">客服中心</span>
        </div>
        <div class="group10 flex-col"></div>
        <img
          class="pic4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnga90c6790ddde2a18b5a5da756b4a43375fc303bd7dda167e93154c216d58cb66.png"
        />
        <span class="paragraph1">
          网络文化经营许可证京网文（2020）&nbsp;2496-386号
          <br />
          <br />
          增值电信业务经营许可证京B2—20202416
          <br />
          <br />
          广播电视节目制作经营许可证:（京）字第15434号
          <br />
          <br />
          京公网安备&nbsp;11010502041730号
          <br />
          版权所有&nbsp;曹氏俊杰科技发展（北京）有限公司&nbsp;保留一切权利&nbsp;【京ICP备20004051号-1】
        </span>
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
    },
    onClick_3() {
      alert(1);
    },
    onClick_4() {
      alert(1);
    },
    onClick_5() {
      alert(1);
    },
    onClick_6() {
      alert(1);
    },
    onClick_7() {
      alert(1);
    },
    onClick_8() {
      alert(1);
    },
    onClick_9() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />