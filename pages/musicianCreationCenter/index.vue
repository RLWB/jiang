<!--
 * @Author: Kuntey
 * @Date: 2022-04-06 11:42:06
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-06 16:03:21
 * @Description:
-->
<template>
    <div class="page-container flex-row justify-center">
        <div class="page-left">
            <el-menu default-active="4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
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
            <div class="flex-row align-center justify-between" style="height: 99px;">
                <div style="color: #00B69C; font-size: 1.9rem;margin-left: 45px;">作品管理-歌曲</div>
                <el-button type="primary" style="width: 162px; height: 50px;margin-right: 30px;" @click="onClick_2">发布歌曲</el-button>
            </div>
            <!-- <div class="flex-row" style="height: 80px; background: #F7F7F7;">
                <div>审核通过</div>
                <div>审核中</div>
                <div>审核未通过</div>
            </div> -->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="index" label="序号" width="180"></el-table-column>
                <el-table-column prop="name" label="歌曲名称" width="180"></el-table-column>
                <el-table-column prop="address" label="歌手"></el-table-column>
                <el-table-column prop="address" label="专辑"></el-table-column>
                <el-table-column prop="data" label="发布时间"></el-table-column>
                <el-table-column prop="address" label="制作KTV视频"></el-table-column>
                <el-table-column prop="address" label="上传MV"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" style="color: #3077E0D9;" @click="onClick_2">详情</el-button>
                        <el-button type="text" style="color: #3077E0D9;" @click="onClick_2">申请下架</el-button>
                    </template>
                </el-table-column>

            </el-table>

        </div>

    </div>
</template>

<script>
  export default {
      data() {
          return {
              menuData: [],
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
            }]
          }
      },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      onClick_2() {
          this.$router.push('/musicianCreationCenter/publishSong')
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    }
}
</style>