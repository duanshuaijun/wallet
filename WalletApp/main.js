import App from './App'

// #ifndef VUE3
import Vue from 'vue'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// i18n部分的配置
// 引入语言包，注意路径
import zh from '@/common/locales/zh.js';
import en from '@/common/locales/en.js';

// 引入并使用vue-i18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 这里的属性名是任意的，您也可以把zh设置为cn等，只是后续切换语言时
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|zh|xxx
		'zh': zh, // 这里为上面通过import引入的语言包
		'en': en,
	}
})

// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在Vue.use(uView)之后执行
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		// radio: {
		// 	size: 15
		// }
		// 其他组件属性配置
		// ......
	}
})

// 全局挂载vuex
Vue.prototype.$store = store
// 全局挂载i18n
Vue.prototype._i18n = i18n;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	...App
})

// 引入请求封装
require('./util/request/index')(app)

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
