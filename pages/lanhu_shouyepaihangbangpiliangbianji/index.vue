<template>
  <div class="page flex-col">
    <div class="mod1 flex-col">
      <div class="outer1 flex-col align-center">
        <div class="section1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <div class="block1 flex-col align-center"><span class="txt1">发现音乐</span></div>
          <span class="txt2">我的音乐</span>
          <span class="word1">音乐人开放平台</span>
          <span class="word2">关于我们</span>
          <div class="block2 flex-col"><span class="txt3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="info1">登录/注册</span>
        </div>
      </div>
      <div class="outer2 flex-col">
        <div class="section2 flex-row justify-between">
          <span class="txt4">推荐</span>
          <span class="info2">音乐人</span>
          <span class="word3">排行榜</span>
          <span class="word4">歌手</span>
          <span class="txt5">专辑</span>
          <span class="txt6">歌单</span>
          <span class="word5">MV</span>
        </div>
        <div class="section3 flex-row"><div class="main1 flex-col"></div></div>
      </div>
      <div class="outer3 flex-row justify-between">
        <div class="section4 flex-col">
          <div class="mod2 flex-col justify-between">
            <div class="bd1 flex-col">
              <span class="word6">飙升音乐榜</span>
              <div class="bd2 flex-col"></div>
              <span class="paragraph1">
                更新时间：
                <br />
                2022-02-12
              </span>
              <div class="bd3 flex-col"></div>
              <img
                class="img2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd7dc2391d2aaa88cc4f393eb65034069bf7d74e29f0776b1167fd463c5bd506a.png"
              />
            </div>
            <div class="bd4 flex-col">
              <span class="word7">音久热歌榜</span>
              <div class="box1 flex-col"></div>
              <span class="paragraph2">
                更新时间：
                <br />
                2022-02-12
              </span>
              <div class="box2 flex-col"></div>
              <img
                class="pic1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd7dc2391d2aaa88cc4f393eb65034069bf7d74e29f0776b1167fd463c5bd506a.png"
              />
            </div>
            <div class="bd5 flex-col">
              <span class="txt7">TOP500榜</span>
              <div class="layer1 flex-col"></div>
              <span class="infoBox1">
                更新时间：
                <br />
                2022-02-12
              </span>
              <div class="layer2 flex-col"></div>
              <img
                class="img3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd7dc2391d2aaa88cc4f393eb65034069bf7d74e29f0776b1167fd463c5bd506a.png"
              />
            </div>
            <div class="bd6 flex-col">
              <span class="info3">网红热歌榜</span>
              <div class="section5 flex-col"></div>
              <span class="paragraph3">
                更新时间：
                <br />
                2022-02-12
              </span>
              <div class="section6 flex-col"></div>
              <img
                class="img4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd7dc2391d2aaa88cc4f393eb65034069bf7d74e29f0776b1167fd463c5bd506a.png"
              />
            </div>
          </div>
        </div>
        <div class="section7 flex-col align-center">
          <div class="layer3 flex-col">
            <div class="mod3 flex-row justify-between">
              <span class="word8">TOP500榜</span>
              <span class="word9">累计播放量：125768</span>
            </div>
            <div class="mod4 flex-row justify-between">
              <div class="box3 flex-row">
                <div
                  class="group1 flex-col justify-center"
                  :style="{ background: item.lanhuBg0 }"
                  v-for="(item, index) in loopData0"
                  :key="index"
                >
                  <div class="box4 flex-row">
                    <img
                      v-if="item.slot1 === 1"
                      class="icon1"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng3c4019de401314ab073b312405f539f9caa9091c8f62ad1f5e76fc28f6c783af.png"
                    />
                    <img
                      v-if="item.slot2 === 2"
                      class="icon2"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng2389049579baf32b6f17e24551eff4c41a97bbb0dd5bec8b1dd9ef2b5446649d.png"
                    />
                    <img
                      v-if="item.slot3 === 3"
                      class="label1"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng6f4865d976ec19d9ecc8a6d5f0157cf885da216afe37c58f9803404010d1499b.png"
                    />
                    <span class="info4" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
                  </div>
                </div>
              </div>
              <div class="box5 flex-col justify-center">
                <div class="outer4 flex-row justify-between">
                  <img
                    class="label2"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng9af973e7852eb371c7f6902873efc81e0180d4803db100d9157aa04c3d716219.png"
                  />
                  <span class="word10">添加到歌单</span>
                </div>
              </div>
            </div>
            <div class="mod5 flex-col justify-center">
              <div class="bd7 flex-row">
                <span class="info5">歌曲</span>
                <span class="word11">歌手</span>
                <span class="word12">专辑</span>
                <span class="txt8">时长</span>
              </div>
            </div>
            <div class="mod6 flex-col justify-center">
              <div class="section8 flex-row">
                <span class="word13">1</span>
                <div class="layer4 flex-col">
                  <img
                    class="img5"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng29000b13efa4abe6e25c755c738ede2a673a7ef5bd3942be3e3ac55d600b4862.png"
                  />
                </div>
                <span class="word14">渐暖</span>
                <div class="layer5 flex-col justify-center align-center"><span class="word15">MV</span></div>
                <span class="word16">时代少年团</span>
                <span class="word17">03:10</span>
              </div>
              <span class="word18">渐暖</span>
            </div>
            <div class="mod7 flex-col justify-center">
              <div class="box6 flex-row">
                <span class="word19">3</span>
                <div class="section9 flex-col">
                  <img
                    class="pic2"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng1773eacdbedd4a0bcd3e50d16cbf24ef163d6a2f162e761bebb4f42e6490fee5.png"
                  />
                </div>
                <span class="word20">浪漫主义浪漫主义</span>
                <span class="word21">姜云升</span>
                <span class="info6">03:10</span>
              </div>
              <span class="word22">浪漫主义浪漫主义浪漫…</span>
            </div>
            <div class="mod8 flex-col justify-center">
              <div class="section10 flex-row">
                <span class="txt9">4</span>
                <div class="section11 flex-col">
                  <img
                    class="img6"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng9755a0cd9b44a221cc935ad4c84e90378c6e7ea0bf5ec481672a558795a28503.png"
                  />
                </div>
                <span class="word23">慢慢喜欢你</span>
                <div class="section12 flex-col justify-center align-center"><span class="word24">MV</span></div>
                <span class="word25">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
                <span class="word26">03:10</span>
              </div>
              <span class="txt10">闪光的乐队&nbsp;第8期</span>
            </div>
            <div class="mod9 flex-col justify-center">
              <div class="wrap1 flex-row">
                <span class="word27">6</span>
                <div class="mod10 flex-col">
                  <img
                    class="pic3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngaaa0965275fa628f3a843af88e62e3b113e1ed341a516e389faccf2d98a2a4d5.png"
                  />
                </div>
                <span class="word28">The&nbsp;Joker&nbsp;And&nbsp;The&nbsp;&nbsp;…</span>
                <img
                  class="icon3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng0772a3c1bd83fd2191ec0d72d25ac135a3271e32cd208f93df4b046e33d0d76d.png"
                />
                <img
                  class="label3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng6f4865d976ec19d9ecc8a6d5f0157cf885da216afe37c58f9803404010d1499b.png"
                />
                <img
                  class="label4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng7ae4673ebf7aedf0b2895577bb464acb8c02861f61361912e5642eca1cb95b99.png"
                />
                <img
                  class="label5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9af973e7852eb371c7f6902873efc81e0180d4803db100d9157aa04c3d716219.png"
                />
                <span class="info7">Ed&nbsp;Sheeran&nbsp;/Taylor&nbsp;…</span>
                <span class="txt11">03:10</span>
              </div>
              <span class="word29">闪光的乐队&nbsp;第8期</span>
            </div>
            <div class="mod11 flex-col justify-center">
              <div class="box7 flex-row">
                <span class="word30">8</span>
                <div class="mod12 flex-col">
                  <img
                    class="pic4"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngdb270d23615cb9d8e242c2cf4ab0980bc69b7c091e4cbbf86bad3673da7ba622.png"
                  />
                </div>
                <div class="mod13 flex-col justify-center align-center"><span class="word31">MV</span></div>
                <span class="info8">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
                <span class="word32">03:10</span>
              </div>
              <span class="info9">我的爱像缺了一块</span>
              <span class="word33">闪光的乐队&nbsp;第8期</span>
            </div>
            <div class="mod14 flex-col justify-center">
              <div class="outer5 flex-row">
                <span class="info10">10</span>
                <div class="box8 flex-col">
                  <img
                    class="img7"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng0ffc2f8e3c91efcd1629cc3cfa9042b054d48d8ab95c759159fa808d12073876.png"
                  />
                </div>
                <span class="info11">慢慢喜欢你</span>
                <div class="box9 flex-col justify-center align-center"><span class="info12">MV</span></div>
                <span class="info13">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
                <span class="word34">03:10</span>
              </div>
              <span class="txt12">闪光的乐队&nbsp;第8期</span>
            </div>
          </div>
          <div class="layer6 flex-col justify-center">
            <div class="section13 flex-row justify-between">
              <span class="info14">2022-01-05</span>
              <img
                class="label6"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngecfc74120c50c3649279f2c67ff171acc9fe2ed18418d310e51e7bb7706edf71.png"
              />
            </div>
          </div>
          <div class="layer7 flex-col">
            <span class="word35">2022-01-19</span>
            <span class="info15">2022-01-12</span>
            <span class="word36">2022-01-05</span>
            <div class="wrap2 flex-col"><div class="outer6 flex-col"></div></div>
            <span class="txt13">2021-12-29</span>
            <span class="word37">2021-12-22</span>
          </div>
          <div class="layer8 flex-col justify-center">
            <div class="outer7 flex-row">
              <span class="word38">2</span>
              <div class="outer8 flex-col">
                <img
                  class="img8"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng4ce3e4a9b5ed10236d558ec03ce36f8a761ba5a1493b085d9c9ffdbfc183aec1.png"
                />
              </div>
              <span class="word39">你从未离去</span>
              <div class="outer9 flex-col justify-center align-center"><span class="word40">MV</span></div>
              <span class="info16">白挺</span>
              <span class="word41">03:10</span>
            </div>
            <span class="txt14">渐暖</span>
          </div>
          <div class="layer9 flex-col">
            <div class="main2 flex-row">
              <span class="txt15">5</span>
              <div class="outer10 flex-col"></div>
              <span class="txt16">我知道是你</span>
              <div class="outer11 flex-col justify-center align-center"><span class="txt17">MV</span></div>
              <img
                class="icon4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng90baa7c7cb465d0fbb7f1e0e5a71ba5d1c3f7eaa1f80c86537627b19caca80c8.png"
              />
              <span class="txt18">王靖雯&nbsp;/唐汉霄&nbsp;/信</span>
              <span class="word42">03:10</span>
            </div>
            <span class="word43">——</span>
          </div>
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng513e05eb4ebd68f074b4ef17c9a395921ad10fbf46663f37dc12e59482a2f2ee.png"
          />
          <img
            class="icon6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8efba6967793e2ba89abba093645e336bc73a9a750d2fda1407fcd8227136a8c.png"
          />
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng3395b100e1041c63433950bf1c3501e1afc2c5d881768939bdbe8239863d2052.png"
          />
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga99fb5c0b669afffdcd429fe1a3cbae02a210a4ab45cc5c5feee17794ab72ebc.png"
          />
          <div class="layer10 flex-col justify-center">
            <div class="outer12 flex-row">
              <span class="word44">7</span>
              <div class="box10 flex-col">
                <img
                  class="img9"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngaaa0965275fa628f3a843af88e62e3b113e1ed341a516e389faccf2d98a2a4d5.png"
                />
              </div>
              <span class="word45">The&nbsp;Joker&nbsp;And&nbsp;The&nbsp;Queen&nbsp;between&nbsp;us</span>
              <div class="box11 flex-col justify-center align-center"><span class="txt19">MV</span></div>
              <span class="word46">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
              <span class="txt20">03:10</span>
            </div>
            <span class="info17">闪光的乐队&nbsp;第8期</span>
          </div>
          <div class="layer11 flex-col justify-center">
            <div class="outer13 flex-row">
              <span class="word47">9</span>
              <div class="outer14 flex-col">
                <img
                  class="img10"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng46ff0cdfcf276064a1d5d06b7391c8026fa1c658679a221aa29ea2de1960f4c8.png"
                />
              </div>
              <span class="word48">说说话</span>
              <div class="outer15 flex-col justify-center align-center"><span class="info18">MV</span></div>
              <span class="word49">王靖雯&nbsp;/唐汉霄&nbsp;/信</span>
              <span class="word50">03:10</span>
            </div>
            <span class="word51">闪光的乐队&nbsp;第8期</span>
          </div>
        </div>
      </div>
    </div>
    <img
      class="img11"
      referrerpolicy="no-referrer"
      src="./assets/img/SketchPng5bd160d9c87db2634b5b784e7544e56df097d3fd7faa6452bf41df8fe6dfee90.png"
    />
    <div class="mod15 flex-col justify-center">
      <div class="box12 flex-row">
        <span class="txt21">11</span>
        <div class="group2 flex-col">
          <img
            class="img12"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngaaa0965275fa628f3a843af88e62e3b113e1ed341a516e389faccf2d98a2a4d5.png"
          />
        </div>
        <span class="word52">The&nbsp;Joker&nbsp;And&nbsp;The&nbsp;Queen&nbsp;between&nbsp;us</span>
        <div class="group3 flex-col justify-center align-center"><span class="txt22">MV</span></div>
        <span class="info19">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
        <span class="txt23">03:10</span>
      </div>
      <span class="info20">闪光的乐队&nbsp;第8期</span>
    </div>
    <div class="mod16 flex-col">
      <div class="mod17 flex-row">
        <div class="outer16 flex-col">
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="outer17 flex-col justify-between">
          <div class="layer12 flex-row">
            <span class="word53">慢慢喜欢你</span>
            <span class="txt24">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="word54">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="pic5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="icon8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
        />
        <img
          class="icon9"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="icon10"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="img13"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="icon11"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="label9"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="outer18 flex-col">
          <img
            class="icon12"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="label10"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="img14"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="outer19 flex-col justify-between">
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
      <div class="mod18 flex-col justify-center"><span class="txt25">123</span></div>
    </div>
    <div class="mod19 flex-col justify-center align-center">
      <div class="outer20 flex-row">
        <span class="word55">12</span>
        <div class="outer21 flex-col">
          <img
            class="pic6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb270d23615cb9d8e242c2cf4ab0980bc69b7c091e4cbbf86bad3673da7ba622.png"
          />
        </div>
        <div class="outer22 flex-col justify-center align-center"><span class="word56">MV</span></div>
        <span class="info21">杨丞琳&nbsp;/周洁琼&nbsp;/朱星…</span>
        <span class="info22">03:10</span>
      </div>
      <span class="txt26">我的爱像缺了一块</span>
      <span class="word57">闪光的乐队&nbsp;第8期</span>
    </div>
    <div class="mod20 flex-col">
      <div class="outer23 flex-col">
        <div class="wrap3 flex-row justify-between">
          <span class="word58">关于我们</span>
          <span class="info23">监督举报</span>
          <span class="word59">广告服务</span>
          <span class="info24">版权指引</span>
          <span class="word60">隐私政策</span>
          <span class="info25">招聘信息</span>
          <span class="info26">客服中心</span>
        </div>
        <div class="wrap4 flex-col"></div>
        <img
          class="img15"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnga90c6790ddde2a18b5a5da756b4a43375fc303bd7dda167e93154c216d58cb66.png"
        />
        <span class="paragraph4">
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
      loopData0: [
        { lanhuBg0: 'rgba(0,182,156,1)', lanhutext0: '播放全部', lanhufontColor0: 'rgba(255,255,255,1)', slot1: 1 },
        { lanhuBg0: 'transparent', lanhutext0: '取消批量操作', lanhufontColor0: 'rgba(0,0,0,0.85)', slot2: 2 },
        { lanhuBg0: 'transparent', lanhutext0: '下载', lanhufontColor0: 'rgba(0,0,0,0.85)', slot3: 3 }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />