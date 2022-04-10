<!--
 * @Author: Kuntey
 * @Date: 2022-04-06 11:42:06
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-10 22:55:12
 * @Description:
-->
<template>
    <div class="page-container flex-row justify-center">
        <div class="page-left">
            <el-menu default-active="4-1" class="el-menu-vertical-demo" :default-openeds="openeds" @open="handleOpen" @close="handleClose">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">作品数据</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">收入数据</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>作品管理</span>
                    </template>
                    <el-menu-item index="4-1">音乐</el-menu-item>
                    <el-menu-item index="4-2">专辑</el-menu-item>
                    <el-menu-item index="4-3">MV</el-menu-item>
                    <el-menu-item index="4-4">KTV视频</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>版权管理</span>
                    </template>
                    <el-menu-item index="5-1">歌曲版权</el-menu-item>
                    <el-menu-item index="5-2">词版权</el-menu-item>
                    <el-menu-item index="5-3">曲版权</el-menu-item>
                </el-submenu>
                <!-- <el-menu-item index="6">
                    <i class="el-icon-document"></i>
                    <span slot="title">下载客户端</span>
                </el-menu-item> -->
            </el-menu>
        </div>
        <div class="page-right" v-show="true">
            <div class="head flex-row align-center justify-between">
                <div class="flex-row align-center justify-between">
                    <div class="head-block"></div>
                    <div class="head-title">作品管理-歌曲</div>
                </div>
                <el-button class="head-btn" type="primary" @click="onClick_2">发布歌曲</el-button>
            </div>
            <div class="tab">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="审核通过" name="first">
                        <div style="padding: 20px 30px;">
                            <el-table :data="tableData" style="width: 100%" :header-cell-style="{'background': '#F7F7F7FF'}">
                                <el-table-column type="index" label="序号" align="center" width="70"></el-table-column>
                                <el-table-column prop="name" label="歌曲名称" align="center" width="180"></el-table-column>
                                <el-table-column prop="address" label="歌手" align="center"></el-table-column>
                                <el-table-column prop="address" label="专辑" align="center"></el-table-column>
                                <el-table-column prop="data" label="发布时间" align="center"></el-table-column>
                                <el-table-column label="制作KTV视频" align="center">
                                    <template slot-scope="scope">
                                        <span v-if="(scope.$index % 2) === 0">是</span>
                                        <el-button v-else plain size="mini" @click="handleApplyForRemoval">制作KTV视频</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column label="上传MV" align="center">
                                    <template slot-scope="scope">
                                        <span v-if="(scope.$index % 2) != 0">是</span>
                                        <el-button v-else plain size="mini" @click="handleUploadMV">上传MV</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" align="center">
                                    <template slot-scope="scope">
                                        <el-button type="text" style="color: #3077E0D9;" @click="onClick_2">详情</el-button>
                                        <el-button type="text" style="color: #3077E0D9;" @click="handleApplyForRemoval">申请下架</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="审核中" name="second">
                        <div style="padding: 20px 30px;">
                            <el-table :data="tableData" style="width: 100%" :header-cell-style="{'background': '#F7F7F7FF'}">
                                <el-table-column type="index" label="序号" align="center" width="70"></el-table-column>
                                <el-table-column prop="name" label="歌曲名称" align="center" width="180"></el-table-column>
                                <el-table-column prop="address" label="歌手" align="center"></el-table-column>
                                <el-table-column prop="address" label="专辑" align="center"></el-table-column>
                                <el-table-column prop="data" label="提交时间" align="center"></el-table-column>
                                <el-table-column prop="address" label="制作KTV视频" align="center"></el-table-column>
                                <el-table-column prop="address" label="上传MV" align="center"></el-table-column>
                            </el-table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="审核未通过" name="third">
                        <div style="padding: 20px 30px;">
                            <el-table :data="tableData" style="width: 100%" :header-cell-style="{'background': '#F7F7F7FF'}">
                                <el-table-column type="index" label="序号" align="center" width="70"></el-table-column>
                                <el-table-column prop="name" label="歌曲名称" align="center" width="180"></el-table-column>
                                <el-table-column prop="address" label="歌手" align="center"></el-table-column>
                                <el-table-column prop="address" label="专辑" align="center"></el-table-column>
                                <el-table-column prop="data" label="提交时间" align="center"></el-table-column>
                                <el-table-column prop="data" label="审核时间" align="center"></el-table-column>
                                <el-table-column prop="address" label="原因" align="center"></el-table-column>
                            </el-table>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <apply-for-removal-dialog ref="applyForRemovalDialog"></apply-for-removal-dialog>
        <uploadMVdialog ref="uploadMVdialog"></uploadMVdialog>
    </div>
</template>

<script>
import applyForRemovalDialog from '~/components/business/musicianCreationCenter/applyForRemovalDialog.vue';
import uploadMVdialog from '~/components/business/musicianCreationCenter/uploadMVDialog.vue';
export default {
    components: { applyForRemovalDialog, uploadMVdialog },
    data() {
        return {
            openeds: ['4', '5'],
            menuData: [],
            activeName: 'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],

        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        onClick_2() {
            this.$router.push('/musicianCreationCenter/publishSong')
        },
        // 申请下架
        handleApplyForRemoval() {
            this.$refs.applyForRemovalDialog.showDialog();
        },
        // 上传MV
        handleUploadMV() {
            this.$refs.uploadMVdialog.showDialog();
        }
    }
}
</script>

<style lang="scss" scoped>
.el-menu {
    .el-menu-item.is-active {
        outline: none;
        background-color: #e6f8f5;
    }
    .el-menu-item.is-active::before {
        position: absolute;
        content: "";
        width: 10px;
        top: 0;
        left: 0;
        height: 100%;
        background: #00B69C;
    }
}
.el-tabs {
    ::v-deep .el-tabs__header {
        .el-tabs__nav-wrap {
            .el-tabs__nav {
                width: 100%;
                padding: 20px;
                background: #F7F7F7;
                .el-tabs__item {
                    font-size: 1.75rem;
                    color: #00000073;
                }
                .el-tabs__item.is-active {
                    font-weight: bold;
                    color: #000000;
                }
                .el-tabs__active-bar {
                    height: 4px;
                    left: unset;
                }
            }
        }
        .el-tabs__nav-wrap::after {
            display: none;
        }
    }
}
.el-button.el-button--default.el-button--mini.is-plain {
    background: #FFFFFF;
    border-color: #00b69c;
    color: #00b69c;
}
.page-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 21px 100px;
    .page-left {
        width: 200px;
        margin-right: 30px;
    }
    .page-right {
        width: calc( 100% - 230px);
        background: #fff;
        .head {
            height: 99px;
            &-block {
                width: 30px;
                height: 30px;
                background: #24CCB4;
                margin: 0 13px 0 2px ;
            }
            &-title {
                color: #00B69C;
                font-size: 2rem;
                font-weight: bold;
            }
            &-btn {
                width: 162px;
                height: 50px;
                margin-right: 30px;
            }
        }
        .tab {
            &-item {
                font-size: 1.5rem;
                border-bottom: 4px solid #16DBBF;
            }
            // &-item {
            //     font-size: 1.5rem;
            // }
        }
    }
}
</style>