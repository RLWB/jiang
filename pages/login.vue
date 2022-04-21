<!--
 * @Author: Kuntey
 * @Date: 2022-03-24 10:30:41
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-09 14:29:48
 * @Description:
-->
<template>
    <div class="page-container">
        <div class="page-container__content flex-row justify-between">
            <section>
                <div class="light-wrapper align-center justify-center">
                    <img class="light-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/greenLight.png" />
                </div>
                <div class="logo-wrapper align-center justify-center">
                    <img class="logo-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/logo2.png" />
                </div>
                <div class="bg-wrapper">
                    <img class="bg-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/bg.png" />
                </div>
            </section>
            <section class="align-center justify-center">
                <div class="flex-col">
                    <div class="title">
                        <div class="title__text">欢迎回到音久音乐！</div>
                    </div>

                    <el-tabs v-model="activeName" @tab-click="handleClick" stretch >
                        <el-tab-pane label="验证码登录" name="1">
                            <el-form ref="codeForm" :model="codeForm" :rules="rules" label-width="0px">
                                <el-form-item prop="userAccount">
                                    <div class="form-item-wrapper">
                                        <el-input v-model="codeForm.userAccount" placeholder="请输入手机号" >
                                            <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                                <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/phone.png" />
                                            </div>
                                        </el-input>
                                    </div>
                                </el-form-item>

                                <el-form-item prop="code">
                                    <div class="form-item-wrapper flex-row align-center justify-between">
                                        <el-input v-model="codeForm.code" placeholder="请输入" >
                                            <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                                <img class="form-item-wrapper__img" slot="prefix" referrerpolicy="no-referrer" src="@/assets/images/verificationCode.png" />
                                            </div>
                                            <div slot="suffix" class="align-center justify-center" style="height: 100%" >
                                                <el-button type="primary" @click="getVerificationCodeByPhone" v-if="btnVisible">获取验证码</el-button>
                                                <el-button v-else style="background: #72A69F; color: #FFF;" disabled>{{ seconds }}s后重新获取</el-button>
                                            </div>
                                        </el-input>

                                    </div>
                                </el-form-item>

                                <el-form-item >
                                    <div style="float: right;">
                                        <div class="checkbox-wrapper">
                                            <el-checkbox></el-checkbox>
                                            <span style="color: #00000073;">下次自动登录</span>
                                        </div>
                                    </div>
                                </el-form-item>


                                <el-form-item >
                                    <div class="flex-col">
                                        <el-button type="primary" class="button__login" @click="handleSubmitByCode" >登录</el-button>
                                        <el-button class="button__register" @click="toRegister">没有账号？去注册</el-button>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="密码登录" name="2">
                            <el-form ref="passwordForm" :model="passwordForm" :rules="rules" label-width="0px">
                                <el-form-item prop="userAccount">
                                    <div class="form-item-wrapper flex-row align-center">
                                        <el-input v-model="passwordForm.userAccount" placeholder="请输入手机号" >
                                            <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                                <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/phone.png" />
                                            </div>
                                        </el-input>
                                    </div>
                                </el-form-item>

                                <el-form-item prop="userPassword">
                                    <div class="form-item-wrapper form-item-password flex-row align-center">
                                        <el-input v-model="passwordForm.userPassword" placeholder="请输入8-12位密码，须包含数字、英文和符号" >
                                            <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                                <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/password.png" />
                                            </div>
                                        </el-input>
                                    </div>
                                </el-form-item>

                                <el-form-item >
                                    <div style="float: left;">
                                        <el-link type="primary" :underline="false" href="/resetPassword" target="_blank" >
                                            忘记密码？
                                        </el-link>
                                    </div>
                                    <div style="float: right;">
                                        <div class="checkbox-wrapper">
                                            <el-checkbox v-model="autoLoginChecked"></el-checkbox>
                                            <span style="color: #00000073;">下次自动登录</span>
                                        </div>
                                    </div>
                                </el-form-item>

                                <el-form-item >
                                    <div class="flex-col">
                                        <el-button type="primary" class="button__login" @click="handleSubmitByPassword" >登录</el-button>
                                        <el-button class="button__register" @click="toRegister">没有账号？去注册</el-button>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="扫码登录" name="3">
                            <div style="width: 400px">
                                <div class="qrcode__login--tip align-center justify-center" style="">
                                    手机扫码，快捷登录
                                </div>
                                <div class="qrcode-wrapper align-center justify-center">
                                    <img class="qrcode-wrapper__img" src="@/assets/images/qrcode.png" alt="" srcset="">
                                </div>
                                <div class="qrcode__bottom align-center justify-center">
                                    <span>打开</span>
                                    <span style="color: #00b69c;">手机端音久音乐</span>
                                    <span>，扫一扫登录，扫一扫登录</span>
                                </div>
                            </div>

                        </el-tab-pane>
                    </el-tabs>

                    <div class="bottom-wrapper flex-row justify-start" v-show="activeName != '3'">
                        <div class="checkbox-wrapper">
                            <el-checkbox v-model="serverChecked"></el-checkbox>
                        </div>
                        <div class="text-wrapper">
                            <span>我已阅读并同意</span>
                            <el-link type="primary" :underline="false" href="/privacy-policy" target="_blank" >相关服务及隐私政策</el-link>
                        </div>
                    </div>

                    <el-divider v-if="activeName != '3'">其他账号登录</el-divider>

                    <div class="wechat-wrapper align-center justify-center" v-show="activeName != '3'">
                        <img class="wechat-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/wechat.png" alt="">
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>
<script>
import { getVerificationCode } from '@/api/login'
export default {
    layout: 'full',
    data() {
        return {
            activeName: "1",
            codeForm: {
                userAccount: "",
                code: ""
            },
            passwordForm: {
                userAccount: "",
                userPassword: "",
            },
            rules: {
                userAccount: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/, message: '手机号格式错误', trigger: 'blur' },
                ],
                userPassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 8, max: 12, message: '请输入8-12位密码', trigger: 'blur' },
                    // { pattern: /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/, message: '须包含数字、英文和特殊符号', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ]
            },
            btnVisible: true,
            seconds: 23,
            interval: null,
            autoLoginChecked: false,
            serverChecked: false,
        };
    },
    methods: {
        // 获取验证码
        getVerificationCodeByPhone() {
            this.$refs.form.validateField("userAccount", valid => {
                if (valid == "") {
                    this.btnVisible = false;
                    this.countDown();
                    const data = {
                        userPhone: this.form.userAccount,
                        vType: 1
                    };
                    getVerificationCode(data).then( response => {
                        if (response.code === 200) {
                            this.$message.success(response.msg);
                        } else {
                            this.$message.error(response.msg);
                        }
                    })
                }
            })
        },
        // 验证码倒计时
        countDown() {
            this.interval = setInterval(
                () => {
                    if (this.seconds == 0) {
                        this.interval = null;
                        this.btnVisible = true;
                        this.seconds = 23;
                    }
                    this.seconds--;
                },
            1000)
        },
        toRegister() {
            this.$router.push("/register")
        },
        handleClick() {
            this.$refs.codeForm.resetFields();
            this.$refs.passwordForm.resetFields();
        },
        handleSubmitByPassword() {
            if ( !(this.serverChecked ) ) {
                this.$message.warning("请勾选相关服务及隐私政策");
                return;
            };
            this.$store.dispatch("user/Login", this.passwordForm).then( success => {
                this.$router.push("/");
            })
        },
        handleSubmitByCode() {
            if ( !(this.serverChecked ) ) {
                this.$message.warning("请勾选相关服务及隐私政策");
                return;
            };
            this.$store.dispatch("codeLogin", this.codeForm).then( success => {
                this.$router.push("/")
            })
        }
    }
};
</script>
<style lang="scss" scoped>
.el-input {
    ::v-deep input {
        width: 400px;
        height: 56px;
        padding: 0 152px 0 57px;
    }
}
.el-divider {
    .el-divider__text {
        color: #00000040;
    }
}
.page-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    .page-container__content {
        width: 100%;
        height: 100%;
        section {
            height: 100%;
            overflow: hidden;
            position: relative;
            &:nth-child(1) {
                width: 42.7%;
            }
            &:nth-child(2) {
                width: 57.3%;
            }
            .light-wrapper {
                &__img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                }
            }
            .logo-wrapper {
                width: 100%;
                height: 100%;
                overflow: hidden;
                &__img {
                    width: 104px;
                    height: 88px;
                    z-index: 1;
                }
            }
            .bg-wrapper {
                 &__img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
            .title {
                text-align: left;
                margin: 0 0 18px 0;
                &__text {
                    font-size: 2rem;
                    color: #000000d9;
                    line-height: 33px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .form-item-wrapper {
                &__img {
                    width: 28px;
                    height: 28px;
                }
                button {
                    margin: 0 6px 0 23px;
                }
            }
            .form-item-password {
                .el-input {
                    // width: 324px;
                    ::v-deep input {
                        padding: 0 52px 0 57px;
                    }
                }
            }

            .button__register{
                margin: 16px 0 6px 0;
                background:  #0071B6;
                color: #FFF;
            }
            .button__register, .button__login {
                width: 400px;
                height: 50px;
            }
            .button__login {
                margin: 0;
            }
        }

        .bottom-wrapper {
            margin-top: 8px;
            .checkbox-wrapper {
                margin-right: 10px;
            }
            .text-wrapper {
                font-size: 1.17rem;
                span {
                    &:nth-child(1) {
                        color: #00000073;
                    }
                    &:nth-child(2) {
                        color: #00b69c;
                    }
                }
                .el-link {
                    vertical-align: unset;
                }
            }
        }

        .wechat-wrapper {
            // margin-top: 19px;
            &__img {
                width: 49px;
                height: 48px;
            }
        }

        .qrcode__login--tip {
            color: #00b69c;
            font-size: 1.3rem;
            margin-top: 52px;
        }

        .qrcode-wrapper {
            margin: 43px 0 39px 0;
            &__img {
                width: 240px;
                height: 240px;
            }
        }

        .qrcode__bottom {
            font-size: 1.34rem;
            color: #000000a6;
        }
    }
}

</style>