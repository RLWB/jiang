<!--
 * @Author: Kuntey
 * @Date: 2022-03-26 11:56:23
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-06 11:35:16
 * @Description:
-->
<template>
    <div class="page-container flex-col">

        <div class="page-top flex-col">
            <div class="button__group flex-row justify-between">
                <el-button class="custom-button" type="primary" @click="toApplyMusician('corporate')">申请企业音乐人<i class="el-icon-right el-icon--right"></i></el-button>
                <el-button class="custom-button" type="primary" @click="toApplyMusician('individual')">申请个人音乐人<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
            <div class="banner-wrapper">
                <img
                    class="banner-wrapper__img"
                    referrerpolicy="no-referrer"
                    src="@/assets/images/musicianOpenPlatform/banner.png"
                />
            </div>
        </div>

        <div class="page-main flex-col align-center">

            <div class="steps flex-col" v-if="true">
                <div class="steps-header flex-row align-center">
                    <div class="steps-header-left-box"></div>
                    <div class="steps-title">申请企业音乐人进度</div>
                </div>
                <div class="step flex-row justify-between">
                    <div class="step-item" v-for="(item, index) in loopData1" :key="index">
                        <div class="step-item__main flex-col align-center">
                            <div class="circle-box justify-center align-center" :class="index === 0 ? 'circle-box--active' : ''">
                                <span class="steps__no">{{ index + 1 }}</span>
                            </div>
                            <div v-if="(index + 1) != loopData1.length" class="divider"></div>
                            <div class="step-item__title" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></div>
                            <div class="step-item__description" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></div>
                            <div class="justify-center align-center">
                                <el-button class="step-item__button" type="primary" v-show="false" @click="toApplyMusician('individual')">立即填写</el-button>
                                <el-button class="step-item__button" type="primary" v-show="false" @click="toApplyMusician('individual')">重新填写</el-button>
                                <el-button class="step-item__button" type="primary" v-show="false" @click="toApplyMusician('individual')">立即缴费</el-button>
                            </div>
                        </div>
                    </div>
                    <div v-if="loopData1.length == 0">
                        <div>恭喜您，企业音乐人申请成功！</div>
                        <el-button class="step-button" type="primary" @click="toApplyMusician('individual')">进入音乐人创作中心</el-button>
                    </div>
                </div>
            </div>

            <div class="mainTitle-wrapper flex-row align-center justify-center">
                <img class="mainTitle-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/musicianOpenPlatform/sixFeatureTitles.png" />
            </div>

            <div class="privilege-wrapper flex-row justify-between">
                <div
                    class="privilege-wrapper__item align-center flex-row"
                    :style="{ background: item.lanhuBg0 }"
                    v-for="(item, index) in loopData0"
                    :key="index"
                >
                    <div class="privilege-wrapper__item__icon flex-col" :style="{ background: item.lanhuBg1 }"></div>
                    <div class="privilege-wrapper__item__main flex-col">
                        <div class="privilege-wrapper__item__main__title" v-html="item.lanhutext0"></div>
                        <div class="privilege-wrapper__item__main__content" v-html="item.lanhutext1"></div>
                    </div>

                </div>
            </div>

            <div class="subTitle-wrapper flex-row align-center justify-center">
                <img class="subTitle-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/musicianOpenPlatform/applyForACorporateMusicianTitle.png" />
            </div>

            <div class="corporate-musician-wrapper flex-row justify-between">
                <div class="corporate-item flex-col align-center" v-for="(item, index) in corporateItems" :key="index">
                    <img class="corporate-item__icon" referrerpolicy="no-referrer" :src="item.icon" />
                    <div class="corporate-item__title">{{ item.title }}</div>
                    <div class="corporate-item__content">
                        {{ item.content }}
                    </div>
                        <div class="corporate-item__no">{{ item.no }}</div>
                </div>
            </div>
            <div class="main__button-wrapper align-center justify-center">
                <el-button class="custom-button" type="primary" @click="toApplyMusician('corporate')">申请企业音乐人<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
            <div class="subTitle-wrapper flex-row align-center justify-center">
                <img class="subTitle-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/musicianOpenPlatform/applyForAnIndividualMusicianTitle.png" />
            </div>
            <div class="individualMusician-wrapper flex-row justify-between">
                <div class="individualMusician-item flex-col align-center" v-for="(item, index) in individualMusicianItems" :key="index">
                    <img class="individualMusician-item__icon" referrerpolicy="no-referrer" :src="item.icon" />
                    <div class="individualMusician-item__title">{{ item.title }}</div>
                    <div class="individualMusician-item__content">
                        {{ item.content }}
                    </div>
                        <span class="individualMusician-item__no">{{ item.no }}</span>
                </div>
            </div>
            <div class="main__button-wrapper align-center justify-center">
                <el-button class="custom-button" type="primary" @click="toApplyMusician('individual')">申请个人音乐人<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
        </div>
    </div>
