/*
 * @Author: Kuntey
 * @Date: 2022-03-23 11:56:00
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-03-23 16:17:01
 * @Description:
 */
import Vue from 'vue'
import Element from 'element-ui'
import loginModal from '~/components/common/loginModal'
import picturesModal from '~/components/common/picturesModal'
import '~/assets/style/element-variables.scss' // elementUI 自定义主题色
// import utils from '~/utils/utils'


import locale from 'element-ui/lib/locale/lang/en'

Vue.use(loginModal)
Vue.use(picturesModal)

// Vue.filter('formatTime', d => utils.formatTime(d))


Vue.use(Element, { locale })


// export default function (context, inject) {
//     inject('utils', utils)
// }