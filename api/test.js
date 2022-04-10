/*
 * @Author: Kuntey
 * @Date: 2022-04-04 16:21:28
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-09 10:54:26
 * @Description:
 */
import request from '~/utils/request'

export function login(data) {
    return request({
        url: '/user/forget',
        method: 'post',
        data
    })
}