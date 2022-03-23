<template>
  <div class="page flex-col">
    <div class="bd1 flex-col">
      <div class="bd2 flex-col align-center">
        <div class="group1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <div class="bd3 flex-col align-center"><span class="word1">发现音乐</span></div>
          <span class="word2">我的音乐</span>
          <span class="info1">音乐人开放平台</span>
          <span class="txt1">关于我们</span>
          <div class="bd4 flex-col"><span class="word3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="word4">登录/注册</span>
        </div>
      </div>
      <div class="bd5 flex-col">
        <div class="box1 flex-row justify-between">
          <span class="txt2">推荐</span>
          <span class="info2">音乐人</span>
          <span class="txt3">排行榜</span>
          <span class="word5">歌手</span>
          <span class="txt4">专辑</span>
          <span class="word6">歌单</span>
          <span class="info3">MV</span>
        </div>
        <div class="box2 flex-row"><div class="bd6 flex-col"></div></div>
      </div>
      <span class="word7">发现音乐&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;搜索</span>
      <div class="bd7 flex-row justify-between">
        <div class="bd8 flex-col justify-center">
          <div class="block1 flex-row justify-between">
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="word8">李</span>
          </div>
        </div>
        <button class="bd9 flex-col justify-center align-center" @click="onClick_1">
          <span class="txt5">搜索</span>
        </button>
      </div>
      <div class="bd10 flex-col align-center">
        <div class="box3 flex-col">
          <div class="wrap1 flex-row justify-between">
            <span class="info4">歌曲</span>
            <span class="word9">歌手</span>
            <span class="word10">专辑</span>
            <span class="info5">歌单</span>
            <span class="txt6">MV</span>
            <span class="word11">用户</span>
          </div>
          <div class="wrap2 flex-col"></div>
          <div class="wrap3 flex-col justify-center">
            <div class="outer1 flex-row">
              <span class="info6">歌曲</span>
              <span class="word12">歌手</span>
              <span class="info7">专辑</span>
              <span class="txt7">时长</span>
            </div>
          </div>
          <div class="wrap4 flex-col justify-center">
            <div class="group2 flex-row">
              <span class="word13">1</span>
              <div class="group3 flex-col">
                <img
                  class="img2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng29000b13efa4abe6e25c755c738ede2a673a7ef5bd3942be3e3ac55d600b4862.png"
                />
              </div>
              <span class="word14">渐暖</span>
              <div class="group4 flex-col justify-center align-center"><span class="word15">MV</span></div>
              <span class="word16">时代少年团</span>
              <span class="word17">03:10</span>
            </div>
            <span class="word18">渐暖</span>
          </div>
          <div class="wrap5 flex-col justify-center">
            <div class="layer1 flex-row">
              <span class="txt8">3</span>
              <div class="block2 flex-col">
                <img
                  class="img3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng1773eacdbedd4a0bcd3e50d16cbf24ef163d6a2f162e761bebb4f42e6490fee5.png"
                />
              </div>
              <span class="word19">浪漫主义浪漫主义</span>
              <span class="word20">姜云升</span>
              <span class="word21">03:10</span>
            </div>
            <span class="word22">浪漫主义浪漫主义浪漫…</span>
          </div>
          <div class="wrap6 flex-col justify-center">
            <div class="layer2 flex-row">
              <span class="word23">4</span>
              <div class="section1 flex-col">
                <img
                  class="pic1"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9755a0cd9b44a221cc935ad4c84e90378c6e7ea0bf5ec481672a558795a28503.png"
                />
              </div>
              <span class="txt9">慢慢喜欢你</span>
              <div class="section2 flex-col justify-center align-center"><span class="word24">MV</span></div>
              <span class="word25">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
              <span class="word26">03:10</span>
            </div>
            <span class="txt10">闪光的乐队&nbsp;第8期</span>
          </div>
          <div class="wrap7 flex-col justify-center">
            <div class="layer3 flex-row">
              <span class="word27">6</span>
              <div class="mod1 flex-col">
                <img
                  class="img4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngaaa0965275fa628f3a843af88e62e3b113e1ed341a516e389faccf2d98a2a4d5.png"
                />
              </div>
              <span class="info8">The&nbsp;Joker&nbsp;And&nbsp;The&nbsp;&nbsp;…</span>
              <span class="txt11">Ed&nbsp;Sheeran&nbsp;/Taylor&nbsp;…</span>
              <span class="word28">03:10</span>
            </div>
            <span class="info9">闪光的乐队&nbsp;第8期</span>
          </div>
          <div class="wrap8 flex-col justify-center">
            <div class="layer4 flex-row">
              <span class="word29">8</span>
              <div class="bd11 flex-col">
                <img
                  class="img5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngdb270d23615cb9d8e242c2cf4ab0980bc69b7c091e4cbbf86bad3673da7ba622.png"
                />
              </div>
              <div class="bd12 flex-col justify-center align-center"><span class="word30">MV</span></div>
              <span class="txt12">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
              <span class="info10">03:10</span>
            </div>
            <span class="word31">我的爱像缺了一块</span>
            <span class="info11">闪光的乐队&nbsp;第8期</span>
          </div>
          <div class="wrap9 flex-col justify-center">
            <div class="box4 flex-row">
              <span class="info12">10</span>
              <div class="main1 flex-col">
                <img
                  class="img6"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng0ffc2f8e3c91efcd1629cc3cfa9042b054d48d8ab95c759159fa808d12073876.png"
                />
              </div>
              <span class="word32">慢慢喜欢你</span>
              <div class="main2 flex-col justify-center align-center"><span class="word33">MV</span></div>
              <span class="info13">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
              <span class="word34">03:10</span>
            </div>
            <span class="txt13">闪光的乐队&nbsp;第8期</span>
          </div>
        </div>
        <div class="box5 flex-col justify-center">
          <div class="outer2 flex-row">
            <span class="txt14">2</span>
            <div class="block3 flex-col">
              <img
                class="pic2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng4ce3e4a9b5ed10236d558ec03ce36f8a761ba5a1493b085d9c9ffdbfc183aec1.png"
              />
            </div>
            <span class="info14">你从未离去</span>
            <div class="block4 flex-col justify-center align-center"><span class="word35">MV</span></div>
            <span class="txt15">白挺</span>
            <span class="txt16">03:10</span>
          </div>
          <span class="word36">渐暖</span>
        </div>
        <div class="box6 flex-col justify-center">
          <div class="section3 flex-row">
            <span class="info15">5</span>
            <div class="mod2 flex-col"></div>
            <span class="txt17">我知道是你</span>
            <div class="mod3 flex-col justify-center align-center"><span class="word37">MV</span></div>
            <span class="txt18">王靖雯&nbsp;/唐汉霄&nbsp;/信</span>
            <span class="word38">03:10</span>
          </div>
          <span class="word39">——</span>
        </div>
        <img
          class="img7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngbfde0a67eaa0b8e702fdb586849a613cdc3022743b06c35245e02e493d57d447.png"
        />
        <div class="box7 flex-col justify-center">
          <div class="mod4 flex-row">
            <span class="txt19">7</span>
            <div class="section4 flex-col">
              <img
                class="pic3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngaaa0965275fa628f3a843af88e62e3b113e1ed341a516e389faccf2d98a2a4d5.png"
              />
            </div>
            <span class="info16">The&nbsp;Joker&nbsp;And&nbsp;The&nbsp;Queen&nbsp;between&nbsp;us</span>
            <div class="section5 flex-col justify-center align-center"><span class="info17">MV</span></div>
            <span class="info18">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
            <span class="word40">03:10</span>
          </div>
          <span class="txt20">闪光的乐队&nbsp;第8期</span>
        </div>
        <div class="box8 flex-col justify-center">
          <div class="box9 flex-row">
            <span class="txt21">9</span>
            <div class="layer5 flex-col">
              <img
                class="img8"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng46ff0cdfcf276064a1d5d06b7391c8026fa1c658679a221aa29ea2de1960f4c8.png"
              />
            </div>
            <span class="word41">说说话</span>
            <div class="layer6 flex-col justify-center align-center"><span class="info19">MV</span></div>
            <span class="txt22">王靖雯&nbsp;/唐汉霄&nbsp;/信</span>
            <span class="txt23">03:10</span>
          </div>
          <span class="word42">闪光的乐队&nbsp;第8期</span>
        </div>
      </div>
    </div>
    <div class="bd13 flex-col"></div>
    <div class="bd14 flex-col justify-center">
      <div class="wrap10 flex-row">
        <span class="txt24">11</span>
        <div class="layer7 flex-col">
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngaaa0965275fa628f3a843af88e62e3b113e1ed341a516e389faccf2d98a2a4d5.png"
          />
        </div>
        <span class="word43">The&nbsp;Joker&nbsp;And&nbsp;The&nbsp;Queen&nbsp;between&nbsp;us</span>
        <div class="layer8 flex-col justify-center align-center"><span class="word44">MV</span></div>
        <span class="word45">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
        <span class="word46">03:10</span>
      </div>
      <span class="word47">闪光的乐队&nbsp;第8期</span>
    </div>
    <div class="bd15 flex-col">
      <div class="outer3 flex-row">
        <div class="mod5 flex-col">
          <img
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="mod6 flex-col justify-between">
          <div class="outer4 flex-row">
            <span class="txt25">慢慢喜欢你</span>
            <span class="word48">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="word49">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="img9"
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
          class="label3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="icon2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img10"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="label5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="mod7 flex-col">
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="label6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="pic5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="mod8 flex-col justify-between">
          <img
            class="label7"
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
      <div class="outer5 flex-col justify-center"><span class="txt26">123</span></div>
    </div>
    <div class="bd16 flex-col justify-center align-center">
      <div class="layer9 flex-row">
        <span class="info20">12</span>
        <div class="layer10 flex-col">
          <img
            class="img11"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb270d23615cb9d8e242c2cf4ab0980bc69b7c091e4cbbf86bad3673da7ba622.png"
          />
        </div>
        <div class="layer11 flex-col justify-center align-center"><span class="info21">MV</span></div>
        <span class="txt27">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
        <span class="info22">03:10</span>
      </div>
      <span class="word50">我的爱像缺了一块</span>
      <span class="info23">闪光的乐队&nbsp;第8期</span>
    </div>
    <div class="bd17 flex-col">
      <div class="bd18 flex-col">
        <div class="mod9 flex-row justify-between">
          <span class="txt28">关于我们</span>
          <span class="word51">监督举报</span>
          <span class="info24">广告服务</span>
          <span class="txt29">版权指引</span>
          <span class="word52">隐私政策</span>
          <span class="info25">招聘信息</span>
          <span class="txt30">客服中心</span>
        </div>
        <div class="mod10 flex-col"></div>
        <img
          class="pic6"
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