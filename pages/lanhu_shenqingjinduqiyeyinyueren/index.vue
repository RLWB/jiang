<template>
  <div class="page flex-col">
    <div class="outer1 flex-col">
      <div class="main1 flex-col">
        <div class="bd1 flex-row">
          <div class="layer1 flex-col" v-for="(item, index) in loopData0" :key="index">
            <div class="group1 flex-col justify-between">
              <span class="word1" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
              <span class="word2" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></span>
            </div>
          </div>
        </div>
        <div class="bd2 flex-col"></div>
        <span class="info1">申请企业音乐人进度</span>
        <div class="bd3 flex-col"></div>
        <div class="bd4 flex-col justify-center align-center"><span class="txt1">1</span></div>
        <div class="bd5 flex-col justify-center align-center"><span class="word3">审核中</span></div>
        <img
          class="pic1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng89562c164b88df85e6339f0ee7bc8e0cf8387d22fbbae24d92b486fce6bc555d.png"
        />
        <div class="bd6 flex-col justify-center align-center"><span class="word4">2</span></div>
        <div class="bd7 flex-col justify-center align-center"><span class="word5">3</span></div>
      </div>
      <div class="main2 flex-col">
        <div class="main3 flex-col">
          <div class="box1 flex-col"></div>
          <span class="info2">申请企业音乐人进度</span>
          <div class="box2 flex-col"></div>
          <div class="box3 flex-col justify-center align-center"><span class="info3">1</span></div>
          <div class="box4 flex-col justify-center align-center"><span class="info4">审核通过</span></div>
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngcc32f167f8eb663b376ac89211abbce4fdbf2569c7c49406190ba1cfedde1f30.png"
          />
          <div class="box5 flex-col justify-center align-center"><span class="word6">2</span></div>
          <div class="box6 flex-col justify-center align-center"><span class="txt2">3</span></div>
          <span class="word7">认证企业信息</span>
          <span class="word8">填写并提交企业信息</span>
          <span class="txt3">缴纳年费</span>
          <span class="txt4">确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。</span>
          <span class="info5">
            按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="word9">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
          <div class="box7 flex-col justify-center"><span class="info6">立即填写</span></div>
        </div>
        <div class="main4 flex-col">
          <div class="layer2 flex-col"></div>
          <span class="word10">申请企业音乐人进度</span>
          <div class="layer3 flex-col"></div>
          <div class="layer4 flex-col justify-center align-center"><span class="word11">1</span></div>
          <div class="layer5 flex-col justify-center align-center"><span class="word12">审核通过</span></div>
          <img
            class="pic2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngcc32f167f8eb663b376ac89211abbce4fdbf2569c7c49406190ba1cfedde1f30.png"
          />
          <div class="layer6 flex-col justify-center align-center"><span class="info7">2</span></div>
          <div class="layer7 flex-col justify-center align-center"><span class="txt5">审核中</span></div>
          <div class="layer8 flex-col justify-center align-center"><span class="word13">3</span></div>
          <span class="word14">认证企业信息</span>
          <span class="info8">填写并提交企业信息</span>
          <span class="word15">缴纳年费</span>
          <span class="word16">
            确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。
          </span>
          <span class="txt6">
            按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="word17">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
        </div>
        <div class="main5 flex-col">
          <div class="box8 flex-col"></div>
          <span class="txt7">申请企业音乐人进度</span>
          <div class="box9 flex-col"></div>
          <div class="box10 flex-col justify-center align-center"><span class="word18">1</span></div>
          <img
            class="pic3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng89562c164b88df85e6339f0ee7bc8e0cf8387d22fbbae24d92b486fce6bc555d.png"
          />
          <div class="box11 flex-col justify-center align-center"><span class="word19">2</span></div>
          <div class="box12 flex-col justify-center align-center"><span class="word20">3</span></div>
          <div class="box13 flex-col align-center"><span class="word21">审核不通过</span></div>
          <span class="word22">认证企业信息</span>
          <span class="word23">填写并提交企业信息</span>
          <span class="info9">缴纳年费</span>
          <span class="word24">
            确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。
          </span>
          <span class="info10">
            按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="word25">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
          <div class="box14 flex-col justify-center"><span class="info11">重新填写</span></div>
        </div>
        <div class="main6 flex-col">
          <div class="outer2 flex-col"></div>
          <span class="word26">申请企业音乐人进度</span>
          <div class="outer3 flex-col"></div>
          <div class="outer4 flex-col justify-center align-center"><span class="word27">1</span></div>
          <img
            class="img2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngfa26f05e082dd84871cf56fb9fc22e981cdfd79511a60ad45c39bc6f2468fb44.png"
          />
          <div class="outer5 flex-col justify-center align-center"><span class="word28">2</span></div>
          <div class="outer6 flex-col justify-center align-center"><span class="word29">审核通过</span></div>
          <div class="outer7 flex-col justify-center align-center"><span class="txt8">3</span></div>
          <span class="txt9">认证企业信息</span>
          <span class="word30">填写并提交企业信息</span>
          <span class="word31">缴纳年费</span>
          <span class="txt10">
            确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。
          </span>
          <span class="info12">
            按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="word32">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
          <div class="outer8 flex-col justify-center"><span class="word33">立即缴费</span></div>
        </div>
        <div class="main7 flex-col">
          <div class="block1 flex-col"></div>
          <span class="txt11">申请企业音乐人进度</span>
          <div class="block2 flex-col"></div>
          <div class="block3 flex-col justify-center align-center"><span class="info13">1</span></div>
          <img
            class="pic4"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngbf72596cc06ee64ea0e625a257a021c3e8dc677e686b82d1ae55b2dcd5261c05.png"
          />
          <div class="block4 flex-col justify-center align-center"><span class="txt12">2</span></div>
          <div class="block5 flex-col align-center"><span class="txt13">审核不通过</span></div>
          <div class="block6 flex-col justify-center align-center"><span class="info14">3</span></div>
          <span class="word34">认证企业信息</span>
          <span class="txt14">填写并提交企业信息</span>
          <span class="txt15">缴纳年费</span>
          <span class="word35">
            确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。
          </span>
          <span class="word36">
            按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；
          </span>
          <span class="word37">
            上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。
          </span>
          <div class="block7 flex-col justify-center"><span class="txt16">重新填写</span></div>
        </div>
      </div>
      <div class="main8 flex-col">
        <div class="main9 flex-col"></div>
        <span class="word38">申请企业音乐人进度</span>
        <div class="main10 flex-col"></div>
        <span class="txt17">恭喜您，企业音乐人申请成功！</span>
        <div class="main11 flex-col justify-center align-center"><span class="word39">进入音乐人创作中心</span></div>
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
          lanhutext0: '认证企业信息',
          lanhufontColor0: 'rgba(64,63,63,1)',
          lanhutext1: '确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。',
          lanhufontColor1: 'rgba(0,0,0,0.52)'
        },
        {
          lanhutext0: '填写并提交企业信息',
          lanhufontColor0: 'rgba(64,63,63,0.45)',
          lanhutext1:
            '按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；',
          lanhufontColor1: 'rgba(0,0,0,0.36000000000000004)'
        },
        {
          lanhutext0: '缴纳年费',
          lanhufontColor0: 'rgba(64,63,63,0.45)',
          lanhutext1:
            '上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。',
          lanhufontColor1: 'rgba(0,0,0,0.36000000000000004)'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />