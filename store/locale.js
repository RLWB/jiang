/*
 * @Author: Kuntey
 * @Date: 2022-03-23 16:02:38
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-04 16:29:36
 * @Description:
 */
export const state = () => ({
    locales: ['zh', 'en'],
    locale: 'zh'
})

export const mutations = {
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    }
}
