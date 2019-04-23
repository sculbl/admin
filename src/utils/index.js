import _ from 'underscore'

export default {
	install(Vue) {
		Vue.prototype.$setContainerHeight = () => {
			return document.documentElement.clientHeight || document.body.clientHeight;
		}
		// 下载
		Vue.prototype.$downLoad = url => {
			let a = document.createElement("a");
			a.href = url;
			document.body.appendChild(a);
			a.click();
		}
		Vue.prototype.$_ = _;
	}
}