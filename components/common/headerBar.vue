<!--
 * @Author: Kuntey
 * @Date: 2022-03-23 18:05:12
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-03-29 09:58:29
 * @Description:
-->
<template>
    <header class="header-wrapper ">
        <div class="align-center">
            <el-row class="align-center" style="width: 100%;">
                <el-col :span="4" :offset="1">
                    <div class="logo-wrapper align-center justify-center">
                        <img class="logo-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/logo2.png" />
                    </div>
                </el-col>

                <el-col :span="10" :offset="0">
                    <nav class="nav flex-row align-center justify-between">
                        <div class="nav__item" @mouseenter="isShow = true">
                            <nuxt-link to="/">发现音乐</nuxt-link>
                        </div>
                        <div class="nav__item" @mouseenter="isShow = false">
                            <nuxt-link to="/musician">我的音乐</nuxt-link>
                        </div>
                        <div class="nav__item" @mouseenter="isShow = false">
                            <nuxt-link to="/musicianOpenPlatform">音乐人开放平台</nuxt-link>
                        </div>
                        <div class="nav__item" @mouseenter="isShow = false">
                            <nuxt-link to="/">关于我们</nuxt-link>
                        </div>
                    </nav>
                </el-col>

                <el-col :span="5" :offset="1">
                    <el-input v-model="search" placeholder="搜索音乐人、音乐、用户、专辑、歌单"></el-input>
                </el-col>

                <el-col :span="3" :offset="0">
                    <div class="right-menu">
                        <div class="right-menu__item" style="font-size: 1.4rem;" v-if="true" >
                            <nuxt-link class="a_custom" to="/login" target="_blank" >登录</nuxt-link>
                            <span>/</span>
                            <nuxt-link class="a_custom" to="/register" target="_blank" >注册</nuxt-link>
                        </div>
                        <div class="avatar-container" v-else >
                            <el-dropdown @command="handleCommand" class="right-menu-item hover-effect" trigger="click">
                                <div class="avatar-wrapper">
                                    <!-- <img :src="getters.avatar" class="user-avatar" /> -->
                                    <img
                                        class="user-avatar"
                                        referrerpolicy="no-referrer"
                                        src="@/assets/images/default-avatar.png"
                                    />
                                    <i class="el-icon-caret-bottom"></i>
                                    <el-icon><caret-bottom /></el-icon>
                                </div>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <!-- <router-link to="/user/profile"> -->
                                            <el-dropdown-item>我的主页</el-dropdown-item>
                                        <!-- </router-link> -->
                                        <el-dropdown-item command="logout">
                                            <span>我的消息</span>
                                        </el-dropdown-item>
                                        <el-dropdown-item command="logout">
                                            <span>我的评论</span>
                                        </el-dropdown-item>
                                        <el-dropdown-item command="setLayout">
                                            <span>个人设置</span>
                                        </el-dropdown-item>
                                        <el-dropdown-item command="logout">
                                            <span>退出登录</span>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                </el-col>
            </el-row>

        </div>
        <div class="nav__subItem align-center justify-center" v-show="isShow" @mouseleave="isShow = false">
            <ul class="ul flex-row justify-between">
                <li class="ul__li ">推荐</li>
                <li class="ul__li ">音乐人</li>
                <li class="ul__li ">排行榜</li>
                <li class="ul__li ">歌手</li>
                <li class="ul__li ">专辑</li>
                <li class="ul__li ">歌单</li>
                <li class="ul__li ">MV</li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            search: ''
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
    width: 100%;
    // height: 129px;
    background: #00B69C;
    position: relative;
    >div {
        height: 100%;
    }
    .logo-wrapper {
        &__img {
            width: 104px;
            height: 88px;
        }

    }
    .nav {
        &__item {
            color: #FFFFFF;
            font-size: 1.5rem;
            padding: 52px 25px;
            cursor: pointer;
            a {
                color: #FFFFFF;
                text-decoration: none;

            }
            &:hover {
                background: #0d7b6c;
            }
        }
    }
    .nav__subItem {
        width: 100%;
        height: 100px;
        background: #0d7b6c;
        z-index: 1;
        position: absolute;
        top: 128px;
        .ul {
            width: 55%;
            padding: 0;
            margin: 0;
            list-style: none;
            color: #ffffffcc;
            font-size: 1.4rem;
            &__li {
                position: relative;
                &:hover {
                    cursor: pointer;
                    color: #FFF;
                }
                &:hover::after {
                    content: '';
                    border-bottom: 4px solid #16dbbf;
                    position: absolute;
                    bottom: -10px;
                    right: 0;
                    width: 100%;
                }
            }
            &__li::after {
                content: '';
                // border-bottom: 4px solid #16dbbf;
                // position: absolute;
                // bottom: -10px;
                // right: 0;
                // width: 100%;
            }
        }
    }
    .right-menu {
        height: 100%;
        display: flex;
        justify-content: center;
        &:focus {
            outline: none;
        }

        .right-menu__item {
            color: #FFFFFF;
            a:nth-child(n) {
                margin: 0 5px;
            }
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: rgba(0, 0, 0, 0.025);
                }
            }
        }
    }
    .avatar-container {
        margin-right: 40px;

        .avatar-wrapper {
            margin-top: 5px;
            position: relative;

            .user-avatar {
                cursor: pointer;
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }

            i {
                cursor: pointer;
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}

</style>