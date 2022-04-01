<!--
 * @Author: Kuntey
 * @Date: 2022-04-01 21:51:21
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-01 21:51:22
 * @Description:
-->
<!--
 * @Author: Kuntey
 * @Date: 2022-04-01 21:35:53
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-01 21:45:38
 * @Description:
-->
<template>
  <div class="page flex-col">
    <div class="group1 flex-col">
      <div class="section2 flex-col justify-center">
        <div class="bd2">
          <span class="info3">音乐人开放平台&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
          <span class="word4">&nbsp;&nbsp;&nbsp;</span>
          <span class="word5">申请企业音乐人</span>
        </div>
      </div>
      <div class="section3 flex-col align-center">
        <div class="box1 flex-row">
          <div class="bd3 flex-col" v-for="(item, index) in loopData0" :key="index">
            <div class="main1 flex-col justify-between">
              <span class="word6" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
              <span class="info4" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></span>
            </div>
          </div>
        </div>
        <div class="box2 flex-col justify-center align-center"><span class="word7">1</span></div>
        <div class="box3 flex-col"></div>
        <div class="box4 flex-col justify-center align-center"><span class="txt2">2</span></div>
        <div class="box5 flex-col"></div>
        <div class="box6 flex-col justify-center align-center"><span class="word8">3</span></div>
      </div>
      <span class="txt3">认证企业信息</span>
      <div class="section4 flex-row justify-between">
        <span class="word9">法人姓名</span>
        <div class="mod3 flex-col justify-center"><span class="txt4">请输入</span></div>
      </div>
      <div class="section5 flex-row justify-between">
        <span class="word10">证件类型</span>
        <div class="mod4 flex-col">
          <div class="mod5 flex-row justify-between">
            <span class="txt5">公民身份证</span>
            <img
              class="icon2"
              referrerpolicy="no-referrer"
              src="@/assets/images/img/SketchPnga5c83f8c9f56718bf4400088b8f4fa3f1d4b27a3977061974dfd687f23a72ed8.png"
            />
          </div>
        </div>
        <span class="word11">证件类型</span>
        <div class="mod6 flex-col">
          <div class="layer1 flex-row justify-between">
            <span class="txt6">公民身份证</span>
            <img
              class="icon3"
              referrerpolicy="no-referrer"
              src="@/assets/images/img/SketchPng9f47d200c6b1864df28195ca33786f9a72a42e91b2188af15a4ed1dc68d24d63.png"
            />
          </div>
        </div>
      </div>
      <div class="section6 flex-row">
        <span class="word12">上传证件信息</span>
        <div class="mod7 flex-col">
          <span class="info5">(大小不得超过2M，格式仅支持JPG、JPEG、PNG)</span>
          <div class="bd4 flex-row justify-between">
            <div class="section7 flex-col">
              <div class="bd5 flex-col">
                <div class="block1 flex-col">
                  <button class="outer1 flex-col align-center" @click="onClick_1">
                    <span class="word13">重新上传</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="section8 flex-col justify-center align-center">
              <img
                class="icon4"
                referrerpolicy="no-referrer"
                src="@/assets/images/img/SketchPnga7a0646d146b45475e28d508876a67e4effb501e2b7ef77463bd784607424e61.png"
              />
            </div>
          </div>
          <div class="bd6 flex-row justify-between">
            <span class="word14">证件正面</span>
            <span class="info6">证件背面</span>
          </div>
        </div>
        <div class="mod8 flex-col align-center">
          <div class="group2 flex-col">
            <span class="info7">公明身份证</span>
            <span class="word15">护照</span>
            <span class="word16">港澳居民来往大陆通行证</span>
            <span class="info8">台湾居民来往大陆通行证</span>
            <div class="bd7 flex-col justify-center"><span class="word17">居民户口簿</span></div>
          </div>
        </div>
      </div>
      <div class="section9 flex-row justify-between">
        <span class="word18">上传营业执照</span>
        <span class="txt7">注意：请上传加盖公章的营业执照</span>
      </div>
      <div class="section10 flex-col">
        <div class="bd8">
          <span class="info9">将文件拖到此处，或</span>
          <span class="txt8">点击上传</span>
        </div>
      </div>
      <button class="section11 flex-col justify-center align-center" @click="onClick_2">
        <span class="txt9">提交</span>
      </button>
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
          lanhufontColor0: 'rgba(64,63,63,0.65)',
          lanhutext1:
            '按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；',
          lanhufontColor1: 'rgba(0,0,0,0.36000000000000004)'
        },
        {
          lanhutext0: '缴纳年费',
          lanhufontColor0: 'rgba(64,63,63,0.65)',
          lanhutext1:
            '上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。',
          lanhufontColor1: 'rgba(0,0,0,0.36000000000000004)'
        }
      ],
      constants: {}
    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
    onClick_2() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  width: 100vw;
  height: 113.72vw;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  .group1 {
    width: 100vw;
    height: 113.72vw;
    .section1 {
      height: 7.38vw;
      background-color: rgba(0, 182, 156, 1);
      padding-top: 1.2vw;
      width: 100vw;
      .bd1 {
        width: 80vw;
        height: 5.03vw;
        .img1 {
          width: 5.95vw;
          height: 5.03vw;
        }
        .txt1 {
          width: 4.12vw;
          height: 1.03vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.02vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.03vw;
          margin: 1.82vw 0 0 13.88vw;
        }
        .info1 {
          width: 4.12vw;
          height: 1.03vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.02vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.03vw;
          margin: 1.82vw 0 0 3.14vw;
        }
        .word1 {
          width: 7.2vw;
          height: 1.03vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.02vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.03vw;
          margin: 1.82vw 0 0 2.68vw;
        }
        .word2 {
          width: 4.12vw;
          height: 1.03vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.02vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.03vw;
          margin: 1.82vw 0 0 2.68vw;
        }
        .mod1 {
          height: 2.29vw;
          border: 1px solid rgba(5, 134, 116, 1);
          background-color: rgba(255, 255, 255, 1);
          width: 19.2vw;
          margin: 1.42vw 0 0 2.85vw;
          padding: 0.68vw 0 0 0.51vw;
          .word3 {
            width: 15.55vw;
            height: 0.92vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(205, 205, 205, 1);
            font-size: 0.91vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 0.92vw;
          }
        }
        .mod2 {
          width: 2.29vw;
          height: 2.29vw;
          border-radius: 50%;
          background: url(@/assets/images/img/SketchPngdbf6ac907b178c6c1c6d7735676633c456a5b7bf3441050a171044228bc9813e.png)
            100% no-repeat;
          margin: 1.42vw 0 0 2.4vw;
        }
        .info2 {
          width: 3.09vw;
          height: 1.03vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.02vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.03vw;
          margin: 2.05vw 0 0 0.57vw;
        }
        .icon1 {
          width: 1.15vw;
          height: 1.15vw;
          margin: 2vw 0 0 0.57vw;
        }
      }
    }
    .section2 {
      height: 3.43vw;
      background-color: rgba(250, 250, 250, 1);
      padding-left: 10vw;
      width: 100vw;
      .bd2 {
        width: 13.15vw;
        height: 0.8vw;
        overflow-wrap: break-word;
        text-align: left;
        white-space: nowrap;
        font-size: 0;
        .info3 {
          font-size: 0.8vw;
          font-family: SourceHanSansCN-Regular;
          color: rgba(0, 0, 0, 0.45);
          line-height: 0.8vw;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .word4 {
          font-size: 0.8vw;
          font-family: SourceHanSansCN-Bold;
          color: rgba(0, 0, 0, 0.65);
          line-height: 0.8vw;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .word5 {
          font-size: 0.8vw;
          font-family: SourceHanSansCN-Regular;
          color: rgba(0, 0, 0, 0.65);
          line-height: 0.8vw;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .section3 {
      z-index: 197;
      height: 13.26vw;
      overflow: hidden;
      background: url(@/assets/images/img/SketchPngf789b840d1d6f6be56f04d43930021028c85e7ae9fc41880c806ace635f7dc27.png)
        100% no-repeat;
      padding-top: 5.15vw;
      width: 80vw;
      position: relative;
      margin: 2.28vw 0 0 10vw;
      .box1 {
        width: 73.15vw;
        height: 5.49vw;
        justify-content: space-between;
        .bd3 {
          width: 17.26vw;
          height: 5.49vw;
          margin-right: 10.63vw;
          .main1 {
            width: 17.26vw;
            height: 5.49vw;
            .word6 {
              width: 9.26vw;
              height: 1.03vw;
              display: block;
              overflow-wrap: break-word;
              font-size: 1.02vw;
              font-family: SourceHanSansCN-Bold;
              white-space: nowrap;
              line-height: 1.03vw;
              text-align: right;
              margin-left: 5.66vw;
            }
            .info4 {
              width: 17.26vw;
              height: 3.89vw;
              display: block;
              overflow-wrap: break-word;
              font-size: 0.8vw;
              letter-spacing: -0.15555556118488312px;
              font-family: SourceHanSansCN-Regular;
              line-height: 1.15vw;
              text-align: right;
              margin-top: 0.58vw;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
      .box2 {
        z-index: 202;
        height: 2.52vw;
        border-radius: 50%;
        background: url(@/assets/images/img/SketchPng7b6b32e83ee01ed5e7048362b388b6d27a1ae2835358426ce88b28e1d8666af7.png)
          100% no-repeat;
        width: 2.52vw;
        position: absolute;
        left: 10.92vw;
        top: 1.72vw;
        .word7 {
          width: 0.8vw;
          height: 1.38vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.37vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.38vw;
          text-align: right;
        }
      }
      .box3 {
        z-index: 216;
        position: absolute;
        left: 14vw;
        top: 2.98vw;
        width: 24.35vw;
        height: 0.06vw;
        background: url(@/assets/images/img/SketchPngcd9e89f2556a1266a4d0d795f7e7ffe99b29071159cac5898cce3d38aa3c695f.png) -0.06vw
          0vw no-repeat;
        background-size: 24.45vw 0.11vw;
      }
      .box4 {
        z-index: 208;
        height: 2.52vw;
        border-radius: 50%;
        background: url(@/assets/images/img/SketchPng6dbb558f3767bf616ce7a7f199ca0a2a5621d3f817d9a77b0bc9d66da40a2277.png)
          100% no-repeat;
        width: 2.52vw;
        position: absolute;
        left: 38.75vw;
        top: 1.72vw;
        .txt2 {
          width: 0.8vw;
          height: 1.38vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.37vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.38vw;
          text-align: right;
        }
      }
      .box5 {
        z-index: 217;
        position: absolute;
        left: 41.66vw;
        top: 2.98vw;
        width: 24.35vw;
        height: 0.06vw;
        background: url(@/assets/images/img/SketchPngcd9e89f2556a1266a4d0d795f7e7ffe99b29071159cac5898cce3d38aa3c695f.png) -0.06vw
          0vw no-repeat;
        background-size: 24.45vw 0.11vw;
      }
      .box6 {
        z-index: 214;
        height: 2.52vw;
        border-radius: 50%;
        background: url(@/assets/images/img/SketchPng6dbb558f3767bf616ce7a7f199ca0a2a5621d3f817d9a77b0bc9d66da40a2277.png)
          100% no-repeat;
        width: 2.52vw;
        position: absolute;
        left: 66.46vw;
        top: 1.72vw;
        .word8 {
          width: 0.8vw;
          height: 1.38vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.37vw;
          font-family: SourceHanSansCN-Medium;
          white-space: nowrap;
          line-height: 1.38vw;
          text-align: right;
        }
      }
    }
    .txt3 {
      width: 8.23vw;
      height: 1.38vw;
      display: block;
      overflow-wrap: break-word;
      color: rgba(64, 63, 63, 1);
      font-size: 1.37vw;
      font-family: SourceHanSansCN-Medium;
      white-space: nowrap;
      line-height: 1.38vw;
      text-align: right;
      margin: 3.82vw 0 0 45.88vw;
    }
    .section4 {
      width: 32.69vw;
      height: 2.52vw;
      margin: 2.28vw 0 0 32.68vw;
      .word9 {
        width: 4.12vw;
        height: 1.03vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(64, 63, 63, 1);
        font-size: 1.02vw;
        font-family: SourceHanSansCN-Medium;
        white-space: nowrap;
        line-height: 1.03vw;
        text-align: right;
        margin-top: 0.63vw;
      }
      .mod3 {
        height: 2.52vw;
        border: 1px solid rgba(222, 224, 231, 1);
        background-color: rgba(255, 255, 255, 1);
        padding-left: 1.09vw;
        width: 27.43vw;
        .txt4 {
          width: 3.09vw;
          height: 1.03vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(198, 198, 198, 1);
          font-size: 1.02vw;
          font-family: SourceHanSansCN-Regular;
          white-space: nowrap;
          line-height: 1.03vw;
          text-align: left;
        }
      }
    }
    .section5 {
      width: 66.75vw;
      height: 2.52vw;
      margin: 1.14vw 0 0 32.68vw;
      .word10 {
        width: 4.12vw;
        height: 1.03vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(64, 63, 63, 1);
        font-size: 1.02vw;
        font-family: SourceHanSansCN-Medium;
        white-space: nowrap;
        line-height: 1.03vw;
        text-align: right;
        margin-top: 0.63vw;
      }
      .mod4 {
        height: 2.52vw;
        border: 1px solid rgba(222, 224, 231, 1);
        background-color: rgba(255, 255, 255, 1);
        width: 27.43vw;
        padding: 0.62vw 0 0 1.08vw;
        .mod5 {
          width: 25.55vw;
          height: 1.2vw;
          .txt5 {
            width: 5.15vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            text-align: left;
            margin-top: 0.06vw;
          }
          .icon2 {
            width: 1.2vw;
            height: 1.2vw;
          }
        }
      }
      .word11 {
        width: 4.12vw;
        height: 1.03vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(64, 63, 63, 1);
        font-size: 1.02vw;
        font-family: SourceHanSansCN-Medium;
        white-space: nowrap;
        line-height: 1.03vw;
        text-align: right;
        margin-top: 0.63vw;
      }
      .mod6 {
        height: 2.52vw;
        border: 1px solid rgba(0, 182, 156, 1);
        background-color: rgba(255, 255, 255, 1);
        width: 27.43vw;
        padding: 0.62vw 0 0 1.08vw;
        .layer1 {
          width: 25.55vw;
          height: 1.2vw;
          .txt6 {
            width: 5.15vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            text-align: left;
            margin-top: 0.06vw;
          }
          .icon3 {
            width: 1.2vw;
            height: 1.2vw;
          }
        }
      }
    }
    .section6 {
      width: 68.8vw;
      height: 13.72vw;
      margin: 0.57vw 0 0 30.62vw;
      .word12 {
        width: 6.18vw;
        height: 1.03vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(64, 63, 63, 1);
        font-size: 1.02vw;
        font-family: SourceHanSansCN-Medium;
        white-space: nowrap;
        line-height: 1.03vw;
        text-align: right;
        margin-top: 1.2vw;
      }
      .mod7 {
        width: 25.83vw;
        height: 10.8vw;
        margin: 1.42vw 0 0 1.14vw;
        .info5 {
          width: 17.95vw;
          height: 0.8vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(0, 0, 0, 0.45);
          font-size: 0.8vw;
          font-family: SourceHanSansCN-Regular;
          white-space: nowrap;
          line-height: 0.8vw;
          text-align: left;
        }
        .bd4 {
          width: 25.72vw;
          height: 7.66vw;
          margin: 0.97vw 0 0 0.11vw;
          .section7 {
            z-index: 237;
            position: relative;
            width: 12vw;
            height: 7.66vw;
            overflow: hidden;
            background: url(@/assets/images/img/SketchPng33c7daebd684d551bfe690b02014222fc7a0ca8041a20c6337359f3b2e0ad401.png)
              100% no-repeat;
            .bd5 {
              z-index: 238;
              height: 7.66vw;
              background: url(@/assets/images/img/SketchPng16ec810b707e0e17399ab58e4069371cf1ad4d06b0440dcc7b88bbe6e7f6828c.png)
                100% no-repeat;
              width: 12vw;
              position: absolute;
              left: 0;
              top: 0;
              .block1 {
                height: 7.66vw;
                background-color: rgba(23, 23, 23, 0.41);
                width: 12vw;
                padding: 3.08vw 0 0 3.88vw;
                .outer1 {
                  height: 1.43vw;
                  border: 1px solid rgba(255, 255, 255, 1);
                  padding-top: 0.35vw;
                  width: 4.18vw;
                  .word13 {
                    width: 2.8vw;
                    height: 0.69vw;
                    display: block;
                    overflow-wrap: break-word;
                    color: rgba(255, 255, 255, 1);
                    font-size: 0.68vw;
                    font-family: SourceHanSansCN-Regular;
                    white-space: nowrap;
                    line-height: 0.69vw;
                    text-align: right;
                  }
                }
              }
            }
          }
          .section8 {
            height: 7.66vw;
            background-color: rgba(242, 242, 242, 1);
            width: 12vw;
            .icon4 {
              width: 1.83vw;
              height: 1.83vw;
            }
          }
        }
        .bd6 {
          width: 16.92vw;
          height: 0.8vw;
          margin: 0.57vw 0 0 0.11vw;
          .word14 {
            width: 3.2vw;
            height: 0.8vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 0.8vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 0.8vw;
            text-align: left;
          }
          .info6 {
            width: 3.2vw;
            height: 0.8vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 0.8vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 0.8vw;
            text-align: left;
          }
        }
      }
      .mod8 {
        z-index: 275;
        height: 13.83vw;
        border: 1px solid rgba(242, 242, 242, 0.72);
        box-shadow: 0px 2px 15px 0px rgba(233, 233, 233, 0.59);
        overflow: hidden;
        background: url(@/assets/images/img/SketchPngc68e819b3c7350a62ef489bec2b5289356110fd6c127a898d0d07ea11730d89b.png) -0.86vw -0.75vw
          no-repeat;
        background-size: 28.85vw 15.42vw;
        margin-left: 8.18vw;
        padding-top: 0.8vw;
        width: 27.55vw;
        position: relative;
        .group2 {
          width: 27.43vw;
          height: 11.83vw;
          .info7 {
            width: 5.15vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 182, 156, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Bold;
            white-space: nowrap;
            line-height: 1.03vw;
            text-align: left;
            margin-left: 1.15vw;
          }
          .word15 {
            width: 2.06vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            text-align: left;
            margin: 1.48vw 0 0 1.14vw;
          }
          .word16 {
            width: 11.32vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            text-align: left;
            margin: 1.48vw 0 0 1.14vw;
          }
          .info8 {
            width: 11.32vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            text-align: left;
            margin: 1.48vw 0 0 1.14vw;
          }
          .bd7 {
            height: 2.52vw;
            background-color: rgba(244, 244, 246, 1);
            margin-top: 0.75vw;
            padding-left: 1.15vw;
            width: 27.43vw;
            .word17 {
              width: 5.15vw;
              height: 1.03vw;
              display: block;
              overflow-wrap: break-word;
              color: rgba(0, 0, 0, 0.85);
              font-size: 1.02vw;
              font-family: SourceHanSansCN-Regular;
              white-space: nowrap;
              line-height: 1.03vw;
              text-align: left;
            }
          }
        }
      }
    }
    .section9 {
      width: 19.32vw;
      height: 1.03vw;
      margin: 0.28vw 0 0 30.62vw;
      .word18 {
        width: 6.18vw;
        height: 1.03vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(64, 63, 63, 1);
        font-size: 1.02vw;
        font-family: SourceHanSansCN-Medium;
        white-space: nowrap;
        line-height: 1.03vw;
        text-align: right;
      }
      .txt7 {
        width: 12vw;
        height: 0.8vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(0, 0, 0, 0.45);
        font-size: 0.8vw;
        font-family: SourceHanSansCN-Regular;
        white-space: nowrap;
        line-height: 0.8vw;
        text-align: left;
        margin-top: 0.23vw;
      }
    }
    .section10 {
      height: 14.29vw;
      background: url(@/assets/images/img/SketchPngeb6b472879865f9e70161c927e5e5d3b3432648490fd843b91ed70b6f0d9c791.png)
        100% no-repeat;
      width: 24.98vw;
      margin: 1.2vw 0 0 37.94vw;
      padding: 9.48vw 0 0 6.45vw;
      .bd8 {
        width: 11.89vw;
        height: 0.92vw;
        overflow-wrap: break-word;
        text-align: right;
        white-space: nowrap;
        font-size: 0;
        .info9 {
          font-size: 0.91vw;
          font-family: SourceHanSansCN-Regular;
          color: rgba(0, 0, 0, 0.45);
          line-height: 0.92vw;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .txt8 {
          font-size: 0.91vw;
          font-family: SourceHanSansCN-Medium;
          color: rgba(0, 182, 156, 1);
          line-height: 0.92vw;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .section11 {
      height: 2.86vw;
      background-color: rgba(0, 182, 156, 1);
      width: 9.26vw;
      margin: 2.85vw 0 0 45.37vw;
      .txt9 {
        width: 5.72vw;
        height: 1.03vw;
        display: block;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 1.02vw;
        font-family: SourceHanSansCN-Medium;
        white-space: nowrap;
        line-height: 1.03vw;
        text-align: right;
      }
    }
    .section12 {
      z-index: 48;
      height: 5.15vw;
      background: url(@/assets/images/img/SketchPng93dabbd71981a771c548adb3dade1967bb115112dd228063127166366ec68f1d.png)
        0vw -0.86vw no-repeat;
      background-size: 100vw 6.85vw;
      margin-top: 2.35vw;
      width: 100vw;
      position: relative;
      padding: 0.57vw 0 0 11.14vw;
      .bd9 {
        width: 77.78vw;
        height: 4.06vw;
        .layer2 {
          z-index: 184;
          position: relative;
          width: 2.29vw;
          height: 2.29vw;
          overflow: hidden;
          background: url(@/assets/images/img/SketchPngdd37a2c628da6be203f63d2d701792bfbd65db0cbbde07ad2ee62373c563a146.png)
            100% no-repeat;
          margin-top: 1.78vw;
          .label1 {
            z-index: 185;
            position: absolute;
            left: 0;
            top: 0;
            width: 2.29vw;
            height: 2.29vw;
          }
        }
        .layer3 {
          width: 34.58vw;
          height: 2vw;
          margin: 2.05vw 0 0 0.85vw;
          .box7 {
            width: 34.58vw;
            height: 0.69vw;
            .info10 {
              width: 3.43vw;
              height: 0.69vw;
              display: block;
              overflow-wrap: break-word;
              color: rgba(0, 0, 0, 0.65);
              font-size: 0.68vw;
              font-family: SourceHanSansCN-Bold;
              white-space: nowrap;
              line-height: 0.69vw;
              text-align: left;
            }
            .info11 {
              width: 8.18vw;
              height: 0.69vw;
              display: block;
              overflow-wrap: break-word;
              color: rgba(0, 0, 0, 0.65);
              font-size: 0.68vw;
              font-family: SourceHanSansCN-Regular;
              white-space: nowrap;
              line-height: 0.69vw;
              text-align: left;
              margin-left: 1.26vw;
            }
            .word19 {
              width: 4.06vw;
              height: 0.69vw;
              display: block;
              overflow-wrap: break-word;
              color: rgba(0, 0, 0, 0.65);
              font-size: 0.68vw;
              font-family: SourceHanSansCN-Regular;
              white-space: nowrap;
              line-height: 0.69vw;
              text-align: left;
              margin-left: 17.66vw;
            }
          }
          .img2 {
            width: 34.29vw;
            height: 0.46vw;
            margin-top: 0.86vw;
          }
        }
        .icon5 {
          width: 2.29vw;
          height: 2.29vw;
          margin: 1.77vw 0 0 2.85vw;
        }
        .label2 {
          width: 2.29vw;
          height: 2.29vw;
          margin: 1.77vw 0 0 1.71vw;
        }
        .icon6 {
          width: 2.29vw;
          height: 2.29vw;
          margin: 1.77vw 0 0 1.71vw;
        }
        .img3 {
          width: 5.03vw;
          height: 3.09vw;
          margin: 0.51vw 0 0 0.68vw;
        }
        .icon7 {
          width: 1.38vw;
          height: 1.38vw;
          margin: 2.22vw 0 0 0.45vw;
        }
        .label3 {
          width: 1.38vw;
          height: 1.38vw;
          margin: 2.22vw 0 0 2.28vw;
        }
        .layer4 {
          height: 1.38vw;
          background: url(@/assets/images/img/SketchPngf8100469d48bcb7c9fa761647581ae93b986f5ad95666e86c647891117777c07.png)
            100% no-repeat;
          width: 1.38vw;
          margin: 2.22vw 0 0 2.28vw;
          .icon8 {
            width: 1.38vw;
            height: 1.38vw;
          }
        }
        .label4 {
          width: 1.38vw;
          height: 1.38vw;
          margin: 2.22vw 0 0 2.74vw;
        }
        .layer5 {
          width: 5.26vw;
          height: 3.15vw;
          margin-left: 0.29vw;
          .label5 {
            width: 1.15vw;
            height: 1.15vw;
            margin-left: 4.12vw;
          }
          .pic1 {
            width: 4.58vw;
            height: 0.46vw;
            margin-top: 1.55vw;
          }
        }
        .layer6 {
          width: 1.38vw;
          height: 3.6vw;
          margin-left: 1.03vw;
          .label6 {
            width: 1.15vw;
            height: 1.15vw;
            margin-left: 0.12vw;
          }
          .icon9 {
            width: 1.38vw;
            height: 1.38vw;
            margin-top: 1.09vw;
          }
        }
      }
      .bd10 {
        z-index: 79;
        height: 0.58vw;
        border-radius: 5px;
        background-color: rgba(0, 182, 156, 1);
        padding-left: 0.12vw;
        width: 1.26vw;
        position: absolute;
        left: 76.06vw;
        top: 2.69vw;
        .txt10 {
          width: 0.98vw;
          height: 0.46vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 0.45vw;
          font-family: SourceHanSansCN-Regular;
          white-space: nowrap;
          line-height: 0.46vw;
          text-align: right;
        }
      }
    }
    .section13 {
      height: 29.43vw;
      background-color: rgba(56, 64, 62, 1);
      width: 100vw;
      padding: 3.65vw 0 0 14.05vw;
      .group3 {
        width: 72vw;
        height: 22.35vw;
        .outer2 {
          width: 43.43vw;
          height: 1.2vw;
          margin-left: 14.23vw;
          .txt11 {
            width: 4.23vw;
            height: 1.2vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: Times-Roman;
            white-space: nowrap;
            line-height: 1.03vw;
          }
          .info12 {
            width: 4.12vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            margin-top: 0.12vw;
          }
          .info13 {
            width: 4.12vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            margin-top: 0.12vw;
          }
          .info14 {
            width: 4.12vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            margin-top: 0.12vw;
          }
          .word20 {
            width: 4.12vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            margin-top: 0.12vw;
          }
          .word21 {
            width: 4.12vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            margin-top: 0.12vw;
          }
          .info15 {
            width: 4.12vw;
            height: 1.03vw;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.02vw;
            font-family: SourceHanSansCN-Regular;
            white-space: nowrap;
            line-height: 1.03vw;
            margin-top: 0.12vw;
          }
        }
        .outer3 {
          width: 72vw;
          height: 0.06vw;
          background: url(@/assets/images/img/SketchPnga8144cc71288101f657a2b9545bd7d273df0ff60d5abd953d48b88c94bf85d49.png)
            0vw 0vw no-repeat;
          background-size: 72vw 0.11vw;
          margin-top: 1.95vw;
        }
        .pic2 {
          width: 5.95vw;
          height: 5.03vw;
          margin: 3.14vw 0 0 32.97vw;
        }
        .paragraph1 {
          width: 44.29vw;
          height: 10.06vw;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 0.8vw;
          font-family: SourceHanSansCN-Regular;
          line-height: 1.26vw;
          text-align: right;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0.91vw 0 0 13.37vw;
        }
      }
    }
  }
}

</style>