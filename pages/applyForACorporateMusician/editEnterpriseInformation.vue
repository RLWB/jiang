<!--
 * @Author: Kuntey
 * @Date: 2022-04-02 09:25:03
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-05 17:45:54
 * @Description:
-->
<template>
    <div class="page-container flex-col">
        <div class="breadcrumb-wrapper">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>音乐人开放平台</el-breadcrumb-item>
                <el-breadcrumb-item>申请企业音乐人</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main flex-col align-center">

            <div class="steps flex-col">
                <div class="step flex-row justify-between">
                    <div class="step-item" v-for="(item, index) in loopData0" :key="index">
                        <div class="step__main flex-col align-center">
                            <div class="circle-box justify-center align-center" :class="index === 1 ? 'circle-box--active' : ''">
                                <span class="steps__no">{{ index + 1 }}</span>
                            </div>
                            <span v-if="(index + 1) != loopData0.length" class="divider"></span>
                            <span class="step__title" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
                            <span class="step__description" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-title justify-center">
                <span class="form-title__text">填写企业信息</span>
            </div>

            <div class="form justify-center">
                <el-form :model="form" ref="form" :rules="rules" label-width="108px" :inline="false">

                    <el-form-item label="企业名称">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="手机号">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="验证码">
                        <div class="align-center justify-between" style="height: 100%" >
                            <el-input v-model="form.name" placeholder="请输入" clearable style="width: 300px;"></el-input>
                            <div style="width: 160px;">
                                <el-button type="primary" @click="onClick_1" v-if="true" style="width: 100%;">获取验证码</el-button>
                                <el-button v-else style="width: 100%;" disabled>23s后重新获取</el-button>
                            </div>
                        </div>
                    </el-form-item>

                    <el-form-item label="组织机构代码">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="银行卡号">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="开户行">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="开户名">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="服务条款">
                        <div class="terms-service">
                            <p>欢迎您使用音久音乐版权推广服务!</p>
                            <p>为使用音久音乐软件的版权推广服务，您应当阅读并遵守《音久音乐版权推广服务协议》（以下简称“本协议”）相关协议和业务规则。请您务必审慎阅读、充分理解各条款内容，特别是限制或免除责任或知识产权相关等条款，相关的条款会以黑体加粗形式提示您注意。</p>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <div class="flex-row">
                            <div class="checkbox-wrapper">
                                <el-checkbox></el-checkbox>
                            </div>
                            <div class="text-wrapper">
                                <span>请点击仔细阅读</span>
                                <el-link type="primary" :underline="false" href="/privacy-policy" target="_blank" >【音久音乐用户协议】</el-link>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <div class="align-center justify-center">
                            <el-button class="button--normal" type="primary" @click="onClick_2">提交</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <auditDialog ref="auditDialog"></auditDialog>
    </div>
</template>
<script>
import AuditDialog from "~/components/business/musicianOpenPlatform/auditDialog.vue"
export default {
    components: {
        AuditDialog
    },
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '认证企业信息',
          lanhufontColor0: '#403f3fa6',
          lanhutext1: '确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。',
          lanhufontColor1: '#0000005C'
        },
        {
          lanhutext0: '填写并提交企业信息',
          lanhufontColor0: '#403F3F',
          lanhutext1:
            '按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；',
          lanhufontColor1: '#000000a6'
        },
        {
          lanhutext0: '缴纳年费',
          lanhufontColor0: '#403f3fa6',
          lanhutext1:
            '上传的音乐作品审核通过后，在“我的”中的申请进度，跳转进入缴费页面。缴费成功后即完成整个企业音乐人申请流程。',
          lanhufontColor1: '#0000005C'
        }
      ],
      form: {},

    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
    onClick_2() {
        this.$refs.auditDialog.showDialog();
    },
  }
};
</script>
<style lang="scss" scoped>

.page-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    .breadcrumb-wrapper {
        height: 60px;
        display: flex;
        align-items: center;
        .el-breadcrumb {
            margin-left: 175px;
        }
    }
    .main {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        .steps {
            width: 81%;
            margin: 40px 0 0 0;
            background: #FAFAFA;
            padding: 30px 0 46px 0;
            position: relative;
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
                padding: 0 60px;
                &-item {
                    width: 25.27%;
                }
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
                width: 127%;
                position: absolute;
                top: calc( 2.52vw / 2 );
                left: 60%;
                border-bottom: 2px dashed rgba(208, 208, 208, 0.39) ;
            }
        }
        .form-title{
            margin: 67px 0 40px 0;
            &__text {
                overflow-wrap: break-word;
                color: #403F3F;
                font-size: 2rem;
            }
        }

        .form {
            margin-bottom: 131px;
            .el-form {
                width: 609px;
            }
            .terms-service {
                padding: 12px 20px;
                color: #403F3F;
                // font-size: 1.5rem;
                background: #FAFAFA;
            }
            .checkbox-wrapper {
                margin-right: 12px;
            }
        }

    }
}

</style>