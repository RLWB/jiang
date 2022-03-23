<template>
  <div class="page flex-col">
    <div class="group1 flex-col">
      <div class="mod1 flex-col justify-center">
        <div class="mod2 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">音乐人创作平台</span>
          <div class="section1 flex-col"><span class="word1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="section2 flex-col"></div>
          <span class="word2">哗啦啦</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="mod3 flex-row justify-between">
        <div class="group2 flex-col">
          <div class="section3 flex-col">
            <div class="outer1 flex-col">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecb6d17466c5310388a065780d1a95cdc4f3dacc85c750acdf1bea64da6c8b71.png"
              />
              <span class="word3">个人中心</span>
              <div class="bd1 flex-col"></div>
            </div>
            <span class="word4">作品数据</span>
            <div class="outer2 flex-col">
              <img
                class="icon1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1c451e678bb4c8ce2c7a903a28756653de2d76e5f65a098fe7e227776a8a70e9.png"
              />
              <span class="info1">收入数据</span>
              <div class="mod4 flex-col"></div>
            </div>
            <div class="outer3 flex-col">
              <img
                class="label3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge394ab96b7902e44a38b6f51507a060bb1b533e1d9ef3c51bef5790303210028.png"
              />
              <span class="word5">作品管理</span>
              <div class="box1 flex-col"></div>
              <div class="box2 flex-col"></div>
            </div>
            <div class="outer4 flex-col">
              <span class="info2">音乐</span>
              <div class="box3 flex-col"></div>
            </div>
            <div class="outer5 flex-col">
              <span class="word6">专辑</span>
              <div class="bd2 flex-col"></div>
            </div>
            <div class="outer6 flex-col">
              <span class="txt2">MV</span>
              <div class="layer1 flex-col"></div>
            </div>
            <div class="outer7 flex-col">
              <div class="mod5 flex-col"></div>
              <span class="word7">KTV视频</span>
              <div class="mod6 flex-col"></div>
            </div>
            <div class="outer8 flex-col">
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng946a2dca00ee20cfbb92484550f0e5acc563c710e63cecd7c7b538240662f107.png"
              />
              <span class="word8">版权管理</span>
              <img
                class="icon3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng16c39313b83e7110b93cc3c5bf90aae946e3bc9ccf83ffe8f29012d75dbbc840.png"
              />
              <div class="mod7 flex-col"></div>
            </div>
            <div class="outer9 flex-col">
              <span class="word9">歌曲版权</span>
              <div class="group3 flex-col"></div>
            </div>
            <div class="outer10 flex-col">
              <span class="word10">词版权</span>
              <div class="section4 flex-col"></div>
            </div>
            <div class="outer11 flex-col">
              <span class="txt3">曲版权</span>
              <div class="section5 flex-col"></div>
            </div>
            <div class="outer12 flex-row justify-between">
              <div class="bd3 flex-col"></div>
              <span class="info3">下载客户端</span>
            </div>
            <img
              class="pic1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="word11">手机扫描二维码下载客户端</span>
          </div>
        </div>
        <div class="group4 flex-col">
          <div class="box4">
            <span class="info4">作品管理&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
            <span class="word12">&nbsp;&nbsp;&nbsp;KTV视频&nbsp;&nbsp;&nbsp;&gt;</span>
            <span class="word13">&nbsp;</span>
            <span class="txt4">批量获取KTV视频</span>
          </div>
          <div class="box5 flex-col align-center">
            <div class="section6 flex-col">
              <div class="mod8 flex-row justify-between">
                <div class="block1 flex-col"></div>
                <span class="info5">1.选择歌曲</span>
              </div>
              <div class="mod9 flex-row justify-between">
                <div class="layer2 flex-col justify-center">
                  <div class="mod10 flex-row justify-between">
                    <img
                      class="label4"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
                    />
                    <span class="txt5">请输入歌曲名称</span>
                  </div>
                </div>
                <button class="layer3 flex-col justify-center align-center" @click="onClick_1">
                  <span class="txt6">搜索</span>
                </button>
              </div>
              <div class="mod11 flex-col justify-center">
                <div class="layer4 flex-row">
                  <span class="word14">序号</span>
                  <span class="word15">歌曲名称</span>
                  <span class="txt7">歌手</span>
                  <span class="word16">价格（元）</span>
                  <span class="word17">操作</span>
                </div>
              </div>
              <div class="mod12 flex-col justify-center">
                <div class="section7 flex-row">
                  <span class="info6">1</span>
                  <span class="word18">理想三旬</span>
                  <span class="word19">哈哈哈</span>
                  <span class="txt8">10</span>
                  <span class="word20">删除</span>
                </div>
              </div>
              <div class="mod13 flex-col"></div>
              <div class="mod14 flex-col justify-center">
                <div class="main1 flex-row">
                  <span class="info7">2</span>
                  <span class="word21">理想三旬</span>
                  <span class="info8">哈哈哈</span>
                  <span class="txt9">10</span>
                  <span class="word22">删除</span>
                </div>
              </div>
              <div class="mod15 flex-col"></div>
              <div class="mod16 flex-col justify-center">
                <div class="box6 flex-row">
                  <span class="word23">3</span>
                  <span class="info9">理想三旬</span>
                  <span class="word24">哈哈哈</span>
                  <span class="info10">10</span>
                  <span class="word25">删除</span>
                </div>
              </div>
              <div class="mod17 flex-col"></div>
              <div class="mod18 flex-col justify-center">
                <div class="group5 flex-row">
                  <span class="word26">4</span>
                  <span class="txt10">理想三旬</span>
                  <span class="txt11">哈哈哈</span>
                  <span class="word27">10</span>
                  <span class="word28">删除</span>
                </div>
              </div>
              <div class="mod19 flex-col"></div>
            </div>
          </div>
          <div class="box7 flex-col">
            <div class="mod20 flex-col">
              <div class="group6 flex-row justify-between">
                <div class="outer13 flex-col"></div>
                <span class="word29">2.填写邮箱</span>
              </div>
              <div class="group7 flex-row justify-between">
                <span class="word30">请留下您的邮箱：</span>
                <span class="word31">*必填项，邮箱用于将制作完成的视频发给您</span>
              </div>
              <div class="group8 flex-col"><span class="info11">请输入</span></div>
            </div>
          </div>
          <div class="box8 flex-col">
            <div class="section8 flex-row justify-between">
              <div class="main2 flex-col"></div>
              <span class="info12">3.支付</span>
            </div>
            <div class="section9 flex-row">
              <span class="info13">支付金额</span>
              <div class="wrap1">
                <span class="word32">40</span>
                <span class="txt12">元</span>
              </div>
              <div class="wrap2 flex-col align-center"><span class="info14">立即支付</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mod21 flex-col">
        <div class="section10 flex-row">
          <div class="outer14 flex-col">
            <img
              class="label5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="outer15 flex-col justify-between">
            <div class="section11 flex-row">
              <span class="word33">慢慢喜欢你</span>
              <span class="info15">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="word34">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="label9"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="outer16 flex-col">
            <img
              class="label10"
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
          <div class="outer17 flex-col justify-between">
            <img
              class="label11"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="label12"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="section12 flex-col justify-center"><span class="info16">123</span></div>
      </div>
      <div class="mod22 flex-col">
        <div class="group9 flex-col">
          <div class="block2 flex-row justify-between">
            <span class="word35">关于我们</span>
            <span class="info17">监督举报</span>
            <span class="info18">广告服务</span>
            <span class="word36">版权指引</span>
            <span class="word37">隐私政策</span>
            <span class="word38">招聘信息</span>
            <span class="txt13">客服中心</span>
          </div>
          <div class="block3 flex-col"></div>
          <img
            class="img2"
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
    <div class="group10 flex-col"></div>
    <div class="group11 flex-col"></div>
    <div class="group12 flex-col"></div>
    <div class="group13 flex-col">
      <div class="main3 flex-col">
        <span class="txt14">支付</span>
        <img
          class="icon6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="wrap3 flex-col"></div>
        <div class="wrap4 flex-col">
          <div class="main4 flex-col">
            <span class="word39">批量获取KTV视频&nbsp;&nbsp;&nbsp;&nbsp;4首</span>
            <span class="word40">支付金额</span>
            <div class="box9 flex-row justify-between">
              <span class="info19">40</span>
              <span class="txt15">元</span>
            </div>
          </div>
        </div>
        <span class="word41">请选择支付方式</span>
        <div class="wrap5 flex-col">
          <div class="bd4 flex-row justify-between">
            <img
              class="img3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngfba9cc1b635665caebca33b9db5fb435baee71123d74a6ddf9d701f0260dfd26.png"
            />
            <img
              class="icon7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng003c1f7a8cc203107a03d460fee06680af06a715bd4ad992014d77c8128221ab.png"
            />
          </div>
          <div class="bd5 flex-row"><span class="word42">支付宝支付</span></div>
        </div>
        <div class="wrap6 flex-col">
          <div class="layer5 flex-col justify-between">
            <img
              class="pic5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng15f64b0aa4ee4bab1cfc5e4bb7a5362a36eb5a87b412ff408153d7305c76a87b.png"
            />
            <span class="txt16">微信支付</span>
          </div>
        </div>
        <button class="wrap7 flex-col justify-center align-center" @click="onClick_2">
          <span class="word43">取消</span>
        </button>
        <button class="wrap8 flex-col justify-center align-center" @click="onClick_3">
          <span class="info20">确认支付</span>
        </button>
      </div>
    </div>
    <div class="group14 flex-col"></div>
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />