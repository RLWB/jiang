<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="outer1 flex-col align-center">
        <div class="wrap1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="info1">发现音乐</span>
          <span class="txt1">我的音乐</span>
          <span class="txt2">音乐人开放平台</span>
          <span class="word1">关于我们</span>
          <div class="layer1 flex-col"><span class="txt3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="layer2 flex-col"></div>
          <span class="txt4">用户名</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="outer2 flex-col justify-center">
        <div class="section1">
          <span class="word2">音乐人开放平台&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
          <span class="info2">&nbsp;&nbsp;&nbsp;</span>
          <span class="word3">申请个人音乐人</span>
        </div>
      </div>
      <div class="outer3 flex-col">
        <div class="bd1 flex-col justify-center align-center"><span class="word4">1</span></div>
        <div class="bd2 flex-col"></div>
        <div class="bd3 flex-col justify-center align-center"><span class="info3">2</span></div>
        <div class="bd4 flex-col"></div>
        <div class="bd5 flex-col justify-center align-center"><span class="info4">3</span></div>
        <div class="bd6 flex-col"></div>
        <div class="bd7 flex-col justify-center align-center"><span class="info5">4</span></div>
        <span class="word5">认证个人信息</span>
        <span class="word6">填写并提交个人信息</span>
        <span class="word7">上传音乐作品</span>
        <span class="txt5">缴纳年费</span>
        <span class="word8">
          确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。
        </span>
        <span class="word9">
          按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
        </span>
        <span class="word10">
          上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
        </span>
        <span class="word11">
          审核通过后，须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息形式发出；
        </span>
      </div>
      <span class="txt6">认证个人信息</span>
      <div class="outer4 flex-row justify-between">
        <span class="word12">法人姓名</span>
        <div class="outer5 flex-col justify-center"><span class="word13">请输入</span></div>
      </div>
      <div class="outer6 flex-row justify-between">
        <span class="txt7">证件类型</span>
        <div class="box1 flex-col">
          <div class="outer7 flex-row justify-between">
            <span class="word14">公民身份证</span>
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga5c83f8c9f56718bf4400088b8f4fa3f1d4b27a3977061974dfd687f23a72ed8.png"
            />
          </div>
        </div>
        <span class="word15">证件类型</span>
        <div class="box2 flex-col">
          <div class="block1 flex-row justify-between">
            <span class="txt8">公民身份证</span>
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng9f47d200c6b1864df28195ca33786f9a72a42e91b2188af15a4ed1dc68d24d63.png"
            />
          </div>
        </div>
      </div>
      <div class="outer8 flex-row">
        <span class="info6">上传证件信息</span>
        <div class="section2 flex-col">
          <span class="info7">(大小不得超过2M，格式仅支持JPG、JPEG、PNG)</span>
          <div class="outer9 flex-row justify-between">
            <div class="bd8 flex-col">
              <div class="box3 flex-col">
                <div class="outer10 flex-col">
                  <button class="main2 flex-col align-center" @click="onClick_1">
                    <span class="word16">重新上传</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="bd9 flex-col justify-center align-center">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnga7a0646d146b45475e28d508876a67e4effb501e2b7ef77463bd784607424e61.png"
              />
            </div>
          </div>
          <div class="outer11 flex-row justify-between">
            <span class="word17">证件正面</span>
            <span class="word18">证件背面</span>
          </div>
        </div>
        <div class="section3 flex-col align-center">
          <div class="bd10 flex-col">
            <span class="txt9">公明身份证</span>
            <span class="info8">护照</span>
            <span class="word19">港澳居民来往大陆通行证</span>
            <span class="txt10">台湾居民来往大陆通行证</span>
            <div class="bd11 flex-col justify-center"><span class="txt11">居民户口簿</span></div>
          </div>
        </div>
      </div>
      <button class="outer12 flex-col justify-center align-center" @click="onClick_2">
        <span class="word20">提交</span>
      </button>
      <div class="outer13 flex-col">
        <div class="outer14 flex-row">
          <div class="main3 flex-col">
            <img
              class="label3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="main4 flex-col justify-between">
            <div class="wrap2 flex-row">
              <span class="info9">慢慢喜欢你</span>
              <span class="txt12">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word21">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="label5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="main5 flex-col">
            <img
              class="icon5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="main6 flex-col justify-between">
            <img
              class="icon6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="main7 flex-col justify-between">
            <img
              class="icon7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="label8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="outer15 flex-col justify-center"><span class="word22">123</span></div>
      </div>
      <div class="outer16 flex-col">
        <div class="group1 flex-col">
          <div class="layer3 flex-row justify-between">
            <span class="info10">关于我们</span>
            <span class="word23">监督举报</span>
            <span class="info11">广告服务</span>
            <span class="txt13">版权指引</span>
            <span class="txt14">隐私政策</span>
            <span class="info12">招聘信息</span>
            <span class="info13">客服中心</span>
          </div>
          <div class="layer4 flex-col"></div>
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