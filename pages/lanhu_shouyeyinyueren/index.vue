<template>
  <div class="page flex-col">
    <div class="wrap1 flex-col">
      <div class="group1 flex-col align-center">
        <div class="group2 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <div class="main1 flex-col align-center"><span class="info1">发现音乐</span></div>
          <span class="info2">我的音乐</span>
          <span class="word1">音乐人开放平台</span>
          <span class="word2">关于我们</span>
          <div class="main2 flex-col"><span class="word3">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="word4">登录/注册</span>
        </div>
      </div>
      <div class="group3 flex-col">
        <div class="group4 flex-row justify-between">
          <span class="info3">推荐</span>
          <span class="info4">音乐人</span>
          <span class="info5">排行榜</span>
          <span class="word5">歌手</span>
          <span class="txt1">专辑</span>
          <span class="word6">歌单</span>
          <span class="txt2">MV</span>
        </div>
        <div class="group5 flex-row"><div class="block1 flex-col"></div></div>
      </div>
      <div class="group6 flex-col">
        <div class="block2 flex-col">
          <div class="mod1 flex-col justify-between">
            <img
              class="img1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng4d50d859b6c73733d1df0e780da2c5e851292125714cf75b08ae8ab2dfb5b367.png"
            />
            <span class="txt3">最强萌新不迷茫·点燃未来音乐路</span>
          </div>
        </div>
        <img
          class="img2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngfd7ce6fb652ec523786aa40683751af9264185bd06c108fcfc342f45bce68441.png"
        />
      </div>
      <div class="group7 flex-row">
        <span class="word7">音乐人拥有以下&nbsp;&nbsp;&nbsp;大特权</span>
        <img
          class="pic2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng27981a230114d424b398787b4b85d09be20f09fb4a29f100e8c9cf97d8a0af27.png"
        />
      </div>
      <div class="group8 flex-col"></div>
      <div class="group9 flex-row">
        <div
          class="layer1 flex-col"
          :style="{ background: item.lanhuBg0 }"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <span class="word8" v-html="item.lanhutext0"></span>
          <div class="group10 flex-col" :style="{ background: item.lanhuBg1 }"></div>
          <span class="word9" v-html="item.lanhutext1"></span>
        </div>
      </div>
      <div class="group11 flex-col">
        <div class="box1 flex-col">
          <div class="layer2 flex-row">
            <div class="group12 flex-col"></div>
            <span class="word10">宝藏个人音乐人</span>
            <div class="group13 flex-col justify-center">
              <img
                class="icon1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng070978dfe09bee3a8a0dac8b34a5e65bf42fff21b865918657dbf2217acc6639.png"
              />
            </div>
          </div>
          <img
            class="img3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng13dfdc974cda822bc6e2c19fdf80d01adb4025f181fd8af3ab70642ec2879f23.png"
          />
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngab8815a591d0743870f7650740232f9d145e00af5c65cda497c1f17b73ec9d9a.png"
          />
        </div>
        <span class="txt4">更多</span>
        <div class="box2 flex-col">
          <div class="outer1 flex-col"></div>
          <div class="outer2 flex-col"></div>
          <div class="outer3 flex-col"><span class="word11">个人音乐人</span></div>
        </div>
        <div class="box3 flex-col">
          <div class="block3 flex-col"></div>
          <div class="block4 flex-col"></div>
          <div class="block5 flex-col"><span class="word12">企业音乐人</span></div>
        </div>
        <div class="box4 flex-col">
          <div class="group14 flex-col"></div>
          <div class="group15 flex-col"></div>
          <div class="group16 flex-col"><span class="txt5">曲作者</span></div>
        </div>
        <div class="box5 flex-col">
          <div class="group17 flex-col"></div>
          <div class="group18 flex-col"></div>
          <div class="group19 flex-col"><span class="word13">词作者</span></div>
        </div>
        <div class="box6 flex-col">
          <div class="group20 flex-col"></div>
          <div class="group21 flex-col"></div>
          <div class="group22 flex-col"><span class="info6">个人音乐人</span></div>
        </div>
        <div class="box7 flex-col">
          <div class="section1 flex-row"><span class="info7">小宇-宋念宇</span></div>
          <div class="section2 flex-row"><span class="word14">做自己的音乐</span></div>
          <div class="section3 flex-row">
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngced27218d20e698a8246c89f20ffea7ec1ff391108b27218e40d9346c265668d.png"
            />
            <span class="txt6">123首</span>
            <div class="box8 flex-col justify-center">
              <img
                class="label1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
              />
              <span class="info8">关注</span>
            </div>
          </div>
        </div>
        <div class="box9 flex-col">
          <div class="layer3 flex-col">
            <span class="info9">问世杂草</span>
            <span class="info10">做自己的音乐做自己的音乐做…</span>
            <div class="bd1 flex-row">
              <img
                class="label2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngced27218d20e698a8246c89f20ffea7ec1ff391108b27218e40d9346c265668d.png"
              />
              <span class="info11">1020首</span>
              <div class="wrap2 flex-col justify-center"><span class="word15">已关注</span></div>
            </div>
          </div>
        </div>
        <div class="box10 flex-col">
          <div class="group23 flex-col">
            <span class="txt7">INTO1-米卡</span>
            <span class="word16">做自己的音乐做自己的音乐做…</span>
            <div class="bd2 flex-row">
              <img
                class="label3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngced27218d20e698a8246c89f20ffea7ec1ff391108b27218e40d9346c265668d.png"
              />
              <span class="word17">1020首</span>
              <div class="block6 flex-col justify-center">
                <img
                  class="label4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
                />
                <span class="word18">关注</span>
              </div>
            </div>
          </div>
        </div>
        <div class="box11 flex-col">
          <div class="section4 flex-row">
            <div class="block7">
              <span class="word19">ITZY&nbsp;(</span>
              <span class="word20">있지</span>
              <span class="word21">)</span>
            </div>
          </div>
          <div class="section5 flex-row"><span class="word22">做自己的音乐</span></div>
          <div class="section6 flex-row">
            <img
              class="icon3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngced27218d20e698a8246c89f20ffea7ec1ff391108b27218e40d9346c265668d.png"
            />
            <span class="word23">230首</span>
            <div class="box12 flex-col justify-center">
              <img
                class="icon4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
              />
              <span class="txt8">关注</span>
            </div>
          </div>
        </div>
        <div class="box13 flex-col">
          <div class="bd3 flex-col">
            <span class="word24">SummerVapour</span>
            <span class="word25">做自己的音乐</span>
            <div class="section7 flex-row">
              <img
                class="label5"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngced27218d20e698a8246c89f20ffea7ec1ff391108b27218e40d9346c265668d.png"
              />
              <span class="word26">452首</span>
              <div class="layer4 flex-col justify-center">
                <img
                  class="icon5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng5d893e270d77eba76a8b45369776e84e888973fd3b0814043f3dd8015c346a54.png"
                />
                <span class="word27">关注</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group24 flex-row">
        <div class="bd4 flex-col"></div>
        <span class="word28">热门音乐人专辑</span>
        <div class="bd5 flex-col justify-center">
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng070978dfe09bee3a8a0dac8b34a5e65bf42fff21b865918657dbf2217acc6639.png"
          />
        </div>
        <span class="word29">更多</span>
      </div>
      <div class="group25 flex-row justify-between">
        <div class="group26 flex-col"></div>
        <div class="group27 flex-col"></div>
        <div class="group28 flex-col"></div>
        <div class="group29 flex-col"></div>
        <div class="group30 flex-col"></div>
      </div>
      <div class="group31 flex-col">
        <div class="box14 flex-row">
          <span class="info12">5-Uzi&nbsp;/EMZJayce&nbsp;/947.ASH</span>
          <span class="txt9">叶炫清&nbsp;/简弘亦&nbsp;/陈翔&nbsp;/蒋龙&nbsp;/白若溪</span>
          <span class="info13">宝石Gem</span>
          <span class="word30">SummerVapour夏至梦</span>
          <span class="word31">v青盏&nbsp;/国风音乐联盟</span>
        </div>
        <div class="box15 flex-row">
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
          />
          <span class="word32">2354</span>
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
          />
          <span class="word33">2021-10-10</span>
          <img
            class="label9"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
          />
          <span class="word34">2354</span>
          <img
            class="label10"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
          />
          <span class="txt10">2021-10-10</span>
          <img
            class="label11"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngf04ad722f7bbcde92e5068d6a0055a994e65d9b859f77b6d34e8b43994fef521.png"
          />
          <span class="word35">2354</span>
          <img
            class="icon6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8a7ae762ad69c08d8d35ff93c8e008a64e2ed808ec0a188289be0bb6bc6b1614.png"
          />
          <span class="info14">2021-10-10</span>
          <img
            class="label12"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngf04ad722f7bbcde92e5068d6a0055a994e65d9b859f77b6d34e8b43994fef521.png"
          />
          <span class="word36">2354</span>
          <img
            class="label13"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8a7ae762ad69c08d8d35ff93c8e008a64e2ed808ec0a188289be0bb6bc6b1614.png"
          />
          <span class="word37">2021-10-10</span>
          <img
            class="icon7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngf04ad722f7bbcde92e5068d6a0055a994e65d9b859f77b6d34e8b43994fef521.png"
          />
          <span class="txt11">2354</span>
          <img
            class="label14"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8a7ae762ad69c08d8d35ff93c8e008a64e2ed808ec0a188289be0bb6bc6b1614.png"
          />
          <span class="word38">2021-10-10</span>
        </div>
      </div>
      <div class="group32 flex-row justify-between">
        <span class="info15">青苔</span>
        <span class="txt12">光子片</span>
        <span class="info16">寂寞在生长</span>
        <span class="word39">一篇关于思念的随笔</span>
        <span class="info17">眷恋梦</span>
      </div>
      <div class="group33 flex-row justify-between">
        <span class="word40">无事发生&nbsp;/鱼柒文&nbsp;/杜匡辰&nbsp;/汤靖</span>
        <span class="word41">周深</span>
        <span class="txt13">新生主义</span>
        <span class="info18">SummerVapour夏至梦</span>
        <span class="txt14">v青盏&nbsp;/国风音乐联盟</span>
      </div>
      <div class="group34 flex-row">
        <img
          class="icon8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
        />
        <span class="txt15">2354</span>
        <img
          class="icon9"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
        />
        <span class="word42">2021-10-10</span>
        <img
          class="icon10"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
        />
        <span class="word43">2354</span>
        <img
          class="icon11"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
        />
        <span class="txt16">2021-10-10</span>
        <img
          class="label15"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngf04ad722f7bbcde92e5068d6a0055a994e65d9b859f77b6d34e8b43994fef521.png"
        />
        <span class="word44">2354</span>
        <img
          class="label16"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng8a7ae762ad69c08d8d35ff93c8e008a64e2ed808ec0a188289be0bb6bc6b1614.png"
        />
        <span class="txt17">2021-10-10</span>
        <img
          class="label17"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngf04ad722f7bbcde92e5068d6a0055a994e65d9b859f77b6d34e8b43994fef521.png"
        />
        <span class="txt18">2354</span>
        <img
          class="label18"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng8a7ae762ad69c08d8d35ff93c8e008a64e2ed808ec0a188289be0bb6bc6b1614.png"
        />
        <span class="txt19">2021-10-10</span>
        <img
          class="label19"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngf04ad722f7bbcde92e5068d6a0055a994e65d9b859f77b6d34e8b43994fef521.png"
        />
        <span class="word45">2354</span>
        <img
          class="icon12"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng8a7ae762ad69c08d8d35ff93c8e008a64e2ed808ec0a188289be0bb6bc6b1614.png"
        />
        <span class="word46">2021-10-10</span>
      </div>
      <img
        class="img4"
        referrerpolicy="no-referrer"
        src="./assets/img/SketchPngab8815a591d0743870f7650740232f9d145e00af5c65cda497c1f17b73ec9d9a.png"
      />
      <div class="group35 flex-col">
        <div class="group36 flex-row">
          <div class="outer4 flex-col">
            <img
              class="label20"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="outer5 flex-col justify-between">
            <div class="main3 flex-row">
              <span class="txt20">慢慢喜欢你</span>
              <span class="info19">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="info20">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="img5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="label21"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="label22"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="icon13"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="img6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="icon14"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label23"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="outer6 flex-col">
            <img
              class="icon15"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="label24"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
          />
          <div class="outer7 flex-col justify-between">
            <img
              class="icon16"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="label25"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="group37 flex-col justify-center"><span class="word47">123</span></div>
      </div>
      <div class="group38 flex-col">
        <div class="main4 flex-col">
          <div class="mod2 flex-row justify-between">
            <span class="txt21">关于我们</span>
            <span class="info21">监督举报</span>
            <span class="info22">广告服务</span>
            <span class="word48">版权指引</span>
            <span class="word49">隐私政策</span>
            <span class="txt22">招聘信息</span>
            <span class="word50">客服中心</span>
          </div>
          <div class="mod3 flex-col"></div>
          <img
            class="pic5"
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
    <div class="wrap3 flex-col">
      <div class="section8 flex-col">
        <div class="layer5 flex-row">
          <div class="section9 flex-col"></div>
          <span class="word51">申请企业音乐人</span>
          <div class="section10 flex-col">
            <div class="layer6 flex-col"></div>
            <div class="layer7 flex-col justify-center">
              <img
                class="icon17"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngae9691d3074468302a363d8dd0b41c731078a21ab97d71138d44015dbed6f2e0.png"
              />
              <span class="word52">立即申请</span>
            </div>
            <span class="info23">立即申请</span>
          </div>
        </div>
      </div>
      <div class="section11 flex-col"><span class="word53">1</span></div>
      <span class="word54">认证企业信息</span>
      <span class="info24">确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。</span>
      <div class="section12 flex-col"></div>
      <div class="section13 flex-col"><span class="info25">2</span></div>
      <span class="word55">填写并提交企业信息</span>
      <span class="word56">
        按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
      </span>
      <div class="section14 flex-col"><span class="info26">3</span></div>
      <span class="word57">缴纳年费</span>
      <span class="info27">
        上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
      </span>
    </div>
    <div class="wrap4 flex-col">
      <div class="main5 flex-col">
        <div class="outer8 flex-row">
          <div class="mod4 flex-col"></div>
          <span class="word58">申请个人音乐人</span>
          <div class="mod5 flex-col">
            <img
              class="label26"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngae9691d3074468302a363d8dd0b41c731078a21ab97d71138d44015dbed6f2e0.png"
            />
            <span class="txt23">立即申请</span>
          </div>
        </div>
      </div>
      <div class="main6 flex-col"><span class="info28">1</span></div>
      <span class="word59">认证个人信息</span>
      <span class="info29">确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。</span>
      <div class="main7 flex-col"><span class="txt24">2</span></div>
      <span class="word60">填写并提交个人信息</span>
      <span class="info30">
        按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
      </span>
      <div class="main8 flex-col"></div>
      <div class="main9 flex-col"><span class="txt25">3</span></div>
      <span class="word61">上传音乐作品</span>
      <span class="word62">
        审核通过后，必须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息的形式发出；
      </span>
      <div class="main10 flex-col"><span class="word63">4</span></div>
      <span class="info31">缴纳年费</span>
      <span class="word64">
        上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个个人音乐人申请流程。
      </span>
    </div>
    <span class="info32">G.O.P&nbsp;2022&nbsp;cypher</span>
    <span class="word65">三生有幸遇上你</span>
    <span class="word66">MoreThan:&nbsp;Respect·III</span>
    <span class="info33">Caspian</span>
    <span class="word67">笑谈风月</span>
    <div class="wrap5 flex-col justify-center align-center">
      <div class="layer8 flex-col">
        <img
          class="img7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng5ed3f86efe48e1fb53a6799da5960d5db23fa738a2b40143ba108621d04b6131.png"
        />
      </div>
    </div>
    <div class="wrap6 flex-col justify-center align-center">
      <div class="group39 flex-col">
        <img
          class="pic6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng2faed8cf2e29f30471bbfdff1df0b457405d356271204d3ad384d74e6c349d85.png"
        />
      </div>
    </div>
    <div class="wrap7 flex-col justify-center align-center">
      <div class="outer9 flex-col">
        <img
          class="img8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc3ae516e0c9a73e9618962eca350b666bdb778d1f7ed33d665e09d2811d5ad1f.png"
        />
      </div>
    </div>
    <div class="wrap8 flex-col justify-center align-center">
      <div class="block8 flex-col">
        <img
          class="pic7"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng6ade0b375140d3c89fd50f49d56007c5cff502edeb3c088fb9a0ea7f93e3ff44.png"
        />
      </div>
    </div>
    <div class="wrap9 flex-col">
      <div class="outer10 flex-col">
        <img
          class="pic8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng5beb9e35678c42399c188ce8c7a0505f1015f2c438b880c4cc43ed1690979646.png"
        />
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
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '音久音乐人身份',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9c6afacbbfdf6498ea8eff4bf7b368de34f0e01d71e64f1289e97cae965bbccd) -111px -19px no-repeat',
          lanhutext1: '发掘潜力音乐人，给优秀作品提供更多机会'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng361dd43036349564709b9cb5addcf504a23cd57f983158d0e74e30a79d1a726d) -14px -13px no-repeat',
          lanhutext0: '歌曲播放量扶持',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng40bca3352b048ef9f699ac90f84df3317e46c354ed20b329c8fd33e6f9733382) -105px -16px no-repeat',
          lanhutext1: '亿万级曝光助力歌曲出圈，影响力升级'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '全网推广',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5684820e5e0b76905c6c9895254395224a879270a74b16ae0a4a0cc60d4500cb) -98px -18px no-repeat',
          lanhutext1: '为音乐人提供全球分发服务，获取海量粉丝'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '实物音像专辑制作发行',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng80c996d75f36097ee91620a73da0723b643dafcbcf84c848d52dc23bb9c86e44) -110px -23px no-repeat',
          lanhutext1: '全方位扶持音乐人，丰富音乐生态圈'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng361dd43036349564709b9cb5addcf504a23cd57f983158d0e74e30a79d1a726d) -14px -13px no-repeat',
          lanhutext0: '全国KTV免费发行',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfd18924121005682a1ba42ef9ba25490ece6fb3c153b8d38cced305e81cbc497) -106px -12px no-repeat',
          lanhutext1: '覆盖全国10000+KTV场所各大平台海量曝光'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb9fe29d5cf75c47377b9f56211648d7e3c58a95f0a0cc56465e72f152b9b042) -15px -13px no-repeat',
          lanhutext0: '获得收益',
          lanhuBg1:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng617cc4287ca9a5c98ce4ce4bc24a832cb8ef8eca0a4ea223c3f1d8f298981702) -98px -12px no-repeat',
          lanhutext1: '为歌曲量身定制多维推广服务'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />