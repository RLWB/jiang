<template>
  <div class="page flex-col">
    <div class="layer1 flex-col">
      <div class="section1 flex-col justify-center">
        <div class="group1 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="txt1">音乐人创作平台</span>
          <div class="box1 flex-col"><span class="txt2">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="box2 flex-col"></div>
          <span class="word1">哗啦啦</span>
          <img
            class="label1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="section2 flex-col justify-center">
        <div class="mod1">
          <span class="info1">
            音乐人创作中心&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;版权管理&nbsp;&nbsp;&gt;
          </span>
          <span class="info2">&nbsp;&nbsp;&nbsp;</span>
          <span class="info3">申请&nbsp;版权</span>
        </div>
      </div>
      <div class="section3 flex-col">
        <div class="layer2 flex-col justify-center align-center"><span class="word2">1</span></div>
        <div class="layer3 flex-col"></div>
        <div class="layer4 flex-col justify-center align-center"><span class="txt3">2</span></div>
        <div class="layer5 flex-col"></div>
        <div class="layer6 flex-col justify-center align-center"><span class="word3">3</span></div>
        <span class="word4">选择版权人</span>
        <span class="word5">填写申请信息</span>
        <span class="word6">缴费后提交审核</span>
      </div>
      <span class="word7">选择版权人</span>
      <div class="section4 flex-row justify-between">
        <div class="section5 flex-col justify-center">
          <div class="mod2 flex-row justify-between">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="word8">李</span>
          </div>
        </div>
        <button class="section6 flex-col justify-center align-center" @click="onClick_1">
          <span class="txt4">搜索</span>
        </button>
      </div>
      <div class="section7 flex-col">
        <div class="outer1 flex-col">
          <div class="wrap1 flex-row">
            <div class="layer7 flex-col"></div>
            <div class="layer8">
              <span class="txt5">李</span>
              <span class="info4">荣浩</span>
            </div>
            <div class="layer9 flex-col justify-center align-center"><span class="txt6">选择</span></div>
          </div>
          <div class="wrap2 flex-col"></div>
          <div class="wrap3 flex-row">
            <div class="section8 flex-col"></div>
            <div class="section9">
              <span class="word9">李</span>
              <span class="info5">荣浩</span>
            </div>
            <div class="section10 flex-col justify-center align-center"><span class="word10">选择</span></div>
          </div>
          <div class="wrap4 flex-col"></div>
          <div class="wrap5 flex-row">
            <div class="outer2 flex-col"></div>
            <div class="outer3">
              <span class="word11">李</span>
              <span class="word12">荣浩</span>
            </div>
            <div class="outer4 flex-col justify-center align-center"><span class="txt7">选择</span></div>
          </div>
          <div class="wrap6 flex-col"></div>
          <div class="wrap7 flex-row">
            <div class="box3 flex-col"></div>
            <div class="box4">
              <span class="txt8">李</span>
              <span class="word13">荣浩</span>
            </div>
            <div class="box5 flex-col justify-center align-center"><span class="word14">选择</span></div>
          </div>
          <div class="wrap8 flex-col"></div>
          <div class="wrap9 flex-row">
            <div class="bd1 flex-col"></div>
            <div class="bd2">
              <span class="word15">李</span>
              <span class="word16">荣浩</span>
            </div>
            <div class="bd3 flex-col justify-center align-center"><span class="info6">选择</span></div>
          </div>
          <div class="wrap10 flex-col"></div>
          <div class="wrap11 flex-row">
            <div class="wrap12 flex-col"></div>
            <div class="wrap13">
              <span class="txt9">李</span>
              <span class="info7">荣浩</span>
            </div>
            <div class="wrap14 flex-col justify-center align-center"><span class="info8">选择</span></div>
          </div>
          <div class="wrap15 flex-col"></div>
        </div>
        <div class="outer5 flex-col"><div class="section11 flex-col"></div></div>
      </div>
      <div class="section12 flex-col justify-center align-center"><span class="info9">没有找到？添加版权人</span></div>
      <div class="section13 flex-col">
        <div class="bd4 flex-col">
          <div class="box6 flex-row justify-between">
            <span class="word17">关于我们</span>
            <span class="txt10">监督举报</span>
            <span class="word18">广告服务</span>
            <span class="word19">版权指引</span>
            <span class="word20">隐私政策</span>
            <span class="word21">招聘信息</span>
            <span class="word22">客服中心</span>
          </div>
          <div class="box7 flex-col"></div>
          <img
            class="pic2"
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