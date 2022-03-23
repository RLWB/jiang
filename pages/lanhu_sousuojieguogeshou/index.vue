<template>
  <div class="page flex-col">
    <div class="box1 flex-col">
      <div class="bd1 flex-col align-center">
        <div class="outer1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <div class="box2 flex-col align-center"><span class="word1">发现音乐</span></div>
          <span class="txt1">我的音乐</span>
          <span class="word2">音乐人开放平台</span>
          <span class="word3">关于我们</span>
          <div class="box3 flex-col"><span class="info1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="word4">登录/注册</span>
        </div>
      </div>
      <div class="bd2 flex-col">
        <div class="main1 flex-row justify-between">
          <span class="word5">推荐</span>
          <span class="word6">音乐人</span>
          <span class="word7">排行榜</span>
          <span class="info2">歌手</span>
          <span class="txt2">专辑</span>
          <span class="word8">歌单</span>
          <span class="info3">MV</span>
        </div>
        <div class="main2 flex-row"><div class="wrap1 flex-col"></div></div>
      </div>
      <span class="txt3">发现音乐&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;搜索</span>
      <div class="bd3 flex-row justify-between">
        <div class="wrap2 flex-col justify-center">
          <div class="bd4 flex-row justify-between">
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="info4">李</span>
          </div>
        </div>
        <button class="wrap3 flex-col justify-center align-center" @click="onClick_1">
          <span class="word9">搜索</span>
        </button>
      </div>
      <div class="bd5 flex-col">
        <div class="wrap4 flex-row justify-between">
          <span class="txt4">歌曲</span>
          <span class="info5">歌手</span>
          <span class="info6">专辑</span>
          <span class="word10">歌单</span>
          <span class="word11">MV</span>
          <span class="word12">用户</span>
        </div>
        <div class="wrap5 flex-row"><div class="box4 flex-col"></div></div>
        <div class="wrap6 flex-row justify-between">
          <div class="section1 flex-col"></div>
          <div class="section2 flex-col"><div class="outer2 flex-col"></div></div>
          <div class="section3 flex-col"><div class="box5 flex-col"></div></div>
          <div class="section4 flex-col">
            <img
              class="img1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
            />
          </div>
          <div class="section5 flex-col">
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngd177cd50c9a24ebc77a59da508f5577228280c8fd99b248391643a5e395b96ee.png"
            />
          </div>
        </div>
        <div class="wrap7 flex-row justify-between">
          <span class="word13">小宇-宋念宇</span>
          <span class="info7">周杰伦</span>
          <span class="txt5">陈奕迅</span>
          <span class="word14">小宇-宋念宇</span>
          <span class="info8">王靖雯</span>
        </div>
        <div class="wrap8 flex-row justify-between">
          <div class="outer3 flex-col justify-center">
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
            />
            <span class="txt6">关注</span>
          </div>
          <div class="outer4 flex-col justify-center">
            <div class="bd6 flex-col"></div>
            <div class="bd7 flex-col justify-center"><span class="word15">已关注</span></div>
            <span class="word16">关注</span>
          </div>
          <div class="outer5 flex-col justify-center">
            <div class="layer1 flex-col"></div>
            <span class="txt7">关注</span>
          </div>
          <div class="outer6 flex-col justify-center">
            <div class="block1 flex-col"></div>
            <span class="word17">关注</span>
          </div>
          <div class="outer7 flex-col justify-center">
            <div class="bd8 flex-col"></div>
            <div class="bd9 flex-col justify-center"><span class="txt8">已关注</span></div>
            <span class="info9">关注</span>
          </div>
        </div>
        <div class="wrap9 flex-row justify-between">
          <div class="layer2 flex-col"></div>
          <div class="layer3 flex-col"><div class="main3 flex-col"></div></div>
          <div class="layer4 flex-col"><div class="main4 flex-col"></div></div>
          <div class="layer5 flex-col">
            <img
              class="pic3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
            />
          </div>
          <div class="layer6 flex-col">
            <img
              class="pic4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngd177cd50c9a24ebc77a59da508f5577228280c8fd99b248391643a5e395b96ee.png"
            />
          </div>
        </div>
        <div class="wrap10 flex-row justify-between">
          <span class="info10">小宇-宋念宇</span>
          <span class="word18">周杰伦</span>
          <span class="info11">陈奕迅</span>
          <span class="word19">小宇-宋念宇</span>
          <span class="word20">王靖雯</span>
        </div>
        <div class="wrap11 flex-row justify-between">
          <div class="main5 flex-col justify-center">
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
            />
            <span class="txt9">关注</span>
          </div>
          <div class="main6 flex-col justify-center">
            <div class="wrap12 flex-col"></div>
            <div class="wrap13 flex-col justify-center"><span class="txt10">已关注</span></div>
            <span class="word21">关注</span>
          </div>
          <div class="main7 flex-col justify-center">
            <div class="wrap14 flex-col"></div>
            <span class="txt11">关注</span>
          </div>
          <div class="main8 flex-col justify-center">
            <div class="main9 flex-col"></div>
            <span class="word22">关注</span>
          </div>
          <div class="main10 flex-col justify-center">
            <div class="layer7 flex-col"></div>
            <div class="layer8 flex-col justify-center"><span class="info12">已关注</span></div>
            <span class="info13">关注</span>
          </div>
        </div>
        <div class="wrap15 flex-row justify-between">
          <div class="group1 flex-col"></div>
          <div class="group2 flex-col"><div class="bd10 flex-col"></div></div>
          <div class="group3 flex-col"><div class="wrap16 flex-col"></div></div>
          <div class="group4 flex-col">
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
            />
          </div>
          <div class="group5 flex-col">
            <img
              class="pic5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngd177cd50c9a24ebc77a59da508f5577228280c8fd99b248391643a5e395b96ee.png"
            />
          </div>
        </div>
        <div class="wrap17 flex-row justify-between">
          <span class="word23">小宇-宋念宇</span>
          <span class="txt12">周杰伦</span>
          <span class="txt13">陈奕迅</span>
          <span class="info14">小宇-宋念宇</span>
          <span class="txt14">王靖雯</span>
        </div>
        <div class="wrap18 flex-row justify-between">
          <div class="bd11 flex-col justify-center">
            <img
              class="icon3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
            />
            <span class="word24">关注</span>
          </div>
          <div class="bd12 flex-col justify-center">
            <div class="mod1 flex-col"></div>
            <div class="mod2 flex-col justify-center"><span class="info15">已关注</span></div>
            <span class="word25">关注</span>
          </div>
          <div class="bd13 flex-col justify-center">
            <div class="bd14 flex-col"></div>
            <span class="info16">关注</span>
          </div>
          <div class="bd15 flex-col justify-center">
            <div class="main11 flex-col"></div>
            <span class="word26">关注</span>
          </div>
          <div class="bd16 flex-col justify-center">
            <div class="layer9 flex-col"></div>
            <div class="layer10 flex-col justify-center"><span class="info17">已关注</span></div>
            <span class="info18">关注</span>
          </div>
        </div>
        <div class="wrap19 flex-col"></div>
        <div class="wrap20 flex-col"></div>
        <div class="wrap21 flex-col"><span class="txt15">个人音乐人</span></div>
        <div class="wrap22 flex-col"></div>
        <div class="wrap23 flex-col"></div>
        <div class="wrap24 flex-col"><span class="info19">企业音乐人</span></div>
        <div class="wrap25 flex-col"></div>
        <div class="wrap26 flex-col"></div>
        <div class="wrap27 flex-col"><span class="txt16">词作者</span></div>
        <div class="wrap28 flex-col"></div>
        <div class="wrap29 flex-col"></div>
        <div class="wrap30 flex-col"><span class="info20">企业音乐人</span></div>
        <div class="wrap31 flex-col"></div>
        <div class="wrap32 flex-col"></div>
        <div class="wrap33 flex-col"><span class="word27">个人音乐人</span></div>
        <div class="wrap34 flex-col"></div>
        <div class="wrap35 flex-col"></div>
        <div class="wrap36 flex-col"><span class="txt17">企业音乐人</span></div>
        <div class="wrap37 flex-col"></div>
        <div class="wrap38 flex-col"></div>
        <div class="wrap39 flex-col"><span class="info21">词作者</span></div>
        <div class="wrap40 flex-col"></div>
        <div class="wrap41 flex-col"></div>
        <div class="wrap42 flex-col"><span class="txt18">企业音乐人</span></div>
        <div class="wrap43 flex-col"></div>
        <div class="wrap44 flex-col"></div>
        <div class="wrap45 flex-col"><span class="word28">个人音乐人</span></div>
        <div class="wrap46 flex-col"></div>
        <div class="wrap47 flex-col"></div>
        <div class="wrap48 flex-col"><span class="word29">企业音乐人</span></div>
        <div class="wrap49 flex-col"></div>
        <div class="wrap50 flex-col"></div>
        <div class="wrap51 flex-col"><span class="word30">词作者</span></div>
        <div class="wrap52 flex-col"></div>
        <div class="wrap53 flex-col"></div>
        <div class="wrap54 flex-col"><span class="word31">企业音乐人</span></div>
      </div>
    </div>
    <div class="box6 flex-col"></div>
    <div class="box7 flex-col">
      <div class="section6 flex-row">
        <div class="outer8 flex-col">
          <img
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="outer9 flex-col justify-between">
          <div class="main12 flex-row">
            <span class="txt19">慢慢喜欢你</span>
            <span class="word32">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="info22">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="icon4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
        />
        <img
          class="icon5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="icon6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="pic7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="label3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="outer10 flex-col">
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="icon8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="outer11 flex-col justify-between">
          <img
            class="label5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
          />
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
          />
        </div>
      </div>
      <div class="section7 flex-col justify-center"><span class="info23">123</span></div>
    </div>
    <div class="box8 flex-col">
      <div class="group6 flex-col">
        <div class="layer11 flex-row justify-between">
          <span class="info24">关于我们</span>
          <span class="word33">监督举报</span>
          <span class="txt20">广告服务</span>
          <span class="info25">版权指引</span>
          <span class="word34">隐私政策</span>
          <span class="info26">招聘信息</span>
          <span class="word35">客服中心</span>
        </div>
        <div class="layer12 flex-col"></div>
        <img
          class="img4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnga90c6790ddde2a18b5a5da756b4a43375fc303bd7dda167e93154c216d58cb66.png"
        />
        <span class="infoBox1">
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />