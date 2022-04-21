<!--
 * @Author: Kuntey
 * @Date: 2022-04-02 14:53:28
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-10 21:21:39
 * @Description:
-->
<template>
    <el-dialog title="提交成功" :visible.sync="dialogVisible" width="46.75%" center>
        <el-result>
            <template slot="icon">
                <img class="icon__img" referrerpolicy="no-referrer" src="@/assets/images/SketchPng07924a7667b1131ae20f0e934230b52fbae4d49239bfcb7020ab3e018d602cf9.png" />
            </template>
            <template slot="title">
                <span class="title__text">
                    您的企业认证信息已经提交，
                    <br />
                    我们将尽快审核，请耐心等待～
                </span>
            </template>
            <template slot="subTitle">
                <span class="subTitle__text">
                    审核将以短信和系统通知的形式通知到您！
                    <br />
                    后续的申请流程将在右上角“我的消息”页面中查看
                </span>
            </template>
            <template slot="extra">
                <el-button type="info" @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleBack">查看进度</el-button>
            </template>
        </el-result>
    </el-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false
            };
        },
        methods: {
            showDialog() {
                this.dialogVisible = true;
            },
            handleClose(done) {
                this.dialogVisible = false;
            },
            handleBack() {
                this.$router.push({ path: '/musicianOpenPlatform' })
            }
        }
    };
</script>

<style lang="scss" scoped>
.el-button {
    width: 162px;
    height: 50px;
}

.el-result {
    padding-top: 35px;
    padding-bottom: 35px;
}

.title__text {
    color: #000000;
    font-size: 2rem;
}

.subTitle__text {
    color: rgba(0, 0, 0, 0.45);
    font-size: 1.5rem;
}

.el-result__extra {
    .el-button:nth-child(2) {
        margin-left: 7.3vw;
    }
}
</style>