</template>
<script>
import icon1 from '@/assets/images/musicianOpenPlatform/musician_icon1.png'
import icon2 from '@/assets/images/musicianOpenPlatform/musician_icon2.png'
import icon3 from '@/assets/images/musicianOpenPlatform/musician_icon3.png'
import icon4 from '@/assets/images/musicianOpenPlatform/musician_icon4.png'
import icon5 from '@/assets/images/musicianOpenPlatform/musician_icon5.png'

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
      loopData1: [
        {
          lanhutext0: '认证个人信息',
          lanhufontColor0: '#403F3F',
          lanhutext1: '确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。',
          lanhufontColor1: '#000000a6'
        },
        {
          lanhutext0: '填写并提交个人信息',
          lanhufontColor0: '#403f3fa6',
          lanhutext1:
            '按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；',
          lanhufontColor1: '#0000005C'
        },
        {
          lanhutext0: '上传音乐作品',
          lanhufontColor0: '#403f3fa6',
          lanhutext1:
            '审核通过后，须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息形式发出；',
          lanhufontColor1: '#0000005C'
        },
        {
          lanhutext0: '缴纳年费',
          lanhufontColor0: '#403f3fa6',
          lanhutext1:
            '上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。',
          lanhufontColor1: '#0000005C'
        }
      ],
      constants: {},
      corporateItems: [
          {
              icon: icon1,
              title: "注册/登录",
              content: "注册/登录音久音乐平台，支持手机号或第三方登录注册。",
              no: "1"
          },
          {
              icon: icon2,
              title: "认证企业信息",
              content: "确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。",
              no: "2"
          },
          {
              icon: icon3,
              title: "填写并提交企业信息",
              content: "按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；",
              no: "3"
          },
          {
              icon: icon5,
              title: "缴纳年费",
              content: "上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。",
              no: "4"
          }
      ],
      individualMusicianItems: [
          {
              icon: icon1,
              title: "注册/登录",
              content: "注册/登录音久音乐平台，支持手机号或第三方登录注册。",
              no: "1"
          },
          {
              icon: icon2,
              title: "认证个人信息",
              content: "确保填写的姓名与身份证号，以及上传的证件照片一致且真实。若认证失败将无法进入下个流程。",
              no: "2"
          },
          {
              icon: icon3,
              title: "填写并提交个人信息",
              content: "按照表单要求准确填写个人信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；",
              no: "3"
          },
          {
              icon: icon4,
              title: "上传音乐作品",
              content: "审核通过后，必须在app或者网站上上传至少一个音乐作品。音乐作品提交审核后，请耐心等待。审核结果会以短信和系统消息的形式发出；",
              no: "4"
          },
          {
              icon: icon5,
              title: "缴纳年费",
              content: "上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。",
              no: "5"
          },

      ],
    };
  },
  mounted() {
    //   this.loopData1 = [];
  },
  methods: {
      // 申请音乐人
      toApplyMusician(type) {
          if (type === "corporate") {
              this.$router.push("/applyForACorporateMusician/authInfo")
          } else {
              this.$router.push("/applyForAnIndividualMusician/authInfo")
          }
      }
  }
};
</script>
<style lang="scss" scoped >
.custom-button {
    font-family: YouSheBiaoTiHei;
    width: 208px;
    height: 50px;
}
.page-container {
    position: relative;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    .page-top {
        width: 100%;
        height: 600px;
        .button__group {
            position: absolute;
            top: 445px;
            left: 10%;
            z-index: 9;
            .el-button {
                width: 208px;
                height: 50px;
            }
            :nth-child(2) {
                margin-left: 46px;
            }
        }

        .banner-wrapper {
            .banner-wrapper__img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 600px;
            }
        }

    }

    .page-main {
        // width: 100%;
        padding: 90px 10.1% 150px 10.1%;
        .steps {
            z-index: 9;
            width: 90%;
            min-height: 336px;
            margin: 40px 0 93px 0;
            background: #FFFFFF;
            margin-top: -140px;
            border: 1px solid #F2F2F2B8;
            box-shadow: 0 2px 15px 0 #E9E9E996;
            .steps-header {
                height: 80px;
                border-bottom: 1px solid #E6E6E6FF;
                &-left-box {
                    width: 12px;
                    height: 24px;
                    background: #24CCB4;
                    margin: 0 20px;
                }
                .steps-title {
                    font-size: 2rem;
                }
            }
            .demo {
                width: 100%;
                height: 90px;
                position: relative;
            }

            &__no {
                color: #FFFFFF;
                font-size: 1.37vw;
                text-align: center;
            }

            .step {
                box-sizing:border-box;
                width: 100%;
                padding: 24px 13px 0;
                position: relative;
                &-item {
                    width: 23.27%;
                    &__main {
                        position: relative;
                    }
                    &__title {
                        margin-top: 16px;
                        font-size: 1.5rem;
                        white-space: nowrap;
                    }
                    &__description {
                        font-size: 1.17rem;
                        letter-spacing: -0.15555556118488312px;
                        margin-top: 10px;
                    }
                    &__button {
                        margin-top: 10px;
                        width: 140px;
                        height: 48px;
                    }
                }
            }
            .circle-box {
                height: 2.52vw;
                width: 2.52vw;
                border-radius: 50%;
                background: #CAE5E1;
            }
            .circle-box.circle-box--active {
                background: #00B69C;
            }
            .divider {
                width: 90%;
                position: absolute;
                top: calc( 2.52vw / 2 );
                left: 60%;
                border-bottom: 6px solid rgba(208, 208, 208, 0.39) ;
                overflow: hidden;
            }
            .step-button {
                width: 223px;
                height: 48px;
            }
        }
        .mainTitle-wrapper {
            width: 100%;
            &__img {
                width: 32.26%;
            }
        }

        .privilege-wrapper {
            flex-wrap: wrap;
            margin-top: 64px;
            min-width: 1250px;
            &__item {
                position: relative;
                width: 31.6%;
                // height: 147px;
                border: 1px solid rgba(242, 242, 242, 0.72);
                box-shadow: 0px 2px 15px 0px rgba(233, 233, 233, 0.59);
                overflow: hidden;
                margin: 0 0 29px 0;
                &__icon {
                    width: 147px;
                    height: 147px;
                }
                &__main {
                    width: 59.04%;
                    margin-left: 6px;
                    &__title {
                        overflow-wrap: break-word;
                        color: #303534;
                        font-size: 1.84rem;
                        white-space: nowrap;
                        text-align: left;
                    }

                    &__content {
                        margin-top: 10px;
                        overflow-wrap: break-word;
                        color: #000000a6;
                        font-size: 1.34rem;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }

        .subTitle-wrapper {
            width: 100%;
            margin-top: 140px;
            &__img {
                width: 19.09%;
            }
        }

        .corporate-item, .individualMusician-item {
            height: 436px;
            position: relative;
            overflow: hidden;
            background: url(@/assets/images/musicianOpenPlatform/SketchPng16f6cdfb246a21939f22c3ad07eb711fe5b42f23a9c9afbc15da8070464e1910.png)
            100% no-repeat;
            &__icon {
                margin-top: 68px;
                width: 5.72vw;
                height: 5.72vw;
                // width: 100px;
                // height: 100px;
            }
            &__title {
                margin-top: 31px;
                height: 1.38vw;
                overflow-wrap: break-word;
                color: rgba(64, 63, 63, 1);
                font-size: 1.37vw;
                white-space: nowrap;
                line-height: 1.38vw;
                text-align: right;
            }
            &__content {
                margin-top: 10px;
                width: 15.55vw;
                overflow-wrap: break-word;
                color: rgba(0, 0, 0, 0.52);
                font-size: 1.02vw;
                letter-spacing: -0.20000000298023224px;
                line-height: 1.55vw;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &__no {
                position: absolute;
                right: 7px;
                bottom: 0;
                overflow-wrap: break-word;
                color: rgba(36, 204, 180, 0.23);
                font-size: 5.71vw;
                font-family: YouSheBiaoTiHei;
                white-space: nowrap;
                line-height: 5.72vw;
                text-align: right;
            }
        }

        .corporate-musician-wrapper {
            width: 100%;
            margin-top: 48px;
            .corporate-item {
                width: 18.29vw;
                // height: 24.92vw;
                &__content {
                    width: 15.55vw;
                    height: 6vw;
                }
            }

        }

        .individualMusician-wrapper {
            width: 80vw;
            margin-top: 42px;
            .individualMusician-item {
                width: 14.86vw;
                &__icon {
                    margin-top: 48px;
                }
                &__content {
                    width: 12.58vw;
                }
                &__no {
                    overflow-wrap: break-word;
                    color: rgba(36, 204, 180, 0.23);
                    font-size: 5.71vw;
                    font-family: YouSheBiaoTiHei;
                    white-space: nowrap;
                    line-height: 5.72vw;
                    text-align: right;
                }

            }
        }
        .main__button-wrapper {
            width: 100%;
            margin-top: 64px;

        }

    }
}

</style>