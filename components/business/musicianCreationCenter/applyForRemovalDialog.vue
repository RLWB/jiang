<!--
 * @Author: Kuntey
 * @Date: 2022-04-10 17:30:40
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-10 22:13:43
 * @Description:
-->
<template>
    <el-dialog title="提交成功" :visible.sync="dialogVisible" width="42.86%" center>
        <el-result>
            <template slot="icon">
                <div class="song-info flex-row">
                    <img class="icon__img" referrerpolicy="no-referrer" src="@/assets/images/img/SketchPngfa8ba60fb063596ba0895384c2fe1dcb5111239c49b43f54bfb5dcb724245f58.png" />
                    <div class="song-info--right">
                        <div class="song-info__name">慢慢喜欢你</div>
                        <div class="song-info__singer">时代少年团</div>
                    </div>
                </div>
            </template>
            <template slot="title">
                <span class="title__text">
                    您确定要申请该歌曲下架吗？
                </span>
            </template>
            <template slot="subTitle">
                <div class="subTitle__text">
                    若申请下架在平台上将无法找到该歌曲，
                    <br />
                    申请下架后会提交到管理后台审核，请耐心等待～
                </div>
            </template>
            <template slot="extra">
                <el-button type="info" @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleBack">确认</el-button>
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
    padding-top: 0;
    padding-bottom: 35px;
    ::v-deep .el-result__icon {
        width: 100%;
    }
    ::v-deep .el-result__title {
        margin-top: 56px;
        line-height: 32px;
    }
    ::v-deep .el-result__subtitle {
        padding: 20px 0;
    }
    ::v-deep .el-result__extra {
        margin-top: 98px;
    }
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
.song-info {
    padding: 32px 0 33px 64px;
    background: #FAFAFA;
    .icon__img {
        width: 100px;
        height: 100px;
    }
    &--right {
        margin-left: 26px;
        text-align: left;
    }
    &__name {
        font-size: 2.34rem;
        color: #000000D9;
    }
    &__singer {
        font-size: 1.75rem;
        color: #00000073;
    }
}

</style>