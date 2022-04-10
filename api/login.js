/*
 * @Author: Kuntey
 * @Date: 2022-04-08 09:11:35
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-10 21:26:04
 * @Description:
 */
/*
 * @Author: Kuntey
 * @Date: 2022-04-04 16:21:28
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-07 09:43:33
 * @Description:
 */
import request from '~/utils/request'

// 根据用户名密码登录
export function loginByPasswrod(data) {
    return request({
        url: '/user/loginpwd',
        method: 'post',
        data
    })
}

// 根据短信验证码登录
export function loginByVerificationCode(data) {
    return request({
        url: '/user/loginByCode',
        method: 'post',
        data
    })
}

export function getInfo() {}

// 忘记密码
export function forgetPassword(data) {
    return request({
        url: '/user/forget',
        method: 'post',
        data
    })
}


// 用户注册
export function register(data) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}

// 获取验证码
export function getVerificationCode(params) {
    return request({
        url: '/user/verificationCode',
        method: 'get',
        params
    })
}

export function logout() {
    return request({
        url: '/user/signOutLogin',
        method: 'get',
    })
}