<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="layer1 flex-col">
        <div class="block1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="info1">发现音乐</span>
          <div class="bd1 flex-col"><span class="txt1">我的音乐</span></div>
          <span class="info2">音乐人开放平台</span>
          <span class="word1">关于我们</span>
          <div class="bd2 flex-col"><span class="word2">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="bd3 flex-col"></div>
          <span class="word3">用户名</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="layer2 flex-col">
        <div class="outer1 flex-row"><div class="box1 flex-col"></div></div>
        <div class="outer2 flex-row"><span class="word4">哗啦啦啦</span></div>
        <div class="outer3 flex-row justify-between">
          <div class="group1 flex-col"></div>
          <div class="group2 flex-col">
            <div class="layer3">
              <span class="info3">Lv</span>
              <span class="word5">.</span>
              <span class="info4">7</span>
            </div>
          </div>
        </div>
        <div class="outer4 flex-row justify-between">
          <div class="section1 flex-col justify-between">
            <span class="word6">234</span>
            <span class="word7">关注</span>
          </div>
          <div class="section2 flex-col"></div>
          <div class="section3 flex-col justify-between">
            <span class="word8">357</span>
            <span class="txt2">粉丝</span>
          </div>
          <div class="section4 flex-col"></div>
          <div class="section5 flex-col justify-between">
            <span class="word9">3254</span>
            <span class="word10">音乐币</span>
          </div>
        </div>
        <img
          class="img1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng185c9db1e094a3ab810131587d3d3084c3d33b4c7b8a0faf19c5709c5c3e1257.png"
        />
        <div class="outer5 flex-col"></div>
        <div class="outer6 flex-col"><span class="word11">个人音乐人</span></div>
      </div>
      <div class="layer4 flex-col">
        <div class="wrap1 flex-row">
          <span class="txt3">我的发行</span>
          <span class="txt4">我创建的歌单</span>
          <span class="txt5">我的喜欢</span>
          <span class="info5">我的下载</span>
          <button class="outer7 flex-col" @click="onClick_1"><span class="word12">我的关注</span></button>
          <span class="info6">我的粉丝</span>
        </div>
      </div>
      <div class="layer5 flex-row justify-between">
        <span class="txt6">用户</span>
        <span class="word13">歌手</span>
      </div>
      <div class="layer6 flex-col"></div>
      <div class="layer7 flex-col"></div>
      <div class="layer8 flex-row justify-between">
        <div class="main2 flex-col"></div>
        <div class="main3 flex-col">
          <img
            class="img2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng0e02fc48f32e3981e85175b8c28bdfb83b5fd3093579e8d53ed221ef7a57f6ce.png"
          />
          <div class="outer8 flex-col"></div>
        </div>
        <div class="main4 flex-col">
          <img
            class="img3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd9bda900b56cdb2465071dedc87713ac782513b6a6022f5223fade8d8b794310.png"
          />
          <div class="outer9 flex-col"></div>
        </div>
        <div class="main5 flex-col">
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
          />
          <div class="mod1 flex-col"></div>
        </div>
        <div class="main6 flex-col">
          <div class="layer9 flex-col">
            <img
              class="pic3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngd7fbfe6852e0cb6bc86c9c191639a4b3b05aa60f91abd16098f49449bbdf7768.png"
            />
          </div>
        </div>
        <div class="main7 flex-col">
          <div class="group3 flex-col">
            <img
              class="img4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng1815c0f5232f7ac3d7c7c3791dac20ae4e50ae69abc00924ea34fffa7cb69f14.png"
            />
          </div>
        </div>
      </div>
      <div class="layer10 flex-row justify-between">
        <span class="word14">小宇-宋念宇</span>
        <span class="info7">第一天</span>
        <span class="info8">阿橘</span>
        <span class="info9">阿眠</span>
        <span class="word15">王靖雯</span>
        <span class="word16">猪猪男生</span>
      </div>
      <div class="layer11 flex-row justify-between">
        <button class="bd4 flex-col" @click="onClick_2"><span class="word17">相互关注</span></button>
        <button class="bd5 flex-col" @click="onClick_3"><span class="txt7">已关注</span></button>
        <button class="bd6 flex-col" @click="onClick_4"><span class="word18">相互关注</span></button>
        <button class="bd7 flex-col" @click="onClick_5"><span class="word19">相互关注</span></button>
        <button class="bd8 flex-col" @click="onClick_6"><span class="word20">已关注</span></button>
        <button class="bd9 flex-col" @click="onClick_7"><span class="info10">相互关注</span></button>
      </div>
      <div class="layer12 flex-row justify-between">
        <div class="main8 flex-col"></div>
        <div class="main9 flex-col">
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng0e02fc48f32e3981e85175b8c28bdfb83b5fd3093579e8d53ed221ef7a57f6ce.png"
          />
          <div class="mod2 flex-col"></div>
        </div>
        <div class="main10 flex-col">
          <img
            class="pic5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd9bda900b56cdb2465071dedc87713ac782513b6a6022f5223fade8d8b794310.png"
          />
          <div class="box2 flex-col"></div>
        </div>
        <div class="main11 flex-col">
          <img
            class="img5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
          />
          <div class="group4 flex-col"></div>
        </div>
        <div class="main12 flex-col">
          <div class="block2 flex-col">
            <img
              class="img6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngd7fbfe6852e0cb6bc86c9c191639a4b3b05aa60f91abd16098f49449bbdf7768.png"
            />
          </div>
        </div>
        <div class="main13 flex-col">
          <div class="bd10 flex-col">
            <img
              class="pic6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng1815c0f5232f7ac3d7c7c3791dac20ae4e50ae69abc00924ea34fffa7cb69f14.png"
            />
          </div>
        </div>
      </div>
      <div class="layer13 flex-row justify-between">
        <span class="word21">小宇-宋念宇</span>
        <span class="info11">第一天</span>
        <span class="word22">阿橘</span>
        <span class="word23">阿眠</span>
        <span class="info12">王靖雯</span>
        <span class="word24">猪猪男生</span>
      </div>
      <div class="layer14 flex-row justify-between">
        <button class="section6 flex-col" @click="onClick_8"><span class="word25">相互关注</span></button>
        <button class="section7 flex-col" @click="onClick_9"><span class="txt8">已关注</span></button>
        <button class="section8 flex-col" @click="onClick_10"><span class="info13">相互关注</span></button>
        <button class="section9 flex-col" @click="onClick_11"><span class="word26">相互关注</span></button>
        <button class="section10 flex-col" @click="onClick_12"><span class="word27">已关注</span></button>
        <button class="section11 flex-col" @click="onClick_13"><span class="word28">相互关注</span></button>
      </div>
      <div class="layer15 flex-row justify-between">
        <div class="layer16 flex-col"></div>
        <div class="layer17 flex-col">
          <img
            class="img7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng0e02fc48f32e3981e85175b8c28bdfb83b5fd3093579e8d53ed221ef7a57f6ce.png"
          />
          <div class="outer10 flex-col"></div>
        </div>
        <div class="layer18 flex-col">
          <img
            class="pic7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngd9bda900b56cdb2465071dedc87713ac782513b6a6022f5223fade8d8b794310.png"
          />
          <div class="section12 flex-col"></div>
        </div>
        <div class="layer19 flex-col">
          <img
            class="img8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng977d1bbcd969a36dcaee79baf2567523566708cd4815def3ee0250086ff0036f.png"
          />
          <div class="box3 flex-col"></div>
        </div>
        <div class="layer20 flex-col">
          <div class="box4 flex-col">
            <img
              class="pic8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngd7fbfe6852e0cb6bc86c9c191639a4b3b05aa60f91abd16098f49449bbdf7768.png"
            />
          </div>
        </div>
        <div class="layer21 flex-col">
          <div class="block3 flex-col">
            <img
              class="img9"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng1815c0f5232f7ac3d7c7c3791dac20ae4e50ae69abc00924ea34fffa7cb69f14.png"
            />
          </div>
        </div>
      </div>
      <div class="layer22 flex-row justify-between">
        <span class="info14">小宇-宋念宇</span>
        <span class="word29">第一天</span>
        <span class="txt9">阿橘</span>
        <span class="info15">阿眠</span>
        <span class="txt10">王靖雯</span>
        <span class="word30">猪猪男生</span>
      </div>
      <div class="layer23 flex-row justify-between">
        <button class="layer24 flex-col" @click="onClick_14"><span class="info16">相互关注</span></button>
        <button class="layer25 flex-col" @click="onClick_15"><span class="word31">已关注</span></button>
        <button class="layer26 flex-col" @click="onClick_16"><span class="info17">相互关注</span></button>
        <button class="layer27 flex-col" @click="onClick_17"><span class="info18">相互关注</span></button>
        <button class="layer28 flex-col" @click="onClick_18"><span class="word32">已关注</span></button>
        <button class="layer29 flex-col" @click="onClick_19"><span class="info19">相互关注</span></button>
      </div>
      <div class="layer30 flex-col">
        <div class="section13 flex-row">
          <div class="outer11 flex-col">
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="outer12 flex-col justify-between">
            <div class="box5 flex-row">
              <span class="info20">慢慢喜欢你</span>
              <span class="txt11">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word33">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="pic9"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic10"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="outer13 flex-col">
            <img
              class="label4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="outer14 flex-col justify-between">
            <img
              class="label5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="pic11"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="outer15 flex-col justify-between">
            <img
              class="icon6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="icon7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="section14 flex-col"><span class="info21">123</span></div>
      </div>
      <div class="layer31 flex-col">
        <div class="outer16 flex-col">
          <div class="group5 flex-row justify-between">
            <span class="info22">关于我们</span>
            <span class="word34">监督举报</span>
            <span class="info23">广告服务</span>
            <span class="word35">版权指引</span>
            <span class="word36">隐私政策</span>
            <span class="word37">招聘信息</span>
            <span class="info24">客服中心</span>
          </div>
          <div class="group6 flex-col"></div>
          <img
            class="pic12"
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
    },
    onClick_14() {
      alert(1);
    },
    onClick_15() {
      alert(1);
    },
    onClick_16() {
      alert(1);
    },
    onClick_17() {
      alert(1);
    },
    onClick_18() {
      alert(1);
    },
    onClick_19() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />