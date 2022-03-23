<template>
  <div class="page flex-col">
    <div class="wrap1 flex-col">
      <div class="box1 flex-col">
        <div class="layer1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">发现音乐</span>
          <div class="mod1 flex-col"><span class="info1">我的音乐</span></div>
          <span class="word2">音乐人开放平台</span>
          <span class="info2">关于我们</span>
          <div class="mod2 flex-col"><span class="word3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="mod3 flex-col"></div>
          <span class="word4">用户名</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="box2 flex-col">
        <div class="mod4 flex-row"><div class="section1 flex-col"></div></div>
        <div class="mod5 flex-row"><span class="txt1">哗啦啦啦</span></div>
        <div class="mod6 flex-row justify-between">
          <div class="bd1 flex-col"></div>
          <div class="bd2 flex-col">
            <div class="section2">
              <span class="info3">Lv</span>
              <span class="word5">.</span>
              <span class="txt2">7</span>
            </div>
          </div>
        </div>
        <div class="mod7 flex-row justify-between">
          <div class="section3 flex-col justify-between">
            <span class="word6">234</span>
            <span class="word7">关注</span>
          </div>
          <div class="section4 flex-col"></div>
          <div class="section5 flex-col justify-between">
            <span class="word8">357</span>
            <span class="txt3">粉丝</span>
          </div>
          <div class="section6 flex-col"></div>
          <div class="section7 flex-col justify-between">
            <span class="info4">3254</span>
            <span class="info5">音乐币</span>
          </div>
        </div>
        <img
          class="img1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng185c9db1e094a3ab810131587d3d3084c3d33b4c7b8a0faf19c5709c5c3e1257.png"
        />
        <div class="mod8 flex-col"></div>
        <div class="mod9 flex-col"><span class="word9">个人音乐人</span></div>
      </div>
      <div class="box3 flex-col">
        <div class="outer1 flex-row">
          <span class="txt4">我的发行</span>
          <span class="txt5">我创建的歌单</span>
          <span class="word10">我的喜欢</span>
          <button class="section8 flex-col" @click="onClick_1"><span class="word11">我的下载</span></button>
          <span class="txt6">我的关注</span>
          <span class="word12">我的粉丝</span>
        </div>
      </div>
      <div class="box4 flex-row justify-between">
        <span class="word13">已下载</span>
        <span class="txt7">正在下载</span>
      </div>
      <div class="box5 flex-col"></div>
      <div class="box6 flex-col"></div>
      <div class="box7 flex-row justify-between">
        <div class="box8 flex-col"><span class="word14">歌曲</span></div>
        <div class="box9 flex-col"><span class="word15">MV</span></div>
      </div>
      <div class="box10 flex-row justify-between">
        <div class="mod10 flex-col">
          <div class="box11 flex-row"><span class="txt8">MAYDAY五月天&nbsp;[&nbsp;龙卷风&nbsp;]</span></div>
          <div class="box12 flex-row">
            <div class="group1 flex-col"></div>
            <div class="group2 flex-col"></div>
            <span class="txt9">2354</span>
          </div>
          <span class="word16">花粥</span>
          <div class="box13 flex-col"></div>
          <div class="box14 flex-col"></div>
          <div class="box15 flex-col"><span class="info6">词作者</span></div>
        </div>
        <div class="mod11 flex-col">
          <div class="section9 flex-row"><span class="word17">请君入梦-薛凯琪</span></div>
          <div class="section10 flex-row">
            <div class="group3 flex-col"></div>
            <div class="group4 flex-col"></div>
            <span class="word18">2354</span>
          </div>
          <span class="word19">花粥</span>
          <div class="section11 flex-col"></div>
          <div class="section12 flex-col"></div>
          <div class="section13 flex-col"><span class="word20">曲作者</span></div>
        </div>
        <div class="mod12 flex-col">
          <div class="section14 flex-row"><span class="info7">INTO1沉浸纪录EP《万里》</span></div>
          <div class="section15 flex-row">
            <div class="main1 flex-col"></div>
            <div class="main2 flex-col"></div>
            <span class="txt10">2354</span>
          </div>
          <span class="txt11">花粥</span>
        </div>
      </div>
      <div class="box16 flex-row justify-between">
        <div class="section16 flex-col">
          <div class="wrap2 flex-col justify-between">
            <span class="word21">飞过&nbsp;(《问天》电视剧情感主题曲)</span>
            <div class="box17 flex-row">
              <div class="box18 flex-col"></div>
              <div class="box19 flex-col"></div>
              <span class="txt12">2354</span>
            </div>
          </div>
          <span class="info8">花粥</span>
          <div class="wrap3 flex-col"></div>
          <div class="wrap4 flex-col"></div>
          <div class="wrap5 flex-col"><span class="txt13">个人音乐人</span></div>
        </div>
        <div class="section17 flex-col">
          <div class="group5 flex-row"><span class="txt14">Gusto&nbsp;Na&nbsp;Kita&nbsp;(歌词版)</span></div>
          <div class="group6 flex-row">
            <div class="box20 flex-col"></div>
            <div class="box21 flex-col"></div>
            <span class="info9">2354</span>
          </div>
          <span class="word22">花粥</span>
          <div class="group7 flex-col"></div>
          <div class="group8 flex-col"></div>
          <div class="group9 flex-col"><span class="word23">企业音乐人</span></div>
        </div>
        <div class="section18 flex-col">
          <div class="box22 flex-row"><span class="word24">ATHLETIC&nbsp;GIRL</span></div>
          <div class="box23 flex-row">
            <div class="main3 flex-col"></div>
            <div class="main4 flex-col"></div>
            <span class="word25">2354</span>
          </div>
          <span class="word26">花粥</span>
        </div>
      </div>
      <div class="box24 flex-row justify-between">
        <div class="mod13 flex-col">
          <div class="group10 flex-row"><span class="word27">MAYDAY五月天&nbsp;[&nbsp;龙卷风&nbsp;]</span></div>
          <div class="group11 flex-row">
            <div class="section19 flex-col"></div>
            <div class="section20 flex-col"></div>
            <span class="info10">2354</span>
          </div>
          <span class="word28">花粥</span>
        </div>
        <div class="mod14 flex-col">
          <div class="wrap6 flex-row"><span class="txt15">请君入梦-薛凯琪</span></div>
          <div class="wrap7 flex-row">
            <div class="outer2 flex-col"></div>
            <div class="outer3 flex-col"></div>
            <span class="txt16">2354</span>
          </div>
          <span class="word29">花粥</span>
        </div>
        <div class="mod15 flex-col">
          <div class="group12 flex-row"><span class="txt17">INTO1沉浸纪录EP《万里》</span></div>
          <div class="group13 flex-row">
            <div class="section21 flex-col"></div>
            <div class="section22 flex-col"></div>
            <span class="word30">2354</span>
          </div>
          <span class="txt18">花粥</span>
        </div>
      </div>
    </div>
    <div class="wrap8 flex-col">
      <div class="outer4 flex-col"><span class="info11">03:55</span></div>
      <div class="outer5 flex-col"><div class="section23 flex-col"></div></div>
    </div>
    <div class="wrap9 flex-col">
      <div class="box25 flex-col"><span class="info12">03:55</span></div>
    </div>
    <div class="wrap10 flex-col">
      <div class="layer2 flex-col"><span class="word31">03:55</span></div>
    </div>
    <div class="wrap11 flex-col">
      <div class="box26 flex-col"><span class="word32">03:55</span></div>
    </div>
    <div class="wrap12 flex-col">
      <div class="wrap13 flex-col"><span class="txt19">03:55</span></div>
    </div>
    <div class="wrap14 flex-col">
      <div class="group14 flex-col"><span class="word33">03:55</span></div>
    </div>
    <div class="wrap15 flex-col">
      <div class="layer3 flex-col"><span class="info13">03:55</span></div>
    </div>
    <div class="wrap16 flex-col">
      <div class="outer6 flex-col"><span class="info14">03:55</span></div>
    </div>
    <div class="wrap17 flex-col">
      <div class="bd3 flex-col"><span class="txt20">03:55</span></div>
    </div>
    <div class="wrap18 flex-col">
      <div class="mod16 flex-row">
        <div class="mod17 flex-col">
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="mod18 flex-col justify-between">
          <div class="block1 flex-row">
            <span class="info15">慢慢喜欢你</span>
            <span class="word34">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="info16">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="img2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="label2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
        />
        <img
          class="label3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img3"
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
        <div class="mod19 flex-col">
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
        <div class="mod20 flex-col justify-between">
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
          />
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
          />
        </div>
        <div class="mod21 flex-col justify-between">
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
          />
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
          />
        </div>
      </div>
      <div class="mod22 flex-col"><span class="word35">123</span></div>
    </div>
    <div class="wrap19 flex-col">
      <div class="main5 flex-col">
        <div class="block2 flex-row justify-between">
          <span class="info17">关于我们</span>
          <span class="word36">监督举报</span>
          <span class="word37">广告服务</span>
          <span class="txt21">版权指引</span>
          <span class="word38">隐私政策</span>
          <span class="info18">招聘信息</span>
          <span class="info19">客服中心</span>
        </div>
        <div class="block3 flex-col"></div>
        <img
          class="pic3"
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