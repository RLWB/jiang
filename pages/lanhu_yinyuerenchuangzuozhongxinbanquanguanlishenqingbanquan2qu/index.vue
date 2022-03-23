<template>
  <div class="page flex-col">
    <div class="layer1 flex-col">
      <div class="mod1 flex-col justify-center">
        <div class="mod2 flex-row">
          <img
            class="pic1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="word1">音乐人创作平台</span>
          <div class="layer2 flex-col"><span class="txt1">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <div class="layer3 flex-col"></div>
          <span class="word2">哗啦啦</span>
          <img
            class="icon1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdb37d5f5d8e2eaca43efc5ff6f6267edc54b47c28e51bc9be5c8be942dd53c11.png"
          />
        </div>
      </div>
      <div class="mod3 flex-col justify-center">
        <div class="mod4">
          <span class="txt2">音乐人创作中心&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;版权管理&nbsp;&nbsp;&gt;</span>
          <span class="word3">&nbsp;&nbsp;&nbsp;</span>
          <span class="txt3">申请&nbsp;版权</span>
        </div>
      </div>
      <div class="mod5 flex-col">
        <div class="block1 flex-col justify-center align-center"><span class="word4">1</span></div>
        <div class="block2 flex-col"></div>
        <div class="block3 flex-col justify-center align-center"><span class="info1">2</span></div>
        <div class="block4 flex-col"></div>
        <div class="block5 flex-col justify-center align-center"><span class="word5">3</span></div>
        <span class="info2">选择版权人</span>
        <span class="txt4">填写申请信息</span>
        <span class="info3">缴费后提交审核</span>
      </div>
      <span class="word6">填写申请信息</span>
      <div class="mod6 flex-row justify-between">
        <span class="txt5">作品名称</span>
        <div class="mod7 flex-col justify-center"><span class="info4">请输入</span></div>
      </div>
      <div class="mod8 flex-row justify-between">
        <span class="info5">首句歌词</span>
        <div class="group1 flex-col justify-center"><span class="word7">请输入</span></div>
      </div>
      <div class="mod9 flex-row">
        <span class="txt6">曲作者</span>
        <div class="layer4 flex-col">
          <div class="box1 flex-row justify-between">
            <span class="txt7">请选择</span>
            <img
              class="label1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga5c83f8c9f56718bf4400088b8f4fa3f1d4b27a3977061974dfd687f23a72ed8.png"
            />
          </div>
        </div>
        <span class="word8">*最多可选择3个</span>
      </div>
      <div class="mod10 flex-row justify-between">
        <span class="word9">作品种类</span>
        <div class="box2 flex-col">
          <div class="box3 flex-row justify-between">
            <span class="word10">请选择，可多选</span>
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga5c83f8c9f56718bf4400088b8f4fa3f1d4b27a3977061974dfd687f23a72ed8.png"
            />
          </div>
        </div>
      </div>
      <div class="mod11 flex-row justify-between">
        <span class="word11">上传曲谱</span>
        <button class="section1 flex-col justify-center align-center" @click="onClick_1">
          <span class="word12">本地上传</span>
        </button>
      </div>
      <div class="mod12 flex-row justify-between">
        <span class="word13">详细地址</span>
        <div class="box4 flex-col justify-center"><span class="word14">请输入收件地址</span></div>
      </div>
      <div class="mod13 flex-row">
        <span class="txt8">版权证书版本</span>
        <div class="bd1 flex-col justify-center align-center"><div class="bd2 flex-col"></div></div>
        <span class="word15">电子版</span>
        <div class="bd3 flex-col"></div>
        <span class="txt9">纸质版</span>
      </div>
      <div class="mod14 flex-col justify-center align-center"><span class="info6">下一步</span></div>
      <div class="mod15 flex-col">
        <div class="section2 flex-col">
          <div class="group2 flex-row justify-between">
            <span class="word16">关于我们</span>
            <span class="word17">监督举报</span>
            <span class="info7">广告服务</span>
            <span class="word18">版权指引</span>
            <span class="txt10">隐私政策</span>
            <span class="info8">招聘信息</span>
            <span class="word19">客服中心</span>
          </div>
          <div class="group3 flex-col"></div>
          <img
            class="pic2"
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
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />