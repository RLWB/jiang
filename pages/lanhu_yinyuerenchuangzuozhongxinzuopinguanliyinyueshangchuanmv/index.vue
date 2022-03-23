<template>
  <div class="page flex-col">
    <div class="group1 flex-col">
      <div class="outer1 flex-col">
        <div class="layer1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">音乐人创作平台</span>
          <div class="group2 flex-col"><span class="word1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="group3 flex-col"></div>
          <span class="info1">哗啦啦</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="outer2 flex-row justify-between">
        <div class="main1 flex-col">
          <div class="mod1 flex-col">
            <div class="mod2 flex-col">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecb6d17466c5310388a065780d1a95cdc4f3dacc85c750acdf1bea64da6c8b71.png"
              />
              <span class="word2">个人中心</span>
              <div class="mod3 flex-col"></div>
            </div>
            <span class="word3">作品数据</span>
            <div class="mod4 flex-col">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1c451e678bb4c8ce2c7a903a28756653de2d76e5f65a098fe7e227776a8a70e9.png"
              />
              <span class="word4">收入数据</span>
              <div class="mod5 flex-col"></div>
            </div>
            <div class="mod6 flex-col">
              <img
                class="icon4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge394ab96b7902e44a38b6f51507a060bb1b533e1d9ef3c51bef5790303210028.png"
              />
              <span class="word5">作品管理</span>
              <div class="block1 flex-col"></div>
              <div class="block2 flex-col"></div>
            </div>
            <div class="mod7 flex-col">
              <span class="txt2">音乐</span>
              <div class="main2 flex-col"></div>
            </div>
            <div class="mod8 flex-col">
              <span class="txt3">专辑</span>
              <div class="bd1 flex-col"></div>
            </div>
            <div class="mod9 flex-col">
              <span class="word6">MV</span>
              <div class="box1 flex-col"></div>
            </div>
            <div class="mod10 flex-col">
              <span class="info2">KTV视频</span>
              <div class="section1 flex-col"></div>
            </div>
            <div class="mod11 flex-col">
              <img
                class="icon5"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng946a2dca00ee20cfbb92484550f0e5acc563c710e63cecd7c7b538240662f107.png"
              />
              <span class="info3">版权管理</span>
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng16c39313b83e7110b93cc3c5bf90aae946e3bc9ccf83ffe8f29012d75dbbc840.png"
              />
              <div class="box2 flex-col"></div>
            </div>
            <div class="mod12 flex-col">
              <span class="txt4">歌曲版权</span>
              <div class="bd2 flex-col"></div>
            </div>
            <div class="mod13 flex-col">
              <span class="word7">词版权</span>
              <div class="group4 flex-col"></div>
            </div>
            <div class="mod14 flex-col">
              <span class="txt5">曲版权</span>
              <div class="mod15 flex-col"></div>
            </div>
            <div class="mod16 flex-row justify-between">
              <div class="block3 flex-col"></div>
              <span class="word8">下载客户端</span>
            </div>
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="info4">手机扫描二维码下载客户端</span>
          </div>
          <div class="mod17 flex-col"></div>
        </div>
        <div class="main3 flex-col">
          <div class="box3 flex-col">
            <div class="outer3 flex-row">
              <div class="outer4 flex-col"></div>
              <span class="txt6">作品管理-歌曲</span>
              <button class="outer5 flex-col" @click="onClick_1"><span class="txt7">发布歌曲</span></button>
            </div>
            <div class="outer6 flex-col"></div>
            <div class="outer7 flex-col">
              <div class="block4 flex-row justify-between">
                <span class="word9">序号</span>
                <span class="word10">歌曲名称</span>
                <span class="txt8">歌手</span>
                <span class="word11">专辑</span>
                <span class="txt9">发布时间</span>
                <span class="word12">制作KTV视频</span>
                <span class="info5">上传MV</span>
                <span class="word13">操作</span>
              </div>
            </div>
            <div class="outer8 flex-col">
              <div class="group5 flex-row">
                <span class="txt10">1</span>
                <span class="word14">慢慢喜欢你</span>
                <span class="info6">时代少年团</span>
                <span class="word15">理想三旬</span>
                <span class="txt11">2022-02-01</span>
                <span class="word16">是</span>
                <span class="word17">是</span>
                <span class="txt12">详情</span>
                <span class="word18">申请下架</span>
              </div>
            </div>
            <div class="outer9 flex-col"></div>
            <div class="outer10 flex-col">
              <div class="group6 flex-row">
                <span class="info7">2</span>
                <span class="info8">慢慢喜欢你</span>
                <span class="txt13">时代少年团</span>
                <span class="word19">理想三旬</span>
                <span class="info9">2022-02-01</span>
                <div class="bd3 flex-col"><span class="txt14">上传KTV视频</span></div>
                <button class="bd4 flex-col" @click="onClick_2"><span class="word20">上传MV</span></button>
                <span class="word21">详情</span>
                <span class="info10">申请下架</span>
              </div>
              <span class="txt15">是</span>
              <span class="word22">是</span>
            </div>
            <div class="outer11 flex-col"></div>
            <div class="outer12 flex-col">
              <div class="mod18 flex-row">
                <span class="txt16">3</span>
                <span class="txt17">慢慢喜欢你</span>
                <span class="word23">时代少年团</span>
                <span class="txt18">理想三旬</span>
                <span class="info11">2022-02-01</span>
                <span class="word24">是</span>
                <button class="group7 flex-col" @click="onClick_3"><span class="info12">上传MV</span></button>
                <span class="word25">详情</span>
                <span class="txt19">申请下架</span>
              </div>
              <span class="word26">是</span>
            </div>
            <div class="outer13 flex-col"></div>
            <div class="outer14 flex-col">
              <div class="box4 flex-row">
                <span class="txt20">4</span>
                <span class="word27">慢慢喜欢你</span>
                <span class="txt21">时代少年团</span>
                <span class="word28">理想三旬</span>
                <span class="word29">2022-02-01</span>
                <div class="block5 flex-col"><span class="word30">上传KTV视频</span></div>
                <span class="info13">是</span>
                <span class="txt22">详情</span>
                <span class="info14">申请下架</span>
              </div>
              <span class="txt23">是</span>
            </div>
            <div class="outer15 flex-col"></div>
            <div class="outer16 flex-col">
              <div class="main4 flex-row">
                <span class="txt24">5</span>
                <span class="word31">慢慢喜欢你</span>
                <span class="info15">时代少年团</span>
                <span class="info16">理想三旬</span>
                <span class="word32">2022-02-01</span>
                <span class="txt25">是</span>
                <span class="word33">是</span>
                <span class="txt26">详情</span>
                <span class="txt27">申请下架</span>
              </div>
            </div>
            <div class="outer17 flex-col"></div>
            <div class="outer18 flex-col">
              <div class="section2 flex-row">
                <span class="word34">6</span>
                <span class="txt28">慢慢喜欢你</span>
                <span class="word35">时代少年团</span>
                <span class="word36">理想三旬</span>
                <span class="word37">2022-02-01</span>
                <div class="group8 flex-col"><span class="txt29">上传KTV视频</span></div>
                <button class="group9 flex-col" @click="onClick_4"><span class="txt30">上传MV</span></button>
                <span class="word38">详情</span>
                <span class="word39">申请下架</span>
              </div>
              <span class="txt31">是</span>
              <span class="word40">是</span>
            </div>
            <div class="outer19 flex-col"></div>
            <div class="outer20 flex-col">
              <div class="bd5 flex-row">
                <span class="txt32">7</span>
                <span class="word41">慢慢喜欢你</span>
                <span class="txt33">时代少年团</span>
                <span class="info17">理想三旬</span>
                <span class="word42">2022-02-01</span>
                <span class="info18">是</span>
                <button class="bd6 flex-col" @click="onClick_5"><span class="info19">上传MV</span></button>
                <span class="info20">详情</span>
                <span class="txt34">申请下架</span>
              </div>
              <span class="txt35">是</span>
            </div>
            <div class="outer21 flex-col"></div>
            <div class="outer22 flex-col">
              <div class="layer2 flex-row">
                <span class="word43">8</span>
                <span class="info21">慢慢喜欢你</span>
                <span class="txt36">时代少年团</span>
                <span class="info22">理想三旬</span>
                <span class="word44">2022-02-01</span>
                <div class="section3 flex-col"><span class="info23">制作KTV视频</span></div>
                <span class="word45">是</span>
                <span class="txt37">详情</span>
                <span class="word46">申请下架</span>
              </div>
              <span class="txt38">是</span>
            </div>
            <div class="outer23 flex-col"></div>
            <div class="outer24 flex-col">
              <div class="main5 flex-row">
                <span class="word47">9</span>
                <span class="info24">慢慢喜欢你</span>
                <span class="word48">时代少年团</span>
                <span class="txt39">理想三旬</span>
                <span class="txt40">2022-02-01</span>
                <span class="word49">是</span>
                <span class="word50">是</span>
                <span class="word51">详情</span>
                <span class="word52">申请下架</span>
              </div>
            </div>
            <div class="outer25 flex-col"></div>
            <div class="outer26 flex-col">
              <div class="section4 flex-row">
                <span class="txt41">10</span>
                <span class="txt42">慢慢喜欢你</span>
                <span class="word53">时代少年团</span>
                <span class="txt43">理想三旬</span>
                <span class="word54">2022-02-01</span>
                <div class="group10 flex-col"><span class="word55">制作KTV视频</span></div>
                <button class="group11 flex-col" @click="onClick_6"><span class="word56">上传MV</span></button>
                <span class="txt44">详情</span>
                <span class="txt45">申请下架</span>
              </div>
              <span class="word57">是</span>
              <span class="word58">是</span>
            </div>
            <div class="outer27 flex-col"></div>
            <div class="outer28 flex-col">
              <div class="block6 flex-row">
                <span class="word59">11</span>
                <span class="word60">慢慢喜欢你</span>
                <span class="txt46">时代少年团</span>
                <span class="info25">理想三旬</span>
                <span class="word61">2022-02-01</span>
                <span class="word62">是</span>
                <button class="layer3 flex-col" @click="onClick_7"><span class="txt47">上传MV</span></button>
                <span class="word63">详情</span>
                <span class="txt48">申请下架</span>
              </div>
              <span class="word64">是</span>
            </div>
            <div class="outer29 flex-col"></div>
            <div class="outer30 flex-col">
              <div class="block7 flex-row">
                <span class="word65">12</span>
                <span class="txt49">慢慢喜欢你</span>
                <span class="word66">时代少年团</span>
                <span class="info26">理想三旬</span>
                <span class="txt50">2022-02-01</span>
                <div class="group12 flex-col"><span class="txt51">制作KTV视频</span></div>
                <span class="txt52">是</span>
                <span class="word67">详情</span>
                <span class="word68">申请下架</span>
              </div>
              <span class="txt53">是</span>
            </div>
            <div class="outer31 flex-col"></div>
          </div>
          <div class="box5 flex-col justify-end">
            <div class="block8 flex-row justify-between">
              <span class="word69">审核通过</span>
              <span class="word70">审核中</span>
              <span class="word71">审核未通过</span>
            </div>
            <div class="block9 flex-row"><div class="outer32 flex-col"></div></div>
          </div>
          <div class="box6 flex-col"></div>
        </div>
      </div>
      <div class="outer33 flex-col">
        <div class="section5 flex-col">
          <div class="block10 flex-row justify-between">
            <span class="word72">关于我们</span>
            <span class="word73">监督举报</span>
            <span class="word74">广告服务</span>
            <span class="word75">版权指引</span>
            <span class="word76">隐私政策</span>
            <span class="txt54">招聘信息</span>
            <span class="word77">客服中心</span>
          </div>
          <div class="block11 flex-col"></div>
          <img
            class="img1"
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
    <div class="group13 flex-col">
      <div class="group14 flex-col">
        <span class="info27">上传MV</span>
        <img
          class="label2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="main6 flex-col"></div>
        <span class="info28">上传MV：</span>
        <div class="main7 flex-col">
          <img
            class="icon6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga315001701768c9cc71c6f0ce0580ccba3328401ca2e6a5ac7344c05056d3ee8.png"
          />
        </div>
        <span class="txt55">时长：05:23</span>
        <button class="main8 flex-col" @click="onClick_8"><span class="txt56">本地上传</span></button>
        <span class="word78">MV标题：</span>
        <div class="main9 flex-col"><span class="txt57">一键get好心情：为自己制造快乐</span></div>
        <button class="main10 flex-col" @click="onClick_9"><span class="info29">取消</span></button>
        <button class="main11 flex-col" @click="onClick_10"><span class="txt58">确定</span></button>
      </div>
    </div>
    <div class="group15 flex-col">
      <div class="box7 flex-row">
        <div class="main12 flex-col">
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="main13 flex-col justify-between">
          <div class="group16 flex-row">
            <span class="txt59">慢慢喜欢你</span>
            <span class="word79">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="word80">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic3"
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
          class="icon8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="label5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="label6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="main14 flex-col">
          <img
            class="icon9"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="label7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="main15 flex-col justify-between">
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
          />
          <img
            class="icon10"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
          />
        </div>
      </div>
      <div class="box8 flex-col"><span class="info30">123</span></div>
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />