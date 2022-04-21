<!--
 * @Author: Kuntey
 * @Date: 2022-04-04 15:13:21
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-05 20:33:38
 * @Description:
-->
<template>
    <div class="page-container flex-col">
        <div class="breadcrumb-wrapper">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>音乐人开放平台</el-breadcrumb-item>
                <el-breadcrumb-item>申请个人音乐人</el-breadcrumb-item>
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
            <section v-if="false">
                <div class="form-title justify-center">
                    <span class="form-title__text">选择个人音乐人角色</span>
                </div>

                <div class="musican-role flex-col justify-center">

                    <div class="role-options flex-row align-center justify-between">
                        <div class="role-options__item align-center justify-center" :class="selectedKey === 1 ? 'selected' : ''" @click="handleSelectRole(1)" >
                            <img class="icon--top" src="@/assets/images/personalMusician_icon.png">
                            申请个人音乐人
                            <img class="icon--bottom" src="@/assets/images/selected_white.png" v-show="selectedKey === 1" >
                        </div>
                        <div class="role-options__item align-center justify-center" :class="selectedKey === 2 ? 'selected' : ''" @click="handleSelectRole(2)">
                            <img class="icon--top" src="@/assets/images/lyricist_icon.png">
                            申请词作者
                            <img class="icon--bottom" src="@/assets/images/selected_white.png" v-show="selectedKey === 2" >
                        </div>
                        <div class="role-options__item align-center justify-center" :class="selectedKey === 3 ? 'selected' : ''" @click="handleSelectRole(3)">
                            <img class="icon--top" src="@/assets/images/songwriter_icon.png">
                            申请曲作者
                            <img class="icon--bottom" src="@/assets/images/selected_white.png" v-show="selectedKey === 3" >
                        </div>
                    </div>
                    <div class="align-center justify-center">
                        <el-button class="button--normal" type="primary" @click="onClick_1">下一步</el-button>
                    </div>
                </div>
            </section>

            <section v-else>
                <div class="form-title flex-col align-center">
                    <span class="form-title__text">方式一：直接认领歌手</span>
                    <span class="form-sub-title__text">直接认领歌手，则无需填写下面信息</span>
                </div>

                <div class="flex-row align-center ">
                    <el-input v-model="singer" placeholder="请输入想要认领的歌手名" prefix-icon="el-icon-search" clearable @change="" style="width: 396px;"></el-input>
                    <el-button type="primary" @click="" style="margin-left: 20px; width:120px;">搜索</el-button>
                </div>

                <div class="form-title flex-col align-center">
                    <span class="form-title__text">方式二：填写个人信息</span>
                    <span class="form-sub-title__text">没有直接认领的歌手？可以直接填写个人信息</span>
                </div>

                <div class="form justify-center">
                    <el-form :model="form" ref="form" :rules="rules" label-width="108px" :inline="false">

                        <el-form-item label="音乐人姓名">
                            <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                        </el-form-item>

                        <el-form-item label="音乐人头像">
                            <el-upload action="#" :auto-upload="false" :limit="1" :file-list="fileList" :show-file-list="false" :on-change="fileListChange">
                                <ul class="el-upload-list el-upload-list--picture-card">
                                    <li v-for="(file, index) in fileList" :key="index" class="el-upload-list__item is-ready">
                                        <div>
                                            <img :src="file.url" alt="" class="el-upload-list__item-thumbnail">
                                            <span class="el-upload-list__item-actions">
                                                <span class="el-upload-list__item-preview" style="border: 2px solid #FFF; padding: 5px 15px; font-size: 1rem;">
                                                    重新上传
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div v-show="fileList.length < 1 " class="el-upload el-upload--picture-card">
                                    <i class="el-icon-plus"></i>
                                    <input type="file" name="file" class="el-upload__input">
                                </div>
                            </el-upload>
                        </el-form-item>

                        <el-form-item label="歌手类型">
                            <el-select v-model="form.name" multiple placeholder="请输入" clearable style="width: 100%;">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="个人简介">
                            <el-input type="textarea" :rows="6" v-model="form.name" placeholder="请输入" clearable></el-input>
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
            </section>
        </div>
        <el-dialog title="提交" :visible.sync="dialogVisible" width="37%" :before-close="handleClose" center>
            <div class="form-title flex-col align-center">
                <div class="form-title__text">您确认认领该歌手？</div>
                <div class="form-sub-title__text">确定后将直接提交审核</div>
            </div>

            <div slot="footer" class="dialog-footer submit-dialog-footer">
                <el-button class="button--normal" type="info" @click="dialogVisible = false">取消</el-button>
                <el-button class="button--normal" type="primary" @click="dialogVisible = false">确定</el-button>
            </div>
        </el-dialog>
        <payAnnualFeeDialog ref="payAnnualFeeDialog"></payAnnualFeeDialog>
        <auditDialog ref="auditDialog"></auditDialog>
    </div>
</template>
<script>
import AuditDialog from "~/components/business/musicianOpenPlatform/auditDialog.vue"
import PayAnnualFeeDialog from "~/components/business/musicianOpenPlatform/payAnnualFeeDialog.vue"
export default {
    components: {
        AuditDialog,
        PayAnnualFeeDialog
    },
  data() {
    return {
      loopData0: [
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
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      form: {},
      selectedKey: null,
      singer: '',
      fileList: [],
      dialogVisible: false,

    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    onClick_2() {
        this.$refs.auditDialog.showDialog();
    },
    handleSelectRole(value) {
        this.selectedKey = value;
    },
    fileListChange(file, fileList) {
        const newFile = URL.createObjectURL(file.raw);
        for (const i in fileList) {
            fileList[i].url = newFile;
        }
        this.fileList = fileList;
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
            width: 90%;
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
                padding: 0 13px;
                &-item {
                    width: 23.27%;
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
                width: 90%;
                position: absolute;
                top: calc( 2.52vw / 2 );
                left: 60%;
                border-bottom: 2px dashed rgba(208, 208, 208, 0.39) ;
                overflow: hidden;
            }
        }
        .musican-role {
            min-width: 802px;
            margin-bottom: 131px;
        }

        .role-options {
            margin-top: 83px;
            margin-bottom: 144px;
            &__item {
                position: relative;
                cursor: pointer;
                width: 220px;
                height: 120px;
                color: #00B69C;
                border: 1px solid #00b69c99;
                .icon--top {
                    position: absolute;
                    top: 7px;
                    left: 6px;
                }
                .icon--bottom {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                }
            }
            &__item.selected {
                color: #FFFFFF;
                background: #00B69C;
                border: 1px solid #00b69c99;
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
    .form-title {
        margin: 67px 0 40px 0;
        &__text {
            overflow-wrap: break-word;
            color: #403F3F;
            font-size: 2rem;
        }
        .form-sub-title__text {
            margin-top: 12px;
            color: #00000073;
            font-size: 1rem;
        }
    }
    .submit-dialog-footer {
        padding-bottom: 44px;
        >button:nth-child(1) {
            margin-right: 35px;
        }
    }
}

</style>