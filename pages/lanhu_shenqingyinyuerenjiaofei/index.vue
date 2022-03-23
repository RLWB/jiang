<template>
  <div class="page flex-col">
    <div class="mod1 flex-col">
      <div class="bd1 flex-col align-center">
        <div class="layer1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">发现音乐</span>
          <span class="info1">我的音乐</span>
          <span class="info2">音乐人开放平台</span>
          <span class="txt1">关于我们</span>
          <div class="section1 flex-col"><span class="txt2">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="section2 flex-col"></div>
          <span class="info3">用户名</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="bd2 flex-col justify-center">
        <div class="group1">
          <span class="info4">音乐人开放平台&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
          <span class="word2">&nbsp;&nbsp;&nbsp;</span>
          <span class="info5">申请个人音乐人</span>
        </div>
      </div>
      <div class="bd3 flex-col">
        <div class="box1 flex-col justify-center align-center"><span class="txt3">1</span></div>
        <div class="box2 flex-col"></div>
        <div class="box3 flex-col justify-center align-center"><span class="word3">2</span></div>
        <div class="box4 flex-col"></div>
        <div class="box5 flex-col justify-center align-center"><span class="info6">3</span></div>
        <div class="box6 flex-col"></div>
        <div class="box7 flex-col justify-center align-center"><span class="word4">4</span></div>
        <span class="txt4">认证个人信息</span>
        <span class="word5">填写并提交个人信息</span>
        <span class="info7">上传音乐作品</span>
        <span class="txt5">缴纳年费</span>
        <span class="txt6">确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。</span>
        <span class="word6">
          按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
        </span>
        <span class="word7">
          上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
        </span>
        <span class="txt7">
          审核通过后，须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息形式发出；
        </span>
      </div>
      <span class="txt8">方式一：直接认领歌手</span>
      <span class="word8">直接认领歌手，则无需填写下面信息</span>
      <div class="bd4 flex-row justify-between">
        <div class="outer1 flex-col justify-center">
          <div class="layer2 flex-row justify-between">
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="info8">李</span>
          </div>
        </div>
        <button class="outer2 flex-col justify-center align-center" @click="onClick_1">
          <span class="info9">搜索</span>
        </button>
      </div>
      <span class="txt9">方式二：填写个人信息</span>
      <span class="info10">没有直接认领的歌手？可以直接填写个人信息进行申请</span>
      <div class="bd5 flex-row justify-between">
        <span class="info11">音乐人姓名</span>
        <div class="box8 flex-col justify-center"><span class="txt10">请输入</span></div>
      </div>
      <div class="bd6 flex-row justify-between">
        <span class="txt11">音乐人头像</span>
        <img
          class="img2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng3811a93180ef732b5e5a6c5058a261480b37523384577c4af8063906811f4f7f.png"
        />
      </div>
      <div class="bd7 flex-row justify-between">
        <span class="word9">歌手类型</span>
        <div class="group2 flex-col justify-center">
          <div class="section3 flex-row justify-between">
            <div class="box9 flex-col justify-center">
              <div class="block1 flex-row justify-between">
                <span class="word10">流行</span>
                <img
                  class="icon3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng67ab1006f768dc48531dbcbc2e9d181a248c1474224cfd00d688d626a97ff9c0.png"
                />
              </div>
            </div>
            <div class="box10 flex-col justify-center">
              <div class="layer3 flex-row justify-between">
                <span class="info12">民谣</span>
                <img
                  class="icon4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng67ab1006f768dc48531dbcbc2e9d181a248c1474224cfd00d688d626a97ff9c0.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bd8 flex-row justify-between">
        <span class="info13">个人简介</span>
        <div class="layer4 flex-col"><span class="word11">请输入</span></div>
      </div>
      <div class="bd9 flex-row justify-between">
        <span class="word12">手机号</span>
        <div class="wrap1 flex-col justify-center"><span class="word13">请输入</span></div>
      </div>
      <div class="bd10 flex-col">
        <div class="layer5 flex-row">
          <div class="block2 flex-col">
            <img
              class="icon5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="block3 flex-col justify-between">
            <div class="block4 flex-row">
              <span class="info14">慢慢喜欢你</span>
              <span class="info15">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="info16">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="img3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="icon6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="label3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="block5 flex-col">
            <img
              class="label4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="icon8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="block6 flex-col justify-between">
            <img
              class="icon9"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="block7 flex-col justify-between">
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
        <div class="layer6 flex-col justify-center"><span class="word14">123</span></div>
      </div>
      <div class="bd11 flex-col">
        <div class="group3 flex-col">
          <div class="main1 flex-row justify-between">
            <span class="word15">关于我们</span>
            <span class="word16">监督举报</span>
            <span class="word17">广告服务</span>
            <span class="word18">版权指引</span>
            <span class="word19">隐私政策</span>
            <span class="word20">招聘信息</span>
            <span class="info17">客服中心</span>
          </div>
          <div class="main2 flex-col"></div>
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
    <div class="mod2 flex-col">
      <div class="outer3 flex-col">
        <div class="section4 flex-row">
          <div class="group4 flex-col"></div>
          <div class="group5">
            <span class="txt12">李</span>
            <span class="info18">荣浩</span>
          </div>
          <div class="group6 flex-col justify-center align-center"><span class="info19">认领</span></div>
        </div>
        <div class="section5 flex-col"></div>
        <div class="section6 flex-row">
          <div class="wrap2 flex-col"></div>
          <div class="wrap3">
            <span class="word21">李</span>
            <span class="word22">荣浩</span>
          </div>
          <div class="wrap4 flex-col justify-center align-center"><span class="word23">已认领</span></div>
        </div>
        <div class="section7 flex-col"></div>
        <div class="section8 flex-row">
          <div class="mod3 flex-col"></div>
          <div class="mod4">
            <span class="word24">李</span>
            <span class="word25">荣浩</span>
          </div>
          <div class="mod5 flex-col justify-center align-center"><span class="txt13">认领</span></div>
        </div>
        <div class="section9 flex-col"></div>
        <div class="section10 flex-row">
          <div class="main3 flex-col"></div>
          <div class="main4">
            <span class="word26">李</span>
            <span class="word27">荣浩</span>
          </div>
          <div class="main5 flex-col justify-center align-center"><span class="info20">已认领</span></div>
        </div>
        <div class="section11 flex-col"></div>
        <div class="section12 flex-row">
          <div class="main6 flex-col"></div>
          <div class="main7">
            <span class="word28">李</span>
            <span class="txt14">荣浩</span>
          </div>
          <div class="main8 flex-col justify-center align-center"><span class="word29">认领</span></div>
        </div>
        <div class="section13 flex-col"></div>
        <div class="section14 flex-row">
          <div class="group7 flex-col"></div>
          <div class="group8">
            <span class="word30">李</span>
            <span class="txt15">荣浩</span>
          </div>
          <div class="group9 flex-col justify-center align-center"><span class="word31">已认领</span></div>
        </div>
        <div class="section15 flex-col"></div>
      </div>
      <div class="outer4 flex-col"><div class="group10 flex-col"></div></div>
    </div>
    <div class="mod6 flex-col">
      <div class="group11 flex-col">
        <span class="word32">缴纳年费</span>
        <img
          class="label7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="box11 flex-col"></div>
        <div class="box12 flex-col">
          <div class="box13 flex-col">
            <span class="word33">缴纳个人音乐人年费</span>
            <span class="txt16">支付金额</span>
            <div class="bd12 flex-row justify-between">
              <span class="txt17">99</span>
              <span class="word34">元</span>
            </div>
          </div>
        </div>
        <span class="info21">请选择支付方式</span>
        <div class="box14 flex-col">
          <div class="bd13 flex-row justify-between">
            <img
              class="img4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngfba9cc1b635665caebca33b9db5fb435baee71123d74a6ddf9d701f0260dfd26.png"
            />
            <img
              class="label8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng003c1f7a8cc203107a03d460fee06680af06a715bd4ad992014d77c8128221ab.png"
            />
          </div>
          <div class="bd14 flex-row"><span class="info22">支付宝支付</span></div>
        </div>
        <div class="box15 flex-col">
          <div class="outer5 flex-col justify-between">
            <img
              class="pic4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng15f64b0aa4ee4bab1cfc5e4bb7a5362a36eb5a87b412ff408153d7305c76a87b.png"
            />
            <span class="word35">微信支付</span>
          </div>
        </div>
        <button class="box16 flex-col justify-center align-center" @click="onClick_2">
          <span class="info23">取消</span>
        </button>
        <button class="box17 flex-col justify-center align-center" @click="onClick_3">
          <span class="txt18">确认支付</span>
        </button>
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />