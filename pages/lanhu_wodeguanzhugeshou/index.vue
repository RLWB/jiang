<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="group1 flex-col">
        <div class="main2 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="info1">发现音乐</span>
          <div class="group2 flex-col"><span class="info2">我的音乐</span></div>
          <span class="txt1">音乐人开放平台</span>
          <span class="info3">关于我们</span>
          <div class="group3 flex-col"><span class="info4">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="group4 flex-col"></div>
          <span class="txt2">用户名</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="group5 flex-col">
        <div class="mod1 flex-row"><div class="box1 flex-col"></div></div>
        <div class="mod2 flex-row"><span class="txt3">哗啦啦啦</span></div>
        <div class="mod3 flex-row justify-between">
          <div class="wrap1 flex-col"></div>
          <div class="wrap2 flex-col">
            <div class="main3">
              <span class="word1">Lv</span>
              <span class="word2">.</span>
              <span class="word3">7</span>
            </div>
          </div>
        </div>
        <div class="mod4 flex-row justify-between">
          <div class="box2 flex-col justify-between">
            <span class="info5">234</span>
            <span class="word4">关注</span>
          </div>
          <div class="box3 flex-col"></div>
          <div class="box4 flex-col justify-between">
            <span class="txt4">357</span>
            <span class="info6">粉丝</span>
          </div>
          <div class="box5 flex-col"></div>
          <div class="box6 flex-col justify-between">
            <span class="info7">3254</span>
            <span class="word5">音乐币</span>
          </div>
        </div>
        <img
          class="img2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng185c9db1e094a3ab810131587d3d3084c3d33b4c7b8a0faf19c5709c5c3e1257.png"
        />
        <div class="mod5 flex-col"></div>
        <div class="mod6 flex-col"><span class="word6">个人音乐人</span></div>
      </div>
      <div class="group6 flex-col">
        <div class="block1 flex-row">
          <span class="word7">我的发行</span>
          <span class="word8">我创建的歌单</span>
          <span class="txt5">我的喜欢</span>
          <span class="word9">我的下载</span>
          <button class="section1 flex-col" @click="onClick_1"><span class="word10">我的关注</span></button>
          <span class="word11">我的粉丝</span>
        </div>
      </div>
      <div class="group7 flex-row justify-between">
        <span class="info8">用户</span>
        <span class="word12">歌手</span>
      </div>
      <div class="group8 flex-col"></div>
      <div class="group9 flex-col"></div>
      <div class="group10 flex-row justify-between">
        <div class="outer1 flex-col"></div>
        <div class="outer2 flex-col"><div class="layer1 flex-col"></div></div>
        <div class="outer3 flex-col"><div class="wrap3 flex-col"></div></div>
        <div class="outer4 flex-col">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
          />
        </div>
        <div class="outer5 flex-col">
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd177cd50c9a24ebc77a59da508f5577228280c8fd99b248391643a5e395b96ee.png"
          />
        </div>
        <div class="outer6 flex-col">
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd90994b857c830a5da2bb7715aafd73c968e62a5d0c7ea7cd5e61951343705fc.png"
          />
        </div>
      </div>
      <div class="group11 flex-row justify-between">
        <span class="word13">宋冬野</span>
        <span class="word14">周杰伦</span>
        <span class="word15">陈奕迅</span>
        <span class="txt6">小宇</span>
        <span class="info9">王靖雯</span>
        <span class="info10">薛之谦</span>
      </div>
      <div class="group12 flex-row justify-between">
        <button class="section2 flex-col" @click="onClick_2"><span class="word16">相互关注</span></button>
        <div class="section3 flex-col">
          <div class="bd1 flex-col"></div>
          <div class="bd2 flex-col"><span class="txt7">已关注</span></div>
          <span class="info11">关注</span>
        </div>
        <button class="section4 flex-col" @click="onClick_3"><span class="info12">相互关注</span></button>
        <button class="section5 flex-col" @click="onClick_4"><span class="word17">相互关注</span></button>
        <div class="section6 flex-col">
          <div class="main4 flex-col"></div>
          <div class="main5 flex-col"><span class="word18">已关注</span></div>
          <span class="word19">关注</span>
        </div>
        <button class="section7 flex-col" @click="onClick_5"><span class="txt8">相互关注</span></button>
      </div>
      <div class="group13 flex-row justify-between">
        <div class="outer7 flex-col"></div>
        <div class="outer8 flex-col"><div class="mod7 flex-col"></div></div>
        <div class="outer9 flex-col"><div class="bd3 flex-col"></div></div>
        <div class="outer10 flex-col">
          <img
            class="img3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
          />
        </div>
        <div class="outer11 flex-col">
          <img
            class="img4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd177cd50c9a24ebc77a59da508f5577228280c8fd99b248391643a5e395b96ee.png"
          />
        </div>
        <div class="outer12 flex-col">
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd90994b857c830a5da2bb7715aafd73c968e62a5d0c7ea7cd5e61951343705fc.png"
          />
        </div>
      </div>
      <div class="group14 flex-row justify-between">
        <span class="word20">宋冬野</span>
        <span class="info13">周杰伦</span>
        <span class="info14">陈奕迅</span>
        <span class="word21">小宇</span>
        <span class="info15">王靖雯</span>
        <span class="txt9">薛之谦</span>
      </div>
      <div class="group15 flex-row justify-between">
        <button class="main6 flex-col" @click="onClick_6"><span class="info16">相互关注</span></button>
        <div class="main7 flex-col">
          <div class="mod8 flex-col"></div>
          <div class="mod9 flex-col"><span class="word22">已关注</span></div>
          <span class="txt10">关注</span>
        </div>
        <button class="main8 flex-col" @click="onClick_7"><span class="word23">相互关注</span></button>
        <button class="main9 flex-col" @click="onClick_8"><span class="txt11">相互关注</span></button>
        <div class="main10 flex-col">
          <div class="main11 flex-col"></div>
          <div class="main12 flex-col"><span class="txt12">已关注</span></div>
          <span class="txt13">关注</span>
        </div>
        <button class="main13 flex-col" @click="onClick_9"><span class="txt14">相互关注</span></button>
      </div>
      <div class="group16 flex-row justify-between">
        <div class="box7 flex-col"></div>
        <div class="box8 flex-col"><div class="bd4 flex-col"></div></div>
        <div class="box9 flex-col"><div class="block2 flex-col"></div></div>
        <div class="box10 flex-col">
          <img
            class="pic5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
          />
        </div>
        <div class="box11 flex-col">
          <img
            class="img5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd177cd50c9a24ebc77a59da508f5577228280c8fd99b248391643a5e395b96ee.png"
          />
        </div>
        <div class="box12 flex-col">
          <img
            class="pic6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd90994b857c830a5da2bb7715aafd73c968e62a5d0c7ea7cd5e61951343705fc.png"
          />
        </div>
      </div>
      <div class="group17 flex-row justify-between">
        <span class="word24">宋冬野</span>
        <span class="info17">周杰伦</span>
        <span class="info18">陈奕迅</span>
        <span class="word25">小宇</span>
        <span class="word26">王靖雯</span>
        <span class="info19">薛之谦</span>
      </div>
      <div class="group18 flex-row justify-between">
        <button class="layer2 flex-col" @click="onClick_10"><span class="txt15">相互关注</span></button>
        <div class="layer3 flex-col">
          <div class="layer4 flex-col"></div>
          <div class="layer5 flex-col"><span class="word27">已关注</span></div>
          <span class="word28">关注</span>
        </div>
        <button class="layer6 flex-col" @click="onClick_11"><span class="word29">相互关注</span></button>
        <button class="layer7 flex-col" @click="onClick_12"><span class="word30">相互关注</span></button>
        <div class="layer8 flex-col">
          <div class="box13 flex-col"></div>
          <div class="box14 flex-col"><span class="word31">已关注</span></div>
          <span class="word32">关注</span>
        </div>
        <button class="layer9 flex-col" @click="onClick_13"><span class="word33">相互关注</span></button>
      </div>
      <div class="group19 flex-col">
        <div class="bd5 flex-row">
          <div class="section8 flex-col">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="section9 flex-col justify-between">
            <div class="main14 flex-row">
              <span class="word34">慢慢喜欢你</span>
              <span class="word35">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word36">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="pic7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="label3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="icon2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="section10 flex-col">
            <img
              class="icon3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="section11 flex-col justify-between">
            <img
              class="label6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="pic9"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="section12 flex-col justify-between">
            <img
              class="label7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="icon5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="bd6 flex-col"><span class="info20">123</span></div>
      </div>
      <div class="group20 flex-col">
        <div class="main15 flex-col">
          <div class="section13 flex-row justify-between">
            <span class="txt16">关于我们</span>
            <span class="word37">监督举报</span>
            <span class="info21">广告服务</span>
            <span class="word38">版权指引</span>
            <span class="word39">隐私政策</span>
            <span class="info22">招聘信息</span>
            <span class="txt17">客服中心</span>
          </div>
          <div class="section14 flex-col"></div>
          <img
            class="pic10"
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
    <div class="main16 flex-col"></div>
    <div class="main17 flex-col"></div>
    <div class="main18 flex-col"><span class="info23">个人音乐人</span></div>
    <div class="main19 flex-col"></div>
    <div class="main20 flex-col"></div>
    <div class="main21 flex-col"><span class="info24">企业音乐人</span></div>
    <div class="main22 flex-col"></div>
    <div class="main23 flex-col"></div>
    <div class="main24 flex-col"><span class="info25">词作者</span></div>
    <div class="main25 flex-col"></div>
    <div class="main26 flex-col"></div>
    <div class="main27 flex-col"><span class="txt18">企业音乐人</span></div>
    <div class="main28 flex-col"></div>
    <div class="main29 flex-col"></div>
    <div class="main30 flex-col"><span class="word40">词作者</span></div>
    <div class="main31 flex-col"></div>
    <div class="main32 flex-col"></div>
    <div class="main33 flex-col"><span class="info26">个人音乐人</span></div>
    <div class="main34 flex-col"></div>
    <div class="main35 flex-col"></div>
    <div class="main36 flex-col"><span class="word41">企业音乐人</span></div>
    <div class="main37 flex-col"></div>
    <div class="main38 flex-col"></div>
    <div class="main39 flex-col"><span class="word42">词作者</span></div>
    <div class="main40 flex-col"></div>
    <div class="main41 flex-col"></div>
    <div class="main42 flex-col"><span class="word43">企业音乐人</span></div>
    <div class="main43 flex-col"></div>
    <div class="main44 flex-col"></div>
    <div class="main45 flex-col"><span class="info27">词作者</span></div>
    <div class="main46 flex-col"></div>
    <div class="main47 flex-col"></div>
    <div class="main48 flex-col"><span class="word44">个人音乐人</span></div>
    <div class="main49 flex-col"></div>
    <div class="main50 flex-col"></div>
    <div class="main51 flex-col"><span class="info28">企业音乐人</span></div>
    <div class="main52 flex-col"></div>
    <div class="main53 flex-col"></div>
    <div class="main54 flex-col"><span class="word45">词作者</span></div>
    <div class="main55 flex-col"></div>
    <div class="main56 flex-col"></div>
    <div class="main57 flex-col"><span class="word46">企业音乐人</span></div>
    <div class="main58 flex-col"></div>
    <div class="main59 flex-col"></div>
    <div class="main60 flex-col"><span class="info29">词作者</span></div>
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
    },
    onClick_10() {
      alert(1);
    },
    onClick_11() {
      alert(1);
    },
    onClick_12() {
      alert(1);
    },
    onClick_13() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />