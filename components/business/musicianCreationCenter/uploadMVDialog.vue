<!--
 * @Author: Kuntey
 * @Date: 2022-04-10 22:29:42
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-11 00:33:41
 * @Description:
-->
<template>
    <el-dialog title="上传MV" :visible.sync="dialogVisible" width="42.86%" center>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px" :inline="false">
            <el-form-item label="上传MV:">
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

                    <div>
                        <el-button type="primary" >本地上传</el-button>
                    </div>

                    <!-- <div v-show="fileList.length < 1 " class="el-upload el-upload--picture-card">
                        <i class="el-icon-plus"></i>
                        <input type="file" name="file" class="el-upload__input">
                    </div> -->
                    时长: {{ videoTime }}
                </el-upload>
            </el-form-item>

            <video style="display: none;" ref="video" controls="controls" id="video"></video>

            <el-form-item label="MV标题:">
                <el-input v-model="form.sss"></el-input>
            </el-form-item>
            <el-form-item>
                <div style="margin-top: 68px;">
                    <el-button type="info" @click="handleClose">取消</el-button>
                    <el-button type="primary" @click="handleBack">确认</el-button>
                </div>
            </el-form-item>
        </el-form>


    </el-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                form: {},
                rules: {},
                fileList: [],
                videoTime: "00:00",
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
            },
            fileListChange(file, fileList) {
                const newFile = URL.createObjectURL(file.raw);
                for (const i in fileList) {
                    fileList[i].url = newFile;
                }
                this.fileList = fileList;
                this.$refs.video.src = newFile;
                this.getVideoTime();
            },
            // 获取视频时长
            getVideoTime() {
                const videoElem = this.$refs.video;
                videoElem.oncanplay = () => {
                    const duration = videoElem.duration;
                    // let hour = parseInt(duration / 3600);
                    // if ( hour < 10 ) {
                    //     hour = "0" + hour;
                    // }
                    let minute = parseInt((duration % 3600) / 60);
                    if ( minute < 10 ) {
                        minute = "0" + minute;
                    }
                    let second = Math.ceil(duration % 60);
                    if ( second < 10 ) {
                        second = "0" + second;
                    }
                    this.videoTime = minute + ":" + second;
                    // this.videoTime = hour + ":" + minute + ":" + second;
                }
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