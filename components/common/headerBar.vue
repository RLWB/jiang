<!--
 * @Author: Kuntey
 * @Date: 2022-03-23 18:05:12
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-10 21:28:16
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
                        <nuxt-link to="/">
                            <div class="nav-item" :class="isHover ? 'nav-item--hover' : ''" @mouseenter="handleMouseenter(true)">
                                发现音乐
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/musician">
                            <div class="nav-item" @mouseenter="handleMouseenter(false)">
                                我的音乐
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/musicianOpenPlatform">
                            <div class="nav-item" @mouseenter="handleMouseenter(false)">
                                音乐人开放平台
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <div class="nav-item" @mouseenter="handleMouseenter(false)">
                                关于我们
                            </div>
                        </nuxt-link>
                    </nav>
                </el-col>

                <el-col :span="5" :offset="1">
                    <el-input v-model="search" placeholder="搜索音乐人、音乐、用户、专辑、歌单"></el-input>
                </el-col>

                <el-col :span="3" :offset="0">
                    <div class="right-menu">
                        <div class="right-menu__item" style="font-size: 1.4rem;" v-if="!hasLogin" >
                            <nuxt-link class="a_custom" to="/login" >登录</nuxt-link>
                            <span>/</span>
                            <nuxt-link class="a_custom" to="/register" >注册</nuxt-link>
                        </div>
                        <div class="avatar-container" v-else >
                            <el-dropdown @command="handleCommand" class="right-menu-item hover-effect" trigger="click" placement="bottom-start">
                                <div class="avatar-wrapper">
                                    <img class="user-avatar" referrerpolicy="no-referrer" src="@/assets/images/default-avatar.png" />
                                    <span class="user-name">用户名</span>
                                    <i class="el-icon-caret-bottom"></i>
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
        <div class="nav__subItem align-center justify-center" v-show="isShow" @mouseleave="handleMouseleave(false)">
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
import { getToken, removeToken } from '~/utils/auth';
export default {
    data() {
        return {
            isShow: false,
            isHover: false,
            search: '',
            hasLogin: false,
        }
    },
    mounted() {
        const token = getToken();
        if (token) {
            this.hasLogin = true;
        }
    },
    methods: {
        handleMouseenter(boolean) {
            this.isShow = boolean;
            this.isHover = boolean;
        },
        handleMouseleave(boolean) {
            this.isShow = boolean;
            this.isHover = boolean;
        },
        handleCommand(command) {
            this.$message('click on item ' + command);
            if (command === "logout") {
                this.$store.dispatch("user/LogOut").then( success => {
                    this.$router.go(0);
                })
            }
        },
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
        &-item {
            color: #FFFFFF;
            font-size: 1.5rem;
            padding: 52px 25px;
            cursor: pointer;
            &:hover {
                background: #0d7b6c;
            }
        }
        &-item--hover {
            background: #0d7b6c;
        }

        a {
            color: #FFFFFF;
            text-decoration: none;
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
            display: flex;
            align-items: center;

            .user-avatar {
                cursor: pointer;
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
            .user-name {
                color: #FFFFFF;
                margin: 0 10px;
            }

            i {
                cursor: pointer;
                // position: absolute;
                // right: -20px;
                // top: 25px;
                color: #FFFFFF;
                font-size: 1.4rem;
            }
        }
    }
}

</style>