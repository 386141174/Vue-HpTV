import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css


import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css' // 引入样式

import 'vue-video-player/src/custom-theme.css' // 引入样式

import 'videojs-flash'
import { vueBaberrage } from 'vue-baberrage'
// 引入图标
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faPlay,
    faPause,
    faStop,
    faVolumeUp,
    faVolumeMute,
    faExpand,
} from '@fortawesome/free-solid-svg-icons'
import './permission' // permission control
import Meta from 'vue-meta';

library.add(
    faPlay,
    faPause,
    faStop,
    faVolumeUp,
    faVolumeMute,
    faExpand,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);



/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI) //使用elementUI
Vue.use(VueVideoPlayer)
Vue.use(vueBaberrage)
Vue.config.productionTip = false
Vue.use(Meta);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
