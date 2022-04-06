/*
 * @Author: Kuntey
 * @Date: 2022-03-23 16:02:38
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-04 16:29:51
 * @Description:
 */
export const state = () => ({
    isTopbarBlock: true, // 顶部栏是否显示
})

export const mutations = {
    UPDATE_TOPBAR_BLOCK(state, payload){
        state.isTopbarBlock = payload
    }
}