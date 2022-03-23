<template>
  <div class="page flex-col">
    <div class="box1 flex-col">
      <div class="section1 flex-col">
        <div class="mod1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">音乐人创作平台</span>
          <div class="main1 flex-col"><span class="word2">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="main2 flex-col"></div>
          <span class="txt1">哗啦啦</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="section2 flex-col">
        <div class="group1">
          <span class="word3">
            音乐人创作中心&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;作品管理&nbsp;&nbsp;&gt;
          </span>
          <span class="info1">&nbsp;&nbsp;&nbsp;</span>
          <span class="txt2">发布歌曲</span>
        </div>
      </div>
      <div class="section3 flex-col">
        <span class="txt3">简单步骤即可发行新歌</span>
        <div class="mod2 flex-col"><span class="info2">1</span></div>
        <div class="mod3 flex-col"></div>
        <div class="mod4 flex-col"><span class="word4">2</span></div>
        <div class="mod5 flex-col"></div>
        <div class="mod6 flex-col"><span class="word5">3</span></div>
        <div class="mod7 flex-col"></div>
        <div class="mod8 flex-col"><span class="txt4">4</span></div>
        <span class="info3">选择发行方式</span>
        <span class="info4">上传歌曲</span>
        <span class="txt5">签署协议合同</span>
        <span class="word6">提交审核</span>
      </div>
      <span class="word7">上传专辑</span>
      <div class="section4 flex-col">
        <div class="main3 flex-row justify-between">
          <div class="bd1 flex-col">
            <div class="outer1 flex-col"><div class="layer1 flex-col"></div></div>
          </div>
          <div class="bd2 flex-col">
            <span class="word8">青苔</span>
            <span class="word9">无事发生&nbsp;/鱼柒文&nbsp;/杜匡辰&nbsp;/汤靖</span>
            <div class="outer2 flex-row">
              <img
                class="icon1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngcd90f006dfce35699a96af0e3c10a1b37f4ec9d46d6bc5a40ef848d5d11ce9fd.png"
              />
              <span class="word10">2354</span>
              <img
                class="icon2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngfa28e918f22cec890e390f74aed309565f705c99b1237bf9fa79875e7ce3882f.png"
              />
              <span class="info5">2021-10-10</span>
            </div>
          </div>
        </div>
      </div>
      <span class="word11">已添加的歌曲</span>
      <div class="section5 flex-row">
        <div class="box2 flex-col">
          <span class="word12">失去就是这样么</span>
          <span class="txt6">郁可唯</span>
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng55b5815a040923a4a6237c7e657ee59032c6f6874dc282650fd0b3b9bc1da3b2.png"
          />
          <div class="section6 flex-col">
            <div class="bd3 flex-row justify-between">
              <div class="bd4 flex-col"><span class="word13">编辑</span></div>
              <button class="bd5 flex-col" @click="onClick_1"><span class="info6">删除</span></button>
            </div>
          </div>
          <img
            class="label2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng43340d609f1aa62e2d2bbf9e18e99f06d06a0ff9c1cb67091f11ecee092f541f.png"
          />
          <span class="info7">2354</span>
          <img
            class="label3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng02f171bcdf8c0f5df93ff4a01123c6087e7c9598d9780341a421e030e02d9db0.png"
          />
          <span class="word14">03:55</span>
        </div>
        <div class="box3 flex-col">
          <span class="info8">失去就是这样么</span>
          <span class="word15">郁可唯</span>
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng55b5815a040923a4a6237c7e657ee59032c6f6874dc282650fd0b3b9bc1da3b2.png"
          />
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng43340d609f1aa62e2d2bbf9e18e99f06d06a0ff9c1cb67091f11ecee092f541f.png"
          />
          <span class="word16">2354</span>
          <img
            class="icon3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng02f171bcdf8c0f5df93ff4a01123c6087e7c9598d9780341a421e030e02d9db0.png"
          />
          <span class="info9">03:55</span>
        </div>
        <div class="box4 flex-col">
          <span class="word17">失去就是这样么</span>
          <span class="info10">郁可唯</span>
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng55b5815a040923a4a6237c7e657ee59032c6f6874dc282650fd0b3b9bc1da3b2.png"
          />
          <img
            class="label5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng43340d609f1aa62e2d2bbf9e18e99f06d06a0ff9c1cb67091f11ecee092f541f.png"
          />
          <span class="word18">2354</span>
          <img
            class="icon4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng02f171bcdf8c0f5df93ff4a01123c6087e7c9598d9780341a421e030e02d9db0.png"
          />
          <span class="word19">03:55</span>
        </div>
        <div class="box5 flex-col">
          <span class="word20">失去就是这样么</span>
          <span class="word21">郁可唯</span>
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng55b5815a040923a4a6237c7e657ee59032c6f6874dc282650fd0b3b9bc1da3b2.png"
          />
          <img
            class="icon5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng43340d609f1aa62e2d2bbf9e18e99f06d06a0ff9c1cb67091f11ecee092f541f.png"
          />
          <span class="word22">2354</span>
          <img
            class="label6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng02f171bcdf8c0f5df93ff4a01123c6087e7c9598d9780341a421e030e02d9db0.png"
          />
          <span class="txt7">03:55</span>
        </div>
        <div class="box6 flex-col">
          <span class="info11">失去就是这样么</span>
          <span class="word23">郁可唯</span>
          <img
            class="pic5"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng55b5815a040923a4a6237c7e657ee59032c6f6874dc282650fd0b3b9bc1da3b2.png"
          />
          <img
            class="label7"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng43340d609f1aa62e2d2bbf9e18e99f06d06a0ff9c1cb67091f11ecee092f541f.png"
          />
          <span class="word24">2354</span>
          <img
            class="icon6"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng02f171bcdf8c0f5df93ff4a01123c6087e7c9598d9780341a421e030e02d9db0.png"
          />
          <span class="word25">03:55</span>
        </div>
        <div class="box7 flex-col">
          <span class="txt8">失去就是这样么</span>
          <span class="txt9">郁可唯</span>
          <img
            class="img2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng55b5815a040923a4a6237c7e657ee59032c6f6874dc282650fd0b3b9bc1da3b2.png"
          />
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng43340d609f1aa62e2d2bbf9e18e99f06d06a0ff9c1cb67091f11ecee092f541f.png"
          />
          <span class="txt10">2354</span>
          <img
            class="label9"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng02f171bcdf8c0f5df93ff4a01123c6087e7c9598d9780341a421e030e02d9db0.png"
          />
          <span class="word26">03:55</span>
        </div>
      </div>
      <span class="word27">填写歌曲信息</span>
      <div class="section7 flex-row justify-between">
        <span class="info12">*歌手</span>
        <div class="block1 flex-col">
          <div class="layer2 flex-row justify-between">
            <div class="main4 flex-col"><span class="word28">哈哈哈</span></div>
            <div class="main5 flex-col">
              <div class="section8 flex-row justify-between">
                <span class="txt11">嘻嘻嘻</span>
                <img
                  class="label10"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng67ab1006f768dc48531dbcbc2e9d181a248c1474224cfd00d688d626a97ff9c0.png"
                />
              </div>
            </div>
          </div>
        </div>
        <span class="word29">*最多可选择5个</span>
      </div>
      <div class="section9 flex-row justify-between">
        <span class="word30">*词作者</span>
        <div class="group2 flex-col"><span class="word31">请输入名字（如有多人，请用“，”隔开）</span></div>
      </div>
      <div class="section10 flex-row justify-between">
        <span class="txt12">*曲作者</span>
        <div class="main6 flex-col"><span class="word32">请输入名字（如有多人，请用“，”隔开）</span></div>
      </div>
      <div class="section11 flex-row justify-between">
        <span class="info13">*歌曲封面</span>
        <img
          class="img3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng3811a93180ef732b5e5a6c5058a261480b37523384577c4af8063906811f4f7f.png"
        />
      </div>
      <div class="section12 flex-row justify-between">
        <span class="word33">*歌曲名称</span>
        <div class="wrap1 flex-col"><span class="info14">请输入名称</span></div>
      </div>
      <div class="section13 flex-row justify-between">
        <span class="txt13">*歌曲类别</span>
        <div class="mod9 flex-col">
          <div class="layer3 flex-row justify-between">
            <span class="word34">请选择</span>
            <img
              class="icon7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga5c83f8c9f56718bf4400088b8f4fa3f1d4b27a3977061974dfd687f23a72ed8.png"
            />
          </div>
        </div>
      </div>
      <div class="section14 flex-row justify-between">
        <span class="word35">*歌曲音频</span>
        <div class="box8 flex-col">
          <div class="section15 flex-row">
            <img
              class="label11"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng91b8edde667f224cc8eeef953bb0ab5d0516bf5a71f32ec68ae62e8473dcba85.png"
            />
            <span class="word36">时长&nbsp;&nbsp;&nbsp;04:12</span>
            <img
              class="icon8"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng7280318dcdf2fe358c84cf703d494a55907aa007fab5083554ba7c007487206a.png"
            />
          </div>
        </div>
      </div>
      <button class="section16 flex-col" @click="onClick_2"><span class="txt14">本地上传</span></button>
      <div class="section17 flex-row justify-between">
        <span class="info15">歌曲伴奏</span>
        <button class="wrap2 flex-col" @click="onClick_3"><span class="info16">本地上传</span></button>
      </div>
      <div class="section18 flex-row">
        <span class="word37">*是否发行KTV</span>
        <div class="layer4 flex-col"></div>
        <span class="txt15">是</span>
        <div class="layer5 flex-col"></div>
        <span class="txt16">否</span>
        <span class="info17">*若确定发行KTV，必须上传伴奏</span>
      </div>
      <div class="section19 flex-row">
        <span class="info18">*是否同步腾讯</span>
        <div class="section20 flex-col"><div class="box9 flex-col"></div></div>
        <span class="info19">是</span>
        <div class="section21 flex-col"></div>
        <span class="word38">否</span>
        <span class="word39">*同步腾讯（酷狗、QQ音乐和酷我）必须原创音乐。翻唱音乐请勿选择。</span>
      </div>
      <div class="section22 flex-row justify-between">
        <span class="word40">*上传歌词</span>
        <div class="mod10 flex-col"><span class="info20">请输入</span></div>
      </div>
      <span class="info21">*若上传歌词未带时间轴，则无法显示</span>
      <div class="section23 flex-row justify-between">
        <div class="layer6 flex-col"><span class="word41">继续添加歌曲</span></div>
        <div class="layer7 flex-col"><span class="info22">下一步</span></div>
      </div>
      <div class="section24 flex-col">
        <div class="box10 flex-col">
          <div class="layer8 flex-row justify-between">
            <span class="word42">关于我们</span>
            <span class="word43">监督举报</span>
            <span class="txt17">广告服务</span>
            <span class="info23">版权指引</span>
            <span class="txt18">隐私政策</span>
            <span class="word44">招聘信息</span>
            <span class="info24">客服中心</span>
          </div>
          <div class="layer9 flex-col"></div>
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