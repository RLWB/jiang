<!--
 * @Author: Kuntey
 * @Date: 2022-04-01 21:35:53
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-04 14:49:39
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
                            <div class="circle-box justify-center align-center" :class="index === 0 ? 'circle-box--active' : ''">
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
                <span class="form-title__text">认证企业信息</span>
            </div>

            <div class="form justify-center">
                <el-form :model="form" ref="form" :rules="rules" label-width="108px" :inline="false" size="normal">

                    <el-form-item label="法人姓名">
                        <el-input v-model="form.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="证件类型">
                        <el-select v-model="form.type" placeholder="公民身份证" clearable filterable style="width: 100%;">
                            <el-option v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item >
                        <template slot="label">
                            上传证件信息<span class="label__tip">(大小不得超过2M，格式仅支持JPG、JPEG、PNG)</span>
                        </template>
                        <div class="flex-row align-center justify-between">
                            <el-upload action="#" :auto-upload="false" :limit="1" :file-list="fileList1" :show-file-list="false" :on-change="fileList1Change">
                                <ul class="el-upload-list el-upload-list--picture-card" style="width: 209.76px">
                                    <li v-for="(file, index) in fileList1" :key="index" class="el-upload-list__item is-ready" style="width: 209.76px">
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

                                <div v-show="fileList1.length < 1 " class="el-upload el-upload--picture-card" style="width: 209.76px">
                                    <i class="el-icon-plus"></i>
                                    <input type="file" name="file" class="el-upload__input">
                                </div>
                                <div class="el-upload__tip" slot="tip">证件正面</div>
                            </el-upload>
                            <el-upload action="#" :auto-upload="false" :limit="10" :file-list="fileList2" :show-file-list="false" :on-change="fileList2Change">
                                <!-- <div> -->
                                    <ul class="el-upload-list el-upload-list--picture-card" style="width: 209.76px">
                                        <li v-for="(file, index) in fileList2" :key="index" class="el-upload-list__item is-ready" style="width: 209.76px">
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

                                    <div v-show="fileList2.length < 1 " class="el-upload el-upload--picture-card" style="width: 209.76px">
                                        <i class="el-icon-plus"></i>
                                        <input type="file" name="file" class="el-upload__input">
                                    </div>
                                <!-- </div> -->

                                <div class="el-upload__tip" slot="tip">证件背面</div>
                            </el-upload>
                        </div>

                    </el-form-item>

                    <el-form-item  >
                        <template slot="label">
                            上传营业执照<span class="label__tip">注意：请上传加盖公章的营业执照</span>
                        </template>
                        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList3">
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload>
                    </el-form-item>

                    <el-form-item>
                        <div class="align-center justify-center">
                            <el-button type="primary" @click="onClick_2">提交</el-button>
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
          lanhufontColor0: '#403F3F',
          lanhutext1: '确保上传的营业执照法人、法人姓名、身份证号一致，且真实。若认证失败将无法进入下一步。',
          lanhufontColor1: '#000000a6'
        },
        {
          lanhutext0: '填写并提交企业信息',
          lanhufontColor0: '#403f3fa6',
          lanhutext1:
            '按照表单要求准确填写企业信息，保证信息的真实性和准确性。提交后请耐心等待审核结果。审核结果会以短信和系统消息的形式发出；',
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
      form: {},
      options: [
          {
              label: "公明身份证",
              value: "1"
          },
          {
              label: "护照",
              value: "2"
          },
          {
              label: "港澳居民来往大陆通行证",
              value: "3"
          },
          {
              label: "台湾居民来往大陆通行证",
              value: "4"
          },
          {
              label: "居民户口簿",
              value: "5"
          },
      ],
      fileList1: [],
      fileList2: [],
      fileList3: []

    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
    onClick_2() {
        this.$refs.auditDialog.showDialog();
    },
    fileList1Change(file, fileList) {
        const newFile = URL.createObjectURL(file.raw);
        for (const i in fileList) {
            fileList[i].url = newFile;
        }
        this.fileList1 = fileList;
        // console.log(file, fileList);
    },
    fileList2Change(file, fileList) {
        const newFile = URL.createObjectURL(file.raw);
        for (const i in fileList) {
            fileList[i].url = newFile;
        }
        this.fileList2 = fileList;
        // console.log(file, fileList);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-button {
    width: 162px;
    height: 50px;
}
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
                .el-form-item:nth-child(3), .el-form-item:nth-child(4) {
                    ::v-deep label {
                        float: none;
                        .label__tip {
                            margin-left: 20px;
                            color: rgba(0, 0, 0, 0.45);
                            font-size: 1rem;
                        }
                    }
                }
            }
        }

        .upload-demo{
            ::v-deep .el-upload{
                width: 100%;
                .el-upload-dragger {
                    width: 100%;
                }
            }
        }

    }
}

</style>