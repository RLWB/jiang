<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="layer1 flex-col align-center">
        <div class="bd1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">发现音乐</span>
          <span class="word2">我的音乐</span>
          <span class="txt1">音乐人开放平台</span>
          <span class="info1">关于我们</span>
          <div class="layer2 flex-col"><span class="word3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="layer3 flex-col"></div>
          <span class="word4">用户名</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="layer4 flex-col justify-center">
        <div class="wrap1">
          <span class="txt2">音乐人开放平台&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
          <span class="word5">&nbsp;&nbsp;&nbsp;</span>
          <span class="info2">申请企业音乐人</span>
        </div>
      </div>
      <div class="layer5 flex-col align-center">
        <div class="block1 flex-row">
          <div class="section1 flex-col" v-for="(item, index) in loopData0" :key="index">
            <div class="outer1 flex-col justify-between">
              <span class="word6" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
              <span class="word7" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></span>
            </div>
          </div>
        </div>
        <div class="block2 flex-col justify-center align-center"><span class="word8">1</span></div>
        <div class="block3 flex-col"></div>
        <div class="block4 flex-col justify-center align-center"><span class="word9">2</span></div>
        <div class="block5 flex-col"></div>
        <div class="block6 flex-col justify-center align-center"><span class="info3">3</span></div>
      </div>
      <span class="txt3">填写企业信息</span>
      <div class="layer6 flex-row justify-between">
        <span class="info4">企业名称</span>
        <div class="mod1 flex-col justify-center"><span class="info5">请输入</span></div>
      </div>
      <div class="layer7 flex-row justify-between">
        <span class="info6">手机号</span>
        <div class="group1 flex-col justify-center"><span class="txt4">请输入</span></div>
      </div>
      <div class="layer8 flex-row">
        <span class="word10">验证码</span>
        <div class="box1 flex-col justify-center"><span class="txt5">请输入</span></div>
        <button class="box2 flex-col justify-center align-center" @click="onClick_1">
          <span class="txt6">获取验证码</span>
        </button>
        <div class="box3 flex-col justify-center"><span class="info7">25s后重新获取</span></div>
      </div>
      <span class="txt7">*输入内容不符合格式要求</span>
      <div class="layer9 flex-row justify-between">
        <span class="word11">组织机构代码</span>
        <div class="outer2 flex-col justify-center"><span class="word12">00000000000</span></div>
      </div>
      <span class="word13">*此项为必填内容，不能为空</span>
      <div class="layer10 flex-row justify-between">
        <span class="word14">银行卡号</span>
        <div class="layer11 flex-col justify-center"><span class="info8">请输入</span></div>
      </div>
      <div class="layer12 flex-row justify-between">
        <span class="word15">开户行</span>
        <div class="group2 flex-col justify-center"><span class="txt8">请输入</span></div>
      </div>
      <div class="layer13 flex-row justify-between">
        <span class="txt9">开户名</span>
        <div class="block7 flex-col justify-center"><span class="txt10">请输入</span></div>
      </div>
      <div class="layer14 flex-row justify-between">
        <span class="txt11">服务条款</span>
        <div class="box4 flex-col align-center">
          <span class="paragraph1">
            欢迎您使用音久音乐版权推广服务!
            <br />
            为使用音久音乐软件的版权推广服务，您应当阅读并遵守《音久音乐版权推广服务协议》（以下简称“本协议”）相关协议和业务规则。请您务必审慎阅读、充分理解各条款内容，特别是限制或免除责任或知识产权相关等条款，相关的条款会以黑体加粗形式提示您注意。
          </span>
        </div>
      </div>
      <div class="layer15 flex-row justify-between">
        <img
          class="icon1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng24c6b373dc2453247d4cc1e296173f0fed00afbc1d6c325efb53f6682ee69138.png"
        />
        <div class="mod2">
          <span class="word16">请点击仔细阅读</span>
          <span class="word17">【音久音乐用户协议】</span>
        </div>
      </div>
      <button class="layer16 flex-col justify-center align-center" @click="onClick_2">
        <span class="info9">提交</span>
      </button>
      <div class="layer17 flex-col">
        <div class="box5 flex-row">
          <div class="outer3 flex-col">
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="outer4 flex-col justify-between">
            <div class="section2 flex-row">
              <span class="info10">慢慢喜欢你</span>
              <span class="word18">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="info11">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="img1"
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
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="outer5 flex-col">
            <img
              class="icon6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="outer6 flex-col justify-between">
            <img
              class="icon7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="outer7 flex-col justify-between">
            <img
              class="label5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="icon8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="box6 flex-col justify-center"><span class="word19">123</span></div>
      </div>
      <div class="layer18 flex-col">
        <div class="outer8 flex-col">
          <div class="block8 flex-row justify-between">
            <span class="info12">关于我们</span>
            <span class="txt12">监督举报</span>
            <span class="txt13">广告服务</span>
            <span class="info13">版权指引</span>
            <span class="txt14">隐私政策</span>
            <span class="word20">招聘信息</span>
            <span class="word21">客服中心</span>
          </div>
          <div class="block9 flex-col"></div>
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga90c6790ddde2a18b5a5da756b4a43375fc303bd7dda167e93154c216d58cb66.png"
          />
          <span class="paragraph2">
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
      loopData0: [
        {
          lanhutext0: '认证企业信息',
          lanhufontColor0: 'rgba(64,63,63,0.65)',
          lanhutext1: '确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。',
          lanhufontColor1: 'rgba(0,0,0,0.36000000000000004)'
        },
        {
          lanhutext0: '填写并提交企业信息',
          lanhufontColor0: 'rgba(64,63,63,1)',
          lanhutext1:
            '按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；',
          lanhufontColor1: 'rgba(0,0,0,0.52)'
        },
        {
          lanhutext0: '缴纳年费',
          lanhufontColor0: 'rgba(64,63,63,0.65)',
          lanhutext1:
            '上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。',
          lanhufontColor1: 'rgba(0,0,0,0.36000000000000004)'
        }
      ],
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