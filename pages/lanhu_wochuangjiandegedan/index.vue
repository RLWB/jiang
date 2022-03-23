<template>
  <div class="page flex-col">
    <div class="bd1 flex-col">
      <div class="block1 flex-col">
        <div class="group1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">发现音乐</span>
          <div class="mod1 flex-col"><span class="word1">我的音乐</span></div>
          <span class="word2">音乐人开放平台</span>
          <span class="word3">关于我们</span>
          <div class="mod2 flex-col"><span class="word4">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="mod3 flex-col"></div>
          <span class="word5">用户名</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="block2 flex-col">
        <div class="outer1 flex-row"><div class="block3 flex-col"></div></div>
        <div class="outer2 flex-row"><span class="word6">哗啦啦啦</span></div>
        <div class="outer3 flex-row justify-between">
          <div class="bd2 flex-col"></div>
          <div class="bd3 flex-col">
            <div class="section1">
              <span class="info1">Lv</span>
              <span class="txt2">.</span>
              <span class="info2">7</span>
            </div>
          </div>
        </div>
        <div class="outer4 flex-row justify-between">
          <div class="box1 flex-col justify-between">
            <span class="info3">234</span>
            <span class="word7">关注</span>
          </div>
          <div class="box2 flex-col"></div>
          <div class="box3 flex-col justify-between">
            <span class="info4">357</span>
            <span class="word8">粉丝</span>
          </div>
          <div class="box4 flex-col"></div>
          <div class="box5 flex-col justify-between">
            <span class="info5">3254</span>
            <span class="word9">音乐币</span>
          </div>
        </div>
        <img
          class="pic1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng185c9db1e094a3ab810131587d3d3084c3d33b4c7b8a0faf19c5709c5c3e1257.png"
        />
        <div class="outer5 flex-col"></div>
        <div class="outer6 flex-col"><span class="info6">个人音乐人</span></div>
      </div>
      <div class="block4 flex-col">
        <div class="block5 flex-row">
          <span class="word10">我的发行</span>
          <div class="group2 flex-col"><span class="txt3">我创建的歌单</span></div>
          <span class="word11">我的喜欢</span>
          <span class="word12">我的下载</span>
          <span class="word13">我的关注</span>
          <span class="word14">我的粉丝</span>
        </div>
      </div>
      <div class="block6 flex-row">
        <div
          class="layer1 flex-col"
          :style="{ background: item.lanhuBg0 }"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <div v-if="item.slot1 === 1" class="layer2 flex-col justify-between">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngea67c6850992baba7f3f422d188bfbb61784408310372c8674e8c6891a303f63.png"
            />
            <span class="word15">新建歌单</span>
          </div>
        </div>
      </div>
      <div class="block7 flex-row justify-between">
        <span class="word16">姜云升&nbsp;|&nbsp;演绎道士说唱</span>
        <span class="word17">国风戏腔唱出摇滚味｜醉了醉了！</span>
        <span class="word18">伤感歌曲｜想起你还是会偷偷流泪</span>
        <span class="info7">一键get好心情：为自己制造快乐</span>
      </div>
      <div class="block8 flex-row">
        <div class="main1 flex-col"></div>
        <span class="word19">2354</span>
        <div class="main2 flex-col"></div>
        <span class="info8">2021-10-10</span>
        <div class="main3 flex-col"></div>
        <span class="word20">2354</span>
        <div class="main4 flex-col"></div>
        <span class="info9">2021-10-10</span>
        <div class="main5 flex-col"></div>
        <span class="info10">2354</span>
        <div class="main6 flex-col"></div>
        <span class="word21">2021-10-10</span>
        <img
          class="icon1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
        />
        <span class="info11">2354</span>
        <img
          class="label3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
        />
        <span class="word22">2021-10-10</span>
      </div>
      <div class="block9 flex-row">
        <div class="mod4 flex-col" v-for="(item, index) in loopData1" :key="index">
          <div class="mod4 flex-col justify-between">
            <div class="outer7 flex-col" :style="{ background: item.lanhuBg2 }"></div>
            <span class="info12" v-html="item.lanhutext0"></span>
          </div>
        </div>
      </div>
      <div class="block10 flex-row">
        <img
          class="label4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
        />
        <span class="txt4">2354</span>
        <img
          class="label5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
        />
        <span class="txt5">2021-10-10</span>
        <div class="group3 flex-col"></div>
        <span class="word23">2354</span>
        <div class="group4 flex-col"></div>
        <span class="txt6">2021-10-10</span>
        <div class="group5 flex-col"></div>
        <span class="word24">2354</span>
        <div class="group6 flex-col"></div>
        <span class="txt7">2021-10-10</span>
        <div class="group7 flex-col"></div>
        <span class="word25">2354</span>
        <div class="group8 flex-col"></div>
        <span class="word26">2021-10-10</span>
        <img
          class="icon2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng21058244adcda5c13786c7c1f14f4826ac37402ff86a140a500eac6fa6cbcd0d.png"
        />
        <span class="word27">2354</span>
        <img
          class="label6"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc48391ee771e1872e42150157f7dd70c70b9d8e50da9febe04b4818eb214b260.png"
        />
        <span class="word28">2021-10-10</span>
      </div>
      <div class="block11 flex-col">
        <div class="box6 flex-row">
          <div class="group9 flex-col">
            <img
              class="icon3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
            />
          </div>
          <div class="group10 flex-col justify-between">
            <div class="mod5 flex-row">
              <span class="word29">慢慢喜欢你</span>
              <span class="txt8">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
              <span class="info13">02:12&nbsp;/&nbsp;04:39</span>
            </div>
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
            />
          </div>
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
          />
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
          />
          <img
            class="label9"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
          />
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
          />
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
          />
          <img
            class="label10"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
          />
          <div class="group11 flex-col">
            <img
              class="label11"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
            />
          </div>
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
          />
          <div class="group12 flex-col justify-between">
            <img
              class="label12"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng80c1dc15f157a898c6312cb2e8d95b5678b72b0205e2ab8ad8215715882faf43.png"
            />
            <img
              class="pic3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
            />
          </div>
          <div class="group13 flex-col justify-between">
            <img
              class="icon6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
            />
            <img
              class="label13"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
            />
          </div>
        </div>
        <div class="box7 flex-col"><span class="info14">123</span></div>
      </div>
      <div class="block12 flex-col">
        <div class="bd4 flex-col">
          <div class="main7 flex-row justify-between">
            <span class="word30">关于我们</span>
            <span class="info15">监督举报</span>
            <span class="txt9">广告服务</span>
            <span class="word31">版权指引</span>
            <span class="txt10">隐私政策</span>
            <span class="word32">招聘信息</span>
            <span class="word33">客服中心</span>
          </div>
          <div class="main8 flex-col"></div>
          <img
            class="pic4"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        { lanhuBg0: 'rgba(249,252,251,1)', slot1: 1 },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng90418a27ba487a2b195c4c06154ba1b80563e43ac303aaf580c7e4ca5ddd3d2c) 0px 0px no-repeat'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8aa815401c3f2b6f41d7003cf404a6acabc865c1032316c0452e2afb5efb8a83) -1px 0px no-repeat'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng28ebe65f2dd388b85904ab2a15484998f1fe1eea8e3047cf879f0e655e2b4fb8) -1px 0px no-repeat'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng450e7e7e25535b6b0974267cea494712af86b09c7c21983efca65b11c2257c2d) 0px 0px no-repeat'
        }
      ],
      loopData1: [
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng411074681ee2108722d27dc42897bf4a0c01766885a19bbd4e231ce9b9f536c8) -20px -20px no-repeat',
          lanhutext0: '情话说唱&nbsp;|&nbsp;倾诉你我的心动桥梁<br/>'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng90418a27ba487a2b195c4c06154ba1b80563e43ac303aaf580c7e4ca5ddd3d2c) 0px 0px no-repeat',
          lanhutext0: '姜云升&nbsp;|&nbsp;演绎道士说唱'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8aa815401c3f2b6f41d7003cf404a6acabc865c1032316c0452e2afb5efb8a83) -1px 0px no-repeat',
          lanhutext0: '国风戏腔唱出摇滚味｜醉了醉了！'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng28ebe65f2dd388b85904ab2a15484998f1fe1eea8e3047cf879f0e655e2b4fb8) -1px 0px no-repeat',
          lanhutext0: '伤感歌曲｜想起你还是会偷偷流泪'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng450e7e7e25535b6b0974267cea494712af86b09c7c21983efca65b11c2257c2d) 0px 0px no-repeat',
          lanhutext0: '一键get好心情：为自己制造快乐'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />