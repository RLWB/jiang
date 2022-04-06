/*
 * @Author: Kuntey
 * @Date: 2022-04-04 16:21:28
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-04 22:31:15
 * @Description:
 */
import request from '@/plugins/request'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}