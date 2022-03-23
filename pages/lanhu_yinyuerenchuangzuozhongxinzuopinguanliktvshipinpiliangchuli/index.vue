<template>
  <div class="page flex-col">
    <div class="box1 flex-col">
      <div class="box2 flex-col justify-center">
        <div class="mod1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">音乐人创作平台</span>
          <div class="group1 flex-col"><span class="word1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="group2 flex-col"></div>
          <span class="txt2">哗啦啦</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="box3 flex-row justify-between">
        <div class="mod2 flex-col">
          <div class="bd1 flex-col">
            <div class="mod3 flex-col">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecb6d17466c5310388a065780d1a95cdc4f3dacc85c750acdf1bea64da6c8b71.png"
              />
              <span class="word2">个人中心</span>
              <div class="wrap1 flex-col"></div>
            </div>
            <span class="txt3">作品数据</span>
            <div class="mod4 flex-col">
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1c451e678bb4c8ce2c7a903a28756653de2d76e5f65a098fe7e227776a8a70e9.png"
              />
              <span class="word3">收入数据</span>
              <div class="bd2 flex-col"></div>
            </div>
            <div class="mod5 flex-col">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge394ab96b7902e44a38b6f51507a060bb1b533e1d9ef3c51bef5790303210028.png"
              />
              <span class="word4">作品管理</span>
              <div class="group3 flex-col"></div>
              <div class="group4 flex-col"></div>
            </div>
            <div class="mod6 flex-col">
              <span class="txt4">音乐</span>
              <div class="group5 flex-col"></div>
            </div>
            <div class="mod7 flex-col">
              <span class="word5">专辑</span>
              <div class="bd3 flex-col"></div>
            </div>
            <div class="mod8 flex-col">
              <span class="info1">MV</span>
              <div class="outer1 flex-col"></div>
            </div>
            <div class="mod9 flex-col">
              <div class="section1 flex-col"></div>
              <span class="word6">KTV视频</span>
              <div class="section2 flex-col"></div>
            </div>
            <div class="mod10 flex-col">
              <img
                class="icon4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng946a2dca00ee20cfbb92484550f0e5acc563c710e63cecd7c7b538240662f107.png"
              />
              <span class="word7">版权管理</span>
              <img
                class="icon5"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng16c39313b83e7110b93cc3c5bf90aae946e3bc9ccf83ffe8f29012d75dbbc840.png"
              />
              <div class="block1 flex-col"></div>
            </div>
            <div class="mod11 flex-col">
              <span class="word8">歌曲版权</span>
              <div class="main1 flex-col"></div>
            </div>
            <div class="mod12 flex-col">
              <span class="txt5">词版权</span>
              <div class="layer1 flex-col"></div>
            </div>
            <div class="mod13 flex-col">
              <span class="word9">曲版权</span>
              <div class="main2 flex-col"></div>
            </div>
            <div class="mod14 flex-row justify-between">
              <div class="section3 flex-col"></div>
              <span class="word10">下载客户端</span>
            </div>
            <img
              class="pic1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="txt6">手机扫描二维码下载客户端</span>
          </div>
        </div>
        <div class="mod15 flex-col">
          <div class="block2">
            <span class="word11">作品管理&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
            <span class="word12">&nbsp;&nbsp;&nbsp;KTV视频&nbsp;&nbsp;&nbsp;&gt;</span>
            <span class="word13">&nbsp;</span>
            <span class="word14">批量获取KTV视频</span>
          </div>
          <div class="block3 flex-col align-center">
            <div class="mod16 flex-col">
              <div class="bd4 flex-row justify-between">
                <div class="box4 flex-col"></div>
                <span class="word15">1.选择歌曲</span>
              </div>
              <div class="bd5 flex-row justify-between">
                <div class="outer2 flex-col justify-center">
                  <div class="box5 flex-row justify-between">
                    <img
                      class="icon6"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
                    />
                    <span class="txt7">请输入歌曲名称</span>
                  </div>
                </div>
                <button class="outer3 flex-col justify-center align-center" @click="onClick_1">
                  <span class="word16">搜索</span>
                </button>
              </div>
              <div class="bd6 flex-col justify-center">
                <div class="section4 flex-row">
                  <span class="word17">序号</span>
                  <span class="word18">歌曲名称</span>
                  <span class="txt8">歌手</span>
                  <span class="word19">价格（元）</span>
                  <span class="word20">操作</span>
                </div>
              </div>
              <div class="bd7 flex-col justify-center">
                <div class="box6 flex-row">
                  <span class="info2">1</span>
                  <span class="info3">理想三旬</span>
                  <span class="word21">哈哈哈</span>
                  <span class="word22">10</span>
                  <span class="txt9">删除</span>
                </div>
              </div>
              <div class="bd8 flex-col"></div>
              <div class="bd9 flex-col justify-center">
                <div class="layer2 flex-row">
                  <span class="word23">2</span>
                  <span class="word24">理想三旬</span>
                  <span class="word25">哈哈哈</span>
                  <span class="txt10">10</span>
                  <span class="info4">删除</span>
                </div>
              </div>
              <div class="bd10 flex-col"></div>
              <div class="bd11 flex-col justify-center">
                <div class="mod17 flex-row">
                  <span class="info5">3</span>
                  <span class="word26">理想三旬</span>
                  <span class="txt11">哈哈哈</span>
                  <span class="word27">10</span>
                  <span class="word28">删除</span>
                </div>
              </div>
              <div class="bd12 flex-col"></div>
              <div class="bd13 flex-col justify-center">
                <div class="bd14 flex-row">
                  <span class="txt12">4</span>
                  <span class="info6">理想三旬</span>
                  <span class="word29">哈哈哈</span>
                  <span class="word30">10</span>
                  <span class="info7">删除</span>
                </div>
              </div>
              <div class="bd15 flex-col"></div>
            </div>
          </div>
          <div class="block4 flex-col">
            <div class="wrap2 flex-col">
              <div class="mod18 flex-row justify-between">
                <div class="group6 flex-col"></div>
                <span class="word31">2.填写邮箱</span>
              </div>
              <div class="mod19 flex-row justify-between">
                <span class="word32">请留下您的邮箱：</span>
                <span class="word33">*必填项，邮箱用于将制作完成的视频发给您</span>
              </div>
              <div class="mod20 flex-col"><span class="info8">请输入</span></div>
            </div>
          </div>
          <div class="block5 flex-col">
            <div class="group7 flex-row justify-between">
              <div class="layer3 flex-col"></div>
              <span class="txt13">3.支付</span>
            </div>
            <div class="group8 flex-row">
              <span class="word34">支付金额</span>
              <div class="bd16">
                <span class="info9">40</span>
                <span class="txt14">元</span>
              </div>
              <div class="bd17 flex-col align-center"><span class="word35">立即支付</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="box7 flex-col">
        <div class="mod21 flex-row">
          <div class="bd18 flex-col">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="bd19 flex-col justify-between">
            <div class="bd20 flex-row">
              <span class="info10">慢慢喜欢你</span>
              <span class="word36">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word37">02:12&nbsp;/&nbsp;04:39</span>
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
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="icon8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="bd21 flex-col">
            <img
              class="icon9"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="icon10"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
          />
          <div class="bd22 flex-col justify-between">
            <img
              class="label6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="icon11"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="mod22 flex-col justify-center"><span class="word38">123</span></div>
      </div>
      <div class="box8 flex-col">
        <div class="mod23 flex-col">
          <div class="group9 flex-row justify-between">
            <span class="info11">关于我们</span>
            <span class="word39">监督举报</span>
            <span class="word40">广告服务</span>
            <span class="word41">版权指引</span>
            <span class="word42">隐私政策</span>
            <span class="txt15">招聘信息</span>
            <span class="word43">客服中心</span>
          </div>
          <div class="group10 flex-col"></div>
          <img
            class="pic4"
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
    <div class="box9 flex-col"></div>
    <div class="box10 flex-col"></div>
    <div class="box11 flex-col"></div>
    <div class="box12 flex-col"></div>
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