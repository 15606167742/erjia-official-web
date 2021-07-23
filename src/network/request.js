import Vue from 'vue'
import axios from 'axios'
import {
	Loading,
	MessageBox
} from 'element-ui';
// import router from '@/router'
// import store from '@/store'
// import {
// 	Toast
// } from 'vant'

// const SUCCESS = 200;
// const FAIL_TOKEN = 401;
let loading;

const REQUEST_MAIN = axios.create({
	baseURL: WEBCONFIG.request_url_main,
	timeout: 10000,
});

export function requestMain(config) {
	// 添加请求拦截器
	REQUEST_MAIN.interceptors.request.use(config => {
		// 在发送请求之前做些什么
		loading = Loading.service({
			text: '加载中...'
		})

		// Toast.loading({
		// 	message: '加载中...',
		// 	duration: 0,
		// 	forbidClick: true,
		// });
		// if (store.state.token) {
		// 	config.headers['token'] = store.state.token;
		// }
		// if (config.contentType === 'form') {
		// 	config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		// }
		// if (config.contentType === 'file') {
		// 	config.headers['Content-Type'] = 'multipart/form-data';
		// }
		return config;
	}, error => {
		// 对请求错误做些什么
		return Promise.reject(error);
	});

	// 添加响应拦截器
	REQUEST_MAIN.interceptors.response.use(response => {
		Vue.nextTick(() => {
			loading.close();
		});
		return response
	}, error => {
		// 对响应错误做点什么
		Vue.nextTick(() => {
			loading.close();
		});
		return Promise.reject(error);
	});

	return new Promise(resolve => {
		REQUEST_MAIN.request(config).then(response => {
			// console.log(response);
			if (response.data.code === 200) {
				resolve(response.data);
			} else if (response.data.msg) {
				MessageBox.alert(response.data.msg);
			} else {
				MessageBox.alert('网络开小差了，请重试。。。');
			}
			// if (response && response.data && response.data.status !== SUCCESS) {
			// 	if (response.data.message) {
			// 		Toast(response.data.message);
			// 	} else {
			// 		Toast('网络开小差了，请重试。。。');
			// 	}
			// 	if (response.data.status === FAIL_TOKEN) {
			// 		router.push({
			// 			path: '/login'
			// 		})
			// 	}
			// 	// resolve(undefined)
			// } else if (response.data.current) {
			// 	//特殊返回分页接口
			// 	resolve(response.data)
			// } else {
			// 	resolve(response.data.data)
			// }
		})
	});
}
