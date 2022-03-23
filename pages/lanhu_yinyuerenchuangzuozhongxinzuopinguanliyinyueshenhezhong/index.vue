<template>
  <div class="page flex-col">
    <div class="section1 flex-col">
      <div class="box1 flex-col">
        <div class="outer1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">音乐人创作平台</span>
          <div class="group1 flex-col"><span class="word2">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="group2 flex-col"></div>
          <span class="info1">哗啦啦</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="box2 flex-row justify-between">
        <div class="wrap1 flex-col">
          <div class="mod1 flex-col">
            <div class="outer2 flex-col">
              <img
                class="icon1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecb6d17466c5310388a065780d1a95cdc4f3dacc85c750acdf1bea64da6c8b71.png"
              />
              <span class="txt1">个人中心</span>
              <div class="mod2 flex-col"></div>
            </div>
            <span class="txt2">作品数据</span>
            <div class="outer3 flex-col">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1c451e678bb4c8ce2c7a903a28756653de2d76e5f65a098fe7e227776a8a70e9.png"
              />
              <span class="word3">收入数据</span>
              <div class="layer1 flex-col"></div>
            </div>
            <div class="outer4 flex-col">
              <img
                class="label3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge394ab96b7902e44a38b6f51507a060bb1b533e1d9ef3c51bef5790303210028.png"
              />
              <span class="word4">作品管理</span>
              <div class="section2 flex-col"></div>
              <div class="section3 flex-col"></div>
            </div>
            <div class="outer5 flex-col">
              <span class="txt3">音乐</span>
              <div class="section4 flex-col"></div>
            </div>
            <div class="outer6 flex-col">
              <span class="info2">专辑</span>
              <div class="group3 flex-col"></div>
            </div>
            <div class="outer7 flex-col">
              <span class="txt4">MV</span>
              <div class="block1 flex-col"></div>
            </div>
            <div class="outer8 flex-col">
              <span class="info3">KTV视频</span>
              <div class="layer2 flex-col"></div>
            </div>
            <div class="outer9 flex-col">
              <img
                class="label4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng946a2dca00ee20cfbb92484550f0e5acc563c710e63cecd7c7b538240662f107.png"
              />
              <span class="txt5">版权管理</span>
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng16c39313b83e7110b93cc3c5bf90aae946e3bc9ccf83ffe8f29012d75dbbc840.png"
              />
              <div class="layer3 flex-col"></div>
            </div>
            <div class="outer10 flex-col">
              <span class="word5">歌曲版权</span>
              <div class="wrap2 flex-col"></div>
            </div>
            <div class="outer11 flex-col">
              <span class="word6">词版权</span>
              <div class="main1 flex-col"></div>
            </div>
            <div class="outer12 flex-col">
              <span class="word7">曲版权</span>
              <div class="block2 flex-col"></div>
            </div>
            <div class="outer13 flex-row justify-between">
              <div class="mod3 flex-col"></div>
              <span class="info4">下载客户端</span>
            </div>
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="word8">手机扫描二维码下载客户端</span>
          </div>
          <div class="mod4 flex-col"></div>
        </div>
        <div class="wrap3 flex-col">
          <div class="wrap4 flex-col">
            <div class="bd1 flex-row">
              <div class="section5 flex-col"></div>
              <span class="txt6">作品管理-歌曲</span>
              <button class="section6 flex-col" @click="onClick_1"><span class="word9">发布歌曲</span></button>
            </div>
            <div class="bd2 flex-col"></div>
            <div class="bd3 flex-col">
              <div class="group4 flex-row">
                <span class="word10">序号</span>
                <span class="info5">歌曲名称</span>
                <span class="word11">歌手</span>
                <span class="info6">专辑</span>
                <span class="info7">提交时间</span>
                <span class="txt7">制作KTV视频</span>
                <span class="txt8">上传MV</span>
              </div>
            </div>
            <div class="bd4 flex-col">
              <div class="wrap5 flex-row">
                <span class="word12">1</span>
                <span class="info8">慢慢喜欢你</span>
                <span class="info9">时代少年团</span>
                <span class="word13">理想三旬</span>
                <span class="word14">2022-02-01</span>
                <span class="txt9">是</span>
                <span class="word15">是</span>
              </div>
            </div>
            <div class="bd5 flex-col"></div>
            <div class="bd6 flex-col">
              <div class="group5 flex-row">
                <span class="word16">2</span>
                <span class="info10">慢慢喜欢你</span>
                <span class="word17">时代少年团</span>
                <span class="word18">理想三旬</span>
                <span class="word19">2022-02-01</span>
                <span class="word20">是</span>
                <span class="txt10">是</span>
              </div>
            </div>
            <div class="bd7 flex-col"></div>
            <div class="bd8 flex-col">
              <div class="bd9 flex-row">
                <span class="txt11">3</span>
                <span class="word21">慢慢喜欢你</span>
                <span class="info11">时代少年团</span>
                <span class="txt12">理想三旬</span>
                <span class="txt13">2022-02-01</span>
                <span class="txt14">是</span>
                <span class="word22">是</span>
              </div>
            </div>
            <div class="bd10 flex-col"></div>
            <div class="bd11 flex-col">
              <div class="mod5 flex-row">
                <span class="txt15">4</span>
                <span class="word23">慢慢喜欢你</span>
                <span class="word24">时代少年团</span>
                <span class="word25">理想三旬</span>
                <span class="txt16">2022-02-01</span>
                <span class="info12">是</span>
                <span class="info13">是</span>
              </div>
            </div>
            <div class="bd12 flex-col"></div>
            <div class="bd13 flex-col">
              <div class="main2 flex-row">
                <span class="word26">5</span>
                <span class="txt17">慢慢喜欢你</span>
                <span class="word27">时代少年团</span>
                <span class="txt18">理想三旬</span>
                <span class="word28">2022-02-01</span>
                <span class="word29">是</span>
                <span class="word30">是</span>
              </div>
            </div>
            <div class="bd14 flex-col"></div>
            <div class="bd15 flex-col">
              <div class="mod6 flex-row">
                <span class="word31">6</span>
                <span class="info14">慢慢喜欢你</span>
                <span class="word32">时代少年团</span>
                <span class="txt19">理想三旬</span>
                <span class="word33">2022-02-01</span>
                <span class="word34">是</span>
                <span class="word35">是</span>
              </div>
            </div>
            <div class="bd16 flex-col"></div>
            <div class="bd17 flex-col">
              <div class="group6 flex-row">
                <span class="info15">7</span>
                <span class="word36">慢慢喜欢你</span>
                <span class="word37">时代少年团</span>
                <span class="word38">理想三旬</span>
                <span class="info16">2022-02-01</span>
                <span class="info17">是</span>
                <span class="info18">是</span>
              </div>
            </div>
            <div class="bd18 flex-col"></div>
            <div class="bd19 flex-col">
              <div class="main3 flex-row">
                <span class="word39">8</span>
                <span class="word40">慢慢喜欢你</span>
                <span class="word41">时代少年团</span>
                <span class="txt20">理想三旬</span>
                <span class="txt21">2022-02-01</span>
                <span class="txt22">是</span>
                <span class="word42">是</span>
              </div>
            </div>
            <div class="bd20 flex-col"></div>
            <div class="bd21 flex-col">
              <div class="wrap6 flex-row">
                <span class="word43">9</span>
                <span class="word44">慢慢喜欢你</span>
                <span class="word45">时代少年团</span>
                <span class="word46">理想三旬</span>
                <span class="word47">2022-02-01</span>
                <span class="txt23">是</span>
                <span class="word48">是</span>
              </div>
            </div>
            <div class="bd22 flex-col"></div>
            <div class="bd23 flex-col">
              <div class="layer4 flex-row">
                <span class="info19">10</span>
                <span class="word49">慢慢喜欢你</span>
                <span class="word50">时代少年团</span>
                <span class="word51">理想三旬</span>
                <span class="txt24">2022-02-01</span>
                <span class="word52">是</span>
                <span class="info20">是</span>
              </div>
            </div>
            <div class="bd24 flex-col"></div>
            <div class="bd25 flex-col">
              <div class="mod7 flex-row">
                <span class="txt25">11</span>
                <span class="info21">慢慢喜欢你</span>
                <span class="word53">时代少年团</span>
                <span class="info22">理想三旬</span>
                <span class="txt26">2022-02-01</span>
                <span class="word54">是</span>
                <span class="info23">是</span>
              </div>
            </div>
            <div class="bd26 flex-col"></div>
            <div class="bd27 flex-col">
              <div class="block3 flex-row">
                <span class="info24">12</span>
                <span class="word55">慢慢喜欢你</span>
                <span class="word56">时代少年团</span>
                <span class="info25">理想三旬</span>
                <span class="word57">2022-02-01</span>
                <span class="txt27">是</span>
                <span class="txt28">是</span>
              </div>
            </div>
            <div class="bd28 flex-col"></div>
          </div>
          <div class="wrap7 flex-col justify-end">
            <div class="main4 flex-row justify-between">
              <span class="word58">审核通过</span>
              <span class="word59">审核中</span>
              <span class="word60">审核未通过</span>
            </div>
            <div class="main5 flex-row"><div class="layer5 flex-col"></div></div>
          </div>
          <div class="wrap8 flex-col"></div>
        </div>
      </div>
      <div class="box3 flex-col">
        <div class="section7 flex-col">
          <div class="main6 flex-row justify-between">
            <span class="txt29">关于我们</span>
            <span class="txt30">监督举报</span>
            <span class="word61">广告服务</span>
            <span class="txt31">版权指引</span>
            <span class="info26">隐私政策</span>
            <span class="word62">招聘信息</span>
            <span class="word63">客服中心</span>
          </div>
          <div class="main7 flex-col"></div>
          <img
            class="img3"
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
    <div class="section8 flex-col">
      <div class="mod8 flex-row">
        <div class="layer6 flex-col">
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="layer7 flex-col justify-between">
          <div class="section9 flex-row">
            <span class="info27">慢慢喜欢你</span>
            <span class="word64">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="txt32">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="label5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
        />
        <img
          class="icon4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="icon5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="pic2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="icon6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="label6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="layer8 flex-col">
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="label8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="layer9 flex-col justify-between">
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
          />
          <img
            class="label9"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
          />
        </div>
      </div>
      <div class="mod9 flex-col"><span class="txt33">123</span></div>
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