<template>
  <div class="page flex-col">
    <div class="box1 flex-col">
      <div class="group1 flex-col justify-center">
        <div class="outer1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">音乐人创作平台</span>
          <div class="mod1 flex-col"><span class="word1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="mod2 flex-col"></div>
          <span class="info1">哗啦啦</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="group2 flex-row justify-between">
        <div class="box2 flex-col">
          <div class="bd1 flex-col">
            <div class="box3 flex-col"><span class="word2">我的音乐币</span></div>
            <div class="box4 flex-col">
              <span class="word3">充值</span>
              <div class="bd2 flex-col"></div>
            </div>
            <span class="word4">提现</span>
            <div class="box5 flex-col"></div>
            <span class="info2">支出统计</span>
            <div class="box6 flex-col"></div>
            <div class="box7 flex-row justify-between">
              <div class="box8 flex-col"></div>
              <span class="info3">下载客户端</span>
            </div>
            <img
              class="img1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6690ddb461ae4775365b60753c5aacfdbb8a98e89a5cff2a68aa3357d01d13b6.png"
            />
            <span class="word5">手机扫描二维码下载客户端</span>
          </div>
          <div class="bd3 flex-col"></div>
        </div>
        <div class="box9 flex-col justify-between">
          <div class="box10 flex-col justify-center">
            <div class="layer1 flex-row">
              <div class="group3 flex-col"></div>
              <div class="group4 flex-col justify-between">
                <span class="word6">当前音乐币数量</span>
                <span class="txt2">3240</span>
              </div>
              <div class="group5 flex-col"></div>
              <div class="group6 flex-col justify-between">
                <span class="word7">可提现总金额（元）</span>
                <span class="info4">324</span>
              </div>
              <div class="group7 flex-col align-center">
                <div class="block1 flex-row">
                  <div class="bd4 flex-col"></div>
                  <div class="bd5 flex-col justify-between">
                    <span class="txt3">音乐币收益金额（元）</span>
                    <span class="word8">123.5</span>
                  </div>
                  <div class="bd6 flex-col"></div>
                  <div class="bd7 flex-col justify-between">
                    <span class="word9">流量收益金额（元）</span>
                    <span class="word10">25</span>
                  </div>
                </div>
              </div>
              <button class="group8 flex-col justify-center" @click="onClick_1">
                <span class="word11">提现</span>
              </button>
            </div>
          </div>
          <div class="box11 flex-col align-center">
            <div class="main1 flex-col">
              <div class="group9 flex-row">
                <div class="block2 flex-col"></div>
                <span class="word12">提现明细</span>
                <div class="block3 flex-col justify-center">
                  <div class="layer2 flex-row justify-between">
                    <span class="word13">2021年11月</span>
                    <img
                      class="icon2"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngecfc74120c50c3649279f2c67ff171acc9fe2ed18418d310e51e7bb7706edf71.png"
                    />
                  </div>
                </div>
                <div class="block4 flex-col justify-center">
                  <div class="outer2 flex-row justify-between">
                    <span class="word14">全部状态</span>
                    <img
                      class="label1"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngecfc74120c50c3649279f2c67ff171acc9fe2ed18418d310e51e7bb7706edf71.png"
                    />
                  </div>
                </div>
              </div>
              <div class="group10 flex-col justify-center">
                <div class="section1 flex-row">
                  <span class="word15">账单编号</span>
                  <span class="word16">提现时间</span>
                  <span class="info5">抵扣音乐币</span>
                  <span class="word17">提现金额（元）</span>
                  <span class="txt4">提现方式</span>
                  <span class="info6">提现状态</span>
                </div>
              </div>
              <div class="group11 flex-col">
                <div class="outer3 flex-row">
                  <span class="txt5">202112123655298855</span>
                  <span class="word18">100</span>
                  <span class="word19">10</span>
                  <span class="info7">微信支付</span>
                  <span class="word20">已完成</span>
                </div>
                <span class="info8">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group12 flex-col"></div>
              <div class="group13 flex-col">
                <div class="outer4 flex-row">
                  <span class="word21">202112123655298855</span>
                  <span class="info9">100</span>
                  <span class="info10">10</span>
                  <span class="word22">支付宝</span>
                  <span class="word23">已完成</span>
                </div>
                <span class="info11">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group14 flex-col">
                <div class="wrap1 flex-row">
                  <span class="word24">202112123655298855</span>
                  <span class="word25">100</span>
                  <span class="word26">10</span>
                  <span class="txt6">微信支付</span>
                  <span class="txt7">已完成</span>
                </div>
                <span class="info12">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group15 flex-col"></div>
              <div class="group16 flex-col">
                <div class="outer5 flex-row">
                  <span class="info13">202112123655298855</span>
                  <span class="word27">100</span>
                  <span class="info14">10</span>
                  <span class="txt8">支付宝</span>
                  <span class="txt9">已完成</span>
                </div>
                <span class="txt10">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group17 flex-col">
                <div class="main2 flex-row">
                  <span class="txt11">202112123655298855</span>
                  <span class="word28">100</span>
                  <span class="info15">10</span>
                  <span class="word29">微信支付</span>
                  <span class="word30">已完成</span>
                </div>
                <span class="word31">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group18 flex-col"></div>
              <div class="group19 flex-col">
                <div class="box12 flex-row">
                  <span class="word32">202112123655298855</span>
                  <span class="word33">100</span>
                  <span class="word34">10</span>
                  <span class="txt12">微信支付</span>
                  <span class="word35">已完成</span>
                </div>
                <span class="txt13">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group20 flex-col">
                <div class="block5 flex-row">
                  <span class="word36">202112123655298855</span>
                  <span class="word37">100</span>
                  <span class="txt14">10</span>
                  <span class="word38">支付宝</span>
                  <span class="txt15">已完成</span>
                </div>
                <span class="word39">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group21 flex-col"></div>
              <div class="group22 flex-col">
                <div class="outer6 flex-row">
                  <span class="word40">202112123655298855</span>
                  <span class="word41">100</span>
                  <span class="info16">10</span>
                  <span class="word42">微信支付</span>
                  <span class="txt16">已完成</span>
                </div>
                <span class="word43">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group23 flex-col">
                <div class="layer3 flex-row">
                  <span class="word44">202112123655298855</span>
                  <span class="info17">100</span>
                  <span class="txt17">10</span>
                  <span class="txt18">支付宝</span>
                  <span class="word45">已完成</span>
                </div>
                <span class="info18">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group24 flex-col"></div>
              <div class="group25 flex-col">
                <div class="section2 flex-row">
                  <span class="word46">202112123655298855</span>
                  <span class="txt19">100</span>
                  <span class="word47">10</span>
                  <span class="word48">微信支付</span>
                  <span class="word49">已完成</span>
                </div>
                <span class="info19">2022-02-02&nbsp;12:12:12</span>
              </div>
              <div class="group26 flex-row justify-between">
                <img
                  class="label2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngd7a0400d1f8831764aae10b3a3e6c8972b18b3a8beec963f307dc68103b92f09.png"
                />
                <div class="layer4 flex-col justify-center"><span class="word50">1</span></div>
                <div class="layer5 flex-col justify-center"><span class="word51">2</span></div>
                <div class="layer6 flex-col justify-center"><span class="word52">3</span></div>
                <span class="word53">…</span>
                <div class="layer7 flex-col justify-center"><span class="info20">9</span></div>
                <div class="layer8 flex-col justify-center"><span class="txt20">10</span></div>
                <img
                  class="label3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng1d226a75ce7a152b7da6414e601253ee132afe6cd5406b40f69b455956054b91.png"
                />
              </div>
            </div>
            <div class="main3 flex-col"></div>
            <div class="main4 flex-col"></div>
            <div class="main5 flex-col"></div>
            <div class="main6 flex-col"></div>
            <div class="main7 flex-col"></div>
          </div>
        </div>
      </div>
      <div class="group27 flex-col">
        <div class="mod3 flex-col">
          <div class="block6 flex-row justify-between">
            <span class="info21">关于我们</span>
            <span class="word54">监督举报</span>
            <span class="txt21">广告服务</span>
            <span class="word55">版权指引</span>
            <span class="info22">隐私政策</span>
            <span class="word56">招聘信息</span>
            <span class="info23">客服中心</span>
          </div>
          <div class="block7 flex-col"></div>
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
    <div class="box13 flex-col">
      <div class="outer7 flex-col">
        <span class="info24">提现</span>
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="main8 flex-col"></div>
        <div class="main9 flex-col">
          <div class="section3 flex-col">
            <div class="box14 flex-row">
              <div class="box15 flex-col"></div>
              <span class="word57">音乐币收益提现</span>
              <span class="word58">可提现金额19.8元</span>
              <span class="word59">全部提现</span>
            </div>
            <div class="box16 flex-col">
              <div class="block8 flex-row justify-between">
                <span class="info25">最低提现金额10元</span>
                <span class="txt22">元</span>
              </div>
            </div>
            <div class="box17">
              <span class="info26">*额外扣除</span>
              <span class="info27">2.46元</span>
              <span class="info26">手续费（费率20%），实际到账9.84元</span>
            </div>
            <div class="box18 flex-row">
              <div class="block9 flex-col"></div>
              <span class="txt23">流量收益提现</span>
              <span class="word60">可提现金额19.8元</span>
              <span class="info28">全部提现</span>
            </div>
            <div class="box19 flex-col">
              <div class="outer8 flex-row justify-between">
                <span class="word61">最低提现金额10元</span>
                <span class="word62">元</span>
              </div>
            </div>
            <div class="box20">
              <span class="info26">*额外扣除</span>
              <span class="info29">2.46元</span>
              <span class="info26">手续费（费率20%），实际到账9.84元</span>
            </div>
          </div>
        </div>
        <div class="main10 flex-col"></div>
        <span class="info30">请选择提现方式</span>
        <div class="main11 flex-col"></div>
        <div class="main12 flex-col">
          <div class="outer9 flex-row justify-between">
            <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngfba9cc1b635665caebca33b9db5fb435baee71123d74a6ddf9d701f0260dfd26.png"
            />
            <img
              class="label5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng003c1f7a8cc203107a03d460fee06680af06a715bd4ad992014d77c8128221ab.png"
            />
          </div>
          <div class="outer10 flex-row"><span class="info31">支付宝支付</span></div>
        </div>
        <div class="main13 flex-col justify-center">
          <div class="outer11 flex-col justify-between">
            <img
              class="img3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng15f64b0aa4ee4bab1cfc5e4bb7a5362a36eb5a87b412ff408153d7305c76a87b.png"
            />
            <span class="word63">微信支付</span>
          </div>
        </div>
        <button class="main14 flex-col justify-center align-center" @click="onClick_2">
          <span class="word64">取消</span>
        </button>
        <button class="main15 flex-col justify-center align-center" @click="onClick_3">
          <span class="txt24">确认提现</span>
        </button>
      </div>
    </div>
    <div class="box21 flex-col">
      <div class="mod4 flex-row">
        <div class="outer12 flex-col">
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="outer13 flex-col justify-between">
          <div class="outer14 flex-row">
            <span class="info32">慢慢喜欢你</span>
            <span class="info33">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="info34">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="icon4"
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
          class="pic4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="label6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="icon7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="outer15 flex-col">
          <img
            class="icon8"
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
          class="img4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="outer16 flex-col justify-between">
          <img
            class="label8"
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
      <div class="mod5 flex-col justify-center"><span class="word65">123</span></div>
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />