<!--
 * @Author: Kuntey
 * @Date: 2022-03-25 23:01:05
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-08 12:28:34
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
                        <div class="title__text">忘记密码？</div>
                    </div>

                    <el-form ref="form" :model="form" :rules="rules" label-width="0px">
                        <el-form-item prop="userAccount">
                            <div class="form-item-wrapper flex-row align-center">
                                <el-input v-model="form.userAccount" placeholder="请输入手机号" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/phone.png" />
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item prop="code">
                            <div class="form-item-wrapper flex-row align-center justify-between">
                                <el-input v-model="form.code" placeholder="请输入" >
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

                        <el-form-item prop="userPassword">
                            <div class="form-item-wrapper form-item-password flex-row align-center">
                                <el-input v-model="form.userPassword" placeholder="请输入8-12位新密码，须包含数字、英文和符号" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/password.png" />
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item prop="userPassword">
                            <div class="form-item-wrapper flex-row align-center">
                                <el-input v-model="form.userPassword" placeholder="请再次输入新密码" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/password.png" />
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item >
                            <div class="flex-col">
                                <el-button type="primary" class="button__login" @click="handleSubmit">确定</el-button>
                            </div>
                        </el-form-item>
                    </el-form>

                    <div class="bottom-wrapper flex-row align-center justify-center">
                        <div class="text-wrapper">
                            <nuxt-link to="/login">登录</nuxt-link>
                            <el-divider direction="vertical"></el-divider>
                            <nuxt-link to="/register">注册</nuxt-link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>
<script>
import { getVerificationCode, forgetPassword } from '@/api/login'
export default {
    layout: 'full',
    data() {
        return {
            form: {
                userAccount: "",
                userPassword: "",
                code: "",
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
        // 跳转到登陆页面
        toLogin() {
            this.$router.push("/login");
        },
        handleSubmit() {
            this.$refs.form.validate( (valid) => {
                if (valid) {
                    forgetPassword(this.form).then( response => {
                        if (code === 200) {
                            this.$message,success(response.msg);
                            this.toLogin();
                        }
                    }).catch( error => {
                        this.$message.error(error);
                    })
                }
            });
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
                font-weight: bold;
                margin: 0 0 21px 0;
                &__text {
                    font-size: 2.34rem;
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
                    ::v-deep input {
                        padding: 0 32px 0 57px;
                    }
                }
            }
            .button__login {
                width: 400px;
                height: 50px;
            }
            .button__login {
                margin-top: 83px;
            }
        }

        .bottom-wrapper {
            margin-top: 40px;
            .text-wrapper {
                a{
                    text-decoration: none;
                    font-size: 1.6rem;
                    color: #00000073;
                }
            }
        }
    }
}

</style>