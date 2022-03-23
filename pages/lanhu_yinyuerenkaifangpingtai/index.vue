<template>
  <div class="page flex-col">
    <div class="layer1 flex-col">
      <div class="block1 flex-col align-center">
        <div class="layer2 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">发现音乐</span>
          <span class="info1">我的音乐</span>
          <div class="mod1 flex-col"><span class="word2">音乐人开放平台</span></div>
          <span class="word3">关于我们</span>
          <div class="mod2 flex-col"><span class="word4">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="mod3 flex-col"></div>
          <span class="word5">用户名</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="block2 flex-row">
        <span class="info2">音乐人拥有以下&nbsp;&nbsp;&nbsp;大特权</span>
        <img
          class="img2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng27981a230114d424b398787b4b85d09be20f09fb4a29f100e8c9cf97d8a0af27.png"
        />
      </div>
      <div class="block3 flex-col"></div>
      <div class="block4 flex-row">
        <div
          class="layer3 flex-col"
          :style="{ background: item.lanhuBg0 }"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <span class="txt1" v-html="item.lanhutext0"></span>
          <div class="wrap1 flex-col" :style="{ background: item.lanhuBg1 }"></div>
          <span class="txt2" v-html="item.lanhutext1"></span>
        </div>
      </div>
      <div class="block5 flex-col"></div>
      <div class="block6 flex-row justify-between">
        <div class="block7 flex-col">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng74788bef5d6635f6bdf6374e3ac33d5fd3fb4bf332039f48dd2d9f656f2e69b9.png"
          />
          <span class="txt3">注册/登录</span>
          <span class="txt4">注册/登录音久音乐平台，支持手机号或第三方登录注册。</span>
          <span class="word6">1</span>
        </div>
        <div class="block8 flex-col">
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5917d10270aec285500108d762e99b1d3014bf6f364f73ea2be269536a1297e3.png"
          />
          <span class="info3">认证企业信息</span>
          <span class="word7">
            确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。
          </span>
          <span class="info4">2</span>
        </div>
        <div class="block9 flex-col">
          <img
            class="img3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5565d3336f111626e9c5b51e08d7d0c5aba5ffd1712a3d8eba53ad5bc842aa4e.png"
          />
          <span class="word8">填写并提交企业信息</span>
          <span class="word9">
            按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="info5">3</span>
        </div>
        <div class="block10 flex-col">
          <img
            class="img4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga5f00eb2fc0d6cc5e8bbb7d122fc6302ba3705a7834ca275dc463eae5ad52e61.png"
          />
          <span class="word10">缴纳年费</span>
          <span class="word11">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
          <span class="word12">4</span>
        </div>
      </div>
      <div class="block11 flex-col justify-center">
        <div class="mod4 flex-col"></div>
        <span class="info6">申请企业音乐人</span>
      </div>
      <div class="block12 flex-col"></div>
      <div class="block13 flex-row justify-between">
        <div class="bd1 flex-col">
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng74788bef5d6635f6bdf6374e3ac33d5fd3fb4bf332039f48dd2d9f656f2e69b9.png"
          />
          <span class="word13">注册/登录</span>
          <span class="word14">注册/登录音久音乐平台，支持手机号或第三方登录注册。</span>
          <span class="txt5">1</span>
        </div>
        <div class="bd2 flex-col">
          <img
            class="img5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5917d10270aec285500108d762e99b1d3014bf6f364f73ea2be269536a1297e3.png"
          />
          <span class="info7">认证个人信息</span>
          <span class="word15">
            确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。
          </span>
          <span class="txt6">2</span>
        </div>
        <div class="bd3 flex-col">
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9f8d46db892a1648974dbe4dc071e1ef45ded5f7e83072477d243f2b454b839f.png"
          />
          <span class="info8">填写并提交个人信息</span>
          <span class="word16">
            按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="word17">3</span>
        </div>
        <div class="bd4 flex-col">
          <img
            class="pic5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng314520dd5f6f73595744ff7230164ec69df9d98fe33028b1f215d177ab86aefd.png"
          />
          <span class="info9">上传音乐作品</span>
          <span class="word18">
            审核通过后，必须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="txt7">4</span>
        </div>
        <div class="bd5 flex-col">
          <img
            class="img6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga5f00eb2fc0d6cc5e8bbb7d122fc6302ba3705a7834ca275dc463eae5ad52e61.png"
          />
          <span class="txt8">缴纳年费</span>
          <span class="word19">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
          <span class="info10">5</span>
        </div>
      </div>
      <div class="block14 flex-col justify-center">
        <div class="group1 flex-col"></div>
        <span class="txt9">申请个人音乐人</span>
      </div>
      <div class="block15 flex-col">
        <div class="outer1 flex-row">
          <div class="layer4 flex-col">
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="layer5 flex-col justify-between">
            <div class="section1 flex-row">
              <span class="word20">慢慢喜欢你</span>
              <span class="info11">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word21">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="img7"
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
            class="icon2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic6"
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
          <div class="layer6 flex-col">
            <img
              class="icon4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="label5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="layer7 flex-col justify-between">
            <img
              class="label6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="img8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="layer8 flex-col justify-between">
            <img
              class="icon5"
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
        <div class="outer2 flex-col justify-center"><span class="word22">123</span></div>
      </div>
      <div class="block16 flex-col">
        <div class="group2 flex-col">
          <div class="box1 flex-row justify-between">
            <span class="word23">关于我们</span>
            <span class="word24">监督举报</span>
            <span class="txt10">广告服务</span>
            <span class="txt11">版权指引</span>
            <span class="word25">隐私政策</span>
            <span class="word26">招聘信息</span>
            <span class="txt12">客服中心</span>
          </div>
          <div class="box2 flex-col"></div>
          <img
            class="pic7"
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
    <div class="layer9 flex-col">
      <div class="mod5 flex-row justify-between">
        <div class="section2 flex-col">
          <div class="bd6 flex-row justify-between">
            <span class="info12">申请企业音乐人</span>
            <div class="outer3 flex-col"></div>
          </div>
        </div>
        <div class="section3 flex-col">
          <div class="main1 flex-row justify-between">
            <span class="word27">申请个人音乐人</span>
            <div class="block17 flex-col"></div>
          </div>
        </div>
      </div>
      <div class="mod6 flex-col">
        <div class="mod7 flex-col">
          <div class="mod8 flex-row justify-between">
            <div class="bd7 flex-col"></div>
            <span class="txt13">最强萌新不迷茫</span>
          </div>
          <div class="mod9 flex-col"></div>
          <span class="word28">
            平台音乐人是音久音乐为广大音乐人提供的一站式数字音乐服务，我们为热爱音乐或者迷茫的萌新准备了更具影响力的的内容平台和丰富多样的曝光渠道，点燃你的未来音乐路。
          </span>
        </div>
        <span class="info13">点燃</span>
        <span class="word29">未来音乐路</span>
      </div>
      <img
        class="pic8"
        referrerpolicy="no-referrer"
        src="./assets/img/SketchPng9f264fb66abb520d4a180df96402971e9786308e7fbb7828167e4779085721ba.png"
      />
    </div>
    <span class="txt14">申请企业音乐人</span>
    <span class="word30">申请个人音乐人</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '音久音乐人身份',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9c6afacbbfdf6498ea8eff4bf7b368de34f0e01d71e64f1289e97cae965bbccd) -111px -19px no-repeat',
          lanhutext1: '发掘潜力音乐人，给优秀作品提供更多机会'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng361dd43036349564709b9cb5addcf504a23cd57f983158d0e74e30a79d1a726d) -14px -13px no-repeat',
          lanhutext0: '歌曲播放量扶持',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng40bca3352b048ef9f699ac90f84df3317e46c354ed20b329c8fd33e6f9733382) -105px -16px no-repeat',
          lanhutext1: '亿万级曝光助力歌曲出圈，影响力升级'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '全网推广',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5684820e5e0b76905c6c9895254395224a879270a74b16ae0a4a0cc60d4500cb) -98px -18px no-repeat',
          lanhutext1: '为音乐人提供全球分发服务，获取海量粉丝'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '实物音像专辑制作发行',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng80c996d75f36097ee91620a73da0723b643dafcbcf84c848d52dc23bb9c86e44) -110px -23px no-repeat',
          lanhutext1: '全方位扶持音乐人，丰富音乐生态圈'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng361dd43036349564709b9cb5addcf504a23cd57f983158d0e74e30a79d1a726d) -14px -13px no-repeat',
          lanhutext0: '全国KTV免费发行',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfd18924121005682a1ba42ef9ba25490ece6fb3c153b8d38cced305e81cbc497) -106px -12px no-repeat',
          lanhutext1: '覆盖全国10000+KTV场所各大平台海量曝光'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '获得收益',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng617cc4287ca9a5c98ce4ce4bc24a832cb8ef8eca0a4ea223c3f1d8f298981702) -98px -12px no-repeat',
          lanhutext1: '为歌曲量身定制多维推广服务'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />