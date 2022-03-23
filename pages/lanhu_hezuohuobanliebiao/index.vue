<template>
  <div class="page flex-col">
    <div class="layer1 flex-col">
      <div class="group1 flex-col">
        <div class="outer1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">发现音乐</span>
          <span class="txt1">我的音乐</span>
          <span class="info1">音乐人开放平台</span>
          <span class="word2">关于我们</span>
          <div class="box1 flex-col"><span class="word3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="word4">登录/注册</span>
        </div>
      </div>
      <span class="word5">首页&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;合作伙伴列表</span>
      <div class="group2 flex-row">
        <img
          class="pic2"
          referrerpolicy="no-referrer"
          :src="item.lanhuimage0"
          v-for="(item, index) in loopData0"
          :key="index"
        />
      </div>
      <div class="group3 flex-col">
        <div class="group4 flex-row">
          <div class="block1 flex-col">
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="block2 flex-col justify-between">
            <div class="section1 flex-row">
              <span class="word6">慢慢喜欢你</span>
              <span class="word7">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="txt2">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="pic3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="icon1"
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
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="block3 flex-col">
            <img
              class="label3"
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
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
          />
          <div class="block4 flex-col justify-between">
            <img
              class="label4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="label5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="group5 flex-col"><span class="word8">123</span></div>
      </div>
      <div class="group6 flex-col">
        <div class="outer2 flex-col">
          <div class="layer2 flex-row justify-between">
            <span class="info2">关于我们</span>
            <span class="word9">监督举报</span>
            <span class="word10">广告服务</span>
            <span class="word11">版权指引</span>
            <span class="word12">隐私政策</span>
            <span class="info3">招聘信息</span>
            <span class="word13">客服中心</span>
          </div>
          <div class="layer3 flex-col"></div>
          <img
            class="img2"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4bc2a2776ad5ce09fa011de36107918b2b567cbb8f3fc32734add14a61ee609c'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0909308148f547d1ae375d59dd019d75866700a8d5e9cfc01044a16a7ed5ce07'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5856562afa155f5ad83d654527eeac8c20642a30693242590b6baa7468a18b31'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e1df454942c5743ee9d8d52b89d4778638c34649f03e94b48b10197182b7302'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge112e10747a78a6e2b000edb5c801b3d39662b2e8aee62f0d0f23c55edf69b8f'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng90626266020988e1d945fc58eed66af8837a5992f7bd6de18c459c8780b59fcc'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbbd26bd50d428ce66014da900b1838dfd7d2ea1dce5b5bbd441e2bf51d11b462'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaefd02e88d867a63a81ae6835bc5352f8f62c1d588b343bf38ccfdb8497808d2'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng793219b67478729c1abcd88d43270f1a50569c444c15b3ca4fa9149bc06e9f76'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4224c01945c3e13cab9e17fdf786a4ddf317388dc7fa6192c6564e26b8f642a4'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng817e56c1913154e984b2052fac0c965ad9bad67476bc2d72b445c99d8d7443e1'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng85f5954c788fea2b30417e7a2590f95969c64cd776d423a9cf7f9e8f2c4b5197'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4bc2a2776ad5ce09fa011de36107918b2b567cbb8f3fc32734add14a61ee609c'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0909308148f547d1ae375d59dd019d75866700a8d5e9cfc01044a16a7ed5ce07'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5856562afa155f5ad83d654527eeac8c20642a30693242590b6baa7468a18b31'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e1df454942c5743ee9d8d52b89d4778638c34649f03e94b48b10197182b7302'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge112e10747a78a6e2b000edb5c801b3d39662b2e8aee62f0d0f23c55edf69b8f'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng90626266020988e1d945fc58eed66af8837a5992f7bd6de18c459c8780b59fcc'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbbd26bd50d428ce66014da900b1838dfd7d2ea1dce5b5bbd441e2bf51d11b462'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaefd02e88d867a63a81ae6835bc5352f8f62c1d588b343bf38ccfdb8497808d2'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng793219b67478729c1abcd88d43270f1a50569c444c15b3ca4fa9149bc06e9f76'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4224c01945c3e13cab9e17fdf786a4ddf317388dc7fa6192c6564e26b8f642a4'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng817e56c1913154e984b2052fac0c965ad9bad67476bc2d72b445c99d8d7443e1'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng85f5954c788fea2b30417e7a2590f95969c64cd776d423a9cf7f9e8f2c4b5197'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4bc2a2776ad5ce09fa011de36107918b2b567cbb8f3fc32734add14a61ee609c'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0909308148f547d1ae375d59dd019d75866700a8d5e9cfc01044a16a7ed5ce07'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5856562afa155f5ad83d654527eeac8c20642a30693242590b6baa7468a18b31'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e1df454942c5743ee9d8d52b89d4778638c34649f03e94b48b10197182b7302'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge112e10747a78a6e2b000edb5c801b3d39662b2e8aee62f0d0f23c55edf69b8f'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng90626266020988e1d945fc58eed66af8837a5992f7bd6de18c459c8780b59fcc'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbbd26bd50d428ce66014da900b1838dfd7d2ea1dce5b5bbd441e2bf51d11b462'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaefd02e88d867a63a81ae6835bc5352f8f62c1d588b343bf38ccfdb8497808d2'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng793219b67478729c1abcd88d43270f1a50569c444c15b3ca4fa9149bc06e9f76'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4224c01945c3e13cab9e17fdf786a4ddf317388dc7fa6192c6564e26b8f642a4'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng817e56c1913154e984b2052fac0c965ad9bad67476bc2d72b445c99d8d7443e1'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng85f5954c788fea2b30417e7a2590f95969c64cd776d423a9cf7f9e8f2c4b5197'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />