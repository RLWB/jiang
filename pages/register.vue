<!--
 * @Author: Kuntey
 * @Date: 2022-03-24 10:30:20
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-03-25 22:39:48
 * @Description:
-->
<template>
    <div class="page-container">
        <div class="page-container__content flex-row justify-between">
            <section>
                <div class="light-wrapper align-center justify-center">
                    <img class="light-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/common/greenLight.png" />
                </div>
                <div class="logo-wrapper align-center justify-center">
                    <img class="logo-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/common/logo2.png" />
                </div>
                <div class="bg-wrapper">
                    <img class="bg-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/common/bg.png" />
                </div>
            </section>
            <section class="align-center justify-center">
                <div class="flex-col">
                    <div class="title">
                        <div class="title__text">欢迎注册</div>
                        <div class="title__text">
                            音久音乐，开启你的音乐之旅
                        </div>
                    </div>

                    <el-form ref="form" :model="form" label-width="0px">
                        <el-form-item >
                            <div class="form-item-wrapper flex-row align-center">
                                <el-input v-model="form.phone" placeholder="请输入手机号" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/common/phone.png" />
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item >
                            <div class="form-item-wrapper flex-row align-center">
                                <el-input v-model="form.phone" placeholder="请输入8-12位密码，须包含数字、英文和符号" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/common/password.png" />
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item >
                            <div class="form-item-wrapper flex-row align-center justify-between">
                                <el-input v-model="form.phone" placeholder="请输入" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" slot="prefix" referrerpolicy="no-referrer" src="@/assets/images/common/verificationCode.png" />
                                    </div>
                                    <div slot="suffix" class="align-center justify-center" style="height: 100%" >
                                        <el-button type="primary" @click="onClick_1" v-if="true">获取验证码</el-button>
                                        <el-button v-else>23s后重新获取</el-button>
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item >
                            <div class="form-item-wrapper flex-row align-center">
                                <el-input v-model="form.phone" placeholder="请输入邀请码，此项为选填项" >
                                    <div slot="prefix" class="align-center justify-center" style="height: 100%">
                                        <img class="form-item-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/common/invitationCode.png" />
                                    </div>
                                </el-input>
                            </div>
                        </el-form-item>

                        <el-form-item >
                            <div class="flex-col">
                                <el-button class="button__register">注册</el-button>
                                <el-button type="primary" class="button__login" style="" @click="">已有账号？去登录</el-button>
                            </div>
                        </el-form-item>
                    </el-form>

                    <div class="bottom-wrapper flex-row justify-start">
                        <div class="checkbox-wrapper">
                            <el-checkbox></el-checkbox>
                        </div>
                        <div class="text-wrapper">
                            <span>我已阅读并同意</span>
                            <span>相关服务及隐私政策</span>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'full',
    data() {
        return {
            form: {},
            constants: {}
        };
    },
    methods: {
        onClick_1() {
            alert(1);
        },
        handleSubmit() {
            console.log('submit!');
        }
    }
};
</script>
<style lang="scss" scoped>
.el-form {
    .el-form-item {
        margin-bottom: 14px;
    }
}
.el-input {
    ::v-deep input {
        width: 400px;
        height: 56px;
        padding: 0 152px 0 57px;
    }
}
.page-container {
    position: relative;
    width: 100vw;
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
                margin: 0 0 38px 10px;
                &__text {
                    font-size: 1.3rem;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 33px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .form-item-wrapper {
                // width: 400px;
                // height: 56px;
                // border: 1px solid rgba(218, 218, 218, 1);
                // background-color: rgba(255, 255, 255, 1);
                &__img {
                    // margin: 0 15px 0 12px;
                    width: 28px;
                    height: 28px;
                }
                .el-input {
                    // width: 324px;
                }
                button {
                    margin: 0 6px 0 23px;
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
            margin-top: 26px;
            .checkbox-wrapper {
                margin-right: 10px;
            }
            .text-wrapper {
                span {
                    &:nth-child(1) {
                        color: #00000073;
                    }
                    &:nth-child(2) {
                        color: #00b69c;
                    }
                }
            }
        }
    }
}

</style>