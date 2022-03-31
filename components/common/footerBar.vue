<!--
 * @Author: Kuntey
 * @Date: 2022-03-23 16:24:59
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-03-29 09:58:06
 * @Description:
-->
<template>
    <footer class="footer-wrapper">
        <div class="footer-wrapper__main flex-col">
            <div class="content-wrapper flex-row justify-around">
                    <span>关于我们</span>
                    <span>监督举报</span>
                    <span>广告服务</span>
                    <span>版权指引</span>
                    <span>隐私政策</span>
                    <span>招聘信息</span>
                    <span>客服中心</span>
            </div>
            <div class="whiteLine-wrapper"></div>
            <div class="logo-wrapper align-center justify-center">
                <img class="logo-wrapper__img" referrerpolicy="no-referrer" src="@/assets/images/logo2.png" />
            </div>
            <div class="bottom-wrapper flex-col align-center justify-center" >
                <div>网络文化经营许可证京网文（2020）&nbsp;2496-386号</div>
                <div>增值电信业务经营许可证京B2—20202416</div>
                <div>广播电视节目制作经营许可证:（京）字第15434号</div>
                <div>京公网安备&nbsp;11010502041730号</div>
                <div>版权所有&nbsp;曹氏俊杰科技发展（北京）有限公司&nbsp;保留一切权利&nbsp;【京ICP备20004051号-1】</div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-wrapper {
    height: 515px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #38403E;

    &__main {
        width: 73%;
        &>div {
            width: 100%;
            margin: 15px 0;
        }

        .content-wrapper {
            font-size: 1.4rem;
        }

        .whiteLine-wrapper {
            height: 1px;
            background: #FFF;
        }
        .logo-wrapper {
            &__img {
                width: 104px;
                height: 88px;
            }
        }
        .bottom-wrapper {
            font-size: 1.1rem;
            height: 176px;
            &>div {
                margin: 10px 0;
            }
        }

    }
}
</style>