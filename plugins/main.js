/*
 * @Author: Kuntey
 * @Date: 2022-03-23 11:56:00
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-09 10:56:48
 * @Description:
 */
import Vue from 'vue'
import Element from 'element-ui'
import loginModal from '~/components/common/loginModal'
import picturesModal from '~/components/common/picturesModal'
import '~/assets/style/element-variables.scss' // elementUI 自定义主题色


import locale from 'element-ui/lib/locale/lang/en'

Vue.use(loginModal)
Vue.use(picturesModal)
Vue.use(Element, { locale })