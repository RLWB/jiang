<template>
  <div class="page flex-col">
    <div class="block1 flex-col">
      <div class="outer1 flex-col justify-center">
        <div class="main1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <span class="info1">音乐人创作平台</span>
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
      <div class="outer2 flex-col justify-center">
        <div class="outer3">
          <span class="txt1">音乐人创作中心&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;版权管理&nbsp;&nbsp;&gt;</span>
          <span class="txt2">&nbsp;&nbsp;&nbsp;</span>
          <span class="word3">申请&nbsp;版权</span>
        </div>
      </div>
      <div class="outer4 flex-col">
        <div class="bd1 flex-col justify-center align-center"><span class="info2">1</span></div>
        <div class="bd2 flex-col"></div>
        <div class="bd3 flex-col justify-center align-center"><span class="txt3">2</span></div>
        <div class="bd4 flex-col"></div>
        <div class="bd5 flex-col justify-center align-center"><span class="info3">3</span></div>
        <span class="word4">选择版权人</span>
        <span class="word5">填写申请信息</span>
        <span class="txt4">缴费后提交审核</span>
      </div>
      <span class="word6">选择版权人</span>
      <div class="outer5 flex-row justify-between">
        <div class="layer1 flex-col justify-center">
          <div class="block2 flex-row justify-between">
            <img
              class="label2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng71426e83672631b256e3efd85721aac7189abfb9214c9e7023e0eabec179d48a.png"
            />
            <span class="info4">李</span>
          </div>
        </div>
        <button class="layer2 flex-col justify-center align-center" @click="onClick_1">
          <span class="info5">搜索</span>
        </button>
      </div>
      <div class="outer6 flex-col">
        <div class="group1 flex-col">
          <div class="wrap1 flex-row">
            <div class="box1 flex-col"></div>
            <div class="box2">
              <span class="word7">李</span>
              <span class="word8">荣浩</span>
            </div>
            <div class="box3 flex-col justify-center align-center"><span class="info6">选择</span></div>
          </div>
          <div class="wrap2 flex-col"></div>
          <div class="wrap3 flex-row">
            <div class="group2 flex-col"></div>
            <div class="group3">
              <span class="info7">李</span>
              <span class="word9">荣浩</span>
            </div>
            <div class="group4 flex-col justify-center align-center"><span class="info8">选择</span></div>
          </div>
          <div class="wrap4 flex-col"></div>
          <div class="wrap5 flex-row">
            <div class="mod1 flex-col"></div>
            <div class="mod2">
              <span class="word10">李</span>
              <span class="info9">荣浩</span>
            </div>
            <div class="mod3 flex-col justify-center align-center"><span class="info10">选择</span></div>
          </div>
          <div class="wrap6 flex-col"></div>
          <div class="wrap7 flex-row">
            <div class="box4 flex-col"></div>
            <div class="box5">
              <span class="txt5">李</span>
              <span class="info11">荣浩</span>
            </div>
            <div class="box6 flex-col justify-center align-center"><span class="txt6">选择</span></div>
          </div>
          <div class="wrap8 flex-col"></div>
          <div class="wrap9 flex-row">
            <div class="bd6 flex-col"></div>
            <div class="bd7">
              <span class="word11">李</span>
              <span class="info12">荣浩</span>
            </div>
            <div class="bd8 flex-col justify-center align-center"><span class="txt7">选择</span></div>
          </div>
          <div class="wrap10 flex-col"></div>
          <div class="wrap11 flex-row">
            <div class="main2 flex-col"></div>
            <div class="main3">
              <span class="txt8">李</span>
              <span class="word12">荣浩</span>
            </div>
            <div class="main4 flex-col justify-center align-center"><span class="txt9">选择</span></div>
          </div>
          <div class="wrap12 flex-col"></div>
        </div>
        <div class="group5 flex-col"><div class="bd9 flex-col"></div></div>
      </div>
      <div class="outer7 flex-col justify-center align-center"><span class="word13">没有找到？添加版权人</span></div>
      <div class="outer8 flex-col">
        <div class="box7 flex-col">
          <div class="outer9 flex-row justify-between">
            <span class="word14">关于我们</span>
            <span class="word15">监督举报</span>
            <span class="word16">广告服务</span>
            <span class="word17">版权指引</span>
            <span class="txt10">隐私政策</span>
            <span class="txt11">招聘信息</span>
            <span class="txt12">客服中心</span>
          </div>
          <div class="outer10 flex-col"></div>
          <img
            class="pic1"
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
    <div class="block3 flex-col">
      <div class="group6 flex-col">
        <span class="info13">添加版权人</span>
        <img
          class="label3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge5ef85e75ed336f3b090cf9c9216feccce811f2a23cc0f668ad2aefab31b153e.png"
        />
        <div class="section3 flex-col"></div>
        <span class="word18">版权人姓名</span>
        <div class="section4 flex-col justify-center"><span class="word19">请输入</span></div>
        <span class="word20">版权人性别</span>
        <div class="section5 flex-col"></div>
        <span class="txt13">男</span>
        <div class="section6 flex-col"></div>
        <span class="txt14">女</span>
        <span class="info14">所在地区</span>
        <div class="section7 flex-col justify-center"><span class="txt15">请输入</span></div>
        <span class="word21">联系电话</span>
        <div class="section8 flex-col justify-center"><span class="word22">请输入</span></div>
        <span class="word23">电子邮箱</span>
        <div class="section9 flex-col justify-center"><span class="word24">请输入</span></div>
        <span class="txt16">证件类型</span>
        <div class="section10 flex-col">
          <div class="section11 flex-row justify-between">
            <span class="info15">请选择</span>
            <img
              class="icon1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnga5c83f8c9f56718bf4400088b8f4fa3f1d4b27a3977061974dfd687f23a72ed8.png"
            />
          </div>
        </div>
        <span class="word25">证件号码</span>
        <div class="section12 flex-col justify-center"><span class="word26">请输入</span></div>
        <span class="word27">上传证件信息</span>
        <span class="word28">(大小不得超过2M，格式仅支持JPG、JPEG、PNG)</span>
        <div class="section13 flex-col">
          <div class="mod4 flex-col">
            <div class="bd10 flex-col">
              <button class="mod5 flex-col align-center" @click="onClick_2">
                <span class="info16">重新上传</span>
              </button>
            </div>
          </div>
        </div>
        <div class="section14 flex-col justify-center align-center">
          <img
            class="label4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga7a0646d146b45475e28d508876a67e4effb501e2b7ef77463bd784607424e61.png"
          />
        </div>
        <span class="info17">证件正面</span>
        <span class="word29">证件背面</span>
        <button class="section15 flex-col justify-center align-center" @click="onClick_3">
          <span class="info18">取消</span>
        </button>
        <button class="section16 flex-col justify-center align-center" @click="onClick_4">
          <span class="word30">确认</span>
        </button>
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
    },
    onClick_4() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />