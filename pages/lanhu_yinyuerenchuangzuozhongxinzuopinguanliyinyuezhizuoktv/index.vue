<template>
  <div class="page flex-col">
    <div class="outer1 flex-col">
      <div class="bd1 flex-col">
        <div class="layer1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">音乐人创作平台</span>
          <div class="layer2 flex-col"><span class="info1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="layer3 flex-col"></div>
          <span class="word1">哗啦啦</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="bd2 flex-row justify-between">
        <div class="mod1 flex-col">
          <div class="section1 flex-col">
            <div class="wrap1 flex-col">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecb6d17466c5310388a065780d1a95cdc4f3dacc85c750acdf1bea64da6c8b71.png"
              />
              <span class="word2">个人中心</span>
              <div class="mod2 flex-col"></div>
            </div>
            <span class="word3">作品数据</span>
            <div class="wrap2 flex-col">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1c451e678bb4c8ce2c7a903a28756653de2d76e5f65a098fe7e227776a8a70e9.png"
              />
              <span class="word4">收入数据</span>
              <div class="wrap3 flex-col"></div>
            </div>
            <div class="wrap4 flex-col">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge394ab96b7902e44a38b6f51507a060bb1b533e1d9ef3c51bef5790303210028.png"
              />
              <span class="word5">作品管理</span>
              <div class="box1 flex-col"></div>
              <div class="box2 flex-col"></div>
            </div>
            <div class="wrap5 flex-col">
              <span class="word6">音乐</span>
              <div class="section2 flex-col"></div>
            </div>
            <div class="wrap6 flex-col">
              <span class="word7">专辑</span>
              <div class="bd3 flex-col"></div>
            </div>
            <div class="wrap7 flex-col">
              <span class="txt2">MV</span>
              <div class="mod3 flex-col"></div>
            </div>
            <div class="wrap8 flex-col">
              <span class="word8">KTV视频</span>
              <div class="main1 flex-col"></div>
            </div>
            <div class="wrap9 flex-col">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng946a2dca00ee20cfbb92484550f0e5acc563c710e63cecd7c7b538240662f107.png"
              />
              <span class="info2">版权管理</span>
              <img
                class="label3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng16c39313b83e7110b93cc3c5bf90aae946e3bc9ccf83ffe8f29012d75dbbc840.png"
              />
              <div class="bd4 flex-col"></div>
            </div>
            <div class="wrap10 flex-col">
              <span class="txt3">歌曲版权</span>
              <div class="box3 flex-col"></div>
            </div>
            <div class="wrap11 flex-col">
              <span class="info3">词版权</span>
              <div class="box4 flex-col"></div>
            </div>
            <div class="wrap12 flex-col">
              <span class="info4">曲版权</span>
              <div class="group1 flex-col"></div>
            </div>
            <div class="wrap13 flex-row justify-between">
              <div class="outer2 flex-col"></div>
              <span class="txt4">下载客户端</span>
            </div>
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="info5">手机扫描二维码下载客户端</span>
          </div>
          <div class="section3 flex-col"></div>
        </div>
        <div class="mod4 flex-col">
          <div class="group2 flex-col">
            <div class="group3 flex-row">
              <div class="mod5 flex-col"></div>
              <span class="txt5">作品管理-歌曲</span>
              <button class="mod6 flex-col" @click="onClick_1"><span class="info6">发布歌曲</span></button>
            </div>
            <div class="group4 flex-col"></div>
            <div class="group5 flex-col">
              <div class="block1 flex-row justify-between">
                <span class="word9">序号</span>
                <span class="word10">歌曲名称</span>
                <span class="word11">歌手</span>
                <span class="txt6">专辑</span>
                <span class="word12">发布时间</span>
                <span class="txt7">上传KTV视频</span>
                <span class="info7">上传MV</span>
                <span class="word13">操作</span>
              </div>
            </div>
            <div class="group6 flex-col">
              <div class="outer3 flex-row">
                <span class="word14">1</span>
                <span class="txt8">慢慢喜欢你</span>
                <span class="txt9">时代少年团</span>
                <span class="word15">理想三旬</span>
                <span class="word16">2022-02-01</span>
                <span class="word17">是</span>
                <span class="word18">是</span>
                <span class="txt10">详情</span>
                <span class="txt11">申请下架</span>
              </div>
            </div>
            <div class="group7 flex-col"></div>
            <div class="group8 flex-col">
              <div class="block2 flex-row">
                <span class="info8">2</span>
                <span class="info9">慢慢喜欢你</span>
                <span class="word19">时代少年团</span>
                <span class="word20">理想三旬</span>
                <span class="info10">2022-02-01</span>
                <div class="mod7 flex-col"><span class="txt12">上传KTV视频</span></div>
                <button class="mod8 flex-col" @click="onClick_2"><span class="word21">上传MV</span></button>
                <span class="info11">详情</span>
                <span class="word22">申请下架</span>
              </div>
              <span class="word23">是</span>
              <span class="word24">是</span>
            </div>
            <div class="group9 flex-col"></div>
            <div class="group10 flex-col">
              <div class="bd5 flex-row">
                <span class="info12">3</span>
                <span class="info13">慢慢喜欢你</span>
                <span class="txt13">时代少年团</span>
                <span class="txt14">理想三旬</span>
                <span class="word25">2022-02-01</span>
                <span class="word26">是</span>
                <button class="bd6 flex-col" @click="onClick_3"><span class="txt15">上传MV</span></button>
                <span class="word27">详情</span>
                <span class="word28">申请下架</span>
              </div>
              <span class="txt16">是</span>
            </div>
            <div class="group11 flex-col"></div>
            <div class="group12 flex-col">
              <div class="box5 flex-row">
                <span class="word29">4</span>
                <span class="word30">慢慢喜欢你</span>
                <span class="info14">时代少年团</span>
                <span class="txt17">理想三旬</span>
                <span class="word31">2022-02-01</span>
                <div class="box6 flex-col"><span class="word32">上传KTV视频</span></div>
                <span class="word33">是</span>
                <span class="word34">详情</span>
                <span class="word35">申请下架</span>
              </div>
              <span class="info15">是</span>
            </div>
            <div class="group13 flex-col"></div>
            <div class="group14 flex-col">
              <div class="mod9 flex-row">
                <span class="info16">5</span>
                <span class="txt18">慢慢喜欢你</span>
                <span class="txt19">时代少年团</span>
                <span class="word36">理想三旬</span>
                <span class="word37">2022-02-01</span>
                <span class="word38">是</span>
                <span class="word39">是</span>
                <span class="info17">详情</span>
                <span class="txt20">申请下架</span>
              </div>
            </div>
            <div class="group15 flex-col"></div>
            <div class="group16 flex-col">
              <div class="section4 flex-row">
                <span class="txt21">6</span>
                <span class="word40">慢慢喜欢你</span>
                <span class="info18">时代少年团</span>
                <span class="info19">理想三旬</span>
                <span class="word41">2022-02-01</span>
                <div class="group17 flex-col"><span class="word42">上传KTV视频</span></div>
                <button class="group18 flex-col" @click="onClick_4"><span class="word43">上传MV</span></button>
                <span class="txt22">详情</span>
                <span class="txt23">申请下架</span>
              </div>
              <span class="word44">是</span>
              <span class="word45">是</span>
            </div>
            <div class="group19 flex-col"></div>
            <div class="group20 flex-col">
              <div class="section5 flex-row">
                <span class="txt24">7</span>
                <span class="txt25">慢慢喜欢你</span>
                <span class="word46">时代少年团</span>
                <span class="word47">理想三旬</span>
                <span class="word48">2022-02-01</span>
                <span class="word49">是</span>
                <button class="group21 flex-col" @click="onClick_5"><span class="info20">上传MV</span></button>
                <span class="txt26">详情</span>
                <span class="word50">申请下架</span>
              </div>
              <span class="word51">是</span>
            </div>
            <div class="group22 flex-col"></div>
            <div class="group23 flex-col">
              <div class="outer4 flex-row">
                <span class="info21">8</span>
                <span class="word52">慢慢喜欢你</span>
                <span class="info22">时代少年团</span>
                <span class="word53">理想三旬</span>
                <span class="info23">2022-02-01</span>
                <div class="bd7 flex-col"><span class="word54">上传KTV视频</span></div>
                <span class="info24">是</span>
                <span class="info25">详情</span>
                <span class="word55">申请下架</span>
              </div>
              <span class="info26">是</span>
            </div>
            <div class="group24 flex-col"></div>
            <div class="group25 flex-col">
              <div class="box7 flex-row">
                <span class="txt27">9</span>
                <span class="word56">慢慢喜欢你</span>
                <span class="word57">时代少年团</span>
                <span class="word58">理想三旬</span>
                <span class="info27">2022-02-01</span>
                <span class="info28">是</span>
                <span class="txt28">是</span>
                <span class="txt29">详情</span>
                <span class="word59">申请下架</span>
              </div>
            </div>
            <div class="group26 flex-col"></div>
            <div class="group27 flex-col">
              <div class="box8 flex-row">
                <span class="word60">10</span>
                <span class="info29">慢慢喜欢你</span>
                <span class="word61">时代少年团</span>
                <span class="info30">理想三旬</span>
                <span class="word62">2022-02-01</span>
                <div class="box9 flex-col"><span class="txt30">上传KTV视频</span></div>
                <button class="box10 flex-col" @click="onClick_6"><span class="info31">上传MV</span></button>
                <span class="word63">详情</span>
                <span class="word64">申请下架</span>
              </div>
              <span class="word65">是</span>
              <span class="word66">是</span>
            </div>
            <div class="group28 flex-col"></div>
            <div class="group29 flex-col">
              <div class="bd8 flex-row">
                <span class="word67">11</span>
                <span class="word68">慢慢喜欢你</span>
                <span class="word69">时代少年团</span>
                <span class="word70">理想三旬</span>
                <span class="txt31">2022-02-01</span>
                <span class="txt32">是</span>
                <button class="section6 flex-col" @click="onClick_7"><span class="txt33">上传MV</span></button>
                <span class="txt34">详情</span>
                <span class="info32">申请下架</span>
              </div>
              <span class="word71">是</span>
            </div>
            <div class="group30 flex-col"></div>
            <div class="group31 flex-col">
              <div class="box11 flex-row">
                <span class="word72">12</span>
                <span class="word73">慢慢喜欢你</span>
                <span class="info33">时代少年团</span>
                <span class="info34">理想三旬</span>
                <span class="info35">2022-02-01</span>
                <div class="section7 flex-col"><span class="word74">上传KTV视频</span></div>
                <span class="word75">是</span>
                <span class="word76">详情</span>
                <span class="info36">申请下架</span>
              </div>
              <span class="txt35">是</span>
            </div>
            <div class="group32 flex-col"></div>
          </div>
          <div class="group33 flex-col justify-end">
            <div class="layer4 flex-row justify-between">
              <span class="word77">审核通过</span>
              <span class="txt36">审核中</span>
              <span class="info37">审核未通过</span>
            </div>
            <div class="layer5 flex-row"><div class="group34 flex-col"></div></div>
          </div>
          <div class="group35 flex-col"></div>
        </div>
      </div>
      <div class="bd9 flex-col">
        <div class="mod10 flex-col">
          <div class="outer5 flex-row justify-between">
            <span class="word78">关于我们</span>
            <span class="info38">监督举报</span>
            <span class="word79">广告服务</span>
            <span class="word80">版权指引</span>
            <span class="info39">隐私政策</span>
            <span class="word81">招聘信息</span>
            <span class="txt37">客服中心</span>
          </div>
          <div class="outer6 flex-col"></div>
          <img
            class="img1"
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
    <div class="outer7 flex-col">
      <div class="outer8 flex-col">
        <span class="word82">制作KTV视频</span>
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="box12 flex-col"></div>
        <div class="box13 flex-col">
          <div class="outer9 flex-col">
            <span class="info40">下面您要制作KTV的歌曲</span>
            <div class="layer6 flex-col">
              <div class="bd10 flex-row justify-between">
                <div class="bd11 flex-col"></div>
                <div class="bd12 flex-col">
                  <span class="txt38">慢慢喜欢你</span>
                  <span class="word83">歌手：陈鸿宇</span>
                  <span class="info41">专辑名称：理想三旬</span>
                  <span class="word84">发行时间：2022-02-02</span>
                </div>
              </div>
            </div>
            <div class="layer7 flex-row justify-between">
              <span class="word85">请留下您的邮箱：</span>
              <span class="txt39">*必填项，邮箱用于将制作完成的视频发给您</span>
            </div>
            <div class="layer8 flex-col"><span class="word86">请输入</span></div>
            <div class="layer9">
              <span class="word87">&nbsp;将制作素材发送至邮箱</span>
              <span class="word88">11111111&#64;qq.com</span>
              <span class="word89">，我们将会为您制作。</span>
            </div>
          </div>
        </div>
        <span class="word90">请选择支付方式</span>
        <div class="box14 flex-col">
          <div class="mod11 flex-row justify-between">
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngfba9cc1b635665caebca33b9db5fb435baee71123d74a6ddf9d701f0260dfd26.png"
            />
            <img
              class="icon4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng003c1f7a8cc203107a03d460fee06680af06a715bd4ad992014d77c8128221ab.png"
            />
          </div>
          <div class="mod12 flex-row"><span class="word91">支付宝支付</span></div>
        </div>
        <div class="box15 flex-col">
          <div class="bd13 flex-col justify-between">
            <img
              class="img3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng15f64b0aa4ee4bab1cfc5e4bb7a5362a36eb5a87b412ff408153d7305c76a87b.png"
            />
            <span class="info42">微信支付</span>
          </div>
        </div>
        <div class="box16 flex-col">
          <div class="box17">
            <span class="txt40">支付金额：</span>
            <span class="info43">10元</span>
          </div>
        </div>
        <div class="box18 flex-col"><span class="word92">立即支付</span></div>
      </div>
    </div>
    <div class="outer10 flex-col">
      <div class="bd14 flex-row">
        <div class="group36 flex-col">
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="group37 flex-col justify-between">
          <div class="box19 flex-row">
            <span class="txt41">慢慢喜欢你</span>
            <span class="word93">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="txt42">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic3"
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
          class="icon6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="icon7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="label6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="label7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="group38 flex-col">
          <img
            class="icon8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="icon9"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="group39 flex-col justify-between">
          <img
            class="icon10"
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
      <div class="bd15 flex-col"><span class="word94">123</span></div>
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