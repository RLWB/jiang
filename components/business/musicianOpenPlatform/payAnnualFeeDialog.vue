<!--
 * @Author: Kuntey
 * @Date: 2022-04-02 15:08:53
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-05 21:05:03
 * @Description:
-->
<template>
    <el-dialog title="缴纳年费" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" center>
        <div class="main-box">
            <div class="box-top flex-col justify-center align-center ">
                <span class="title">缴纳个人音乐人年费</span>
                <span class="sub-title">支付金额</span>
                <div class=" flex-row justify-between">
                    <span class="cash">99</span>
                    <span class="yuan">元</span>
                </div>

            </div>
            <div class="box-content">
                <div class="justify-center align-center">请选择支付方式</div>
                <div class="payment-method flex-row align-center justify-center">
                    <div class="alipay flex-col align-center" @click="handleSelectMethod(1)">
                        <img class="alipay__img" referrerpolicy="no-referrer" src="@/assets/images/alipay.png" />
                        <img v-show="selectedMethod === 1" class="alipay__selected__icon" referrerpolicy="no-referrer" src="@/assets/images/selected_cyan.png" />
                        <div class="alipay__text">支付宝支付</div>
                    </div>
                    <div class="wechatpay flex-col align-center" @click="handleSelectMethod(2)">
                        <img class="wechatpay__img" referrerpolicy="no-referrer" src="@/assets/images/wechatpay.png" />
                        <img v-show="selectedMethod === 2" class="wechatpay__selected__icon" referrerpolicy="no-referrer" src="@/assets/images/selected_cyan.png" />
                        <div class="wechatpay__text">微信支付</div>
                    </div>
                </div>
            </div>
            <div class="box-footer justify-center align-center ">
                <el-button class="button--normal" type="info" @click="dialogVisible = false">取消</el-button>
                <el-button class="button--normal" type="primary" @click="dialogVisible = false">确认支付</el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                selectedMethod: null,
            };
        },
        methods: {
            showDialog() {
                this.dialogVisible = true;
            },
            handleSelectMethod(value) {
                this.selectedMethod = value;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    };
</script>

<style lang="scss" scoped>
.main-box {
    .box-top {
        padding: 20px 50px;
        height: 165px;
        background: #FAFAFAFF;
        color: #000000D9;
        .title {
            font-size: 1.75rem;
        }
        .sub-title {
            margin: 10px 0;
            color: #00000073;
        }
        .cash {
            font-size: 2rem;
            font-weight: bold;
        }
        .yuan {
            font-size: 1.75rem;
        }
    }
    .box-content {
        margin-bottom: 83px;
        >div:nth-child(1) {
            margin: 40px 0 27px;
            color: #00000073;
        }
        .payment-method {
            .alipay, .wechatpay {
                margin: 0 15px;
                position: relative;
                width: 220px;
                height: 120px;
                border-radius: 8px;
                border: 1px solid #DDD8D8FF;
                background: #F8F8F8FF;
                &__img {
                    margin: 14px 0 10px;
                }
                &__selected__icon {
                    position: absolute;
                    top: 6px;
                    right: 6px;
                }
                &__text {
                    color: #000000A6;
                }
            }
        }
    }
    .box-footer {
        margin-bottom: 24px;
        >button:nth-child(1) {
            margin-right: 45px;
        }
    }
}
</style>