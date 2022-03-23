<template>
  <div class="page flex-col">
    <div class="group1 flex-col">
      <div class="layer1 flex-col align-center">
        <div class="section1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">发现音乐</span>
          <span class="word2">我的音乐</span>
          <span class="info1">音乐人开放平台</span>
          <span class="word3">关于我们</span>
          <div class="mod1 flex-col"><span class="txt1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="mod2 flex-col"></div>
          <span class="word4">用户名</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="layer2 flex-col justify-center">
        <div class="layer3">
          <span class="word5">音乐人开放平台&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
          <span class="info2">&nbsp;&nbsp;&nbsp;</span>
          <span class="txt2">申请个人音乐人</span>
        </div>
      </div>
      <div class="layer4 flex-col">
        <div class="outer1 flex-col justify-center align-center"><span class="txt3">1</span></div>
        <div class="outer2 flex-col"></div>
        <div class="outer3 flex-col justify-center align-center"><span class="word6">2</span></div>
        <div class="outer4 flex-col"></div>
        <div class="outer5 flex-col justify-center align-center"><span class="info3">3</span></div>
        <div class="outer6 flex-col"></div>
        <div class="outer7 flex-col justify-center align-center"><span class="word7">4</span></div>
        <span class="txt4">认证个人信息</span>
        <span class="info4">填写并提交个人信息</span>
        <span class="word8">上传音乐作品</span>
        <span class="info5">缴纳年费</span>
        <span class="word9">
          确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。
        </span>
        <span class="txt5">
          按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
        </span>
        <span class="info6">
          上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
        </span>
        <span class="word10">
          审核通过后，须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息形式发出；
        </span>
      </div>
      <span class="word11">方式一：直接认领歌手</span>
      <span class="word12">直接认领歌手，则无需填写下面信息</span>
      <div class="layer5 flex-row justify-between">
        <div class="mod3 flex-col justify-center">
          <div class="mod4 flex-row justify-between">
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="word13">李</span>
          </div>
        </div>
        <button class="mod5 flex-col justify-center align-center" @click="onClick_1">
          <span class="word14">搜索</span>
        </button>
      </div>
      <span class="word15">方式二：填写个人信息</span>
      <span class="txt6">没有直接认领的歌手？可以直接填写个人信息进行申请</span>
      <div class="layer6 flex-row justify-between">
        <span class="word16">音乐人姓名</span>
        <div class="main1 flex-col justify-center"><span class="txt7">请输入</span></div>
      </div>
      <div class="layer7 flex-row justify-between">
        <span class="txt8">音乐人头像</span>
        <img
          class="pic1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng3811a93180ef732b5e5a6c5058a261480b37523384577c4af8063906811f4f7f.png"
        />
      </div>
      <div class="layer8 flex-row justify-between">
        <span class="word17">歌手类型</span>
        <div class="main2 flex-col justify-center">
          <div class="section2 flex-row justify-between">
            <div class="main3 flex-col justify-center">
              <div class="bd1 flex-row justify-between">
                <span class="word18">流行</span>
                <img
                  class="icon2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng67ab1006f768dc48531dbcbc2e9d181a248c1474224cfd00d688d626a97ff9c0.png"
                />
              </div>
            </div>
            <div class="main4 flex-col justify-center">
              <div class="main5 flex-row justify-between">
                <span class="word19">民谣</span>
                <img
                  class="label2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng67ab1006f768dc48531dbcbc2e9d181a248c1474224cfd00d688d626a97ff9c0.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layer9 flex-row justify-between">
        <span class="txt9">个人简介</span>
        <div class="mod6 flex-col"><span class="txt10">请输入</span></div>
      </div>
      <div class="layer10 flex-row justify-between">
        <span class="word20">手机号</span>
        <div class="mod7 flex-col justify-center"><span class="info7">请输入</span></div>
      </div>
      <div class="layer11 flex-row">
        <span class="word21">验证码</span>
        <div class="block1 flex-col justify-center"><span class="word22">请输入</span></div>
        <button class="block2 flex-col justify-center align-center" @click="onClick_2">
          <span class="word23">获取验证码</span>
        </button>
        <div class="block3 flex-col justify-center"><span class="word24">25s后重新获取</span></div>
      </div>
      <span class="info8">*输入内容不符合格式要求</span>
      <div class="layer12 flex-row justify-between">
        <span class="info9">银行卡号</span>
        <div class="layer13 flex-col justify-center"><span class="txt11">00000000000</span></div>
      </div>
      <span class="txt12">*此项为必填内容，不能为空</span>
      <div class="layer14 flex-row justify-between">
        <span class="word25">开户行</span>
        <div class="bd2 flex-col justify-center"><span class="word26">请输入</span></div>
      </div>
      <div class="layer15 flex-row justify-between">
        <span class="info10">开户名</span>
        <div class="box1 flex-col justify-center"><span class="word27">请输入</span></div>
      </div>
      <div class="layer16 flex-row justify-between">
        <span class="word28">服务条款</span>
        <div class="layer17 flex-col align-center">
          <span class="paragraph1">
            欢迎您使用音久音乐版权推广服务!
            <br />
            为使用音久音乐软件的版权推广服务，您应当阅读并遵守《音久音乐版权推广服务协议》（以下简称“本协议”）相关协议和业务规则。请您务必审慎阅读、充分理解各条款内容，特别是限制或免除责任或知识产权相关等条款，相关的条款会以黑体加粗形式提示您注意。
          </span>
        </div>
      </div>
      <div class="layer18 flex-row justify-between">
        <img
          class="icon3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng24c6b373dc2453247d4cc1e296173f0fed00afbc1d6c325efb53f6682ee69138.png"
        />
        <div class="block4">
          <span class="word29">请点击仔细阅读</span>
          <span class="word30">【音久音乐用户协议】</span>
        </div>
      </div>
      <button class="layer19 flex-col justify-center align-center" @click="onClick_3">
        <span class="word31">提交</span>
      </button>
      <div class="layer20 flex-col">
        <div class="section3 flex-row">
          <div class="wrap1 flex-col">
            <img
              class="icon4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="wrap2 flex-col justify-between">
            <div class="bd3 flex-row">
              <span class="txt13">慢慢喜欢你</span>
              <span class="info11">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word32">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="img2"
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
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="wrap3 flex-col">
            <img
              class="label5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="wrap4 flex-col justify-between">
            <img
              class="label7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="img3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="wrap5 flex-col justify-between">
            <img
              class="icon8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="icon9"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="section4 flex-col justify-center"><span class="word33">123</span></div>
      </div>
      <div class="layer21 flex-col">
        <div class="box2 flex-col">
          <div class="wrap6 flex-row justify-between">
            <span class="info12">关于我们</span>
            <span class="info13">监督举报</span>
            <span class="word34">广告服务</span>
            <span class="info14">版权指引</span>
            <span class="word35">隐私政策</span>
            <span class="info15">招聘信息</span>
            <span class="word36">客服中心</span>
          </div>
          <div class="wrap7 flex-col"></div>
          <img
            class="img4"
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
    <div class="group2 flex-col">
      <div class="mod8 flex-col">
        <div class="group3 flex-row">
          <div class="main6 flex-col"></div>
          <div class="main7">
            <span class="word37">李</span>
            <span class="word38">荣浩</span>
          </div>
          <div class="main8 flex-col justify-center align-center"><span class="info16">认领</span></div>
        </div>
        <div class="group4 flex-col"></div>
        <div class="group5 flex-row">
          <div class="main9 flex-col"></div>
          <div class="main10">
            <span class="word39">李</span>
            <span class="word40">荣浩</span>
          </div>
          <div class="main11 flex-col justify-center align-center"><span class="word41">已认领</span></div>
        </div>
        <div class="group6 flex-col"></div>
        <div class="group7 flex-row">
          <div class="main12 flex-col"></div>
          <div class="main13">
            <span class="word42">李</span>
            <span class="word43">荣浩</span>
          </div>
          <div class="main14 flex-col justify-center align-center"><span class="word44">认领</span></div>
        </div>
        <div class="group8 flex-col"></div>
        <div class="group9 flex-row">
          <div class="mod9 flex-col"></div>
          <div class="mod10">
            <span class="info17">李</span>
            <span class="word45">荣浩</span>
          </div>
          <div class="mod11 flex-col justify-center align-center"><span class="word46">已认领</span></div>
        </div>
        <div class="group10 flex-col"></div>
        <div class="group11 flex-row">
          <div class="bd4 flex-col"></div>
          <div class="bd5">
            <span class="txt14">李</span>
            <span class="word47">荣浩</span>
          </div>
          <div class="bd6 flex-col justify-center align-center"><span class="word48">认领</span></div>
        </div>
        <div class="group12 flex-col"></div>
        <div class="group13 flex-row">
          <div class="layer22 flex-col"></div>
          <div class="layer23">
            <span class="word49">李</span>
            <span class="word50">荣浩</span>
          </div>
          <div class="layer24 flex-col justify-center align-center"><span class="txt15">已认领</span></div>
        </div>
        <div class="group14 flex-col"></div>
      </div>
      <div class="mod12 flex-col"><div class="wrap8 flex-col"></div></div>
    </div>
    <div class="group15 flex-col">
      <div class="box3 flex-col">
        <span class="word51">提交</span>
        <img
          class="label8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="block5 flex-col"></div>
        <span class="word52">您确认认领该歌手？</span>
        <span class="word53">确定后将直接提交审核</span>
        <button class="block6 flex-col justify-center align-center" @click="onClick_4">
          <span class="info18">取消</span>
        </button>
        <button class="block7 flex-col justify-center align-center" @click="onClick_5">
          <span class="word54">确定</span>
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
    },
    onClick_4() {
      alert(1);
    },
    onClick_5() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />