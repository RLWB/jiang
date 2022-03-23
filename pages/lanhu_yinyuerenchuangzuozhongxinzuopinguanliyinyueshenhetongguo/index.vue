<template>
  <div class="page flex-col">
    <div class="box1 flex-col">
      <div class="box2 flex-col">
        <div class="layer1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">音乐人创作平台</span>
          <div class="group1 flex-col"><span class="txt1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="group2 flex-col"></div>
          <span class="word2">哗啦啦</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="box3 flex-row justify-between">
        <div class="box4 flex-col">
          <div class="layer2 flex-col">
            <div class="outer1 flex-col">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecb6d17466c5310388a065780d1a95cdc4f3dacc85c750acdf1bea64da6c8b71.png"
              />
              <span class="word3">个人中心</span>
              <div class="mod1 flex-col"></div>
            </div>
            <span class="word4">作品数据</span>
            <div class="outer2 flex-col">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1c451e678bb4c8ce2c7a903a28756653de2d76e5f65a098fe7e227776a8a70e9.png"
              />
              <span class="txt2">收入数据</span>
              <div class="bd1 flex-col"></div>
            </div>
            <div class="outer3 flex-col">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge394ab96b7902e44a38b6f51507a060bb1b533e1d9ef3c51bef5790303210028.png"
              />
              <span class="txt3">作品管理</span>
              <div class="wrap1 flex-col"></div>
              <div class="wrap2 flex-col"></div>
            </div>
            <div class="outer4 flex-col">
              <span class="txt4">音乐</span>
              <div class="main1 flex-col"></div>
            </div>
            <div class="outer5 flex-col">
              <span class="txt5">专辑</span>
              <div class="wrap3 flex-col"></div>
            </div>
            <div class="outer6 flex-col">
              <span class="word5">MV</span>
              <div class="section1 flex-col"></div>
            </div>
            <div class="outer7 flex-col">
              <span class="word6">KTV视频</span>
              <div class="bd2 flex-col"></div>
            </div>
            <div class="outer8 flex-col">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng946a2dca00ee20cfbb92484550f0e5acc563c710e63cecd7c7b538240662f107.png"
              />
              <span class="word7">版权管理</span>
              <img
                class="label3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng16c39313b83e7110b93cc3c5bf90aae946e3bc9ccf83ffe8f29012d75dbbc840.png"
              />
              <div class="outer9 flex-col"></div>
            </div>
            <div class="outer10 flex-col">
              <span class="info1">歌曲版权</span>
              <div class="bd3 flex-col"></div>
            </div>
            <div class="outer11 flex-col">
              <span class="info2">词版权</span>
              <div class="wrap4 flex-col"></div>
            </div>
            <div class="outer12 flex-col">
              <span class="word8">曲版权</span>
              <div class="section2 flex-col"></div>
            </div>
            <div class="outer13 flex-row justify-between">
              <div class="wrap5 flex-col"></div>
              <span class="word9">下载客户端</span>
            </div>
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="info3">手机扫描二维码下载客户端</span>
          </div>
          <div class="layer3 flex-col"></div>
        </div>
        <div class="box5 flex-col">
          <div class="layer4 flex-col">
            <div class="bd4 flex-row">
              <div class="outer14 flex-col"></div>
              <span class="info4">作品管理-歌曲</span>
              <button class="outer15 flex-col" @click="onClick_1"><span class="word10">发布歌曲</span></button>
            </div>
            <div class="bd5 flex-col">
              <div class="section3 flex-row justify-between">
                <span class="word11">序号</span>
                <span class="txt6">歌曲名称</span>
                <span class="txt7">歌手</span>
                <span class="word12">专辑</span>
                <span class="word13">发布时间</span>
                <span class="word14">制作KTV视频</span>
                <span class="info5">上传MV</span>
                <span class="info6">操作</span>
              </div>
            </div>
            <div class="bd6 flex-col">
              <div class="layer5 flex-row">
                <span class="word15">1</span>
                <span class="word16">慢慢喜欢你</span>
                <span class="info7">时代少年团</span>
                <span class="info8">理想三旬</span>
                <span class="info9">2022-02-01</span>
                <span class="word17">是</span>
                <span class="txt8">是</span>
                <span class="word18">详情</span>
                <span class="word19">申请下架</span>
              </div>
            </div>
            <div class="bd7 flex-col"></div>
            <div class="bd8 flex-col">
              <div class="section4 flex-row">
                <span class="word20">2</span>
                <span class="word21">慢慢喜欢你</span>
                <span class="info10">时代少年团</span>
                <span class="word22">理想三旬</span>
                <span class="info11">2022-02-01</span>
                <div class="group3 flex-col"><span class="word23">制作KTV视频</span></div>
                <button class="group4 flex-col" @click="onClick_2"><span class="txt9">上传MV</span></button>
                <span class="word24">详情</span>
                <span class="info12">申请下架</span>
              </div>
              <span class="word25">是</span>
              <span class="word26">是</span>
            </div>
            <div class="bd9 flex-col"></div>
            <div class="bd10 flex-col">
              <div class="section5 flex-row">
                <span class="word27">3</span>
                <span class="txt10">慢慢喜欢你</span>
                <span class="txt11">时代少年团</span>
                <span class="word28">理想三旬</span>
                <span class="info13">2022-02-01</span>
                <span class="word29">是</span>
                <button class="wrap6 flex-col" @click="onClick_3"><span class="txt12">上传MV</span></button>
                <span class="word30">详情</span>
                <span class="info14">申请下架</span>
              </div>
              <span class="word31">是</span>
            </div>
            <div class="bd11 flex-col"></div>
            <div class="bd12 flex-col">
              <div class="wrap7 flex-row">
                <span class="word32">4</span>
                <span class="word33">慢慢喜欢你</span>
                <span class="txt13">时代少年团</span>
                <span class="txt14">理想三旬</span>
                <span class="word34">2022-02-01</span>
                <div class="outer16 flex-col"><span class="info15">制作KTV视频</span></div>
                <span class="word35">是</span>
                <span class="word36">详情</span>
                <span class="word37">申请下架</span>
              </div>
              <span class="info16">是</span>
            </div>
            <div class="bd13 flex-col"></div>
            <div class="bd14 flex-col">
              <div class="bd15 flex-row">
                <span class="word38">5</span>
                <span class="word39">慢慢喜欢你</span>
                <span class="word40">时代少年团</span>
                <span class="txt15">理想三旬</span>
                <span class="txt16">2022-02-01</span>
                <span class="word41">是</span>
                <span class="word42">是</span>
                <span class="info17">详情</span>
                <span class="info18">申请下架</span>
              </div>
            </div>
            <div class="bd16 flex-col"></div>
            <div class="bd17 flex-col">
              <div class="main2 flex-row">
                <span class="txt17">6</span>
                <span class="word43">慢慢喜欢你</span>
                <span class="txt18">时代少年团</span>
                <span class="txt19">理想三旬</span>
                <span class="info19">2022-02-01</span>
                <div class="box6 flex-col"><span class="word44">制作KTV视频</span></div>
                <button class="box7 flex-col" @click="onClick_4"><span class="txt20">上传MV</span></button>
                <span class="word45">详情</span>
                <span class="info20">申请下架</span>
              </div>
              <span class="info21">是</span>
              <span class="info22">是</span>
            </div>
            <div class="bd18 flex-col"></div>
            <div class="bd19 flex-col">
              <div class="group5 flex-row">
                <span class="word46">7</span>
                <span class="txt21">慢慢喜欢你</span>
                <span class="txt22">时代少年团</span>
                <span class="info23">理想三旬</span>
                <span class="info24">2022-02-01</span>
                <span class="word47">是</span>
                <button class="outer17 flex-col" @click="onClick_5"><span class="word48">上传MV</span></button>
                <span class="word49">详情</span>
                <span class="word50">申请下架</span>
              </div>
              <span class="word51">是</span>
            </div>
            <div class="bd20 flex-col"></div>
            <div class="bd21 flex-col">
              <div class="mod2 flex-row">
                <span class="txt23">8</span>
                <span class="txt24">慢慢喜欢你</span>
                <span class="word52">时代少年团</span>
                <span class="txt25">理想三旬</span>
                <span class="word53">2022-02-01</span>
                <div class="group6 flex-col"><span class="info25">制作KTV视频</span></div>
                <span class="word54">是</span>
                <span class="txt26">详情</span>
                <span class="info26">申请下架</span>
              </div>
              <span class="info27">是</span>
            </div>
            <div class="bd22 flex-col"></div>
            <div class="bd23 flex-col">
              <div class="mod3 flex-row">
                <span class="info28">9</span>
                <span class="txt27">慢慢喜欢你</span>
                <span class="txt28">时代少年团</span>
                <span class="word55">理想三旬</span>
                <span class="txt29">2022-02-01</span>
                <span class="info29">是</span>
                <span class="info30">是</span>
                <span class="word56">详情</span>
                <span class="word57">申请下架</span>
              </div>
            </div>
            <div class="bd24 flex-col"></div>
            <div class="bd25 flex-col">
              <div class="mod4 flex-row">
                <span class="txt30">10</span>
                <span class="word58">慢慢喜欢你</span>
                <span class="info31">时代少年团</span>
                <span class="word59">理想三旬</span>
                <span class="word60">2022-02-01</span>
                <div class="group7 flex-col"><span class="txt31">制作KTV视频</span></div>
                <button class="group8 flex-col" @click="onClick_6"><span class="txt32">上传MV</span></button>
                <span class="word61">详情</span>
                <span class="txt33">申请下架</span>
              </div>
              <span class="info32">是</span>
              <span class="word62">是</span>
            </div>
            <div class="bd26 flex-col"></div>
            <div class="bd27 flex-col">
              <div class="outer18 flex-row">
                <span class="info33">11</span>
                <span class="txt34">慢慢喜欢你</span>
                <span class="word63">时代少年团</span>
                <span class="word64">理想三旬</span>
                <span class="word65">2022-02-01</span>
                <span class="info34">是</span>
                <button class="main3 flex-col" @click="onClick_7"><span class="txt35">上传MV</span></button>
                <span class="info35">详情</span>
                <span class="word66">申请下架</span>
              </div>
              <span class="txt36">是</span>
            </div>
            <div class="bd28 flex-col"></div>
            <div class="bd29 flex-col">
              <div class="box8 flex-row">
                <span class="word67">12</span>
                <span class="txt37">慢慢喜欢你</span>
                <span class="info36">时代少年团</span>
                <span class="txt38">理想三旬</span>
                <span class="txt39">2022-02-01</span>
                <div class="bd30 flex-col"><span class="txt40">制作KTV视频</span></div>
                <span class="info37">是</span>
                <span class="info38">详情</span>
                <span class="info39">申请下架</span>
              </div>
              <span class="word68">是</span>
            </div>
            <div class="bd31 flex-col"></div>
          </div>
        </div>
      </div>
      <div class="box9 flex-col">
        <div class="bd32 flex-col">
          <div class="bd33 flex-row justify-between">
            <span class="word69">关于我们</span>
            <span class="word70">监督举报</span>
            <span class="word71">广告服务</span>
            <span class="txt41">版权指引</span>
            <span class="word72">隐私政策</span>
            <span class="txt42">招聘信息</span>
            <span class="txt43">客服中心</span>
          </div>
          <div class="bd34 flex-col"></div>
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
    <div class="box10 flex-col"></div>
    <div class="box11 flex-col justify-end">
      <div class="main4 flex-row justify-between">
        <span class="info40">审核通过</span>
        <span class="word73">审核中</span>
        <span class="txt44">审核未通过</span>
      </div>
      <div class="main5 flex-row"><div class="main6 flex-col"></div></div>
    </div>
    <div class="box12 flex-col"></div>
    <div class="box13 flex-col">
      <div class="mod5 flex-row">
        <div class="wrap8 flex-col">
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="wrap9 flex-col justify-between">
          <div class="bd35 flex-row">
            <span class="txt45">慢慢喜欢你</span>
            <span class="info41">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="info42">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic1"
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
          class="icon5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="icon6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="icon7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="wrap10 flex-col">
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="icon8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="wrap11 flex-col justify-between">
          <img
            class="label7"
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
      <div class="mod6 flex-col"><span class="word74">123</span></div>
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />